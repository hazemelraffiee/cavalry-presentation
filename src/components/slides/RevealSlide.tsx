import { ArrowRight, Brain } from 'lucide-react';

const RevealSlide = () => {
  return (
    <div className="h-full bg-gradient-to-br from-blue-900 via-purple-900 to-slate-900 flex flex-col justify-center items-center text-center">
      <div className="mb-8">
        <img 
          src={`${import.meta.env.BASE_URL}img/7.png`} 
          alt="Modern professional at computer with AI interface, transition from horses to technology" 
          className="w-full max-w-3xl h-72 object-contain rounded-lg shadow-2xl mx-auto opacity-0 animate-rotateIn"
        />
      </div>
      <h2 className="text-6xl font-bold text-white mb-6 opacity-0 animate-fadeInUp animation-delay-300">Today, You Stand</h2>
      <h2 className="text-6xl font-bold text-blue-300 mb-8 opacity-0 animate-fadeInUp animation-delay-500">At The Same Crossroads</h2>
      <div className="flex items-center text-3xl text-purple-200 opacity-0 animate-scaleIn animation-delay-800">
        <span className="opacity-0 animate-fadeInUp animation-delay-1000">🐎 Cavalry</span>
        <ArrowRight className="mx-6 text-yellow-400 opacity-0 animate-fadeInUp animation-delay-1000" style={{ animationDelay: '1200ms' }} size={48} />
        <Brain className="mx-4 text-blue-400 opacity-0 animate-bounceIn" style={{ animationDelay: '1400ms' }} size={48} />
        <span className="opacity-0 animate-fadeInUp" style={{ animationDelay: '1600ms' }}>AI</span>
      </div>
    </div>
  );
};

export default RevealSlide;