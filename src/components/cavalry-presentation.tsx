import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Code, Cpu, TestTube, Zap, Users, TrendingUp, Brain, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

const CavalryPresentation = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      id: 'title',
      component: (
        <div className="h-full flex flex-col justify-center items-center text-center bg-gradient-to-br from-amber-900 via-yellow-800 to-orange-900">
          <div className="mb-8 p-6 border-2 border-yellow-600 rounded-lg bg-yellow-900/30">
            <div className="w-96 h-60 bg-yellow-800/50 rounded flex items-center justify-center text-yellow-200">
              <p className="text-lg">Epic cavalry charge on ancient battlefield</p>
            </div>
          </div>
          <h1 className="text-7xl font-bold text-yellow-100 mb-4">The Cavalry Charge</h1>
          <h2 className="text-3xl text-amber-200 mb-8">A Story of Revolutionary Advantage</h2>
          <p className="text-xl text-amber-300 max-w-2xl">
            How mounted warriors changed warfare forever... and what that means for you today
          </p>
        </div>
      )
    },
    {
      id: 'foot-soldiers',
      component: (
        <div className="h-full flex items-center bg-gradient-to-br from-gray-700 to-gray-900">
          <div className="w-1/2 p-12">
            <div className="w-full h-80 bg-gray-600/50 rounded-lg shadow-2xl flex items-center justify-center text-gray-300">
              <p className="text-lg">Medieval foot soldiers in formation with swords and shields</p>
            </div>
          </div>
          <div className="w-1/2 p-12 text-white">
            <h2 className="text-5xl font-bold mb-8 text-gray-300">For Centuries...</h2>
            <div className="space-y-6 text-2xl text-gray-200">
              <p>Warriors fought on foot</p>
              <p>Strength against strength</p>
              <p>Steel against steel</p>
              <p className="text-amber-300 font-semibold">The battlefield was predictable</p>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'horses-arrive',
      component: (
        <div className="h-full bg-gradient-to-br from-orange-900 via-red-900 to-amber-800 flex flex-col justify-center items-center">
          <div className="text-center mb-8">
            <div className="w-full max-w-5xl h-96 bg-red-800/50 rounded-lg shadow-2xl mx-auto flex items-center justify-center text-orange-200">
              <p className="text-lg">Dramatic cavalry cresting hill with dust clouds and banners</p>
            </div>
          </div>
          <h2 className="text-6xl font-bold text-white mb-6">Then Came the Horse</h2>
          <p className="text-3xl text-orange-200">Thunder of hooves. Height advantage. Speed and mobility.</p>
          <p className="text-2xl text-amber-300 mt-4">Everything changed.</p>
        </div>
      )
    },
    {
      id: 'transformation',
      component: (
        <div className="h-full bg-gradient-to-br from-slate-900 to-red-900">
          <div className="grid grid-cols-2 h-full">
            <div className="p-8 flex flex-col justify-center bg-gray-800/70">
              <h3 className="text-4xl font-bold text-red-300 mb-6">Foot Soldiers</h3>
              <div className="w-full h-72 bg-gray-700/50 rounded mb-6 flex items-center justify-center text-gray-400">
                <p>Exhausted foot soldiers losing battle</p>
              </div>
              <ul className="text-xl text-gray-300 space-y-3">
                <li>• Limited mobility</li>
                <li>• Ground-level perspective</li>
                <li>• Predictable tactics</li>
                <li>• <span className="text-red-400 font-bold">Overwhelmed</span></li>
              </ul>
            </div>
            <div className="p-8 flex flex-col justify-center bg-amber-800/40">
              <h3 className="text-4xl font-bold text-yellow-300 mb-6">Cavalry</h3>
              <div className="w-full h-72 bg-amber-700/50 rounded mb-6 flex items-center justify-center text-amber-200">
                <p>Triumphant mounted warriors</p>
              </div>
              <ul className="text-xl text-amber-100 space-y-3">
                <li>• Rapid positioning</li>
                <li>• Superior vantage point</li>
                <li>• Unpredictable strikes</li>
                <li>• <span className="text-yellow-400 font-bold">Dominant</span></li>
              </ul>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'resistance',
      component: (
        <div className="h-full bg-gradient-to-br from-purple-900 to-slate-800 flex items-center justify-center">
          <div className="text-center max-w-4xl p-12">
            <div className="w-full h-64 bg-purple-800/50 rounded-lg shadow-2xl mb-8 mx-auto flex items-center justify-center text-purple-200">
              <p>Traditional commanders dismissing cavalry</p>
            </div>
            <h2 className="text-5xl font-bold text-white mb-8">But The Old Guard Resisted</h2>
            <div className="grid grid-cols-2 gap-8 text-xl text-purple-200">
              <div className="space-y-4">
                <p>"Horses are unpredictable"</p>
                <p>"Too expensive to maintain"</p>
              </div>
              <div className="space-y-4">
                <p>"Our soldiers have always fought on foot"</p>
                <p>"This is somehow cheating"</p>
              </div>
            </div>
            <p className="text-2xl text-red-300 mt-8 font-semibold">They paid the price for their resistance.</p>
          </div>
        </div>
      )
    },
    {
      id: 'inevitable',
      component: (
        <div className="h-full bg-gradient-to-br from-green-900 to-blue-900 flex flex-col justify-center items-center text-center">
          <div className="w-full max-w-4xl h-80 bg-teal-800/50 rounded-lg shadow-2xl mb-8 flex items-center justify-center text-teal-200">
            <p>Cavalry becoming the new standard across armies</p>
          </div>
          <h2 className="text-6xl font-bold text-white mb-6">Within a Generation</h2>
          <p className="text-3xl text-green-300 mb-4">Every army had cavalry</p>
          <p className="text-2xl text-blue-200">The choice wasn't whether to adapt</p>
          <p className="text-3xl text-yellow-300 font-bold mt-4">It was whether to survive</p>
        </div>
      )
    },
    {
      id: 'reveal',
      component: (
        <div className="h-full bg-gradient-to-br from-blue-900 via-purple-900 to-slate-900 flex flex-col justify-center items-center text-center">
          <div className="mb-8">
            <div className="w-full max-w-3xl h-72 bg-purple-800/50 rounded-lg shadow-2xl mx-auto flex items-center justify-center text-purple-200">
              <p>Modern professional at computer with AI interface, transition from horses to technology</p>
            </div>
          </div>
          <h2 className="text-6xl font-bold text-white mb-6">Today, You Stand</h2>
          <h2 className="text-6xl font-bold text-blue-300 mb-8">At The Same Crossroads</h2>
          <div className="flex items-center text-3xl text-purple-200">
            <span>🐎 Cavalry</span>
            <ArrowRight className="mx-6 text-yellow-400" size={48} />
            <Brain className="mx-4 text-blue-400" size={48} />
            <span>AI</span>
          </div>
        </div>
      )
    },
    {
      id: 'ai-cavalry',
      component: (
        <div className="h-full bg-gradient-to-br from-cyan-900 to-blue-900 flex items-center">
          <div className="w-1/2 p-12">
            <h2 className="text-5xl font-bold text-white mb-8">AI: The New Cavalry</h2>
            <div className="space-y-6 text-xl text-cyan-100">
              <div className="flex items-center">
                <Zap className="mr-4 text-yellow-400" size={32} />
                <span>Speed: Code in minutes, not hours</span>
              </div>
              <div className="flex items-center">
                <TrendingUp className="mr-4 text-yellow-400" size={32} />
                <span>Perspective: See patterns you'd miss</span>
              </div>
              <div className="flex items-center">
                <Brain className="mr-4 text-yellow-400" size={32} />
                <span>Intelligence: Augmented thinking</span>
              </div>
              <div className="flex items-center">
                <Users className="mr-4 text-yellow-400" size={32} />
                <span>Force Multiplier: 10x productivity</span>
              </div>
            </div>
          </div>
          <div className="w-1/2 p-12">
            <div className="w-full h-96 bg-blue-800/50 rounded-lg shadow-2xl flex items-center justify-center text-blue-200">
              <p>Software engineer collaborating with AI, futuristic setup</p>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'software-cavalry',
      component: (
        <div className="h-full bg-gradient-to-br from-emerald-900 to-teal-900">
          <div className="grid grid-cols-2 h-full">
            <div className="p-8 flex flex-col justify-center bg-gray-800/50">
              <h3 className="text-4xl font-bold text-red-300 mb-6">Without AI</h3>
              <div className="w-full h-60 bg-gray-700/50 rounded mb-4 flex items-center justify-center text-gray-400">
                <p>Developer struggling with traditional debugging and testing</p>
              </div>
              <ul className="text-lg text-gray-300 space-y-2">
                <li><Code className="inline mr-2" size={20} />Hours debugging embedded firmware</li>
                <li><TestTube className="inline mr-2" size={20} />Manual test case writing</li>
                <li><Cpu className="inline mr-2" size={20} />Slow optimization cycles</li>
                <li className="text-red-400 font-bold">• Fighting on foot</li>
              </ul>
            </div>
            <div className="p-8 flex flex-col justify-center bg-teal-800/30">
              <h3 className="text-4xl font-bold text-emerald-300 mb-6">With AI</h3>
              <div className="w-full h-60 bg-teal-700/50 rounded mb-4 flex items-center justify-center text-teal-200">
                <p>Developer with AI assistance, multiple screens, efficient workflow</p>
              </div>
              <ul className="text-lg text-emerald-100 space-y-2">
                <li><Code className="inline mr-2 text-yellow-400" size={20} />AI finds bugs in minutes</li>
                <li><TestTube className="inline mr-2 text-yellow-400" size={20} />Automated test generation</li>
                <li><Cpu className="inline mr-2 text-yellow-400" size={20} />Smart code optimization</li>
                <li className="text-emerald-400 font-bold">• Mounted and unstoppable</li>
              </ul>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'your-choice',
      component: (
        <div className="h-full bg-gradient-to-br from-orange-900 to-red-900 flex flex-col justify-center items-center text-center">
          <div className="w-full max-w-4xl h-96 bg-red-800/50 rounded-lg shadow-2xl mb-8 flex items-center justify-center text-red-200">
            <p>Split path: traditional coding vs AI-enhanced development</p>
          </div>
          <h2 className="text-6xl font-bold text-white mb-8">Your Competitors</h2>
          <h2 className="text-5xl font-bold text-orange-300 mb-6">Are Already Training</h2>
          <div className="text-3xl text-red-200">
            <p>Will you be cavalry or infantry?</p>
          </div>
        </div>
      )
    },
    {
      id: 'mount-up',
      component: (
        <div className="h-full bg-gradient-to-br from-yellow-900 via-orange-900 to-red-900 flex flex-col justify-center items-center text-center">
          <div className="w-full max-w-4xl h-80 bg-orange-800/50 rounded-lg shadow-2xl mb-8 flex items-center justify-center text-orange-200">
            <p>Developer confidently working with AI tools, sunrise lighting</p>
          </div>
          <h2 className="text-7xl font-bold text-white mb-6">Mount Up</h2>
          <p className="text-4xl text-yellow-200 mb-8">Learn AI. Code Faster. Test Smarter.</p>
          <div className="text-2xl text-orange-200 space-y-2">
            <p>Master the tools: Claude, GitHub Copilot, ChatGPT</p>
            <p>Transform your workflow</p>
            <p className="text-yellow-300 font-bold text-3xl mt-6">Become the cavalry</p>
          </div>
        </div>
      )
    }
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

  return (
    <div className="w-full h-screen bg-black relative overflow-hidden">
      {/* Main slide content */}
      <div className="w-full h-full transition-all duration-500 ease-in-out">
        {slides[currentSlide].component}
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