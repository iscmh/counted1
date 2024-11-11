import React, { useState, useEffect } from 'react';
import { X, ExternalLink, Loader2 } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import YouTube from 'react-youtube';
import { offers } from '../data/offers';

interface EmailModalProps {
  isOpen: boolean;
  onClose: () => void;
  offerId: string;
}

export default function EmailModal({ isOpen, onClose, offerId }: EmailModalProps) {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showGuide, setShowGuide] = useState(true);
  const [isVideoLoading, setIsVideoLoading] = useState(true);
  const navigate = useNavigate();

  const offer = offers.find(o => o.id === offerId);
  
  // Check verification status on mount
  useEffect(() => {
    if (isOpen) {
      const verifiedOffers = JSON.parse(localStorage.getItem('verifiedOffers') || '{}');
      if (verifiedOffers[offerId]) {
        navigate(`/offer/${offerId}`, { replace: true });
        onClose();
      }
    }
  }, [isOpen, offerId, navigate, onClose]);

  if (!isOpen || !offer) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await fetch('https://discord.com/api/webhooks/1301773131962384394/6bo5kQ49xoFyGaucKmsbifnMqau830oF6s22IUBCi5BHfoPSdzqgkeBYO6D-G5QU3fLs', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          content: `New offer signup:\nEmail: ${email}\nOffer ID: ${offerId}\nTimestamp: ${new Date().toISOString()}`,
        }),
      });

      // Store verification status
      const verifiedOffers = JSON.parse(localStorage.getItem('verifiedOffers') || '{}');
      verifiedOffers[offerId] = {
        email,
        timestamp: new Date().toISOString()
      };
      localStorage.setItem('verifiedOffers', JSON.stringify(verifiedOffers));

      // Navigate and close modal
      navigate(`/offer/${offerId}`, { replace: true });
      onClose();
    } catch (error) {
      console.error('Error submitting email:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleExistingAccount = () => {
    setShowGuide(false);
  };

  const handleClose = () => {
    onClose();
    // Navigate back if we're on the offer details page
    if (window.location.pathname.includes('/offer/')) {
      navigate(-1);
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-2xl p-8 max-w-xl w-full mx-4 relative animate-fadeIn shadow-xl">
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors duration-200"
        >
          <X className="w-6 h-6" />
        </button>

        {offer.platform?.name === 'whop' && showGuide ? (
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-gray-900">
              This offer requires a Whop account
            </h3>
            
            <p className="text-gray-600">
              Watch this quick guide on how to set up your Whop account and get started with this offer.
            </p>

            <div className="relative aspect-video rounded-xl overflow-hidden bg-gray-100">
              {isVideoLoading && (
                <div className="absolute inset-0 flex items-center justify-center">
                  <Loader2 className="w-8 h-8 text-blue-600 animate-spin" />
                </div>
              )}
              <YouTube
                videoId={offer.platform.videoGuide}
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

            <button
              onClick={handleExistingAccount}
              className="w-full px-4 py-3 bg-gray-100 text-gray-700 rounded-xl hover:bg-gray-200 transition-colors duration-200 flex items-center justify-center space-x-2"
            >
              <ExternalLink className="w-5 h-5" />
              <span>I already have a Whop account</span>
            </button>
          </div>
        ) : (
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-gray-900">
              Enter your email to continue
            </h3>
            
            <p className="text-gray-600">
              We'll send your affiliate link to your email
            </p>
            
            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="your@email.com"
                className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                required
              />
              
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full px-4 py-3 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition-colors duration-200 disabled:opacity-50 flex items-center justify-center space-x-2"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin" />
                    <span>Processing...</span>
                  </>
                ) : (
                  <span>Continue</span>
                )}
              </button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}