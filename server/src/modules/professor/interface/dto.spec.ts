import { plainToInstance } from 'class-transformer';
import { validate } from 'class-validator';
import { CreateProfessorDto, UpdateProfessorDto } from './dto';

describe('Teacher super power validation', () => {
    for (const Dto of [CreateProfessorDto, UpdateProfessorDto]) {
        it(`${Dto.name} accepts and trims one power and rejects invalid values`, async () => {
            const dto = plainToInstance(Dto, { superPower: '  Explaining grammar  ' });
            expect(dto.superPower).toBe('Explaining grammar');
            expect((await validate(dto)).filter(error => error.property === 'superPower')).toEqual([]);
            for (const superPower of [['one', 'two'], ['one'], '', '   ', null, 123]) {
                const invalid = plainToInstance(Dto, { superPower });
                expect((await validate(invalid)).some(error => error.property === 'superPower')).toBe(true);
            }
        });
    }
    it('requires a power on creation and allows omission on updates', async () => {
        expect((await validate(plainToInstance(CreateProfessorDto, {}))).some(error => error.property === 'superPower')).toBe(true);
        expect(await validate(plainToInstance(UpdateProfessorDto, {}))).toEqual([]);
    });
});
