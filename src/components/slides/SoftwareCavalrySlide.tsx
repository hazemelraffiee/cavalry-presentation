import { Code, TestTube, Cpu } from 'lucide-react';
import LazyImage from '../LazyImage';

const SoftwareCavalrySlide = () => {
  return (
    <div className="h-full bg-gradient-to-br from-emerald-900 to-teal-900">
      <div className="grid grid-cols-2 h-full">
        <div className="p-8 flex flex-col justify-center bg-gray-800/50">
          <h3 className="text-4xl font-bold text-red-300 mb-6 opacity-0 animate-fadeInDown">Without AI</h3>
          <LazyImage 
            src={`${import.meta.env.BASE_URL}img/9-A.png`} 
            alt="Developer struggling with traditional debugging and testing" 
            className="w-full h-60 object-contain rounded mb-4 opacity-0 animate-scaleIn animation-delay-200"
          />
          <ul className="text-lg text-gray-300 space-y-2">
            <li className="opacity-0 animate-staggerFadeIn animation-delay-400"><Code className="inline mr-2" size={20} />Hours debugging embedded firmware</li>
            <li className="opacity-0 animate-staggerFadeIn animation-delay-500"><TestTube className="inline mr-2" size={20} />Manual test case writing</li>
            <li className="opacity-0 animate-staggerFadeIn animation-delay-600"><Cpu className="inline mr-2" size={20} />Slow optimization cycles</li>
            <li className="text-red-400 font-bold opacity-0 animate-staggerFadeIn animation-delay-700">• Fighting on foot</li>
          </ul>
        </div>
        <div className="p-8 flex flex-col justify-center bg-teal-800/30">
          <h3 className="text-4xl font-bold text-emerald-300 mb-6 opacity-0 animate-fadeInDown animation-delay-800">With AI</h3>
          <LazyImage 
            src={`${import.meta.env.BASE_URL}img/9-B.png`} 
            alt="Developer with AI assistance, multiple screens, efficient workflow" 
            className="w-full h-60 object-contain rounded mb-4 opacity-0 animate-scaleIn animation-delay-1000"
          />
          <ul className="text-lg text-emerald-100 space-y-2">
            <li className="opacity-0 animate-staggerFadeIn" style={{ animationDelay: '1200ms' }}><Code className="inline mr-2 text-yellow-400" size={20} />AI finds bugs in minutes</li>
            <li className="opacity-0 animate-staggerFadeIn" style={{ animationDelay: '1300ms' }}><TestTube className="inline mr-2 text-yellow-400" size={20} />Automated test generation</li>
            <li className="opacity-0 animate-staggerFadeIn" style={{ animationDelay: '1400ms' }}><Cpu className="inline mr-2 text-yellow-400" size={20} />Smart code optimization</li>
            <li className="text-emerald-400 font-bold opacity-0 animate-bounceIn" style={{ animationDelay: '1600ms' }}>• Mounted and unstoppable</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SoftwareCavalrySlide;