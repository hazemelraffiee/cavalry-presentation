# The Cavalry Charge Presentation

An interactive presentation demonstrating how AI is revolutionizing software development, using the historical metaphor of cavalry transforming warfare.

## Overview

This presentation tells the story of how mounted cavalry changed ancient warfare forever, drawing parallels to how AI tools are transforming modern software development. Just as cavalry provided speed, perspective, and strategic advantage, AI tools like Claude, GitHub Copilot, and ChatGPT are giving developers unprecedented capabilities.

## Features

- **Interactive Navigation**: Use arrow keys or click navigation buttons to move through slides
- **Smooth Animations**: Custom CSS animations for slide transitions and content entrance
- **Image Preloading**: All images are preloaded with a progress indicator for seamless presentation
- **Visual Storytelling**: Engaging gradients and layouts that enhance the narrative
- **AI-Generated Images**: Beautiful visuals created with AI to illustrate each concept
- **Responsive Design**: Built with Tailwind CSS v4 for a beautiful experience on any screen
- **Modern Stack**: React 19, TypeScript, Vite, and shadcn/ui components

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/hazemelraffiee/cavalry-presentation.git
cd cavalry-presentation
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser to `http://localhost:5173`

## Live Demo

🌐 **Visit the live presentation:** [https://hazemelraffiee.github.io/cavalry-presentation/](https://hazemelraffiee.github.io/cavalry-presentation/)

## Deployment

This project is automatically deployed to GitHub Pages using GitHub Actions.

### Automatic Deployment

Every push to the `main` branch triggers an automatic deployment via GitHub Actions. The workflow:
1. Builds the project
2. Deploys to GitHub Pages
3. Makes the site available at the URL above

### Manual Deployment Check

To check the deployment status:
```bash
./check-deployment.sh
```

### Repository Settings

GitHub Pages is configured to deploy from GitHub Actions. If you fork this repository:
1. Go to Settings → Pages
2. Under "Source", select "GitHub Actions"
3. Save the changes

## Usage

### Navigation
- **Arrow Keys**: Press `←` and `→` to navigate between slides
- **Click Navigation**: Use the chevron buttons (visible on first and last slides)
- **Slide Indicators**: Click any dot to jump directly to a slide (visible on first and last slides)
- **Circular Navigation**: Automatically loops from last slide to first

### Presentation Flow

1. **Title**: Introduction to the cavalry charge metaphor
2. **Foot Soldiers**: The traditional way of warfare (and coding)
3. **Horses Arrive**: The game-changing innovation
4. **Transformation**: Comparing old vs new approaches
5. **Resistance**: How the old guard resisted change
6. **Inevitable**: The new standard emerges
7. **Reveal**: Drawing the parallel to AI
8. **AI Cavalry**: AI as the modern cavalry
9. **Software Cavalry**: Specific examples in software development
10. **Your Choice**: The decision facing developers today
11. **Mount Up**: Call to action

## Tech Stack

- **React 19.1.0** - Latest React with improved performance
- **TypeScript** - Type-safe development
- **Vite** - Lightning fast build tool
- **Tailwind CSS v4** - Modern utility-first CSS
- **shadcn/ui** - Beautiful, accessible components
- **Lucide React** - Clean, consistent icons

## Development

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

### Project Structure

```
src/
├── components/
│   ├── ui/                      # shadcn/ui components
│   ├── cavalry-presentation.tsx # Main presentation component
│   └── slides/                  # Individual slide components
│       ├── index.ts            # Barrel export
│       ├── types.ts            # TypeScript interfaces
│       └── [SlideNames].tsx    # 11 slide components
├── hooks/
│   ├── index.ts                # Hook exports
│   └── useImagePreloader.ts    # Image preloading hook
├── styles/
│   └── animations.css          # Custom animation keyframes
├── lib/
│   └── utils.ts                # Utility functions
├── App.tsx                     # Root component
└── main.tsx                    # Application entry point

public/
└── img/                        # AI-generated presentation images
    ├── 1.png to 11.png        # Main slide images
    └── 4-A.png, 4-B.png, etc. # Split slide images

docs/
└── img-prompts.md             # AI image generation prompts
```

## Customization

### Updating Images

The presentation includes AI-generated images for each slide. To update or replace images:

1. Place new images in the `public/img/` directory
2. Follow the naming convention: `1.png` through `11.png` (or `4-A.png` for split slides)
3. Reference images using Vite's base URL:

```tsx
<img 
  src={`${import.meta.env.BASE_URL}img/1.png`} 
  alt="Description" 
  className="w-full h-60 object-cover rounded" 
/>
```

4. See `docs/img-prompts.md` for the original AI prompts used to generate each image

### Modifying Slides

To modify existing slides or add new ones:

1. **Edit existing slides**: Modify the component in `src/components/slides/[SlideName].tsx`
2. **Add new slides**:
   - Create a new component in `src/components/slides/`
   - Export it from `src/components/slides/index.ts`
   - Add it to the `slides` array in `src/components/cavalry-presentation.tsx`
3. **Animations**: Use animation classes from `src/styles/animations.css`
4. **Styling**: Follow the existing gradient and layout patterns

### Theming

The presentation uses Tailwind's gradient backgrounds. Modify these in the component JSX to match your brand colors.

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is open source and available under the [MIT License](LICENSE).