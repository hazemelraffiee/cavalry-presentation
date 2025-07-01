import LazyImage from '../LazyImage';

const YourChoiceSlide = () => {
  return (
    <div className="h-full bg-gradient-to-br from-orange-900 to-red-900 flex flex-col justify-center items-center text-center">
      <LazyImage 
        src={`${import.meta.env.BASE_URL}img/10.png`} 
        alt="Split path: traditional coding vs AI-enhanced development" 
        className="w-full max-w-4xl h-96 object-contain rounded-lg shadow-2xl mb-8 opacity-0 animate-rotateIn"
      />
      <h2 className="text-6xl font-bold text-white mb-8 opacity-0 animate-fadeInUp animation-delay-300">Your Competitors</h2>
      <h2 className="text-5xl font-bold text-orange-300 mb-6 opacity-0 animate-fadeInUp animation-delay-500">Are Already Training</h2>
      <div className="text-3xl text-red-200 opacity-0 animate-bounceIn animation-delay-800">
        <p>Will you be cavalry or infantry?</p>
      </div>
    </div>
  );
};

export default YourChoiceSlide;