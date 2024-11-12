import React, { useState } from 'react';
import { Header } from './components/Header';
import { TimeCycle } from './components/TimeCycle';
import { Analytics } from './components/Analytics';
import { Recommendations } from './components/Recommendations';
import { ScheduleManager } from './components/ScheduleManager';

function App() {
  const [isEnabled, setIsEnabled] = useState(true);
  const [cycleStatus, setCycleStatus] = useState<'work' | 'break'>('work');
  const [timeLeft, setTimeLeft] = useState({ minutes: 40, seconds: 0 });

  return (
    <div className="w-[400px] min-h-[600px] bg-gradient-to-br from-purple-50 to-emerald-50 p-6 overflow-y-auto">
      <Header isEnabled={isEnabled} onToggle={() => setIsEnabled(!isEnabled)} />
      <TimeCycle cycleStatus={cycleStatus} timeLeft={timeLeft} />
      <ScheduleManager />
      <Analytics />
      <Recommendations />
    </div>
  );
}

export default App;