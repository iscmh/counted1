import React, { useState, useEffect } from 'react';
import { RefreshCw, Timer, Sparkles } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import type { Offer } from '../types';
import EmailModal from './EmailModal';

interface OfferCardProps {
  offer: Offer;
}

export default function OfferCard({ offer }: OfferCardProps) {
  const [showEmailModal, setShowEmailModal] = useState(false);
  const navigate = useNavigate();

  const handleViewOffer = () => {
    const verifiedOffers = JSON.parse(localStorage.getItem('verifiedOffers') || '{}');
    if (verifiedOffers[offer.id]) {
      navigate(`/offer/${offer.id}`);
    } else {
      setShowEmailModal(true);
    }
  };

  return (
    <div className="group grid grid-cols-12 gap-4 items-center py-4 hover:bg-gray-50 transition-colors duration-200">
      {/* Offer Name with Image */}
      <div className="col-span-4 flex items-center space-x-4">
        <img
          src={offer.image}
          alt={offer.name}
          className="w-12 h-12 object-cover rounded"
        />
        <span className="font-medium text-gray-900 truncate">{offer.name}</span>
      </div>

      {/* Price */}
      <div className="col-span-2 text-center">
        <span className="text-sm font-medium text-blue-600">
          ${offer.currentPrice}
        </span>
      </div>

      {/* Payout */}
      <div className="col-span-3">
        <span className="text-sm text-gray-600">
          ${offer.payout} Payout ({offer.commission}% Commission)
        </span>
      </div>

      {/* Type */}
      <div className="col-span-2">
        {offer.isRecurring ? (
          <div className="flex items-center text-green-600">
            <RefreshCw className="w-4 h-4 mr-1" />
            <span className="text-sm">Recurring</span>
          </div>
        ) : (
          <div className="flex items-center text-gray-600">
            <Timer className="w-4 h-4 mr-1" />
            <span className="text-sm">One Time</span>
          </div>
        )}
      </div>

      {/* View Button */}
      <div className="col-span-1 flex justify-end">
        <button
          onClick={handleViewOffer}
          className="inline-flex items-center px-4 py-2 text-sm bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors duration-200"
        >
          <Sparkles className="w-4 h-4 mr-1" />
          View
        </button>
      </div>

      <EmailModal
        isOpen={showEmailModal}
        onClose={() => setShowEmailModal(false)}
        offerId={offer.id}
      />
    </div>
  );
}