const YourChoiceSlide = () => {
  return (
    <div className="h-full bg-gradient-to-br from-orange-900 to-red-900 flex flex-col justify-center items-center text-center">
      <div className="w-full max-w-4xl h-96 bg-red-800/50 rounded-lg shadow-2xl mb-8 flex items-center justify-center text-red-200">
        <p>Split path: traditional coding vs AI-enhanced development</p>
      </div>
      <h2 className="text-6xl font-bold text-white mb-8">Your Competitors</h2>
      <h2 className="text-5xl font-bold text-orange-300 mb-6">Are Already Training</h2>
      <div className="text-3xl text-red-200">
        <p>Will you be cavalry or infantry?</p>
      </div>
    </div>
  );
};

export default YourChoiceSlide;