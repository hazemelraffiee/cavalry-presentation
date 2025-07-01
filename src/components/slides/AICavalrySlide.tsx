import { Zap, TrendingUp, Brain, Users } from 'lucide-react';
const AICavalrySlide = () => {
  return (
    <div className="h-full bg-gradient-to-br from-cyan-900 to-blue-900 flex items-center">
      <div className="w-1/2 p-12">
        <h2 className="text-5xl font-bold text-white mb-8 opacity-0 animate-fadeInDown">AI: The New Cavalry</h2>
        <div className="space-y-6 text-xl text-cyan-100">
          <div className="flex items-center opacity-0 animate-staggerFadeIn animation-delay-300">
            <Zap className="mr-4 text-yellow-400" size={32} />
            <span>Speed: Code in minutes, not hours</span>
          </div>
          <div className="flex items-center opacity-0 animate-staggerFadeIn animation-delay-500">
            <TrendingUp className="mr-4 text-yellow-400" size={32} />
            <span>Perspective: See patterns you'd miss</span>
          </div>
          <div className="flex items-center opacity-0 animate-staggerFadeIn animation-delay-700">
            <Brain className="mr-4 text-yellow-400" size={32} />
            <span>Intelligence: Augmented thinking</span>
          </div>
          <div className="flex items-center opacity-0 animate-staggerFadeIn animation-delay-900">
            <Users className="mr-4 text-yellow-400" size={32} />
            <span>Force Multiplier: 10x productivity</span>
          </div>
        </div>
      </div>
      <div className="w-1/2 p-12">
        <img 
          src={`${import.meta.env.BASE_URL}img/8.png`} 
          alt="Software engineer collaborating with AI, futuristic setup" 
          className="w-full h-96 object-contain rounded-lg shadow-2xl opacity-0 animate-scaleIn animation-delay-200"
        />
      </div>
    </div>
  );
};

export default AICavalrySlide;