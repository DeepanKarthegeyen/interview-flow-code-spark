
import { Button } from '@/components/ui/button';
import { Phone, Clock } from 'lucide-react';

interface TopBarProps {
  candidateInfo: { name: string; email: string };
  elapsedTime: number;
  codingStarted: boolean;
}

export const TopBar = ({ candidateInfo, elapsedTime, codingStarted }: TopBarProps) => {
  const formatTime = (seconds: number) => {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;
    return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  const getRemainingTime = () => {
    const totalCodingTime = 2 * 60 * 60; // 2 hours in seconds
    const remaining = Math.max(0, totalCodingTime - elapsedTime);
    return formatTime(remaining);
  };

  return (
    <div className="bg-white shadow-sm border-b border-gray-200 px-6 py-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-6">
          <div>
            <h1 className="text-xl font-semibold text-gray-900">
              Hello, {candidateInfo.name}
            </h1>
            <p className="text-sm text-gray-600">{candidateInfo.email}</p>
          </div>
          
          <div className="flex items-center space-x-2 bg-gray-50 px-4 py-2 rounded-lg">
            <Clock className="w-4 h-4 text-blue-600" />
            <span className="text-sm font-medium text-gray-700">
              {codingStarted ? 'Time Remaining:' : 'Time Elapsed:'} 
              <span className="ml-2 text-blue-600 font-mono">
                {codingStarted ? getRemainingTime() : formatTime(elapsedTime)}
              </span>
            </span>
          </div>
        </div>
        
        <Button 
          variant="destructive" 
          className="bg-red-600 hover:bg-red-700"
        >
          <Phone className="w-4 h-4 mr-2" />
          End Call
        </Button>
      </div>
    </div>
  );
};
