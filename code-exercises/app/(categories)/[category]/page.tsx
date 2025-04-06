// app/(categories)/[category]/page.tsx
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { getCategoryExercises, getCategoryInfo } from '@/data/exercises';

interface CategoryPageProps {
  params: {
    category: string;
  };
}

export default function CategoryPage({ params }: CategoryPageProps) {
  const { category } = params;
  const categoryInfo = getCategoryInfo(category);
  
  if (!categoryInfo) {
    notFound();
  }
  
  const exercises = getCategoryExercises(category);

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-2">{categoryInfo.name} Exercises</h1>
      <p className="text-gray-600 mb-8">{categoryInfo.description}</p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {exercises.map((exercise) => (
          <Link
            key={exercise.id}
            href={`/${category}/${exercise.slug}`}
            className="block bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow overflow-hidden"
          >
            <div className="p-6">
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-xl font-semibold">{exercise.title}</h3>
                <span className={`inline-block px-2 py-1 rounded text-xs font-medium ${
                  exercise.difficulty === 'beginner' ? 'bg-green-100 text-green-800' :
                  exercise.difficulty === 'intermediate' ? 'bg-yellow-100 text-yellow-800' :
                  'bg-red-100 text-red-800'
                }`}>
                  {exercise.difficulty.charAt(0).toUpperCase() + exercise.difficulty.slice(1)}
                </span>
              </div>
              
              <p className="text-gray-600 mb-4 line-clamp-2">{exercise.shortDescription}</p>
              
              <div className="flex flex-wrap gap-2">
                {exercise.topics.slice(0, 3).map((topic) => (
                  <span key={topic} className="bg-gray-100 text-gray-800 text-xs px-2 py-1 rounded">
                    {topic}
                  </span>
                ))}
                {exercise.topics.length > 3 && (
                  <span className="bg-gray-100 text-gray-800 text-xs px-2 py-1 rounded">
                    +{exercise.topics.length - 3} more
                  </span>
                )}
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
