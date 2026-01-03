# Cloudflare Pages Deployment Guide

## 🔧 Quick Fix

In your **Cloudflare Pages** project settings, set:
- **Build command**: `npm run build:cloudflare`
- **Build output directory**: `.vercel/output/static`
- **Deploy command**: **(LEAVE COMPLETELY EMPTY - DELETE IT)**

That's it! Pages will auto-deploy after build.

---

## Current Issue
The deployment is using `npx wrangler deploy` which is for **Cloudflare Workers**, not **Cloudflare Pages**. This causes Wrangler to try uploading your worker code as static assets, resulting in the error:

```
✘ [ERROR] Uploading a Pages _worker.js directory as an asset.
```

## Solution

### Step 1: Update Cloudflare Pages Build Settings

Go to your Cloudflare Pages project settings and configure:

**Build Configuration:**
```
Framework preset: Next.js (or None)
Build command: npm run build:cloudflare
Build output directory: .vercel/output/static
Root directory: (leave empty)
```

**Environment Variables:**
Make sure you have all required environment variables set, especially:
- `NODE_VERSION`: `22` or `22.16.0`
- Any Firebase keys from your `.env` file

### Step 2: **CRITICAL - Remove the Deploy Command**

⚠️ **This is the key fix!**

Cloudflare Pages automatically deploys the build output directory. You **MUST REMOVE** any deploy command from your settings.

**What's happening:**
- ❌ **Wrong**: Using `npx wrangler deploy` (this is for Workers)
- ✅ **Correct**: Leave deploy command **empty** (Pages auto-deploys)

The deploy command field should be **completely empty** or **not set at all**. Cloudflare Pages will automatically take the `.vercel/output/static` directory and deploy it after the build succeeds.

### Alternative: Deploy via CLI

If you prefer to deploy from your local machine instead:

```bash
# Clean build and deploy
npm run deploy

# Or step by step:
npm run build:cloudflare
npx wrangler pages deploy .vercel/output/static
```

## Important Notes

1. **@cloudflare/next-on-pages is deprecated**: Consider migrating to [OpenNext](https://opennext.js.org/cloudflare) in the future.

2. **Next.js 15.5.2 Security Warning**: There's a known security vulnerability. However, you can't upgrade yet because the Cloudflare adapter doesn't support newer versions.

3. **Edge Runtime**: All dynamic routes (like `/api/contact`) must use `export const runtime = 'edge'` to work on Cloudflare.

## Troubleshooting

### Build fails with "directory does not exist"
- Make sure build command is `npm run build:cloudflare`, not just `npm run build`
- The `.vercel/output/static` directory is only created by `@cloudflare/next-on-pages`

### "No routes configured for Edge Runtime"
- Ensure all API routes have `export const runtime = 'edge'`
- Check that you're using compatible dependencies (Firebase may have limited support on Edge)

### Environment variables not working
- Double-check all env vars are set in Cloudflare Pages dashboard
- Prefix with `NEXT_PUBLIC_` for client-side variables
