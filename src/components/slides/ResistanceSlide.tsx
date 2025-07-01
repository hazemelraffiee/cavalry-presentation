const ResistanceSlide = () => {
  return (
    <div className="h-full bg-gradient-to-br from-amber-950 via-stone-900 to-zinc-900 flex flex-col justify-center items-center">
      <div className="w-full max-w-6xl px-12">
        <img 
          src={`${import.meta.env.BASE_URL}img/5.png`} 
          alt="Traditional commanders dismissing cavalry" 
          className="w-full h-64 object-cover rounded-lg shadow-2xl mb-10 opacity-0 animate-rotateIn border-2 border-amber-800/30"
        />
        <h2 className="text-5xl font-bold text-amber-100 mb-8 opacity-0 animate-fadeInUp animation-delay-300 text-center">But The Old Guard Resisted</h2>
        <div className="grid grid-cols-2 gap-8 text-xl text-amber-200/80 max-w-4xl mx-auto">
          <div className="space-y-4">
            <p className="opacity-0 animate-fadeInUp animation-delay-500 bg-stone-800/40 p-3 rounded">"Horses are unpredictable"</p>
            <p className="opacity-0 animate-fadeInUp animation-delay-700 bg-stone-800/40 p-3 rounded">"Too expensive to maintain"</p>
          </div>
          <div className="space-y-4">
            <p className="opacity-0 animate-fadeInUp animation-delay-600 bg-stone-800/40 p-3 rounded">"Our soldiers have always fought on foot"</p>
            <p className="opacity-0 animate-fadeInUp animation-delay-800 bg-stone-800/40 p-3 rounded">"This is somehow cheating"</p>
          </div>
        </div>
        <p className="text-2xl text-orange-400 mt-10 font-semibold opacity-0 animate-bounceIn animation-delay-1000 text-center">They paid the price for their resistance.</p>
      </div>
    </div>
  );
};

export default ResistanceSlide;