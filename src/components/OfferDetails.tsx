import React, { useState } from 'react';
import { DollarSign, Play, Download, Image as ImageIcon } from 'lucide-react';
import type { Offer } from '../types';

interface OfferDetailsProps {
  offer: Offer;
}

export default function OfferDetails({ offer }: OfferDetailsProps) {
  const [creativeType, setCreativeType] = useState<'organic' | 'paid'>('organic');

  return (
    <div className="space-y-8 animate-fadeIn">
      <h1 className="text-3xl font-bold text-gray-900">{offer.name}</h1>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold text-gray-900">Offer Guidelines</h2>
        <ul className="list-disc list-inside space-y-2 text-gray-600">
          {offer.guidelines.map((guideline, index) => (
            <li key={index}>{guideline}</li>
          ))}
        </ul>
      </section>

      <section className="bg-blue-50 rounded-lg p-6">
        <div className="flex items-center justify-center space-x-2">
          <DollarSign className="w-6 h-6 text-blue-600" />
          <span className="text-xl font-semibold text-blue-600">
            ${offer.payout} Payout ({offer.commission}% Commission)
          </span>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold text-gray-900">Preview</h2>
        <button className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200 flex items-center space-x-2">
          <Play className="w-5 h-5" />
          <span>Preview Offer</span>
        </button>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold text-gray-900">Creatives</h2>
        
        <div className="flex space-x-4 mb-6">
          <button
            onClick={() => setCreativeType('organic')}
            className={`px-4 py-2 rounded-lg ${
              creativeType === 'organic'
                ? 'bg-blue-600 text-white'
                : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
            }`}
          >
            Organic
          </button>
          <button
            onClick={() => setCreativeType('paid')}
            className={`px-4 py-2 rounded-lg ${
              creativeType === 'paid'
                ? 'bg-blue-600 text-white'
                : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
            }`}
          >
            Paid Ads
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {offer.creatives[creativeType].map((creative, index) => (
            <div
              key={index}
              className="bg-white rounded-lg border border-gray-200 p-4 space-y-4"
            >
              <div className="flex items-center space-x-2">
                {creative.type === 'video' ? (
                  <Play className="w-5 h-5 text-gray-600" />
                ) : (
                  <ImageIcon className="w-5 h-5 text-gray-600" />
                )}
                <span className="font-medium text-gray-900">
                  {creative.platform}
                </span>
              </div>

              <button
                onClick={() => window.open(creative.url, '_blank')}
                className="w-full px-4 py-2 bg-gray-100 text-gray-600 rounded-lg hover:bg-gray-200 transition-colors duration-200 flex items-center justify-center space-x-2"
              >
                <Download className="w-4 h-4" />
                <span>Download {creative.type}</span>
              </button>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}