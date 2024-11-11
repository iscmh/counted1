import React, { useState, useEffect } from 'react';
import YouTube from 'react-youtube';
import { X, Loader2 } from 'lucide-react';

export default function TutorialPopup() {
  const [isOpen, setIsOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [hasVisited, setHasVisited] = useState(false);

  useEffect(() => {
    const visited = localStorage.getItem('hasVisitedBefore');
    if (!visited) {
      setIsOpen(true);
      localStorage.setItem('hasVisitedBefore', 'true');
    }
    setHasVisited(!!visited);
  }, []);

  const handleClose = () => {
    setIsOpen(false);
  };

  if (!isOpen || hasVisited) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 animate-fadeIn">
      <div className="bg-white rounded-xl p-6 max-w-2xl w-full mx-4 relative shadow-2xl animate-bounce-subtle">
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 hover:rotate-90 transition-all duration-300"
        >
          <X className="w-6 h-6" />
        </button>

        <div className="space-y-4">
          <h2 className="text-2xl font-semibold text-gray-900">
            Welcome to Counted!
          </h2>
          <p className="text-gray-600">
            Watch this video tutorial to understand how the platform works and maximize your earnings.
          </p>

          <div className="relative aspect-video rounded-lg overflow-hidden bg-gray-100">
            {isLoading && (
              <div className="absolute inset-0 flex items-center justify-center">
                <Loader2 className="w-8 h-8 text-blue-600 animate-spin" />
              </div>
            )}
            <YouTube
              videoId="dQw4w9WgXcQ"
              className="w-full"
              onReady={() => setIsLoading(false)}
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

          <button
            onClick={handleClose}
            className="w-full mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200"
          >
            Got it, thanks!
          </button>
        </div>
      </div>
    </div>
  );
}