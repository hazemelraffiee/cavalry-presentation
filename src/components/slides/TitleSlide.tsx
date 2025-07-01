import LazyImage from '../LazyImage';

const TitleSlide = () => {
  return (
    <div className="h-full flex flex-col justify-center items-center text-center bg-gradient-to-br from-amber-900 via-yellow-800 to-orange-900">
      <div className="mb-8 p-6 border-2 border-yellow-600 rounded-lg bg-yellow-900/30 animate-scaleIn">
        <LazyImage 
          src={`${import.meta.env.BASE_URL}img/1.png`} 
          alt="Epic cavalry charge on ancient battlefield"
          className="w-96 h-60 rounded object-cover"
        />
      </div>
      <h1 className="text-7xl font-bold text-yellow-100 mb-4 animate-fadeInUp animation-delay-200">The Cavalry Charge</h1>
      <h2 className="text-3xl text-amber-200 mb-8 animate-fadeInUp animation-delay-400">A Story of Revolutionary Advantage</h2>
      <p className="text-xl text-amber-300 max-w-2xl animate-fadeInUp animation-delay-600">
        How mounted warriors changed warfare forever... and what that means for you today
      </p>
    </div>
  );
};

export default TitleSlide;