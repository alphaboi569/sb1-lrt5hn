import React from 'react';

interface TimeCycleProps {
  cycleStatus: 'work' | 'break';
  timeLeft: { minutes: number; seconds: number };
}

export function TimeCycle({ cycleStatus, timeLeft }: TimeCycleProps) {
  return (
    <div className="bg-white rounded-xl p-4 shadow-sm mb-6">
      <div className="flex justify-between items-center mb-3">
        <h2 className="font-semibold text-gray-700">Time Cycle</h2>
        <span className={`px-3 py-1 rounded-full text-sm ${
          cycleStatus === 'work' ? 'bg-green-100 text-green-700' : 'bg-orange-100 text-orange-700'
        }`}>
          {cycleStatus === 'work' ? 'Working Time' : 'Break Time'}
        </span>
      </div>
      <div className="text-center">
        <span className="text-3xl font-bold text-gray-800">
          {String(timeLeft.minutes).padStart(2, '0')}:{String(timeLeft.seconds).padStart(2, '0')}
        </span>
      </div>
    </div>
  );
}