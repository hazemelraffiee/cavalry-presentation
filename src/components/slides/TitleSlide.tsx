const TitleSlide = () => {
  return (
    <div className="h-full flex flex-col justify-center items-center text-center bg-gradient-to-br from-amber-900 via-yellow-800 to-orange-900">
      <div className="mb-8 p-6 border-2 border-yellow-600 rounded-lg bg-yellow-900/30">
        <div className="w-96 h-60 bg-yellow-800/50 rounded flex items-center justify-center text-yellow-200">
          <p className="text-lg">Epic cavalry charge on ancient battlefield</p>
        </div>
      </div>
      <h1 className="text-7xl font-bold text-yellow-100 mb-4">The Cavalry Charge</h1>
      <h2 className="text-3xl text-amber-200 mb-8">A Story of Revolutionary Advantage</h2>
      <p className="text-xl text-amber-300 max-w-2xl">
        How mounted warriors changed warfare forever... and what that means for you today
      </p>
    </div>
  );
};

export default TitleSlide;