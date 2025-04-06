// components/exercises/SolutionPreview.tsx
'use client';

import { useSelector } from 'react-redux';
import { RootState } from '@/lib/store';

interface SolutionPreviewProps {
  exerciseId: string;
}

export default function SolutionPreview({ exerciseId }: SolutionPreviewProps) {
  const { results, isRunning, error } = useSelector(
    (state: RootState) => state.code[exerciseId] || { results: null, isRunning: false, error: null }
  );

  return (
    <div className="h-full">
      <h3 className="text-lg font-medium mb-2">Output</h3>
      
      {isRunning ? (
        <div className="flex items-center justify-center h-32">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-500"></div>
        </div>
      ) : error ? (
        <div className="bg-red-50 text-red-800 p-4 rounded">
          <h4 className="font-medium">Error</h4>
          <pre className="mt-2 text-sm whitespace-pre-wrap">{error}</pre>
        </div>
      ) : results ? (
        <div className="bg-gray-50 p-4 rounded">
          <pre className="whitespace-pre-wrap">{JSON.stringify(results, null, 2)}</pre>
        </div>
      ) : (
        <div className="flex items-center justify-center h-32 bg-gray-50 text-gray-500 rounded">
          Run your code to see the results
        </div>
      )}
    </div>
  );
}
