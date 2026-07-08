# Auralink - Modern Landing Page

<div align="center">

![Auralink](https://img.shields.io/badge/Auralink-Intelligence%20Layer-blue)
![Next.js](https://img.shields.io/badge/Next.js-16.0-black)
![React](https://img.shields.io/badge/React-19.0-blue)
![TypeScript](https://img.shields.io/badge/TypeScript-5.7-blue)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-4.1-38bdf8)

**The Intelligence Layer for Modern Communication**

A stunning, high-performance landing page built with cutting-edge web technologies, featuring advanced animations, interactive components, and a modern design system.

[Live Demo](#) • [Documentation](#) • [Report Bug](#) • [Request Feature](#)

</div>

---

## ✨ Features

### 🎨 Modern UI/UX
- **Responsive Design**: Fully responsive across all devices and screen sizes
- **Dark/Light Mode**: Built-in theme support with next-themes
- **Custom Animations**: Smooth, performant animations using Framer Motion
- **Interactive Components**: Engaging user interactions with micro-animations

### 🚀 Advanced Components
- **Animated Navbar**: Smooth scroll detection with backdrop blur effects
- **Flow Button**: Gradient flow animation on hover (Blue → Purple → Pink)
- **Shine Button**: Elegant shine effect on hover for CTAs
- **Motion Button**: Expanding circle background with arrow icon animation
- **Product Teaser Card**: Dynamic image rotation with smooth transitions
- **Case Studies Carousel**: Interactive carousel showcasing customer success stories
- **Integration Carousel**: Draggable carousel with smooth animations
- **Custom 404 Page**: Beautiful not-found page with animated elements

### 🎭 Animation Library
- **Framer Motion**: Advanced motion and animation library
- **GSAP**: Professional-grade animation for complex sequences
- **Three.js**: 3D graphics and WebGL support
- **React Three Fiber**: React renderer for Three.js
- **Tailwind Animate**: Utility-first animation classes

### 🧩 UI Components
- **Radix UI**: Unstyled, accessible UI primitives
- **Lucide React**: Beautiful icon library
- **Class Variance Authority**: Type-safe variant props
- **Headless Tree**: Accessible tree component
- **Command Palette**: Quick navigation with cmdk
- **Toast Notifications**: Beautiful toast notifications with Sonner

### 📊 Data Visualization
- **Recharts**: Composable charting library
- **Embla Carousel**: Lightweight carousel component
- **Resizable Panels**: Flexible layout with react-resizable-panels

### 🛠️ Developer Experience
- **TypeScript**: Full type safety across the project
- **ESLint**: Code linting and formatting
- **Prettier**: Code formatting with consistent style
- **Path Aliases**: Clean imports with @ alias
- **Hot Reload**: Instant development feedback

---

## 🏗️ Tech Stack

### Core Framework
- **Next.js 16.0** - React framework with App Router
- **React 19.0** - UI library
- **TypeScript 5.7** - Type-safe JavaScript

### Styling
- **Tailwind CSS 4.1** - Utility-first CSS framework
- **Tailwind Animate** - Animation utilities
- **PostCSS** - CSS transformation

### Animation
- **Framer Motion 12.4** - Production-ready motion library
- **GSAP 3.14** - Professional animation platform
- **Three.js 0.175** - 3D library
- **React Three Fiber 9.1** - React renderer for Three.js
- **React Three Drei 10.0** - Helpers for React Three Fiber

### UI Components
- **Radix UI** - Headless UI components
- **Lucide React** - Icon library
- **Class Variance Authority** - Variant props
- **Tailwind Merge** - Merge Tailwind classes
- **CLSX** - Conditional className utility

### Form & Data
- **React Hook Form 7.62** - Form validation
- **Zod 4.1** - Schema validation
- **@hookform/resolvers** - Form validation resolvers

### Utilities
- **Date-fns 4.1** - Date manipulation
- **UUID 11.1** - Unique ID generation
- **Sonner 2.0** - Toast notifications
- **Vaul 1.1** - Drawer component

### Development
- **ESLint 9.21** - Code linting
- **Prettier 3.5** - Code formatting
- **TypeScript ESLint 8.24** - TypeScript linting

---

## 📦 Installation

### Prerequisites
- Node.js 18.x or higher
- pnpm (recommended) or npm/yarn

### Clone the Repository
```bash
git clone https://github.com/yourusername/auralink.git
cd auralink
```

### Install Dependencies
```bash
# Using pnpm (recommended)
pnpm install

# Using npm
npm install

# Using yarn
yarn install
```

### Environment Variables
Create a `.env.local` file in the root directory:
```env
# Add your environment variables here
NEXT_PUBLIC_API_URL=your_api_url
```

---

## 🚀 Getting Started

### Development Server
```bash
# Start the development server
pnpm dev
# or
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

### Build for Production
```bash
# Build the application
pnpm build
# or
npm run build
# or
yarn build
```

### Start Production Server
```bash
# Start the production server
pnpm start
# or
npm start
# or
yarn start
```

---

## 📁 Project Structure

```
auralink/
├── app/                      # Next.js App Router
│   ├── globals.css          # Global styles
│   ├── layout.tsx            # Root layout
│   ├── page.tsx             # Home page
│   └── not-found.tsx        # 404 page
├── components/              # React components
│   ├── ui/                  # UI components (shadcn/ui)
│   │   └── button.tsx       # Button component
│   ├── CaseStudiesCarousel.tsx
│   ├── IntegrationCarousel.tsx
│   ├── PortfolioNavbar.tsx
│   └── ProductTeaserCard.tsx
├── lib/                     # Utility functions
├── public/                  # Static assets
├── styles/                  # Additional styles
├── .gitignore              # Git ignore rules
├── components.json         # shadcn/ui configuration
├── next.config.mjs         # Next.js configuration
├── package.json            # Dependencies
├── postcss.config.mjs      # PostCSS configuration
├── tailwind.config.ts      # Tailwind CSS configuration
├── tsconfig.json           # TypeScript configuration
└── README.md               # This file
```

---

## 🎨 Custom Components

### FlowButton
A button with a flowing gradient animation on hover.
```tsx
<FlowButton onClick={handleClick} className="px-6 py-3 rounded-full">
  Start Free Trial
</FlowButton>
```

### ShineButton
A button with a shine effect that sweeps across on hover.
```tsx
<ShineButton href="/contact" className="bg-primary text-white">
  Contact Us
</ShineButton>
```

### MotionButton
A button with expanding circle background and arrow icon animation.
```tsx
<MotionButton label="Get Started" onClick={handleClick} />
```

---

## 🎯 Key Features Explained

### Animated Navbar
- Scroll detection with backdrop blur
- Smooth transitions between states
- Mobile-responsive hamburger menu
- Active link indicators

### Product Teaser Card
- Dynamic image rotation (every 3 seconds)
- Smooth fade transitions
- Gradient text effects
- Interactive buttons with shine animation

### Case Studies Carousel
- Auto-playing carousel
- Smooth slide transitions
- Customer success stories
- Interactive navigation

### Integration Carousel
- Draggable interface
- Smooth animations
- Integration showcase
- Responsive design

---

## 🌐 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

---

## 📝 Scripts

| Command | Description |
|---------|-------------|
| `pnpm dev` | Start development server |
| `pnpm build` | Build for production |
| `pnpm start` | Start production server |
| `pnpm lint` | Run ESLint |
| `pnpm format` | Format code with Prettier |
| `pnpm format:check` | Check code formatting |

---

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

---

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## 🙏 Acknowledgments

- [Next.js](https://nextjs.org/) - The React framework
- [Framer Motion](https://www.framer.com/motion/) - Animation library
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework
- [Radix UI](https://www.radix-ui.com/) - UI components
- [Lucide](https://lucide.dev/) - Icon library
- [shadcn/ui](https://ui.shadcn.com/) - Component library

---

## 📞 Contact

- **Project Link**: [https://github.com/sharma11/auralink](https://github.com/sharma11/auralink)
- **Email**: ishaansharma30012000@gmail.com

---

<div align="center">

**Built with ❤️ using modern web technologies**

[⬆ Back to Top](#auralink---modern-landing-page)

</div>
