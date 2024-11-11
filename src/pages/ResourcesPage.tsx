import React from 'react';
import { BookOpen, Gift, Users, MessageCircle } from 'lucide-react';

export default function ResourcesPage() {
  const resources = [
    {
      title: 'Free Guides',
      icon: BookOpen,
      description: 'Access our comprehensive collection of affiliate marketing guides',
      buttonText: 'View Guides',
      url: 'https://discord.gg/your-server',
      preview: 'https://images.unsplash.com/photo-1522542550221-31fd19575a2d?w=500',
    },
    {
      title: 'Mentorship',
      icon: Users,
      description: 'Get personalized guidance from experienced affiliate marketers',
      buttonText: 'Join Mentorship',
      url: 'https://discord.gg/your-server',
      preview: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?w=500',
    },
    {
      title: 'Rewards',
      icon: Gift,
      description: 'Earn exclusive rewards and bonuses for your performance',
      buttonText: 'View Rewards',
      url: 'https://discord.gg/your-server',
      preview: 'https://images.unsplash.com/photo-1513151233558-d860c5398176?w=500',
    },
  ];

  return (
    <div className="space-y-8 animate-fadeIn">
      <h1 className="text-3xl font-bold text-gray-900">Resources</h1>
      
      {/* Community Box */}
      <div className="bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl p-8 text-white">
        <div className="max-w-3xl mx-auto text-center space-y-6">
          <h2 className="text-2xl font-bold">Join Our Affiliate Community</h2>
          <p className="text-blue-100">
            Connect with fellow affiliates, access exclusive resources, and earn rewards
            in our thriving Discord community.
          </p>
          <a
            href="https://discord.gg/your-server"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-6 py-3 bg-white text-blue-600 rounded-lg hover:bg-blue-50 transition-colors duration-200"
          >
            <MessageCircle className="w-5 h-5 mr-2" />
            Join Discord Community
          </a>
        </div>
      </div>
      
      {/* Resources Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {resources.map((resource) => {
          const Icon = resource.icon;
          return (
            <div
              key={resource.title}
              className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-shadow duration-200"
            >
              <img
                src={resource.preview}
                alt={resource.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="p-2 bg-blue-100 rounded-lg">
                    <Icon className="w-6 h-6 text-blue-600" />
                  </div>
                  <h2 className="text-xl font-semibold text-gray-900">
                    {resource.title}
                  </h2>
                </div>

                <p className="text-gray-600 mb-6">{resource.description}</p>

                <a
                  href={resource.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200"
                >
                  {resource.buttonText}
                </a>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}