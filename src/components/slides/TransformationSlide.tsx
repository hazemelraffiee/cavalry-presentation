const TransformationSlide = () => {
  return (
    <div className="h-full bg-gradient-to-br from-slate-900 to-red-900">
      <div className="grid grid-cols-2 h-full">
        <div className="p-8 flex flex-col justify-center bg-gray-800/70">
          <h3 className="text-4xl font-bold text-red-300 mb-6">Foot Soldiers</h3>
          <div className="w-full h-72 bg-gray-700/50 rounded mb-6 flex items-center justify-center text-gray-400">
            <p>Exhausted foot soldiers losing battle</p>
          </div>
          <ul className="text-xl text-gray-300 space-y-3">
            <li>• Limited mobility</li>
            <li>• Ground-level perspective</li>
            <li>• Predictable tactics</li>
            <li>• <span className="text-red-400 font-bold">Overwhelmed</span></li>
          </ul>
        </div>
        <div className="p-8 flex flex-col justify-center bg-amber-800/40">
          <h3 className="text-4xl font-bold text-yellow-300 mb-6">Cavalry</h3>
          <div className="w-full h-72 bg-amber-700/50 rounded mb-6 flex items-center justify-center text-amber-200">
            <p>Triumphant mounted warriors</p>
          </div>
          <ul className="text-xl text-amber-100 space-y-3">
            <li>• Rapid positioning</li>
            <li>• Superior vantage point</li>
            <li>• Unpredictable strikes</li>
            <li>• <span className="text-yellow-400 font-bold">Dominant</span></li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default TransformationSlide;