import { Zap, TrendingUp, Brain, Users } from 'lucide-react';
const AICavalrySlide = () => {
  return (
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
  );
};

export default AICavalrySlide;