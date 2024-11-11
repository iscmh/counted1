import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import TutorialPopup from './TutorialPopup';
import VideoGuidePopup from './VideoGuidePopup';

export default function Layout({ children }: { children: React.ReactNode }) {
  const location = useLocation();

  return (
    <div className="min-h-screen bg-white">
      <nav className="bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex">
              <Link to="/" className="flex items-center">
                <img
                  src="https://iili.io/2o5awCB.md.png"
                  alt="Counted Logo"
                  className="h-8"
                />
              </Link>
              <div className="ml-10 flex items-center space-x-4">
                <Link
                  to="/offers"
                  className={`px-3 py-2 rounded-md text-sm font-medium ${
                    location.pathname === '/offers' || location.pathname === '/'
                      ? 'text-blue-600'
                      : 'text-gray-500 hover:text-gray-900'
                  }`}
                >
                  Offers
                </Link>
                <Link
                  to="/guides"
                  className={`px-3 py-2 rounded-md text-sm font-medium ${
                    location.pathname.startsWith('/guides')
                      ? 'text-blue-600'
                      : 'text-gray-500 hover:text-gray-900'
                  }`}
                >
                  Guides
                </Link>
              </div>
            </div>
          </div>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {children}
      </main>

      <TutorialPopup />
      <VideoGuidePopup />
    </div>
  );
}