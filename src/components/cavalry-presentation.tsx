import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
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
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
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

  return (
    <div className="w-full h-screen bg-black relative overflow-hidden">
      {/* Main slide content */}
      <div className="w-full h-full transition-all duration-500 ease-in-out">
        <CurrentSlideComponent />
      </div>

      {/* Navigation */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex items-center space-x-4">
        <Button 
          onClick={prevSlide}
          variant="ghost"
          size="icon"
          className="bg-white/20 hover:bg-white/30 text-white"
          disabled={currentSlide === 0}
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
          disabled={currentSlide === slides.length - 1}
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