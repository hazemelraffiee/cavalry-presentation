const FootSoldiersSlide = () => {
  return (
    <div className="h-full flex items-center bg-gradient-to-br from-gray-700 to-gray-900">
      <div className="w-1/2 p-12">
        <div className="w-full h-80 bg-gray-600/50 rounded-lg shadow-2xl flex items-center justify-center text-gray-300">
          <p className="text-lg">Medieval foot soldiers in formation with swords and shields</p>
        </div>
      </div>
      <div className="w-1/2 p-12 text-white">
        <h2 className="text-5xl font-bold mb-8 text-gray-300">For Centuries...</h2>
        <div className="space-y-6 text-2xl text-gray-200">
          <p>Warriors fought on foot</p>
          <p>Strength against strength</p>
          <p>Steel against steel</p>
          <p className="text-amber-300 font-semibold">The battlefield was predictable</p>
        </div>
      </div>
    </div>
  );
};

export default FootSoldiersSlide;