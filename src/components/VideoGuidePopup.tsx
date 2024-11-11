import React, { useState, useEffect } from 'react';
import { X, Loader2 } from 'lucide-react';
import YouTube from 'react-youtube';

export default function VideoGuidePopup() {
  const [isVisible, setIsVisible] = useState(false);
  const [isVideoLoading, setIsVideoLoading] = useState(true);
  const [hasClosedManually, setHasClosedManually] = useState(false);

  useEffect(() => {
    const hasSeenGuide = localStorage.getItem('hasSeenVideoGuide');
    if (!hasSeenGuide && !hasClosedManually) {
      // Delay the appearance for a smoother experience
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, [hasClosedManually]);

  const handleClose = () => {
    setIsVisible(false);
    setHasClosedManually(true);
    localStorage.setItem('hasSeenVideoGuide', 'true');
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50 animate-slideIn">
      <div className="bg-white rounded-2xl shadow-2xl w-80 overflow-hidden">
        <div className="p-4 bg-gradient-to-r from-blue-600 to-blue-700">
          <div className="flex items-center justify-between">
            <h3 className="text-white font-medium">Platform Guide</h3>
            <button
              onClick={handleClose}
              className="text-white/80 hover:text-white transition-colors duration-200"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        <div className="relative aspect-video bg-gray-100">
          {isVideoLoading && (
            <div className="absolute inset-0 flex items-center justify-center">
              <Loader2 className="w-6 h-6 text-blue-600 animate-spin" />
            </div>
          )}
          <YouTube
            videoId="dQw4w9WgXcQ"
            className="w-full"
            onReady={() => setIsVideoLoading(false)}
            opts={{
              width: '100%',
              height: '100%',
              playerVars: {
                autoplay: 0,
                modestbranding: 1,
                rel: 0,
              },
            }}
          />
        </div>

        <div className="p-4 bg-gray-50">
          <p className="text-sm text-gray-600">
            Watch this quick video to understand how our platform works and maximize your earnings.
          </p>
        </div>
      </div>
    </div>
  );
}