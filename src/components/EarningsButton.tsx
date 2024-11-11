import React from 'react';
import { TrendingUp } from 'lucide-react';

interface EarningsButtonProps {
  offerId: string;
}

export default function EarningsButton({ offerId }: EarningsButtonProps) {
  const handleClick = () => {
    window.open('https://whop.com/affiliates/customer/my-referrals/', '_blank');
  };

  return (
    <button
      onClick={handleClick}
      className="group flex items-center px-4 py-2 bg-emerald-50 text-emerald-700 rounded-lg hover:bg-emerald-100 transition-all duration-200"
    >
      <TrendingUp className="w-4 h-4 mr-2 group-hover:scale-110 transition-transform duration-200" />
      <span>View Earnings</span>
    </button>
  );
}