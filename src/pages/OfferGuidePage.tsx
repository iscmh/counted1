import React from 'react';
import { useParams, Navigate } from 'react-router-dom';
import { AlertCircle, CheckCircle2 } from 'lucide-react';
import { offers } from '../data/offers';
import { guidesByOffer } from '../data/guides';

export default function OfferGuidePage() {
  const { offerId } = useParams();
  const offer = offers.find(o => o.id === offerId);
  const guides = offerId ? guidesByOffer[offerId] : null;

  if (!offer || !guides) {
    return <Navigate to="/guides" replace />;
  }

  return (
    <div className="space-y-8 animate-fadeIn">
      <div>
        <h1 className="text-3xl font-bold text-gray-900">{offer.name} Guides</h1>
        <p className="mt-2 text-lg text-gray-600">
          Step-by-step guides to help you succeed with {offer.name}
        </p>
      </div>

      {guides.map((section, index) => {
        const Icon = section.icon;
        return (
          <section key={index} className="space-y-6">
            <div className="flex items-center space-x-2">
              <Icon className="w-6 h-6 text-blue-600" />
              <h2 className="text-xl font-semibold text-gray-900">
                {section.title}
              </h2>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {section.guides.map((guide, guideIndex) => (
                <div
                  key={guideIndex}
                  className="bg-white rounded-xl border border-gray-200 overflow-hidden hover:shadow-lg transition-shadow duration-200"
                >
                  <div className="p-6 space-y-6">
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900">
                        {guide.title}
                      </h3>
                      <p className="mt-1 text-sm text-gray-600">
                        {guide.description}
                      </p>
                    </div>

                    <div className="space-y-4">
                      {guide.steps.map((step, stepIndex) => (
                        <div key={stepIndex} className="space-y-2">
                          <div className="flex items-center space-x-2">
                            <CheckCircle2 className="w-5 h-5 text-blue-600 flex-shrink-0" />
                            <h4 className="font-medium text-gray-900">
                              {step.title}
                            </h4>
                          </div>
                          <p className="text-sm text-gray-600 ml-7">
                            {step.content}
                          </p>
                          {step.tip && (
                            <div className="ml-7 mt-2 flex items-start space-x-2 bg-blue-50 p-3 rounded-lg">
                              <AlertCircle className="w-4 h-4 text-blue-600 flex-shrink-0 mt-0.5" />
                              <p className="text-sm text-blue-700">
                                Pro Tip: {step.tip}
                              </p>
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        );
      })}
    </div>
  );
}