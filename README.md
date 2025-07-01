# The Cavalry Charge Presentation

An interactive presentation demonstrating how AI is revolutionizing software development, using the historical metaphor of cavalry transforming warfare.

## Overview

This presentation tells the story of how mounted cavalry changed ancient warfare forever, drawing parallels to how AI tools are transforming modern software development. Just as cavalry provided speed, perspective, and strategic advantage, AI tools like Claude, GitHub Copilot, and ChatGPT are giving developers unprecedented capabilities.

## Features

- **Interactive Navigation**: Use arrow keys or click navigation buttons to move through slides
- **Visual Storytelling**: Engaging gradients and layouts that enhance the narrative
- **Responsive Design**: Built with Tailwind CSS v4 for a beautiful experience on any screen
- **Modern Stack**: React 19, TypeScript, Vite, and shadcn/ui components

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone [your-repo-url]
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

## Usage

### Navigation
- **Arrow Keys**: Press `←` and `→` to navigate between slides
- **Click Navigation**: Use the chevron buttons at the bottom
- **Slide Indicators**: Click any dot to jump directly to a slide

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
│   ├── ui/              # shadcn/ui components
│   └── cavalry-presentation.tsx  # Main presentation component
├── lib/
│   └── utils.ts         # Utility functions
├── App.tsx              # Root component
└── main.tsx            # Application entry point
```

## Customization

### Adding Images

Currently, the presentation uses placeholder divs with descriptive text. To add actual images:

1. Place images in the `public/` directory
2. Replace the placeholder divs with `<img>` tags:

```tsx
<img src="/your-image.jpg" alt="Description" className="w-full h-60 object-cover rounded" />
```

### Modifying Slides

Edit the `slides` array in `src/components/cavalry-presentation.tsx` to:
- Change content
- Add new slides
- Modify styling
- Update the narrative

### Theming

The presentation uses Tailwind's gradient backgrounds. Modify these in the component JSX to match your brand colors.

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is open source and available under the [MIT License](LICENSE).