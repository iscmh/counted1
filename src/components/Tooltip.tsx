import React, { useState, useRef } from 'react';
import { Info } from 'lucide-react';

interface TooltipProps {
  text: string;
}

export default function Tooltip({ text }: TooltipProps) {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <div className="relative inline-flex items-center">
      <div className="group">
        <Info
          className="w-4 h-4 ml-1 text-gray-400 hover:text-gray-600 cursor-help transition-colors duration-200"
        />
        <div className="pointer-events-none absolute bottom-full left-1/2 -translate-x-1/2 mb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
          <div className="bg-gray-900 text-white text-sm px-3 py-2 rounded-lg shadow-lg w-64">
            {text}
            <div className="absolute w-2 h-2 bg-gray-900 transform rotate-45 left-1/2 -translate-x-1/2 -bottom-1" />
          </div>
        </div>
      </div>
    </div>
  );
}