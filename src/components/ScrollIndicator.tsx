import React from "react";

const ScrollIndicator: React.FC = () => {
  return (
    <div className="flex flex-col items-center gap-3">
      {/* Mouse Shape */}
      <div className="w-7 h-11 border-2 border-purple-500 rounded-full flex justify-center pt-2">
        {/* Static wheel dot */}
        <div className="w-2 h-2 bg-purple-500 rounded-full opacity-80" />
      </div>

      {/* Animated Dots Below */}
      <div className="flex flex-col items-center gap-2 ">
        <span className="dot animate-dot" />
        <span className="dot animate-dot delay-200" />
        <span className="dot animate-dot delay-400" />
      </div>
    </div>
  );
};

export default ScrollIndicator;