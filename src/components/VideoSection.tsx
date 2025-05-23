
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Video, VideoOff, Mic, MicOff } from 'lucide-react';

export const VideoSection = () => {
  const [videoEnabled, setVideoEnabled] = useState(true);
  const [audioEnabled, setAudioEnabled] = useState(true);

  return (
    <Card className="p-4">
      <div className="aspect-video bg-gray-900 rounded-lg relative overflow-hidden">
        {videoEnabled ? (
          <div className="w-full h-full bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center">
            <div className="text-white text-center">
              <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-2">
                <span className="text-2xl font-semibold">👤</span>
              </div>
              <p className="text-sm">Camera Feed</p>
            </div>
          </div>
        ) : (
          <div className="w-full h-full bg-gray-800 flex items-center justify-center">
            <div className="text-gray-400 text-center">
              <VideoOff className="w-12 h-12 mx-auto mb-2" />
              <p className="text-sm">Camera Off</p>
            </div>
          </div>
        )}
        
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
          <Button
            size="sm"
            variant={videoEnabled ? "secondary" : "destructive"}
            onClick={() => setVideoEnabled(!videoEnabled)}
            className="w-10 h-10 rounded-full p-0"
          >
            {videoEnabled ? <Video className="w-4 h-4" /> : <VideoOff className="w-4 h-4" />}
          </Button>
          <Button
            size="sm"
            variant={audioEnabled ? "secondary" : "destructive"}
            onClick={() => setAudioEnabled(!audioEnabled)}
            className="w-10 h-10 rounded-full p-0"
          >
            {audioEnabled ? <Mic className="w-4 h-4" /> : <MicOff className="w-4 h-4" />}
          </Button>
        </div>
      </div>
    </Card>
  );
};
