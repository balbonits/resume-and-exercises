// components/exercises/ExerciseDetails.tsx
interface ExerciseDetailsProps {
    description: string;
    difficulty: 'beginner' | 'intermediate' | 'advanced';
    topics: string[];
  }
  
  export function ExerciseDetails({
    description,
    difficulty,
    topics,
  }: ExerciseDetailsProps) {
    const difficultyColors = {
      beginner: 'bg-green-100 text-green-800',
      intermediate: 'bg-yellow-100 text-yellow-800',
      advanced: 'bg-red-100 text-red-800',
    };
    
    return (
      <div>
        <div className="mb-4">
          <span className={`inline-block px-2 py-1 rounded text-sm font-medium ${difficultyColors[difficulty]}`}>
            {difficulty.charAt(0).toUpperCase() + difficulty.slice(1)}
          </span>
        </div>
        
        <div className="prose max-w-none" dangerouslySetInnerHTML={{ __html: description }} />
        
        <div className="mt-6">
          <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider">Topics</h3>
          <div className="mt-2 flex flex-wrap gap-2">
            {topics.map((topic) => (
              <span key={topic} className="bg-gray-100 text-gray-800 text-xs px-2 py-1 rounded">
                {topic}
              </span>
            ))}
          </div>
        </div>
      </div>
    );
  }