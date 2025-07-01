# CLAUDE.md - AI Assistant Instructions

This document provides context and instructions for AI assistants working on the Cavalry Presentation project.

## Project Overview

The Cavalry Presentation is an interactive slideshow that uses the historical metaphor of cavalry revolutionizing warfare to illustrate how AI is transforming software development. The presentation is built with React, TypeScript, Vite, and shadcn/ui components.

## Key Project Information

### Tech Stack
- React 19.1.0 with TypeScript
- Vite for build tooling
- Tailwind CSS v4 for styling
- shadcn/ui for component library
- Lucide React for icons

### Project Structure
```
src/
├── components/
│   ├── ui/                      # shadcn/ui components
│   ├── cavalry-presentation.tsx # Main presentation component
│   ├── LazyImage.tsx           # Smart image component with loading state
│   └── slides/                  # Individual slide components
│       ├── index.ts            # Barrel export
│       ├── types.ts            # TypeScript interfaces
│       └── [SlideNames].tsx    # 11 individual slide components
├── hooks/
│   ├── index.ts                # Hook exports
│   └── useImagePreloader.ts    # Smart image preloading hook
├── styles/
│   └── animations.css          # Custom animation keyframes
├── lib/
│   └── utils.ts                # Utility functions
├── App.tsx                     # Root component
└── main.tsx                    # Application entry point

docs/
└── img-prompts.md              # AI image generation prompts

public/
└── img/                        # Presentation images (1-11.png, 4-A.png, etc.)
```

## Development Guidelines

### Code Style
- Use TypeScript for all new components
- Follow existing code patterns and conventions
- Utilize shadcn/ui components when possible
- Maintain consistent spacing and formatting

### Component Guidelines
- The main presentation logic is in `cavalry-presentation.tsx`
- Each slide is now a separate component in `src/components/slides/`
- All slides implement the `SlideProps` interface from `types.ts`
- Navigation is handled via keyboard (arrow keys) and UI buttons
- Navigation controls are only visible on first and last slides
- Use Tailwind classes for styling, avoiding inline styles
- Animations are defined in `src/styles/animations.css`

### Testing Commands
- Run development server: `npm run dev`
- Build for production: `npm run build`
- Lint code: `npm run lint`
- Preview production build: `npm run preview`

## Common Tasks

### Adding New Slides
1. Create a new component in `src/components/slides/` 
2. Export it from `src/components/slides/index.ts`
3. Add it to the `slides` array in `src/components/cavalry-presentation.tsx`
4. Follow the existing slide structure pattern and implement `SlideProps`
5. Add appropriate animations using classes from `animations.css`
6. Maintain consistent styling with gradient backgrounds
7. Test navigation works correctly with new slides

### Updating Images
- Images are stored in `public/img/` directory (1.png through 11.png)
- Reference images using `${import.meta.env.BASE_URL}img/filename.png` for Vite compatibility
- Image dimensions vary per slide - most are 1536x1024px
- See `docs/img-prompts.md` for AI generation prompts and dimension specifications
- Maintain consistent sizing with container constraints in each slide component

### Modifying Styling
- Primary styling uses Tailwind gradient utilities
- Color scheme focuses on warm tones (amber, yellow, orange) transitioning to cooler tones
- Maintain high contrast for readability

### Performance Considerations
- Slides use conditional rendering (only current slide is rendered)
- Keyboard event listeners are properly cleaned up
- Transitions use CSS animations defined in `animations.css`
- Each slide component is lazy-loaded when needed
- Navigation has circular navigation (wraps from last to first slide)
- Smart image preloading system:
  - Only the first slide's image is loaded before showing the presentation
  - Remaining images load in the background sequentially
  - `LazyImage` component shows loading indicator for images not yet loaded
  - Provides seamless experience when navigating at normal speed
- Custom `useImagePreloader` hook tracks loading state for all images

## Important Notes

### Accessibility
- Keyboard navigation is fully supported
- Consider adding ARIA labels for screen readers when making updates
- Maintain color contrast ratios for text readability

### Browser Compatibility
- Project uses modern React features (React 19)
- Ensure browser compatibility for production deployments
- Test on multiple browsers when making significant changes

### State Management
- Currently uses simple useState for slide navigation
- No external state management library needed for current functionality
- Keep state management simple unless complexity increases

## Future Enhancement Ideas
- ~~Add slide transitions/animations~~ ✓ Completed
- ~~Preload images for smoother transitions~~ ✓ Completed
- Implement presenter notes functionality
- Add progress bar indicator
- Support for mobile swipe gestures
- Export to PDF functionality
- Timer/presentation mode features
- Add sound effects for slide transitions

## Troubleshooting

### Common Issues
1. **Images not loading**: 
   - Check file paths and ensure images are in `public/img/` directory
   - Use `${import.meta.env.BASE_URL}img/filename.png` format for Vite compatibility
   - Verify the base URL in `vite.config.ts` matches your deployment path
2. **Navigation not working**: 
   - Verify keyboard event listeners are properly attached
   - Check that circular navigation logic is working (modulo operator)
3. **Styling issues**: 
   - Check Tailwind classes and ensure no conflicts
   - Verify animations are imported from `animations.css`
4. **Build errors**: 
   - Run `npm install` to ensure all dependencies are installed
   - Check for TypeScript errors with `npx tsc --noEmit`

### Debug Commands
- Check for TypeScript errors: `npx tsc --noEmit`
- Analyze bundle size: `npm run build && npx vite-bundle-visualizer`
- Update dependencies: `npm update`

## Contact for Questions

When working on this project, consider:
- The metaphorical narrative should remain consistent
- The presentation should be self-contained and work offline
- Performance and smooth transitions are priority
- The code should be maintainable and well-documented