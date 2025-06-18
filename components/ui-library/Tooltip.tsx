"use client";

import React, { useState, useRef } from "react";

type TooltipProps = {
  children: React.ReactNode;
  content: string;
  delay?: number; // delay in ms
};

export const Tooltip: React.FC<TooltipProps> = ({
  children,
  content,
  delay = 200,
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const showTimeout = useRef<NodeJS.Timeout | null>(null);
  const hideTimeout = useRef<NodeJS.Timeout | null>(null);

  const handleMouseEnter = () => {
    if (hideTimeout.current) {
      clearTimeout(hideTimeout.current);
      hideTimeout.current = null;
    }
    showTimeout.current = setTimeout(() => {
      setIsVisible(true);
    }, delay);
  };

  const handleMouseLeave = () => {
    if (showTimeout.current) {
      clearTimeout(showTimeout.current);
      showTimeout.current = null;
    }
    hideTimeout.current = setTimeout(() => {
      setIsVisible(false);
    }, delay);
  };

  return (
    <div className="relative inline-block">
      <div
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        className="inline-flex items-center"
      >
        {children}
      </div>

      {isVisible && (
        <div className="absolute z-50 bottom-full left-1/2 -translate-x-1/2 mb-2 flex flex-col items-center" style={{ pointerEvents: "none" }}>
          <div className="px-3 py-1.5 text-xs rounded-sm bg-black text-white shadow-lg font-medium text-center relative w-fit whitespace-nowrap">
            {content}
          </div>
          <span className="w-3 h-3 bg-black rotate-45 absolute -bottom-1 left-1/2 -translate-x-1/2" style={{ borderRadius: 2 }} />
        </div>
      )}
    </div>
  );
};