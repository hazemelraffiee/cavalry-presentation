import LazyImage from '../LazyImage';

const InevitableSlide = () => {
  return (
    <div className="h-full bg-gradient-to-br from-stone-700 via-amber-800/70 to-emerald-900/60 flex flex-col justify-center items-center text-center">
      <div className="w-full px-6">
        <LazyImage 
          src={`${import.meta.env.BASE_URL}img/6.png`} 
          alt="Cavalry becoming the new standard across armies" 
          className="w-full max-w-7xl h-[420px] object-cover rounded-lg shadow-2xl mb-6 opacity-0 animate-scaleIn mx-auto"
        />
        <h2 className="text-5xl font-bold text-stone-100 mb-4 opacity-0 animate-fadeInDown animation-delay-200">Within a Generation</h2>
        <div className="max-w-4xl mx-auto">
          <p className="text-3xl text-amber-100 mb-3 opacity-0 animate-fadeInUp animation-delay-400">Every army had cavalry</p>
          <p className="text-2xl text-stone-200 opacity-0 animate-fadeInUp animation-delay-600">The choice wasn't whether to adapt</p>
          <p className="text-3xl text-yellow-300 font-bold mt-4 opacity-0 animate-bounceIn animation-delay-800">It was whether to survive</p>
        </div>
      </div>
    </div>
  );
};

export default InevitableSlide;