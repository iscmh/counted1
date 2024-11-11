import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { X, ChevronRight } from 'lucide-react';
import { offers } from '../data/offers';

export default function GuidesPage() {
  const [showOfferSelect, setShowOfferSelect] = useState(true);
  const navigate = useNavigate();

  const handleOfferSelect = (offerId: string) => {
    setShowOfferSelect(false);
    navigate(`/guides/${offerId}`);
  };

  return (
    <div className="animate-fadeIn">
      {showOfferSelect && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-2xl p-8 max-w-2xl w-full mx-4 relative">
            <button
              onClick={() => navigate(-1)}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors duration-200"
            >
              <X className="w-6 h-6" />
            </button>

            <div className="space-y-6">
              <div>
                <h2 className="text-2xl font-semibold text-gray-900">
                  Select an Offer
                </h2>
                <p className="mt-2 text-gray-600">
                  Choose an offer to view its detailed guides and resources
                </p>
              </div>

              <div className="space-y-3">
                {offers.map((offer) => (
                  <button
                    key={offer.id}
                    onClick={() => handleOfferSelect(offer.id)}
                    className="w-full flex items-center justify-between p-4 bg-white border border-gray-200 rounded-xl hover:border-blue-500 hover:shadow-md transition-all duration-200"
                  >
                    <div className="flex items-center space-x-4">
                      <img
                        src={offer.image}
                        alt={offer.name}
                        className="w-12 h-12 rounded-lg object-cover"
                      />
                      <div className="text-left">
                        <h3 className="font-medium text-gray-900">
                          {offer.name}
                        </h3>
                        <p className="text-sm text-gray-500">
                          ${offer.payout} per sale
                        </p>
                      </div>
                    </div>
                    <ChevronRight className="w-5 h-5 text-gray-400" />
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}