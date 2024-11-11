import type { Offer } from '../types';

export const offers: Offer[] = [
  {
    id: 'skore-ai',
    name: 'Skore AI',
    description: 'Skore AI is an advanced AI-powered sports betting tool that gives users predictions.',
    image: 'https://iili.io/2o6MjyP.png',
    originalPrice: 49,
    currentPrice: 49,
    payout: 31.85,
    commission: 65,
    isRecurring: true,
    featured: true,
    niche: 'saas',
    platform: {
      name: 'whop',
      videoGuide: 'dQw4w9WgXcQ'
    },
    guidelines: [
      'Traffic needs to be real. Bot traffic is not allowed',
      'Recommended platforms to advertise on: TikTok, Instagram, Twitter',
      'Check our creative examples below to understand what type of content to post',
      'Join our [Discord server](https://discord.gg/your-server) for FREE guides on editing'
    ],
    creatives: {
      organic: [
        {
          platform: 'Instagram',
          type: 'image',
          url: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=500'
        },
        {
          platform: 'TikTok',
          type: 'video',
          url: 'https://example.com/tiktok-organic.mp4'
        },
        {
          platform: 'Twitter',
          type: 'image',
          url: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=500'
        }
      ],
      paid: [
        {
          platform: 'TikTok',
          type: 'video',
          url: 'https://example.com/tiktok-paid.mp4'
        },
        {
          platform: 'Twitter',
          type: 'image',
          url: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=500'
        }
      ],
    },
  },
  {
    id: 'faceless-twitter',
    name: 'Faceless Twitter',
    description: 'Faceless Twitter is a course + community that teaches users how to build, grow and monetize a faceless theme page business on Twitter, with step-by-step guidance, mentorship, and a guide for $29/month.',
    image: 'https://iili.io/2o6Mh8B.png',
    originalPrice: 29,
    currentPrice: 29,
    payout: 14.50,
    commission: 50,
    isRecurring: true,
    featured: true,
    niche: 'info',
    platform: {
      name: 'whop',
      videoGuide: 'dQw4w9WgXcQ'
    },
    guidelines: [
      'Traffic needs to be real Bot traffic is not allowed',
      'Recommended platforms to advertise on: TikTok, Instagram, Twitter',
      'Check our creative examples below to understand what type of content to post',
      'Join our [Discord server](https://discord.gg/your-server) for FREE guides on editing'
    ],
    creatives: {
      organic: [
        {
          platform: 'Instagram',
          type: 'image',
          url: 'https://images.unsplash.com/photo-1611605698335-8b1569810432?w=500'
        },
        {
          platform: 'TikTok',
          type: 'video',
          url: 'https://example.com/tiktok-organic.mp4'
        },
        {
          platform: 'Twitter',
          type: 'image',
          url: 'https://images.unsplash.com/photo-1611605698335-8b1569810432?w=500'
        }
      ],
      paid: [
        {
          platform: 'TikTok',
          type: 'video',
          url: 'https://example.com/tiktok-paid.mp4'
        },
        {
          platform: 'Twitter',
          type: 'image',
          url: 'https://images.unsplash.com/photo-1611605698335-8b1569810432?w=500'
        }
      ],
    },
  }
];