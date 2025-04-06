// app/(categories)/[category]/[slug]/page.tsx
import { notFound } from 'next/navigation';
import TwoColumnLayout from '@/components/layout/TwoColumnLayout';
import ExerciseDetails from '@/components/exercises/ExerciseDetails';
import CodeEditor from '@/components/exercises/CodeEditor';
import SolutionPreview from '@/components/exercises/SolutionPreview';
import { getExerciseBySlug } from '@/data/exercises';

interface ExercisePageProps {
  params: {
    category: string;
    slug: string;
  };
}

export default function ExercisePage({ params }: ExercisePageProps) {
  const { category, slug } = params;
  const exercise = getExerciseBySlug(category, slug);
  
  if (!exercise) {
    notFound();
  }
  
  return (
    <div className="py-6">
      <h1 className="text-2xl font-bold mb-6 px-4 container mx-auto">
        {exercise.title}
      </h1>
      
      <TwoColumnLayout
        leftColumn={
          <ExerciseDetails
            description={exercise.description}
            difficulty={exercise.difficulty}
            topics={exercise.topics}
          />
        }
        codeSection={
          <CodeEditor
            initialCode={exercise.initialCode}
            language={exercise.language}
            exerciseId={exercise.id}
          />
        }
        solutionSection={
          <SolutionPreview
            exerciseId={exercise.id}
          />
        }
      />
    </div>
  );
}