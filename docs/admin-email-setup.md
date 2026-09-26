# Admin email verification (Brevo)

1. In Brevo, open **Settings → SMTP & API → API Keys** and generate an API key (not an SMTP key).
2. Under **Senders, Domains & Dedicated IPs**, add and verify your sender. For a custom domain, complete the DNS authentication instructions shown by Brevo.
3. Set these secrets in `server/.env.development.local` for local use and in the backend host's environment settings for production:

```dotenv
BREVO_API_KEY=your-api-key
BREVO_SENDER_EMAIL=your-verified-sender@example.com
BREVO_SENDER_NAME=AMIGO
ADMIN_SKIP_VERIFICATION=false
```

Do not commit real credentials. Remove `ADMIN_EMAIL` and `ADMIN_PASSWORD` overrides to use the admin credentials stored in PostgreSQL. Restart the backend after changing environment settings.

Sign in with the admin email and password. A successful email request opens the code form; it does not authenticate the admin yet. Enter the six-digit code within ten minutes. Each code can be used once. To request a replacement, return to sign-in and enter the credentials again. A replacement invalidates the previous code after Brevo accepts the email.

Login allows three attempts per minute per IP; code verification allows five. These limits use the server process's in-memory throttler storage. Multiple backend replicas need shared rate-limit storage. Configure trusted proxy handling for your hosting topology before relying on individual client IP limits.

## Delivery checks

- `Email delivery is not configured`: check the two required Brevo variables and restart the backend.
- `Failed to send verification code`: check the API key, verified sender, available sending quota and transactional account status in Brevo.
- Accepted email but empty inbox: inspect Brevo's transactional email logs for delivery, bounce or suppression status; check spam and sender-domain authentication. Provider acceptance alone does not prove inbox delivery.
- Expired or used code: return to sign-in to request a fresh code.

The temporary `ADMIN_SKIP_VERIFICATION=true` setting skips email verification. Set it to `false` after delivery has been tested.

Official documentation: https://developers.brevo.com/docs/send-a-transactional-email
