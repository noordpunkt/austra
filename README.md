# Austra - Modern Landing Page

A beautiful, modern landing page built with Next.js, TypeScript, and Tailwind CSS.

## Features

- ⚡ **Next.js 16** - React framework with App Router
- 🎨 **Tailwind CSS** - Utility-first CSS framework
- 📘 **TypeScript** - Type-safe development
- 🌙 **Dark Mode** - Automatic dark mode support
- 📱 **Responsive Design** - Mobile-first approach
- 🚀 **Vercel Ready** - Optimized for Vercel deployment

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

```bash
npm install
```

### Development

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

### Build

Create a production build:

```bash
npm run build
```

Start the production server:

```bash
npm start
```

## Deployment

### Deploy to Vercel

The easiest way to deploy this Next.js app is to use [Vercel](https://vercel.com).

#### Option 1: Deploy via Vercel Dashboard

1. Push your code to GitHub:
   ```bash
   git add .
   git commit -m "Initial commit"
   git remote add origin <your-github-repo-url>
   git push -u origin main
   ```

2. Go to [vercel.com](https://vercel.com) and sign in
3. Click "New Project"
4. Import your GitHub repository
5. Vercel will automatically detect Next.js and configure the build settings
6. Click "Deploy"

#### Option 2: Deploy via Vercel CLI

1. Install Vercel CLI:
   ```bash
   npm i -g vercel
   ```

2. Deploy:
   ```bash
   vercel
   ```

3. Follow the prompts to link your project

### Connect to GitHub

1. Create a new repository on GitHub
2. Add the remote:
   ```bash
   git remote add origin https://github.com/YOUR_USERNAME/austra.git
   ```
3. Push your code:
   ```bash
   git add .
   git commit -m "Initial commit"
   git push -u origin main
   ```

### Automatic Deployments

Once connected to GitHub, Vercel will automatically deploy:
- Every push to `main` branch → Production deployment
- Every pull request → Preview deployment

## Project Structure

```
austra/
├── app/
│   ├── layout.tsx      # Root layout
│   ├── page.tsx        # Home page
│   └── globals.css     # Global styles
├── public/             # Static assets
├── package.json        # Dependencies
└── README.md          # This file
```

## Customization

- Edit `app/page.tsx` to modify the landing page content
- Update `app/layout.tsx` to change metadata and global settings
- Modify `app/globals.css` for custom styles
- Tailwind configuration is in `tailwind.config.ts`

## Learn More

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Vercel Documentation](https://vercel.com/docs)

## License

MIT
