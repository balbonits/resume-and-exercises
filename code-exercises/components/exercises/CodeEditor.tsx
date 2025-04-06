// components/exercises/CodeEditor.tsx
'use client';

import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { updateCode, runCode } from '@/lib/store/codeSlice';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

interface CodeEditorProps {
  initialCode: string;
  language: string;
  exerciseId: string;
}

export default function CodeEditor({ 
  initialCode, 
  language, 
  exerciseId 
}: CodeEditorProps) {
  const [code, setCode] = useState(initialCode);
  const dispatch = useDispatch();

  // Update Redux store when code changes
  useEffect(() => {
    dispatch(updateCode({ exerciseId, code }));
  }, [code, exerciseId, dispatch]);

  const handleCodeChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setCode(e.target.value);
  };

  const handleRunCode = () => {
    dispatch(runCode({ exerciseId }));
  };

  return (
    <div className="h-full flex flex-col">
      <Tabs defaultValue="code" className="w-full">
        <div className="flex items-center justify-between mb-4">
          <TabsList>
            <TabsTrigger value="code">Code</TabsTrigger>
            <TabsTrigger value="tests">Tests</TabsTrigger>
          </TabsList>
          
          <button
            onClick={handleRunCode}
            className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded transition-colors"
          >
            Run Code
          </button>
        </div>
        
        <TabsContent value="code" className="flex-1 mt-0">
          <div className="relative h-64 min-h-full">
            <textarea
              value={code}
              onChange={handleCodeChange}
              className="w-full h-full bg-slate-900 text-gray-100 font-mono p-4 resize-none focus:outline-none focus:ring-2 focus:ring-blue-500 rounded"
              spellCheck={false}
            />
          </div>
        </TabsContent>
        
        <TabsContent value="tests" className="flex-1 mt-0">
          <div className="bg-slate-900 text-gray-100 font-mono p-4 h-64 overflow-auto rounded">
            {/* Test code would be displayed here */}
            <pre>{`describe('${exerciseId}', () => {
  test('should pass all test cases', () => {
    // Test cases would be displayed here
  });
});`}</pre>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}
