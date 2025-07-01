const InevitableSlide = () => {
  return (
    <div className="h-full bg-gradient-to-br from-green-900 to-blue-900 flex flex-col justify-center items-center text-center">
      <img 
        src={`${import.meta.env.BASE_URL}img/6.png`} 
        alt="Cavalry becoming the new standard across armies" 
        className="w-full max-w-4xl h-80 object-contain rounded-lg shadow-2xl mb-8 opacity-0 animate-scaleIn"
      />
      <h2 className="text-6xl font-bold text-white mb-6 opacity-0 animate-fadeInDown animation-delay-200">Within a Generation</h2>
      <p className="text-3xl text-green-300 mb-4 opacity-0 animate-fadeInUp animation-delay-400">Every army had cavalry</p>
      <p className="text-2xl text-blue-200 opacity-0 animate-fadeInUp animation-delay-600">The choice wasn't whether to adapt</p>
      <p className="text-3xl text-yellow-300 font-bold mt-4 opacity-0 animate-bounceIn animation-delay-800">It was whether to survive</p>
    </div>
  );
};

export default InevitableSlide;