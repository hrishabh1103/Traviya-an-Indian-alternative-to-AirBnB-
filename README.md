# Traviya - Travel & Accommodation Booking Platform

A modern travel booking platform built with React, TypeScript, Tailwind CSS, and Supabase.

## Features

- Browse 55+ popular Indian travel destinations
- Filter destinations by region and category
- User authentication with Supabase
- Property listings and booking system
- Host dashboard for managing properties
- Responsive design for mobile and desktop

## Tech Stack

- **Frontend**: React 18, TypeScript, Vite
- **Styling**: Tailwind CSS
- **Database**: Supabase (PostgreSQL)
- **Authentication**: Supabase Auth
- **Icons**: Lucide React
- **Routing**: React Router v7

## Getting Started

### Prerequisites

- Node.js 18 or higher
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd traviya
```

2. Install dependencies:
```bash
npm install
```

3. Create a `.env` file in the root directory:
```env
VITE_SUPABASE_URL=your_supabase_project_url
VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
```

4. Run the development server:
```bash
npm run dev
```

5. Open [http://localhost:5173](http://localhost:5173) in your browser.

## Deploying to Vercel

### Method 1: Deploy via Vercel Dashboard (Recommended)

1. **Push your code to GitHub**:
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
   git push -u origin main
   ```

2. **Go to Vercel**:
   - Visit [vercel.com](https://vercel.com)
   - Sign up or log in with your GitHub account

3. **Import your repository**:
   - Click "Add New" → "Project"
   - Select your GitHub repository
   - Vercel will automatically detect it's a Vite project

4. **Configure environment variables**:
   - In the project settings, add these environment variables:
     - `VITE_SUPABASE_URL` → Your Supabase project URL
     - `VITE_SUPABASE_ANON_KEY` → Your Supabase anonymous key

5. **Deploy**:
   - Click "Deploy"
   - Wait for the build to complete
   - Your app will be live at `https://your-project-name.vercel.app`

### Method 2: Deploy via Vercel CLI

1. **Install Vercel CLI**:
   ```bash
   npm install -g vercel
   ```

2. **Login to Vercel**:
   ```bash
   vercel login
   ```

3. **Deploy**:
   ```bash
   vercel
   ```

4. **Add environment variables**:
   ```bash
   vercel env add VITE_SUPABASE_URL
   vercel env add VITE_SUPABASE_ANON_KEY
   ```

5. **Deploy to production**:
   ```bash
   vercel --prod
   ```

## Important Notes

### Environment Variables

- **NEVER commit your `.env` file to GitHub**
- The `.gitignore` file is already configured to exclude `.env` files
- Always add environment variables in the Vercel dashboard or CLI
- Make sure to prefix all environment variables with `VITE_` for Vite to recognize them

### Supabase Configuration

Your Supabase database is already set up with:
- User authentication system
- Destinations table with 55+ Indian travel destinations
- Row Level Security (RLS) policies

### Build Configuration

The project uses:
- `npm run build` - Creates production build in the `dist` folder
- `vercel.json` - Configures URL rewrites for React Router

## Project Structure

```
traviya/
├── src/
│   ├── components/      # Reusable React components
│   ├── pages/          # Page components
│   ├── context/        # React context providers
│   ├── lib/            # Library configurations (Supabase)
│   ├── data/           # Mock data
│   └── utils/          # Utility functions
├── public/             # Static assets
├── supabase/           # Database migrations
├── vercel.json         # Vercel configuration
└── package.json        # Dependencies and scripts
```

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint
- `npm run typecheck` - Run TypeScript type checking

## Troubleshooting

### Build Failures on Vercel

1. Check that all environment variables are set correctly
2. Verify your Supabase credentials are valid
3. Check the build logs in Vercel dashboard

### Environment Variables Not Working

- Make sure variables are prefixed with `VITE_`
- Redeploy after adding new environment variables
- Clear build cache in Vercel settings if needed

### Routing Issues After Deploy

- The `vercel.json` file should handle this automatically
- If issues persist, check that the file exists and is properly formatted

## Support

For issues or questions:
- Check the [Vercel Documentation](https://vercel.com/docs)
- Check the [Supabase Documentation](https://supabase.com/docs)
- Review [Vite Documentation](https://vitejs.dev/guide/)

## License

This project is licensed under the MIT License.
# Traviya-an-Indian-alternative-to-AirBnB-
