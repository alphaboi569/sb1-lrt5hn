import React from 'react';
import { BarChart2, TrendingDown, TrendingUp } from 'lucide-react';

interface UsageData {
  site: string;
  timeSpent: number;
  trend: 'up' | 'down';
}

export function Analytics() {
  const usageData: UsageData[] = [
    { site: 'YouTube', timeSpent: 120, trend: 'down' },
    { site: 'Facebook', timeSpent: 45, trend: 'up' },
    { site: 'Instagram', timeSpent: 30, trend: 'down' },
  ];

  return (
    <div className="bg-white rounded-xl p-4 shadow-sm mb-6">
      <div className="flex items-center gap-2 mb-4">
        <BarChart2 className="w-5 h-5 text-indigo-600" />
        <h2 className="font-semibold text-gray-700">Usage Analytics</h2>
      </div>
      <div className="space-y-4">
        {usageData.map((data) => (
          <div key={data.site} className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-700">{data.site}</p>
              <p className="text-xs text-gray-500">{Math.floor(data.timeSpent / 60)}h {data.timeSpent % 60}m today</p>
            </div>
            <div className="flex items-center gap-1">
              {data.trend === 'up' ? (
                <TrendingUp className="w-4 h-4 text-red-500" />
              ) : (
                <TrendingDown className="w-4 h-4 text-green-500" />
              )}
              <span className={`text-sm ${data.trend === 'up' ? 'text-red-500' : 'text-green-500'}`}>
                {data.trend === 'up' ? '+' : '-'}15%
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}