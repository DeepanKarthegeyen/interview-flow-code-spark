
import { useState, useEffect } from 'react';
import { LoginForm } from '../components/LoginForm';
import { InterviewDashboard } from '../components/InterviewDashboard';

const Index = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [candidateInfo, setCandidateInfo] = useState<{name: string, email: string} | null>(null);

  const handleLogin = (name: string, email: string) => {
    setCandidateInfo({ name, email });
    setIsLoggedIn(true);
  };

  if (!isLoggedIn) {
    return <LoginForm onLogin={handleLogin} />;
  }

  return <InterviewDashboard candidateInfo={candidateInfo!} />;
};

export default Index;
