import { ArrowRight, Brain } from 'lucide-react';

const RevealSlide = () => {
  return (
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
  );
};

export default RevealSlide;