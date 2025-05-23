
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

export const ParticipantsList = () => {
  const participants = [
    { name: 'AI Interview Bot', role: 'AI Assistant', status: 'online' },
    { name: 'John Smith', role: 'Technical Lead', status: 'online' },
    { name: 'Sarah Johnson', role: 'Senior Engineer', status: 'online' },
  ];

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-sm font-medium">Interview Panel</CardTitle>
      </CardHeader>
      <CardContent className="space-y-3">
        {participants.map((participant, index) => (
          <div key={index} className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center">
                <span className="text-white text-xs font-semibold">
                  {participant.name[0]}
                </span>
              </div>
              <div>
                <p className="text-sm font-medium text-gray-900">{participant.name}</p>
                <p className="text-xs text-gray-500">{participant.role}</p>
              </div>
            </div>
            <Badge variant="secondary" className="bg-green-100 text-green-800">
              Online
            </Badge>
          </div>
        ))}
      </CardContent>
    </Card>
  );
};
