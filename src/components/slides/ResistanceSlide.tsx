const ResistanceSlide = () => {
  return (
    <div className="h-full bg-gradient-to-br from-purple-900 to-slate-800 flex items-center justify-center">
      <div className="text-center max-w-4xl p-12">
        <div className="w-full h-64 bg-purple-800/50 rounded-lg shadow-2xl mb-8 mx-auto flex items-center justify-center text-purple-200">
          <p>Traditional commanders dismissing cavalry</p>
        </div>
        <h2 className="text-5xl font-bold text-white mb-8">But The Old Guard Resisted</h2>
        <div className="grid grid-cols-2 gap-8 text-xl text-purple-200">
          <div className="space-y-4">
            <p>"Horses are unpredictable"</p>
            <p>"Too expensive to maintain"</p>
          </div>
          <div className="space-y-4">
            <p>"Our soldiers have always fought on foot"</p>
            <p>"This is somehow cheating"</p>
          </div>
        </div>
        <p className="text-2xl text-red-300 mt-8 font-semibold">They paid the price for their resistance.</p>
      </div>
    </div>
  );
};

export default ResistanceSlide;