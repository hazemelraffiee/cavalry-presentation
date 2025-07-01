const ResistanceSlide = () => {
  return (
    <div className="h-full bg-gradient-to-br from-purple-900 to-slate-800 flex items-center justify-center">
      <div className="text-center max-w-4xl p-12">
        <img 
          src={`${import.meta.env.BASE_URL}img/5.png`} 
          alt="Traditional commanders dismissing cavalry" 
          className="w-full h-64 object-contain rounded-lg shadow-2xl mb-8 mx-auto opacity-0 animate-rotateIn"
        />
        <h2 className="text-5xl font-bold text-white mb-8 opacity-0 animate-fadeInUp animation-delay-300">But The Old Guard Resisted</h2>
        <div className="grid grid-cols-2 gap-8 text-xl text-purple-200">
          <div className="space-y-4">
            <p className="opacity-0 animate-fadeInUp animation-delay-500">"Horses are unpredictable"</p>
            <p className="opacity-0 animate-fadeInUp animation-delay-700">"Too expensive to maintain"</p>
          </div>
          <div className="space-y-4">
            <p className="opacity-0 animate-fadeInUp animation-delay-600">"Our soldiers have always fought on foot"</p>
            <p className="opacity-0 animate-fadeInUp animation-delay-800">"This is somehow cheating"</p>
          </div>
        </div>
        <p className="text-2xl text-red-300 mt-8 font-semibold opacity-0 animate-bounceIn animation-delay-1000">They paid the price for their resistance.</p>
      </div>
    </div>
  );
};

export default ResistanceSlide;