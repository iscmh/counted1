import React from 'react';
import { Trophy, Gift, Star, Award, Crown, Gem, Lock } from 'lucide-react';

interface Milestone {
  icon: React.ElementType;
  title: string;
  description: string;
  requirement: string;
  reward: string;
  achieved: boolean;
}

export default function MilestonesPage() {
  const milestones: Milestone[] = [
    {
      icon: Trophy,
      title: 'First Sale',
      description: 'Complete your first successful sale',
      requirement: '1 sale',
      reward: '$10 bonus',
      achieved: true,
    },
    {
      icon: Gift,
      title: 'Rising Star',
      description: 'Achieve 5 sales in a single month',
      requirement: '5 sales',
      reward: '$50 bonus',
      achieved: false,
    },
    {
      icon: Star,
      title: 'Top Performer',
      description: 'Generate $1,000 in total revenue',
      requirement: '$1,000 revenue',
      reward: '$100 bonus + Priority Support',
      achieved: false,
    },
    {
      icon: Award,
      title: 'Elite Affiliate',
      description: 'Maintain 10+ active subscriptions',
      requirement: '10 active subs',
      reward: '5% increased commission',
      achieved: false,
    },
    {
      icon: Crown,
      title: 'Diamond Status',
      description: 'Generate $10,000 in total revenue',
      requirement: '$10,000 revenue',
      reward: '10% increased commission',
      achieved: false,
    },
    {
      icon: Gem,
      title: 'Legend',
      description: 'Generate $100,000 in total revenue',
      requirement: '$100,000 revenue',
      reward: 'Custom rewards + VIP status',
      achieved: false,
    },
  ];

  return (
    <div className="space-y-8 animate-fadeIn">
      <div className="text-center max-w-2xl mx-auto mb-12">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">Milestones</h1>
        <p className="text-gray-600">
          Complete milestones to earn rewards and unlock exclusive benefits. Your journey to becoming a top affiliate starts here.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {milestones.map((milestone, index) => {
          const Icon = milestone.icon;
          return (
            <div
              key={index}
              className={`relative overflow-hidden rounded-xl border ${
                milestone.achieved
                  ? 'border-blue-200 bg-blue-50'
                  : 'border-gray-200 bg-white'
              } p-6 transition-all duration-300 hover:shadow-lg`}
            >
              <div className="flex items-start justify-between mb-4">
                <div className={`p-3 rounded-lg ${
                  milestone.achieved ? 'bg-blue-100 text-blue-600' : 'bg-gray-100 text-gray-600'
                }`}>
                  <Icon className="w-6 h-6" />
                </div>
                {!milestone.achieved && (
                  <Lock className="w-5 h-5 text-gray-400" />
                )}
              </div>

              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                {milestone.title}
              </h3>
              <p className="text-gray-600 text-sm mb-4">
                {milestone.description}
              </p>

              <div className="space-y-3">
                <div className="flex items-center text-sm">
                  <span className="text-gray-500">Required:</span>
                  <span className="ml-2 font-medium text-gray-900">
                    {milestone.requirement}
                  </span>
                </div>
                <div className="flex items-center text-sm">
                  <span className="text-gray-500">Reward:</span>
                  <span className="ml-2 font-medium text-emerald-600">
                    {milestone.reward}
                  </span>
                </div>
              </div>

              <button
                className={`mt-6 w-full py-2 px-4 rounded-lg text-sm font-medium transition-all duration-200 ${
                  milestone.achieved
                    ? 'bg-blue-600 text-white hover:bg-blue-700'
                    : 'bg-gray-100 text-gray-400 cursor-not-allowed'
                }`}
                disabled={!milestone.achieved}
              >
                {milestone.achieved ? 'Claim Reward' : 'Locked'}
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}