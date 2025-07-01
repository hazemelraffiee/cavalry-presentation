import { Code, TestTube, Cpu } from 'lucide-react';

const SoftwareCavalrySlide = () => {
  return (
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
  );
};

export default SoftwareCavalrySlide;