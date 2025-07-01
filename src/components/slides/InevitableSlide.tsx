const InevitableSlide = () => {
  return (
    <div className="h-full bg-gradient-to-b from-sky-800 via-amber-900 to-stone-900 flex flex-col justify-center items-center text-center">
      <div className="w-full max-w-6xl px-8">
        <img 
          src={`${import.meta.env.BASE_URL}img/6.png`} 
          alt="Cavalry becoming the new standard across armies" 
          className="w-full h-80 object-cover rounded-lg shadow-2xl mb-10 opacity-0 animate-scaleIn border-2 border-sky-700/30"
        />
        <h2 className="text-6xl font-bold text-sky-100 mb-6 opacity-0 animate-fadeInDown animation-delay-200 drop-shadow-lg">Within a Generation</h2>
        <div className="bg-gradient-to-r from-transparent via-amber-800/30 to-transparent p-6 rounded-lg max-w-4xl mx-auto">
          <p className="text-3xl text-amber-200 mb-4 opacity-0 animate-fadeInUp animation-delay-400">Every army had cavalry</p>
          <p className="text-2xl text-sky-200 opacity-0 animate-fadeInUp animation-delay-600">The choice wasn't whether to adapt</p>
          <p className="text-3xl text-yellow-400 font-bold mt-4 opacity-0 animate-bounceIn animation-delay-800 drop-shadow-md">It was whether to survive</p>
        </div>
      </div>
    </div>
  );
};

export default InevitableSlide;