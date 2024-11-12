import React from 'react';
import { Lightbulb } from 'lucide-react';

interface Recommendation {
  title: string;
  description: string;
  type: 'productivity' | 'wellbeing' | 'focus';
}

export function Recommendations() {
  const recommendations: Recommendation[] = [
    {
      title: 'Schedule Social Media Blocks',
      description: 'Block social media during your peak productivity hours (10 AM - 2 PM)',
      type: 'productivity'
    },
    {
      title: 'Take Regular Breaks',
      description: 'Your focus sessions are getting longer. Remember to take short breaks.',
      type: 'wellbeing'
    },
    {
      title: 'Adjust Time Limits',
      description: 'Consider reducing YouTube limit by 30 minutes based on your usage patterns',
      type: 'focus'
    }
  ];

  return (
    <div className="bg-white rounded-xl p-4 shadow-sm mb-6">
      <div className="flex items-center gap-2 mb-4">
        <Lightbulb className="w-5 h-5 text-indigo-600" />
        <h2 className="font-semibold text-gray-700">Smart Recommendations</h2>
      </div>
      <div className="space-y-4">
        {recommendations.map((rec, index) => (
          <div key={index} className="p-3 bg-gray-50 rounded-lg">
            <h3 className="text-sm font-medium text-gray-800 mb-1">{rec.title}</h3>
            <p className="text-xs text-gray-600">{rec.description}</p>
            <span className={`inline-block mt-2 text-xs px-2 py-1 rounded-full ${
              rec.type === 'productivity' ? 'bg-blue-100 text-blue-700' :
              rec.type === 'wellbeing' ? 'bg-green-100 text-green-700' :
              'bg-purple-100 text-purple-700'
            }`}>
              {rec.type.charAt(0).toUpperCase() + rec.type.slice(1)}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}