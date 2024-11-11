export interface Creative {
  platform: string;
  type: 'image' | 'video';
  url: string;
}

export interface Offer {
  id: string;
  name: string;
  image: string;
  description: string;
  originalPrice: number;
  currentPrice: number;
  payout: number;
  commission: number;
  isRecurring: boolean;
  guidelines: string[];
  featured: boolean;
  niche: 'info' | 'saas';
  creatives: {
    organic: Creative[];
    paid: Creative[];
  };
  platform?: {
    name: 'whop' | 'direct';
    videoGuide?: string;
  };
}

export interface GuideStep {
  title: string;
  content: string;
  tip?: string;
}

export interface Guide {
  title: string;
  description: string;
  steps: GuideStep[];
}

export interface GuideSection {
  title: string;
  icon: React.ElementType;
  guides: Guide[];
}