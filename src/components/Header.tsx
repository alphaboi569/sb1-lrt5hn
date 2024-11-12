import React from 'react';
import { Clock, Power } from 'lucide-react';

interface HeaderProps {
  isEnabled: boolean;
  onToggle: () => void;
}

export function Header({ isEnabled, onToggle }: HeaderProps) {
  return (
    <div className="flex items-center justify-between mb-8 bg-gradient-to-r from-purple-600 to-emerald-500 p-4 rounded-xl shadow-lg">
      <div className="flex items-center gap-2">
        <Clock className="w-8 h-8 text-white" />
        <h1 className="text-2xl font-bold text-white">Limitly</h1>
      </div>
      <button
        onClick={onToggle}
        className={`p-2 rounded-full transition-colors ${
          isEnabled 
            ? 'bg-white text-purple-600 shadow-md hover:bg-purple-50' 
            : 'bg-purple-200 text-purple-600 hover:bg-purple-300'
        }`}
      >
        <Power className="w-5 h-5" />
      </button>
    </div>
  );
}