import LazyImage from '../LazyImage';

const MountUpSlide = () => {
  return (
    <div className="h-full bg-gradient-to-br from-yellow-900 via-orange-900 to-red-900 flex flex-col justify-center items-center text-center">
      <LazyImage 
        src={`${import.meta.env.BASE_URL}img/11.png`} 
        alt="Developer confidently working with AI tools, sunrise lighting" 
        className="w-full max-w-4xl h-80 object-contain rounded-lg shadow-2xl mb-8 opacity-0 animate-scaleIn"
      />
      <h2 className="text-7xl font-bold text-white mb-6 opacity-0 animate-bounceIn animation-delay-300">Mount Up</h2>
      <p className="text-4xl text-yellow-200 mb-8 opacity-0 animate-fadeInUp animation-delay-500">Learn AI. Code Faster. Test Smarter.</p>
      <div className="text-2xl text-orange-200 space-y-2">
        <p className="opacity-0 animate-fadeInUp animation-delay-700">Master the tools: Claude, GitHub Copilot, ChatGPT</p>
        <p className="opacity-0 animate-fadeInUp animation-delay-900">Transform your workflow</p>
        <p className="text-yellow-300 font-bold text-3xl mt-6 opacity-0 animate-bounceIn" style={{ animationDelay: '1200ms' }}>Become the cavalry</p>
      </div>
    </div>
  );
};

export default MountUpSlide;