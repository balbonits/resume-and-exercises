// components/layout/TwoColumnLayout.tsx
import { ReactNode } from 'react';

interface TwoColumnLayoutProps {
  leftColumn: ReactNode;
  codeSection: ReactNode;
  solutionSection: ReactNode;
}

export default function TwoColumnLayout({
  leftColumn,
  codeSection,
  solutionSection,
}: TwoColumnLayoutProps) {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
        {/* Left Column - Exercise Description */}
        <div className="lg:col-span-2 bg-white rounded-lg shadow-md p-6">
          {leftColumn}
        </div>
        
        {/* Right Column - Split into Code and Solution */}
        <div className="lg:col-span-3 flex flex-col gap-6">
          {/* Top - Code Editor */}
          <div className="bg-slate-800 rounded-lg shadow-md p-6">
            {codeSection}
          </div>
          
          {/* Bottom - Solution Display */}
          <div className="bg-white rounded-lg shadow-md p-6">
            {solutionSection}
          </div>
        </div>
      </div>
    </div>
  );
}
