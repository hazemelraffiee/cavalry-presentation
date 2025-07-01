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
│   └── cavalry-presentation.tsx # Main presentation component
├── lib/
│   └── utils.ts                # Utility functions
├── App.tsx                     # Root component
└── main.tsx                    # Application entry point
```

## Development Guidelines

### Code Style
- Use TypeScript for all new components
- Follow existing code patterns and conventions
- Utilize shadcn/ui components when possible
- Maintain consistent spacing and formatting

### Component Guidelines
- The main presentation logic is in `cavalry-presentation.tsx`
- Each slide is defined in the `slides` array
- Navigation is handled via keyboard (arrow keys) and UI buttons
- Use Tailwind classes for styling, avoiding inline styles

### Testing Commands
- Run development server: `npm run dev`
- Build for production: `npm run build`
- Lint code: `npm run lint`
- Preview production build: `npm run preview`

## Common Tasks

### Adding New Slides
1. Edit the `slides` array in `src/components/cavalry-presentation.tsx`
2. Follow the existing slide structure pattern
3. Maintain consistent styling with gradient backgrounds
4. Test navigation works correctly with new slides

### Updating Images
- Currently using placeholder divs with descriptive text
- To add real images: place in `public/` directory and reference with `/filename.ext`
- Maintain consistent sizing with existing image placeholders

### Modifying Styling
- Primary styling uses Tailwind gradient utilities
- Color scheme focuses on warm tones (amber, yellow, orange) transitioning to cooler tones
- Maintain high contrast for readability

### Performance Considerations
- Slides use conditional rendering (only current slide is rendered)
- Keyboard event listeners are properly cleaned up
- Transitions use CSS for smooth performance

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
- Add slide transitions/animations
- Implement presenter notes functionality
- Add progress bar indicator
- Support for mobile swipe gestures
- Export to PDF functionality
- Timer/presentation mode features

## Troubleshooting

### Common Issues
1. **Images not loading**: Check file paths and ensure images are in `public/` directory
2. **Navigation not working**: Verify keyboard event listeners are properly attached
3. **Styling issues**: Check Tailwind classes and ensure no conflicts
4. **Build errors**: Run `npm install` to ensure all dependencies are installed

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