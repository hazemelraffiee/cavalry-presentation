import LazyImage from '../LazyImage';

const MountUpSlide = () => {
  return (
    <div className="h-full bg-gradient-to-br from-red-900 via-orange-900 to-amber-900 flex relative overflow-hidden">
      {/* Background image with overlay from v1 */}
      <div className="absolute inset-0 flex items-center justify-center">
        <LazyImage 
          src={`${import.meta.env.BASE_URL}img/11.png`} 
          alt="AI cavalry charge - developers wielding AI tools" 
          className="w-full h-full object-cover opacity-30"
        />
      </div>
      
      {/* Split screen layout from v2 */}
      <div className="relative z-10 w-full flex">
        {/* Left side - Empty space for visual balance with background */}
        <div className="w-1/2"></div>
        
        {/* Right side - Content with v2 typography */}
        <div className="w-1/2 flex flex-col justify-center items-start p-12 text-left">
          <h1 className="text-7xl font-black text-white mb-4 opacity-0 animate-fadeInUp animation-delay-300 drop-shadow-2xl">
            The Future is
          </h1>
          <h1 className="text-8xl font-black text-yellow-400 mb-8 opacity-0 animate-fadeInUp animation-delay-400 drop-shadow-2xl">
            NOW
          </h1>
          
          <div className="bg-black/50 backdrop-blur-sm rounded-xl p-6 mb-8 opacity-0 animate-fadeInUp animation-delay-600">
            <p className="text-3xl text-amber-200 font-semibold mb-4">
              Your competitors are already using AI
            </p>
            
            <div className="space-y-2 border-l-4 border-yellow-400 pl-6">
              <p className="text-2xl text-white">1. Master Claude</p>
              <p className="text-2xl text-white">2. Deploy Copilot</p>
              <p className="text-2xl text-white">3. Integrate ChatGPT</p>
            </div>
          </div>
          
          <button className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black text-4xl font-bold px-12 py-6 rounded-full opacity-0 animate-bounceIn animation-delay-800 hover:scale-105 transition-transform shadow-xl">
            Mount Up Today
          </button>
          
          <p className="text-2xl text-red-200 font-semibold mt-6 opacity-0 animate-fadeIn animation-delay-1000">
            Don't get left behind. <span className="text-yellow-300">Become the cavalry.</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default MountUpSlide;