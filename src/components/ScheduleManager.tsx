import React, { useState } from 'react';
import { Calendar, Clock } from 'lucide-react';

interface Schedule {
  site: string;
  blockedTimes: string[];
  temporaryUnblock?: {
    active: boolean;
    remainingMinutes: number;
  };
}

export function ScheduleManager() {
  const [schedules, setSchedules] = useState<Schedule[]>([
    {
      site: 'facebook.com',
      blockedTimes: ['09:00-17:00'],
      temporaryUnblock: { active: false, remainingMinutes: 0 }
    },
    {
      site: 'youtube.com',
      blockedTimes: ['10:00-16:00'],
      temporaryUnblock: { active: true, remainingMinutes: 8 }
    }
  ]);

  const handleTemporaryUnblock = (site: string) => {
    setSchedules(schedules.map(s => 
      s.site === site 
        ? { ...s, temporaryUnblock: { active: true, remainingMinutes: 10 } }
        : s
    ));
  };

  return (
    <div className="bg-white rounded-xl p-4 shadow-sm mb-6">
      <div className="flex items-center gap-2 mb-4">
        <Calendar className="w-5 h-5 text-indigo-600" />
        <h2 className="font-semibold text-gray-700">Block Schedule</h2>
      </div>
      <div className="space-y-4">
        {schedules.map((schedule) => (
          <div key={schedule.site} className="border-b pb-3">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-medium text-gray-700">{schedule.site}</span>
              {schedule.temporaryUnblock?.active ? (
                <span className="text-xs bg-orange-100 text-orange-700 px-2 py-1 rounded-full">
                  Unblocked: {schedule.temporaryUnblock.remainingMinutes}m left
                </span>
              ) : (
                <button
                  onClick={() => handleTemporaryUnblock(schedule.site)}
                  className="text-xs bg-indigo-100 text-indigo-600 px-2 py-1 rounded-full hover:bg-indigo-200"
                >
                  Temporary Unblock
                </button>
              )}
            </div>
            <div className="flex items-center gap-1 text-xs text-gray-500">
              <Clock className="w-3 h-3" />
              {schedule.blockedTimes.join(', ')}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}