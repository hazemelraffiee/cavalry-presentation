import LazyImage from '../LazyImage';

const HorsesArriveSlide = () => {
  return (
    <div className="h-full bg-gradient-to-br from-orange-900 via-red-900 to-amber-800 flex flex-col justify-center items-center">
      <div className="text-center mb-8">
        <LazyImage 
          src={`${import.meta.env.BASE_URL}img/3.png`} 
          alt="Dramatic cavalry cresting hill with dust clouds and banners"
          className="w-full max-w-5xl h-96 rounded-lg shadow-2xl mx-auto object-cover animate-rotateIn"
        />
      </div>
      <h2 className="text-6xl font-bold text-white mb-6 animate-fadeInUp animation-delay-300">Then Came the Horse</h2>
      <p className="text-3xl text-orange-200 animate-fadeInUp animation-delay-500">Thunder of hooves. Height advantage. Speed and mobility.</p>
      <p className="text-2xl text-amber-300 mt-4 animate-bounceIn animation-delay-700">Everything changed.</p>
    </div>
  );
};

export default HorsesArriveSlide;