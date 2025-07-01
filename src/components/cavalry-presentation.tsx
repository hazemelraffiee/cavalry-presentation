import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Loader2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { useImagePreloader } from '@/hooks';
import {
  TitleSlide,
  FootSoldiersSlide,
  HorsesArriveSlide,
  TransformationSlide,
  ResistanceSlide,
  InevitableSlide,
  RevealSlide,
  AICavalrySlide,
  SoftwareCavalrySlide,
  YourChoiceSlide,
  MountUpSlide,
  type Slide
} from './slides';

const CavalryPresentation = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [slideDirection, setSlideDirection] = useState<'left' | 'right'>('right');
  const { isLoading, loadedCount, totalCount } = useImagePreloader();

  const slides: Slide[] = [
    { id: 'title', component: TitleSlide },
    { id: 'foot-soldiers', component: FootSoldiersSlide },
    { id: 'horses-arrive', component: HorsesArriveSlide },
    { id: 'transformation', component: TransformationSlide },
    { id: 'resistance', component: ResistanceSlide },
    { id: 'inevitable', component: InevitableSlide },
    { id: 'reveal', component: RevealSlide },
    { id: 'ai-cavalry', component: AICavalrySlide },
    { id: 'software-cavalry', component: SoftwareCavalrySlide },
    { id: 'your-choice', component: YourChoiceSlide },
    { id: 'mount-up', component: MountUpSlide }
  ];

  const nextSlide = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setSlideDirection('right');
    setTimeout(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
      setIsTransitioning(false);
    }, 50);
  };

  const prevSlide = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setSlideDirection('left');
    setTimeout(() => {
      setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
      setIsTransitioning(false);
    }, 50);
  };

  const goToSlide = (index: number) => {
    if (isTransitioning || index === currentSlide) return;
    setIsTransitioning(true);
    setSlideDirection(index > currentSlide ? 'right' : 'left');
    setTimeout(() => {
      setCurrentSlide(index);
      setIsTransitioning(false);
    }, 50);
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight') nextSlide();
      if (e.key === 'ArrowLeft') prevSlide();
    };
    
    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, []);

  const CurrentSlideComponent = slides[currentSlide].component;

  // Show loading screen while images are preloading
  if (isLoading) {
    return (
      <div className="w-full h-screen bg-gradient-to-br from-amber-900 to-red-900 flex flex-col items-center justify-center">
        <Loader2 className="w-16 h-16 text-white animate-spin mb-4" />
        <h2 className="text-2xl font-bold text-white mb-2">Preparing Your Journey...</h2>
        <p className="text-white/80">Loading images ({loadedCount}/{totalCount})</p>
        <div className="w-64 h-2 bg-white/20 rounded-full mt-4 overflow-hidden">
          <div 
            className="h-full bg-white/80 transition-all duration-300"
            style={{ width: `${(loadedCount / totalCount) * 100}%` }}
          />
        </div>
      </div>
    );
  }

  return (
    <div className="w-full h-screen bg-black relative overflow-hidden">
      {/* Main slide content */}
      <div 
        className={cn(
          "w-full h-full absolute inset-0 will-change-transform",
          isTransitioning && slideDirection === 'right' && "animate-slideInFromRight",
          isTransitioning && slideDirection === 'left' && "animate-slideInFromLeft",
          !isTransitioning && "animate-fadeIn"
        )}
        key={currentSlide}
      >
        <CurrentSlideComponent />
      </div>

      {/* Navigation - Only show on first and last slides */}
      <div className={cn(
        "absolute bottom-6 left-1/2 transform -translate-x-1/2 flex items-center space-x-4 transition-opacity duration-300",
        (currentSlide === 0 || currentSlide === slides.length - 1) ? "opacity-100" : "opacity-0 pointer-events-none"
      )}>
        <Button 
          onClick={prevSlide}
          variant="ghost"
          size="icon"
          className="bg-white/20 hover:bg-white/30 text-white"
          disabled={false}
        >
          <ChevronLeft size={24} />
        </Button>
        
        {/* Slide indicators */}
        <div className="flex space-x-2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={cn(
                "w-3 h-3 rounded-full transition-all",
                index === currentSlide 
                  ? 'bg-white' 
                  : 'bg-white/40 hover:bg-white/60'
              )}
            />
          ))}
        </div>
        
        <Button 
          onClick={nextSlide}
          variant="ghost"
          size="icon"
          className="bg-white/20 hover:bg-white/30 text-white"
          disabled={false}
        >
          <ChevronRight size={24} />
        </Button>
      </div>

      {/* Slide counter */}
      <div className="absolute top-6 right-6 text-white/60 text-lg">
        {currentSlide + 1} / {slides.length}
      </div>

      {/* Keyboard navigation hint */}
      <div className="absolute top-6 left-6 text-white/40 text-sm">
        Use ← → keys or click to navigate
      </div>
    </div>
  );
};

export default CavalryPresentation;