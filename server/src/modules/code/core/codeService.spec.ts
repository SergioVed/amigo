import bcrypt from 'bcrypt';
import { CodeService } from './codeService';
import { CodeEntity } from './codeEntity';

describe('Email verification', () => {
    const originalEnv = { ...process.env };
    const originalFetch = global.fetch;
    const repo = { getByEmail: jest.fn(), getOne: jest.fn(), save: jest.fn(), consume: jest.fn() };
    const service = new CodeService(repo);
    let code: CodeEntity;

    beforeEach(async () => {
        jest.resetAllMocks();
        process.env.BREVO_API_KEY = 'test-key';
        process.env.BREVO_SENDER_EMAIL = 'sender@example.com';
        global.fetch = jest.fn().mockResolvedValue({ ok: true, json: async () => ({ messageId: 'test-message' }) });
        code = new CodeEntity(1, await bcrypt.hash('123456', 4), 'admin@example.com', new Date(Date.now() + 60000), null);
        repo.getByEmail.mockResolvedValue(code);
        repo.consume.mockResolvedValue(true);
        jest.spyOn(console, 'error').mockImplementation(() => {});
    });
    afterEach(() => {
        process.env = { ...originalEnv };
        global.fetch = originalFetch;
        jest.restoreAllMocks();
    });
    it('does not change a code when email configuration is absent', async () => {
        delete process.env.BREVO_API_KEY;
        await expect(service.sendCode('admin@example.com', '654321')).rejects.toThrow('Email delivery is not configured');
        expect(repo.save).not.toHaveBeenCalled();
        expect(global.fetch).not.toHaveBeenCalled();
    });
    it('preserves the previous code when Brevo rejects delivery', async () => {
        (global.fetch as jest.Mock).mockResolvedValue({ ok: false, status: 401, json: async () => ({}) });
        await expect(service.sendCode('admin@example.com', '654321')).rejects.toThrow('Failed to send verification code');
        expect(repo.save).not.toHaveBeenCalled();
    });
    it('saves a hashed, expiring replacement after Brevo accepts delivery', async () => {
        await service.sendCode('admin@example.com', '654321');
        expect(repo.save).toHaveBeenCalledWith(code);
        expect(await bcrypt.compare('654321', code.getCodeHash())).toBe(true);
        expect(code.getUsedAt()).toBeNull();
        expect(code.getExpiresAt().getTime()).toBeGreaterThan(Date.now());
    });
    it.each(['expired', 'used', 'incorrect'])('rejects an %s code without consuming it', async (kind) => {
        if (kind === 'expired') code.update({ expiresAt: new Date(0) });
        if (kind === 'used') code.update({ usedAt: new Date() });
        await expect(service.validateCode({ email: 'admin@example.com', code: kind === 'incorrect' ? '999999' : '123456' })).rejects.toThrow();
        expect(repo.consume).not.toHaveBeenCalled();
    });
    it('rejects a replay that loses the atomic consume race', async () => {
        repo.consume.mockResolvedValueOnce(true).mockResolvedValueOnce(false);
        const result = await Promise.allSettled([
            service.validateCode({ email: 'admin@example.com', code: '123456' }),
            service.validateCode({ email: 'admin@example.com', code: '123456' }),
        ]);
        expect(result.filter(value => value.status === 'fulfilled')).toHaveLength(1);
    });
});
