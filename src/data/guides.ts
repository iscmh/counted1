import { BookOpen, Users, Sparkles, TrendingUp, Target, BarChart3 } from 'lucide-react';
import type { GuideSection } from '../types';

export const guidesByOffer: Record<string, GuideSection[]> = {
  'skore-ai': [
    {
      title: 'Account Setup',
      icon: BookOpen,
      guides: [
        {
          title: 'Profile Setup',
          description: 'In this guide, I\'ll show you how to setup your instagram profile.',
          steps: [
            {
              title: 'Account Creation',
              content: 'Download Instagram, open it and create an account. Or, if you have an extra $1-$3, you can go on accsmarket.com and buy an aged account, those get way more reach.'
            },
            {
              title: 'Username',
              content: 'The username should be something like: skoreai123, skore.ai, etc. If you already have an account and don\'t want to change the username, keep it as you want.'
            },
            {
              title: 'Profile Picture',
              content: 'Now, we\'re going to set a profile picture for the instagram account.\n\nGo to the Counted dashboard, go to the offers tab, click on the Skore AI offer, connect your Whop account if you haven\'t already, go to the resources section and download the logo.'
            },
            {
              title: 'Bio',
              content: 'The bio would be something like: "Get our sports betting AI bot 👇"\nBe creative, make it stand out.'
            },
            {
              title: 'Link',
              content: 'To get your affiliate link, go to the offers tab on the dashboard, click on the Skore AI offer, connect your Whop account, and you\'ll receive the affiliate link in your email.\n\nNow, before adding your link, you can do a few things with it:\n\n1. Buy a custom domain and redirect to the affiliate link - https://www.namecheap.com/support/knowledgebase/article.aspx/385/2237/how-to-set-up-a-url-redirect-for-a-domain/\n2. Use bit.ly to make the URL shorter - https://bitly.com/blog/how-to-shorten-a-url/\n\nThe first option will cost you $5-$10.\n\nAfter you\'ve done any of those, add the link to your account.'
            },
            {
              title: 'Warm Up',
              content: 'This is the most important step of all, if you don\'t do this, your videos might not get reach.\n\nHere\'s how you can do it:\n1. Search up sports betting reels\n2. Interact with the reels for 10-20 minutes (comment, follow, like, share etc.)\n3. Go back to your FYP and refresh the page, now you should only be seeing those "sports" reels.\n4. Scroll on the FYP and interact with them for another 10-20 minutes.'
            },
            {
              title: 'How to edit videos',
              content: 'If you want to know how to do that, click on the Skore AI offer, and scroll down to the Editing Tutorial + Examples section.'
            }
          ]
        },
        {
          title: 'Setting Up Your Social Media',
          description: 'Create and optimize your social media profiles',
          steps: [
            {
              title: 'Choose Your Platform',
              content: 'Focus on platforms where sports betting content performs well: Twitter, Instagram, or TikTok.',
              tip: 'Twitter is particularly effective for real-time sports updates and predictions.'
            },
            {
              title: 'Profile Optimization',
              content: 'Create a professional profile that establishes your credibility in sports predictions.',
              tip: 'Use a clear profile picture and write a bio that highlights your expertise.'
            },
            {
              title: 'Content Planning',
              content: 'Plan your content mix between predictions, analysis, and promotional content.',
              tip: 'Maintain an 80/20 ratio between valuable content and promotional posts.'
            }
          ]
        }
      ]
    },
    {
      title: 'Content Strategy',
      icon: Sparkles,
      guides: [
        {
          title: 'Creating Engaging Content',
          description: 'Learn how to create content that converts',
          steps: [
            {
              title: 'Content Types',
              content: 'Mix between prediction highlights, success stories, and educational content.',
              tip: 'Use screenshots of successful predictions to build credibility.'
            },
            {
              title: 'Posting Schedule',
              content: 'Post predictions before major games and share results afterward.',
              tip: 'Consistency is key - maintain a regular posting schedule.'
            }
          ]
        }
      ]
    }
  ],
  'faceless-twitter': [
    {
      title: 'Account Setup',
      icon: BookOpen,
      guides: [
        {
          title: 'Profile Setup',
          description: 'In this guide, I\'ll show you how to setup your instagram profile.',
          steps: [
            {
              title: 'Account Creation',
              content: 'Download Instagram, open it and create an account. Or, if you have an extra $1-$3, you can go on accsmarket.com and buy an aged account, those get way more reach.'
            },
            {
              title: 'Username',
              content: 'The username should be something like: twittergoat123, twitterprinter, etc. If you already have an account and don\'t want to change the username, keep it as you want.'
            },
            {
              title: 'Profile Picture',
              content: 'Now, we\'re going to set a profile picture for the instagram account.\n\nGo to the Counted dashboard, go to the offers tab, click on the Faceless Twitter, connect your Whop account if you haven\'t already, go to the resources section and download the logo.'
            },
            {
              title: 'Bio',
              content: 'The bio would be something like: "Learn how to start a twitter themepage & make money 👇"\nBe creative, make it stand out.'
            },
            {
              title: 'Link',
              content: 'To get your affiliate link, go to the offers tab on the dashboard, click on the Faceless Twitter offer,connect your Whop account, and you\'ll receive the affiliate link in your email.\n\nNow, before adding your link, you can do a few things with it:\n\n1. Buy a custom domain and redirect to the affiliate link - https://www.namecheap.com/support/knowledgebase/article.aspx/385/2237/how-to-set-up-a-url-redirect-for-a-domain/\n2. Use bit.ly to make the URL shorter - https://bitly.com/blog/how-to-shorten-a-url/\n\nThe first option will cost you $5-$10.\n\nAfter you\'ve done any of those, add the link to your account.'
            },
            {
              title: 'Warm Up',
              content: 'This is the most important step of all, if you don\'t do this, your videos might not get reach.\n\nHere\'s how you can do it:\n1. Search up making money reels\n2. Interact with the reels for 10-20 minutes (comment, follow, like, share etc.)\n3. Go back to your FYP and refresh the page, now you should only be seeing those "how to make money" reels.\n4. Scroll on the FYP and interact with them for another 10-20 minutes.'
            },
            {
              title: 'How to edit videos',
              content: 'If you want to know how to do that, click on the Faceless Twitter offer, and scroll down to the Editing Tutorial + Examples section.'
            }
          ]
        }
      ]
    }
  ]
};