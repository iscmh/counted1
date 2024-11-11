import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import OfferCard from '../components/OfferCard';
import { offers } from '../data/offers';
import Tooltip from '../components/Tooltip';

type OfferView = 'featured' | 'all';
type NicheFilter = 'all' | 'info' | 'saas';

export default function OffersPage() {
  const [offerView, setOfferView] = useState<OfferView>('featured');
  const [nicheFilter, setNicheFilter] = useState<NicheFilter>('all');

  const filteredOffers = offers.filter(offer => {
    if (offerView === 'featured') {
      return offer.featured;
    }
    if (nicheFilter !== 'all') {
      return offer.niche === nicheFilter;
    }
    return true;
  });

  return (
    <div className="animate-fadeIn">
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-2xl font-bold text-gray-900">Offers</h1>
        
        <div className="flex items-center space-x-4">
          {/* Featured/All Toggle */}
          <div className="flex rounded-lg border border-gray-200 p-1">
            <button
              onClick={() => setOfferView('featured')}
              className={`px-4 py-2 text-sm font-medium rounded-md transition-colors duration-200 ${
                offerView === 'featured'
                  ? 'bg-blue-600 text-white'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              Featured
            </button>
            <button
              onClick={() => setOfferView('all')}
              className={`px-4 py-2 text-sm font-medium rounded-md transition-colors duration-200 ${
                offerView === 'all'
                  ? 'bg-blue-600 text-white'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              All Offers
            </button>
          </div>

          {/* Niche Filter Dropdown */}
          {offerView === 'all' && (
            <div className="relative">
              <select
                value={nicheFilter}
                onChange={(e) => setNicheFilter(e.target.value as NicheFilter)}
                className="appearance-none bg-white border border-gray-200 rounded-lg px-4 py-2 pr-8 text-sm font-medium text-gray-600 hover:border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option value="all">All Niches</option>
                <option value="info">Info Products</option>
                <option value="saas">SaaS</option>
              </select>
              <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
            </div>
          )}
        </div>
      </div>

      <div className="overflow-visible">
        {/* Header Row */}
        <div className="hidden md:grid grid-cols-12 gap-4 py-3 border-b border-gray-200 text-sm font-medium text-gray-500">
          <div className="col-span-4 flex items-center">
            Offer Name
            <Tooltip text="The name of the product or service you'll be promoting to your audience" />
          </div>
          <div className="col-span-2 text-center flex items-center justify-center">
            Price
            <Tooltip text="The price your referrals will pay for the product" />
          </div>
          <div className="col-span-3 flex items-center">
            Payout
            <Tooltip text="The commission you'll earn for each successful referral" />
          </div>
          <div className="col-span-2 flex items-center">
            Type
            <Tooltip text="One-time payment or recurring commission structure" />
          </div>
          <div className="col-span-1"></div>
        </div>

        {/* Offers List */}
        <div className="divide-y divide-gray-100">
          {filteredOffers.map((offer) => (
            <OfferCard key={offer.id} offer={offer} />
          ))}
        </div>

        {/* Empty State */}
        {filteredOffers.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500">No offers found matching your criteria.</p>
          </div>
        )}
      </div>
    </div>
  );
}