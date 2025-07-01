import LazyImage from '../LazyImage';

const TransformationSlide = () => {
  return (
    <div className="h-full bg-gradient-to-br from-slate-900 to-red-900">
      <div className="grid grid-cols-2 h-full">
        <div className="p-8 flex flex-col justify-center bg-gray-800/70">
          <h3 className="text-4xl font-bold text-red-300 mb-6 opacity-0 animate-fadeInDown">Foot Soldiers</h3>
          <LazyImage 
            src={`${import.meta.env.BASE_URL}img/4-A.png`} 
            alt="Exhausted foot soldiers losing battle"
            className="w-full h-64 rounded-lg mb-4 object-contain opacity-0 animate-scaleIn animation-delay-200"
          />
          <ul className="text-lg text-gray-300 space-y-2">
            <li className="opacity-0 animate-staggerFadeIn animation-delay-400">• Limited mobility</li>
            <li className="opacity-0 animate-staggerFadeIn animation-delay-500">• Ground-level perspective</li>
            <li className="opacity-0 animate-staggerFadeIn animation-delay-600">• Predictable tactics</li>
            <li className="opacity-0 animate-staggerFadeIn animation-delay-700">• <span className="text-red-400 font-bold">Overwhelmed</span></li>
          </ul>
        </div>
        <div className="p-8 flex flex-col justify-center bg-amber-800/40">
          <h3 className="text-4xl font-bold text-yellow-300 mb-6 opacity-0 animate-fadeInDown animation-delay-800">Cavalry</h3>
          <LazyImage 
            src={`${import.meta.env.BASE_URL}img/4-B.png`} 
            alt="Triumphant mounted warriors"
            className="w-full h-64 rounded-lg mb-4 object-contain opacity-0 animate-scaleIn animation-delay-1000"
          />
          <ul className="text-lg text-amber-100 space-y-2">
            <li className="opacity-0 animate-staggerFadeIn" style={{ animationDelay: '1200ms' }}>• Rapid positioning</li>
            <li className="opacity-0 animate-staggerFadeIn" style={{ animationDelay: '1300ms' }}>• Superior vantage point</li>
            <li className="opacity-0 animate-staggerFadeIn" style={{ animationDelay: '1400ms' }}>• Unpredictable strikes</li>
            <li className="opacity-0 animate-staggerFadeIn" style={{ animationDelay: '1500ms' }}>• <span className="text-yellow-400 font-bold">Dominant</span></li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default TransformationSlide;