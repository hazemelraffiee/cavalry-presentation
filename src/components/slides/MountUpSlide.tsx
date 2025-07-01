const MountUpSlide = () => {
  return (
    <div className="h-full bg-gradient-to-br from-yellow-900 via-orange-900 to-red-900 flex flex-col justify-center items-center text-center">
      <div className="w-full max-w-4xl h-80 bg-orange-800/50 rounded-lg shadow-2xl mb-8 flex items-center justify-center text-orange-200">
        <p>Developer confidently working with AI tools, sunrise lighting</p>
      </div>
      <h2 className="text-7xl font-bold text-white mb-6">Mount Up</h2>
      <p className="text-4xl text-yellow-200 mb-8">Learn AI. Code Faster. Test Smarter.</p>
      <div className="text-2xl text-orange-200 space-y-2">
        <p>Master the tools: Claude, GitHub Copilot, ChatGPT</p>
        <p>Transform your workflow</p>
        <p className="text-yellow-300 font-bold text-3xl mt-6">Become the cavalry</p>
      </div>
    </div>
  );
};

export default MountUpSlide;