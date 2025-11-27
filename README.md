This is a [Next.js](https://nextjs.org) portfolio project bootstrapped with TypeScript, Tailwind CSS, and shadcn/ui.

## Getting Started

First, install the dependencies:

```bash
npm install
```

Then, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Features

- ✅ Next.js 15 with App Router
- ✅ TypeScript for type safety
- ✅ Tailwind CSS for styling
- ✅ shadcn/ui components
- ✅ Dark/Light mode with next-themes
- ✅ Mobile responsive design
- ✅ Skeleton loading components

## Build Commands

```bash
npm run dev      # Start development server on port 3000
npm run build    # Build and export static site
npm run start    # Start production server
npm run lint     # Run ESLint
```

## Project Structure

```
├── app/
│   ├── globals.css      # Global styles with theme variables
│   ├── layout.tsx       # Root layout with theme provider
│   └── page.tsx         # Home page
├── components/
│   ├── ui/
│   │   └── skeleton.tsx # Skeleton loading component
│   ├── theme-provider.tsx
│   └── theme-toggle.tsx
├── lib/
│   └── utils.ts         # Utility functions
└── ...config files
```

## Next Steps

Ready to add:

- Navbar component
- About Me section
- Projects section
- Skills section
- Contact section
