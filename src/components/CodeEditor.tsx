
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import { Play, Upload, RotateCcw, Code } from 'lucide-react';

interface CodeEditorProps {
  onStartCoding: () => void;
}

export const CodeEditor = ({ onStartCoding }: CodeEditorProps) => {
  const [selectedLanguage, setSelectedLanguage] = useState('javascript');
  const [code, setCode] = useState('// Write your code here...\n\n');
  const [hasStartedCoding, setHasStartedCoding] = useState(false);

  const languages = [
    { value: 'javascript', label: 'JavaScript' },
    { value: 'react', label: 'React' },
    { value: 'csharp', label: 'C#' },
    { value: 'python', label: 'Python' },
    { value: 'nextjs', label: 'Next.js' },
    { value: 'sql', label: 'Data Engineering (SQL)' },
  ];

  const handleStartCoding = () => {
    setHasStartedCoding(true);
    onStartCoding();
  };

  const handleRunCode = () => {
    console.log('Running code:', code);
    // Placeholder for code execution
  };

  const handleSubmitCode = () => {
    console.log('Submitting code:', code);
    // Placeholder for code submission
  };

  const handleClearChanges = () => {
    setCode('// Write your code here...\n\n');
  };

  return (
    <Card className="h-full flex flex-col">
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle className="flex items-center space-x-2">
            <Code className="w-5 h-5" />
            <span>Code Editor</span>
          </CardTitle>
          <div className="flex items-center space-x-3">
            <Select value={selectedLanguage} onValueChange={setSelectedLanguage}>
              <SelectTrigger className="w-48">
                <SelectValue placeholder="Select language" />
              </SelectTrigger>
              <SelectContent>
                {languages.map((lang) => (
                  <SelectItem key={lang.value} value={lang.value}>
                    {lang.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            {!hasStartedCoding && (
              <Button onClick={handleStartCoding} className="bg-green-600 hover:bg-green-700">
                Start Coding
              </Button>
            )}
          </div>
        </div>
      </CardHeader>
      
      <CardContent className="flex-1 flex flex-col space-y-4">
        <div className="flex-1">
          <Textarea
            value={code}
            onChange={(e) => setCode(e.target.value)}
            className="w-full h-full min-h-[400px] font-mono text-sm resize-none"
            placeholder="Write your code here..."
          />
        </div>
        
        <div className="flex space-x-3">
          <Button onClick={handleRunCode} className="bg-blue-600 hover:bg-blue-700">
            <Play className="w-4 h-4 mr-2" />
            Run Code
          </Button>
          <Button onClick={handleSubmitCode} className="bg-green-600 hover:bg-green-700">
            <Upload className="w-4 h-4 mr-2" />
            Submit Code
          </Button>
          <Button onClick={handleClearChanges} variant="outline">
            <RotateCcw className="w-4 h-4 mr-2" />
            Clear Changes
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};
