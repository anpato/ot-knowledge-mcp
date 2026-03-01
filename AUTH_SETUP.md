# Authentication Setup Guide

The OT Knowledge MCP server uses Bearer token authentication to secure access to the MCP endpoint. This guide explains how to generate tokens, configure the server, and connect Claude Desktop or Claude.ai.

## Table of Contents

- [Quick Start](#quick-start)
- [Generating API Keys](#generating-api-keys)
- [Server Configuration](#server-configuration)
- [Claude Desktop Configuration](#claude-desktop-configuration)
- [Claude.ai Configuration (Team/Enterprise)](#claudeai-configuration-teamenterprise)
- [Testing Authentication](#testing-authentication)
- [Security Best Practices](#security-best-practices)
- [Troubleshooting](#troubleshooting)

## Quick Start

1. **Generate an API key:**
   ```bash
   node -e "const crypto = require('crypto'); console.log('ot_sk_' + crypto.randomBytes(24).toString('hex'));"
   ```

2. **Configure the server:**
   ```bash
   # Copy the example env file
   cp .env.example .env
   
   # Edit .env and set your API key
   API_KEY=ot_sk_your_generated_key_here
   ```

3. **Start the server:**
   ```bash
   pnpm build
   pnpm start
   ```

4. **Connect from Claude** (see sections below)

## Generating API Keys

### Method 1: Using the Built-in Generator (Recommended)

After building the project:

```bash
pnpm build
node -e "console.log(require('./dist/middleware/auth.js').generateApiKey())"
```

This generates a secure key in the format: `ot_sk_<48_random_hex_chars>`

### Method 2: Manual Generation

Using Node.js crypto:

```bash
node -e "const crypto = require('crypto'); console.log('ot_sk_' + crypto.randomBytes(24).toString('hex'));"
```

Using OpenSSL:

```bash
echo "ot_sk_$(openssl rand -hex 24)"
```

### Key Format

- Prefix: `ot_sk_` (OT Secret Key)
- Length: 54 characters total (prefix + 48 hex chars)
- Example: `ot_sk_a1b2c3d4e5f6789012345678901234567890123456789012`

## Server Configuration

### Environment Variables

Create a `.env` file in the project root:

```bash
# Required: API key for authentication
API_KEY=ot_sk_your_generated_key_here

# Optional: Server port (default: 3100)
PORT=3100
```

### Multiple API Keys (Optional)

To support multiple clients with different keys, modify `src/index.ts`:

```typescript
// Instead of using the default from env:
app.all('/mcp', bearerAuth(), async (c) => { ... });

// Use explicit keys:
app.all('/mcp', bearerAuth({
  apiKeys: [
    process.env.API_KEY_CLIENT_1,
    process.env.API_KEY_CLIENT_2,
  ].filter(Boolean) as string[]
}), async (c) => { ... });
```

### Disabling Authentication (Development Only)

**⚠️ NOT RECOMMENDED FOR PRODUCTION**

To disable authentication, leave the `API_KEY` environment variable empty or unset. The server will log a warning:

```
WARNING: No API keys configured. Authentication is disabled.
```

## Claude Desktop Configuration

### For Free/Pro Plans

1. Open Claude Desktop
2. Go to **Settings** (gear icon)
3. Navigate to **Developer** tab
4. Click **Edit Config**
5. Add your server configuration:

```json
{
  "mcpServers": {
    "ot-knowledge": {
      "command": "npx",
      "args": [
        "-y",
        "mcp-remote",
        "https://your-server.com/mcp"
      ],
      "env": {
        "AUTHORIZATION": "Bearer ot_sk_your_api_key_here"
      }
    }
  }
}
```

Alternatively, using headers (cleaner approach):

```json
{
  "mcpServers": {
    "ot-knowledge": {
      "url": "https://your-server.com/mcp",
      "headers": {
        "Authorization": "Bearer ot_sk_your_api_key_here"
      }
    }
  }
}
```

6. Save and restart Claude Desktop

## Claude.ai Configuration (Team/Enterprise)

### For Team and Enterprise Plans

1. Log in to [claude.ai](https://claude.ai)
2. Go to **Settings** → **Integrations**
3. Click **Add More** or **Add Integration**
4. Fill in the details:
   - **Integration Name**: `OT Knowledge Base`
   - **Integration URL**: `https://your-server.com/mcp`
   - **Authentication Type**: Custom Headers
5. Add the authentication header:
   - **Header Name**: `Authorization`
   - **Header Value**: `Bearer ot_sk_your_api_key_here`
6. Save the integration
7. Enable the integration in your conversations

### Organizational Settings

Organization admins can:
- Share the integration with the entire team
- Set access permissions
- Monitor usage

## Testing Authentication

### Test Without Token (Should Fail)

```bash
curl -X POST http://localhost:3100/mcp \
  -H "Content-Type: application/json" \
  -d '{"jsonrpc":"2.0","method":"tools/list","id":1}'
```

Expected response:
```json
{
  "error": "unauthorized",
  "message": "Authorization header is required"
}
```

Expected header:
```
WWW-Authenticate: Bearer realm="OT Knowledge MCP", error="invalid_token", error_description="Missing Authorization header"
```

### Test With Invalid Token (Should Fail)

```bash
curl -X POST http://localhost:3100/mcp \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer invalid_token" \
  -d '{"jsonrpc":"2.0","method":"tools/list","id":1}'
```

Expected response:
```json
{
  "error": "unauthorized",
  "message": "Invalid API key"
}
```

### Test With Valid Token (Should Succeed)

```bash
curl -X POST http://localhost:3100/mcp \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer ot_sk_your_actual_key" \
  -d '{"jsonrpc":"2.0","method":"tools/list","id":1}'
```

Expected: Successful response with list of tools

### Test Health Endpoints (No Auth Required)

```bash
curl http://localhost:3100/health
curl http://localhost:3100/uptime
```

These endpoints remain publicly accessible for monitoring.

## Security Best Practices

### 1. Use Strong Keys
- Always generate keys using cryptographically secure methods
- Keys should be at least 48 hex characters (24 bytes of entropy)
- Never use predictable or short keys

### 2. Keep Keys Secret
- Never commit `.env` files to version control (already in `.gitignore`)
- Don't share keys in plain text via email or chat
- Use secure methods to distribute keys to authorized users
- Consider using a secrets manager (AWS Secrets Manager, HashiCorp Vault, etc.)

### 3. Use HTTPS in Production
- Claude Desktop/Claude.ai **require** HTTPS for remote MCP servers
- Use a valid SSL/TLS certificate
- Consider using services like Cloudflare, AWS ALB, or Let's Encrypt

### 4. Rotate Keys Regularly
- Change API keys periodically (e.g., every 90 days)
- Immediately rotate keys if compromised
- Support multiple active keys during rotation periods

### 5. Monitor Access
- Review server logs for suspicious authentication patterns
- Track failed authentication attempts
- Set up alerts for repeated failures (potential brute force)

### 6. Environment Isolation
- Use different API keys for development, staging, and production
- Never use production keys in development environments

## Troubleshooting

### "WARNING: No API keys configured"

**Cause**: The `API_KEY` environment variable is not set.

**Solution**: 
1. Check that `.env` file exists
2. Verify `API_KEY` is set in `.env`
3. Rebuild the server: `pnpm build`
4. Restart the server: `pnpm start`

### "Authorization header is required"

**Cause**: No Authorization header sent with the request.

**Solution**: Ensure your client configuration includes the Authorization header with Bearer token.

### "Invalid API key"

**Cause**: The provided token doesn't match any configured API keys.

**Solution**:
1. Verify you're using the correct API key
2. Check for extra spaces or newlines in the token
3. Ensure the token includes the `ot_sk_` prefix
4. Verify the server's `API_KEY` environment variable matches

### Claude Desktop Connection Fails

**Possible causes**:
1. Server not running
2. Wrong URL in configuration
3. Missing or incorrect Authorization header
4. Firewall blocking connections

**Solution**:
1. Verify server is running: `curl http://localhost:3100/health`
2. Check Claude Desktop config JSON syntax
3. Review Authorization header format
4. Test with curl first before connecting Claude

### HTTPS Required Error

**Cause**: Claude Desktop/Claude.ai require HTTPS for remote servers.

**Solution**:
1. Deploy behind a reverse proxy with SSL (nginx, Caddy, Traefik)
2. Use a hosting platform with built-in SSL (Heroku, Railway, Fly.io)
3. For local testing, use ngrok or similar tunneling service

## Advanced Configuration

### Reverse Proxy Setup (nginx)

```nginx
server {
    listen 443 ssl http2;
    server_name your-server.com;
    
    ssl_certificate /path/to/cert.pem;
    ssl_certificate_key /path/to/key.pem;
    
    location / {
        proxy_pass http://localhost:3100;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
        proxy_cache_bypass $http_upgrade;
    }
}
```

### Docker Deployment

```dockerfile
# In your Dockerfile, ensure env variables are passed:
ENV API_KEY=${API_KEY}
ENV PORT=3100

# Or at runtime:
docker run -e API_KEY=ot_sk_your_key -p 3100:3100 ot-knowledge-mcp
```

## Support

For issues or questions:
1. Check this documentation first
2. Review server logs for error messages
3. Test authentication with curl
4. Open an issue on the project repository

---

**Last Updated**: 2026-03-01
