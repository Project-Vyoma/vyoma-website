# Cloudflare Pages Deployment Guide

To successfully publish your website to Cloudflare Pages, follow these instructions.

## 🛠️ The "Authentication Error" Fix

If you see `Authentication error [code: 10000]` or `Failed: error occurred while running deploy command`, it is because the **Deploy command** field in the Cloudflare dashboard is NOT empty.

### Steps to Fix:
1. Log in to your **Cloudflare Dashboard**.
2. Go to **Workers & Pages** -> Select your project (**vyoma-website**).
3. Go to **Settings** -> **Build & deployments**.
4. **Fix 1: Build Settings**
   - Click **Edit configurations** in the **Build settings** section.
   - **Build command**: `npm run build:cloudflare`
   - **Build output directory**: `.vercel/output/static`
   - **Deploy command**: ⚠️ **LEAVE THIS COMPLETELY EMPTY**.
   - Click **Save**.
5. **Fix 2: Compatibility Flags (CRITICAL)**
   - Stay in **Settings** -> **Build & deployments**.
   - Scroll down to the **Compatibility flags** section.
   - Click **Configure compatibility flags** (you may need to do this for both **Production** and **Preview**).
   - Add the following flag: `nodejs_compat`
   - Click **Save**.

---

## 🔑 Environment Variables

Since we removed Firebase, you only need to ensure the following are set if you use them in the future:
- `NODE_VERSION`: `22` (Recommended for current Next.js version)

Set these under **Settings** -> **Environment variables**.

---

## 🚀 How it works
1. When you push to your `main` branch, Cloudflare starts a build.
2. It runs `npm run build:cloudflare`.
3. It looks into the `.vercel/output/static` folder.
4. It **automatically** deploys the content. 
5. Because it handles the deployment itself, any manual `wrangler` deployment commands will fail with authentication errors.

---

## 💻 Local Testing
To test the production build locally before pushing:
```bash
npm run build:cloudflare
npx wrangler pages dev .vercel/output/static
```
