# Deployment Guide for Traviya on Vercel

This guide will walk you through deploying your Traviya app to Vercel step by step.

## Prerequisites

- A GitHub account
- A Vercel account (you can sign up with your GitHub account)
- Your Supabase credentials ready

## Step 1: Prepare Your Supabase Environment Variables

Before deploying, you need your Supabase credentials. You already have them in your `.env` file:

```
VITE_SUPABASE_URL=https://mnvymacoiujmkmogzvds.supabase.co
VITE_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
```

Keep these handy - you'll need them for Vercel.

## Step 2: Push Your Code to GitHub

### Option A: Using GitHub Desktop (Easiest)

1. Download and install [GitHub Desktop](https://desktop.github.com/)
2. Open GitHub Desktop
3. Click "File" → "Add Local Repository"
4. Browse to your project folder and select it
5. Click "Create a repository on GitHub"
6. Give it a name (e.g., "traviya")
7. Choose "Private" or "Public"
8. Click "Publish repository"

### Option B: Using Git Command Line

1. Open your terminal in the project folder
2. Initialize git (if not already done):
   ```bash
   git init
   ```

3. Add all files:
   ```bash
   git add .
   ```

4. Commit your changes:
   ```bash
   git commit -m "Initial commit - Traviya app ready for deployment"
   ```

5. Create a new repository on GitHub:
   - Go to [github.com](https://github.com)
   - Click the "+" icon in the top right
   - Select "New repository"
   - Name it "traviya"
   - Choose "Private" or "Public"
   - DO NOT initialize with README, .gitignore, or license
   - Click "Create repository"

6. Connect your local repository to GitHub:
   ```bash
   git remote add origin https://github.com/YOUR_USERNAME/traviya.git
   git branch -M main
   git push -u origin main
   ```

## Step 3: Deploy to Vercel

### Method 1: Via Vercel Dashboard (Recommended)

1. **Sign up/Login to Vercel**:
   - Go to [vercel.com](https://vercel.com)
   - Click "Sign Up" (or "Login" if you have an account)
   - Choose "Continue with GitHub"
   - Authorize Vercel to access your GitHub account

2. **Import Your Repository**:
   - On the Vercel dashboard, click "Add New..."
   - Select "Project"
   - You'll see a list of your GitHub repositories
   - Find "traviya" and click "Import"

3. **Configure Project**:
   - Vercel will automatically detect it's a Vite project
   - **Project Name**: Leave as "traviya" or change if you want
   - **Framework Preset**: Should auto-detect as "Vite"
   - **Root Directory**: Leave as default (./​)
   - **Build Command**: Should be `vite build` (auto-detected)
   - **Output Directory**: Should be `dist` (auto-detected)

4. **Add Environment Variables**:
   - Scroll down to "Environment Variables"
   - Add the following variables:

     **Variable 1:**
     - Name: `VITE_SUPABASE_URL`
     - Value: `https://mnvymacoiujmkmogzvds.supabase.co`

     **Variable 2:**
     - Name: `VITE_SUPABASE_ANON_KEY`
     - Value: `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1udnltYWNvaXVqbWttb2d6dmRzIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjAwNzQ5NzgsImV4cCI6MjA3NTY1MDk3OH0.KEbijy7L7U1wWv1ZuVk7FqjoCk8AUqExV8IdyNbadxk`

   - Click "Add" after each variable

5. **Deploy**:
   - Click "Deploy"
   - Wait 2-3 minutes for the build to complete
   - You'll see a success screen with your live URL
   - Your app will be at: `https://traviya-your-username.vercel.app`

### Method 2: Via Vercel CLI

1. **Install Vercel CLI**:
   ```bash
   npm install -g vercel
   ```

2. **Login**:
   ```bash
   vercel login
   ```
   - Follow the prompts to login with GitHub

3. **Deploy**:
   ```bash
   vercel
   ```
   - Answer the prompts:
     - Set up and deploy? `Y`
     - Which scope? Choose your account
     - Link to existing project? `N`
     - Project name? `traviya`
     - Directory? `.` (current directory)
     - Override settings? `N`

4. **Add Environment Variables**:
   ```bash
   vercel env add VITE_SUPABASE_URL production
   ```
   - Paste your Supabase URL when prompted

   ```bash
   vercel env add VITE_SUPABASE_ANON_KEY production
   ```
   - Paste your Supabase anon key when prompted

5. **Deploy to Production**:
   ```bash
   vercel --prod
   ```

## Step 4: Verify Your Deployment

1. **Visit Your Site**:
   - Click the provided URL or go to your Vercel dashboard
   - Your app should load correctly

2. **Test Key Features**:
   - Homepage loads with search functionality
   - Destinations section displays all 55 destinations
   - Filter by region and category works
   - Navigation links work (About, Services, etc.)
   - Footer links work (Privacy, Terms, Sitemap, Resources)
   - Authentication pages load

3. **Check Browser Console**:
   - Press F12 to open developer tools
   - Check for any errors in the Console tab
   - Make sure there are no Supabase connection errors

## Step 5: Configure Custom Domain (Optional)

1. In Vercel dashboard, go to your project
2. Click "Settings" → "Domains"
3. Add your custom domain
4. Follow Vercel's instructions to update your DNS settings
5. Wait for DNS propagation (can take up to 48 hours)

## Troubleshooting

### Build Fails on Vercel

**Problem**: Build fails with error messages

**Solutions**:
- Check the build logs in Vercel dashboard
- Ensure all dependencies are in `package.json`
- Verify environment variables are set correctly
- Try clearing the build cache in Vercel settings

### White Screen After Deployment

**Problem**: Site loads but shows blank white page

**Solutions**:
- Check browser console for errors (F12)
- Verify environment variables are set with `VITE_` prefix
- Check that Supabase URL and key are correct
- Redeploy after fixing environment variables

### Routes Don't Work

**Problem**: Direct navigation to routes like `/about` gives 404 error

**Solutions**:
- Verify `vercel.json` exists in your project root
- Check that the rewrite rules are correct
- Redeploy if you just added `vercel.json`

### Supabase Connection Errors

**Problem**: App loads but can't connect to Supabase

**Solutions**:
- Verify environment variables in Vercel dashboard
- Check that variables have the `VITE_` prefix
- Ensure Supabase credentials are correct
- Check Supabase dashboard for any service issues

### Environment Variables Not Working

**Problem**: Environment variables don't seem to be read

**Solutions**:
- Variables MUST start with `VITE_` prefix
- Redeploy after adding new environment variables
- Check you added them for the "Production" environment
- Try clearing cache and redeploying

## Updating Your Deployment

Whenever you make changes to your code:

1. **Commit and push to GitHub**:
   ```bash
   git add .
   git commit -m "Your commit message"
   git push
   ```

2. **Automatic Deployment**:
   - Vercel automatically detects the push
   - Starts building and deploying
   - Your site updates in 2-3 minutes

3. **Check Deployment Status**:
   - Go to Vercel dashboard
   - View deployment logs
   - See if build succeeded

## Important Security Notes

1. **Never commit `.env` file** - It's already in `.gitignore`
2. **Environment variables in Vercel** - Set them in the dashboard, not in code
3. **Keep credentials secure** - Don't share your Supabase keys publicly
4. **Use production keys** - For production deployment, consider using production Supabase keys

## Next Steps After Deployment

1. **Test thoroughly** - Check all features work in production
2. **Monitor performance** - Use Vercel Analytics (free tier available)
3. **Set up custom domain** - Give your app a professional URL
4. **Configure alerts** - Set up Vercel notifications for failed deployments
5. **Enable analytics** - Track usage and performance

## Support Resources

- [Vercel Documentation](https://vercel.com/docs)
- [Vite Deployment Guide](https://vitejs.dev/guide/static-deploy.html#vercel)
- [Supabase Documentation](https://supabase.com/docs)
- [GitHub Documentation](https://docs.github.com)

## Your Vercel Dashboard

After deployment, you can:
- View deployment logs
- See analytics and performance metrics
- Configure domains
- Manage environment variables
- Set up team collaboration
- Configure build settings

Visit: [vercel.com/dashboard](https://vercel.com/dashboard)

---

**Congratulations!** Your Traviya app is now live on Vercel and accessible to anyone with the URL.
