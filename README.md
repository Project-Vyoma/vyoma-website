# Project Vyoma Website

A modern, interactive website showcasing Project Vyoma - an aerospace engineering student project from RV College of Engineering, founded in 2007. The website features stunning animations, scroll-based interactions, and a comprehensive showcase of the team's achievements, projects, and history.

![Project Vyoma](https://img.shields.io/badge/Project-Vyoma-blue)
![Next.js](https://img.shields.io/badge/Next.js-15.5.10-black)
![React](https://img.shields.io/badge/React-19.2.1-blue)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue)

## 🚀 About Project Vyoma

Project Vyoma is the aero-design team of RV College of Engineering, established in 2007. We are one of the leading student projects in India, having won numerous national and international competitions and awards, including the prestigious **NASA Systems Engineering Award** in 2013.

### Key Achievements

- 🏆 **NASA Systems Engineering Award** (2013) - Best among 75 teams worldwide
- 🎯 **18+ Years** of aerospace excellence
- ✈️ **25+ Aircraft** built and flown
- 🏅 **20+ Awards** won in competitions
- 🌍 **First Indian team** to fly at AIAA DBF (2015)
- 📊 **Top 20** at Boeing IIT National Aeromodelling Competition (2023)

## ✨ Features

- **Interactive Homepage**: Scroll-based parallax animation with frame-by-frame aircraft visualization
- **Modern UI/UX**: Beautiful, responsive design with smooth animations and transitions
- **Project Showcase**: Detailed pages for RC Airplanes, VTOL systems, and RC Launcher projects
- **Team & Achievements**: Comprehensive timeline and history of the project
- **Gallery**: Visual showcase of aircraft, competitions, and events
- **Contact Form**: Simple integrated form for inquiries
- **Sponsors & Sponsorship**: Information about sponsors and sponsorship opportunities
- **Performance Optimized**: Built with Next.js 15 for optimal performance and SEO

## 🛠️ Tech Stack

### Core Framework
- **Next.js 15.5.10** - React framework with App Router
- **React 19.2.1** - UI library
- **TypeScript 5** - Type safety

### Styling & UI
- **Tailwind CSS** - Utility-first CSS framework
- **Radix UI** - Accessible component primitives
- **Lucide React** - Icon library
- **Tabler Icons** - Additional icon set

### Animations & Interactions
- **GSAP** - Animation library
- **Motion** - Motion library for React
- **Lenis** - Smooth scrolling
- **Embla Carousel** - Carousel component

### Backend & Services
- **Cloudflare Workers (via @opennextjs/cloudflare)** - Deployment platform

### Development Tools
- **Genkit** - AI development tools
- **Wrangler** - Cloudflare Workers CLI
- **ESLint** - Code linting

## 📋 Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** 18.x or higher
- **npm** or **yarn** package manager
- **Git** for version control

## 🚀 Getting Started

### 1. Clone the Repository

```bash
git clone <repository-url>
cd vyoma-website
```

### 2. Install Dependencies

```bash
npm install
# or
yarn install
```

### 3. Environment Variables

Create a `.env.local` file in the root directory if you need to add any custom environment variables.

### 4. Run Development Server

```bash
npm run dev
# or
yarn dev
```

The website will be available at [http://localhost:9002](http://localhost:9002)

## 📜 Available Scripts

- `npm run dev` - Start development server with Turbopack on port 9002
- `npm run build` - Standard Next.js production build
- `npm run build:cloudflare` - Build the app using the `@opennextjs/cloudflare` adapter
- `npm run preview` - Build and preview locally on the Cloudflare Workers runtime
- `npm run deploy` - Build and deploy to Cloudflare Workers using OpenNext
- `npm run upload` - Build and upload a new version to Cloudflare (for gradual deployments)
- `npm run cf-typegen` - Generate `cloudflare-env.d.ts` types for Wrangler bindings
- `npm run start` - Start the Next.js production server (Node)
- `npm run lint` - Run ESLint
- `npm run typecheck` - Run TypeScript type checking
- `npm run genkit:dev` - Start Genkit development server
- `npm run genkit:watch` - Start Genkit with watch mode

## 📁 Project Structure

```
vyoma-website/
├── src/
│   ├── app/                    # Next.js App Router pages
│   │   ├── about/             # About page
│   │   ├── achievements/      # Achievements page
│   │   ├── contact/           # Contact page
│   │   ├── gallery/           # Gallery page
│   │   ├── projects/          # Projects pages
│   │   │   ├── rc-airplanes/  # RC Airplanes project
│   │   │   ├── vtol/          # VTOL project
│   │   │   └── launcher/      # Launcher project
│   │   ├── sponsors/          # Sponsors page
│   │   ├── sponsorship/       # Sponsorship page
│   │   ├── team/              # Team page
│   │   ├── api/               # API routes
│   │   ├── config.ts          # App configuration
│   │   ├── globals.css        # Global styles
│   │   ├── layout.tsx         # Root layout
│   │   └── page.tsx           # Homepage
│   ├── components/            # React components
│   │   ├── core/              # Core components
│   │   ├── sections/          # Page sections
│   │   └── ui/                # UI components
│   ├── hooks/                 # Custom React hooks
│   └── lib/                   # Utility libraries
│       └── utils.ts           # Utility functions
├── public/                    # Static assets
│   └── images/                # Image assets
├── components.json            # shadcn/ui configuration
├── next.config.ts             # Next.js configuration
├── tailwind.config.ts         # Tailwind CSS configuration
└── package.json               # Dependencies
```

## 🎨 Key Features Explained

### Interactive Homepage
The homepage features a scroll-based parallax animation that displays aircraft frames based on scroll position, creating an immersive experience.

### Project Pages
- **RC Airplanes**: Showcase of radio-controlled model airplanes
- **VTOL**: Fixed-wing vertical takeoff and landing aircraft
- **Launcher**: RC airplane launching system

### Animations
The website uses multiple animation libraries to create smooth, engaging interactions:
- Scroll-triggered animations
- Particle effects
- Custom cursor
- Loading screens
- Smooth scrolling

## 🚢 Deployment

### Cloudflare Workers (via OpenNext)

The project is configured to deploy using the official `@opennextjs/cloudflare` adapter:

```bash
npm run deploy
```

This will:
1. Run the standard `next build`
2. Transform the build using `opennextjs-cloudflare build`
3. Deploy the Worker and static assets to Cloudflare via Wrangler

#### Requirements

- A Cloudflare account and Workers project
- Wrangler CLI authenticated (`npx wrangler login`)

#### Local preview on the Workers runtime

```bash
npm run preview
```

This builds the app and serves it locally using the same runtime as production (Cloudflare Workers).

### Other Platforms

The application can also be deployed to:
- **Vercel** (recommended for Next.js)
- **Netlify**
- Any Node.js hosting platform

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is private and proprietary to Project Vyoma, RV College of Engineering.

## 📞 Contact

For inquiries, sponsorship opportunities, or collaboration, please visit the [Contact](http://localhost:9002/contact) page on the website.

## 🙏 Acknowledgments

- RV College of Engineering for continuous support
- All sponsors and supporters
- Team members past and present
- Competition organizers (SAE, AIAA, Boeing, etc.)

---

**Project Vyoma** - Pioneering excellence in aerospace engineering since 2007 ✈️

