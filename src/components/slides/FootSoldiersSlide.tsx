const FootSoldiersSlide = () => {
  return (
    <div className="h-full flex items-center bg-gradient-to-br from-gray-700 to-gray-900">
      <div className="w-1/2 p-12">
        <img 
          src={`${import.meta.env.BASE_URL}img/2.png`} 
          alt="Medieval foot soldiers in formation with swords and shields"
          className="w-full h-80 rounded-lg shadow-2xl object-cover animate-fadeInDown"
        />
      </div>
      <div className="w-1/2 p-12 text-white">
        <h2 className="text-5xl font-bold mb-8 text-gray-300 animate-fadeInUp">For Centuries...</h2>
        <div className="space-y-6 text-2xl text-gray-200">
          <p className="animate-staggerFadeIn animation-delay-200">Warriors fought on foot</p>
          <p className="animate-staggerFadeIn animation-delay-400">Strength against strength</p>
          <p className="animate-staggerFadeIn animation-delay-600">Steel against steel</p>
          <p className="text-amber-300 font-semibold animate-bounceIn animation-delay-800">The battlefield was predictable</p>
        </div>
      </div>
    </div>
  );
};

export default FootSoldiersSlide;