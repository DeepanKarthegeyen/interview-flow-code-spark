
import { useState, useEffect } from 'react';
import { TopBar } from './TopBar';
import { VideoSection } from './VideoSection';
import { CodeEditor } from './CodeEditor';
import { ParticipantsList } from './ParticipantsList';

interface InterviewDashboardProps {
  candidateInfo: { name: string; email: string };
}

export const InterviewDashboard = ({ candidateInfo }: InterviewDashboardProps) => {
  const [interviewStarted, setInterviewStarted] = useState(false);
  const [codingStarted, setCodingStarted] = useState(false);
  const [elapsedTime, setElapsedTime] = useState(0);

  useEffect(() => {
    setInterviewStarted(true);
  }, []);

  useEffect(() => {
    if (interviewStarted) {
      const interval = setInterval(() => {
        setElapsedTime(prev => prev + 1);
      }, 1000);
      return () => clearInterval(interval);
    }
  }, [interviewStarted]);

  const handleStartCoding = () => {
    setCodingStarted(true);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      <TopBar 
        candidateInfo={candidateInfo}
        elapsedTime={elapsedTime}
        codingStarted={codingStarted}
      />
      
      <div className="flex h-[calc(100vh-80px)]">
        {/* Left Side - Video and Participants */}
        <div className="w-1/3 p-4 space-y-4">
          <VideoSection />
          <ParticipantsList />
        </div>
        
        {/* Right Side - Code Editor */}
        <div className="w-2/3 p-4">
          <CodeEditor onStartCoding={handleStartCoding} />
        </div>
      </div>
    </div>
  );
};
