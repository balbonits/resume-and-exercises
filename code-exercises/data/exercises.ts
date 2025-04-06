// data/exercises.ts
import { categories } from './categories';

export interface Exercise {
  id: string;
  title: string;
  slug: string;
  shortDescription: string;
  description: string;
  difficulty: 'beginner' | 'intermediate' | 'advanced';
  topics: string[];
  language: string;
  initialCode: string;
  solutionCode: string;
  category: string;
}

const exercises: Exercise[] = [
  // JavaScript exercises
  {
    id: 'js-array-methods',
    title: 'Array Methods Challenge',
    slug: 'array-methods',
    shortDescription: 'Implement common array methods from scratch',
    description: `
      <p>In this exercise, you'll implement several common array methods from scratch to understand how they work internally:</p>
      <ul>
        <li><code>map</code>: Creates a new array with the results of calling a function on every element</li>
        <li><code>filter</code>: Creates a new array with elements that pass a test</li>
        <li><code>reduce</code>: Applies a function against an accumulator for each value to reduce to a single value</li>
      </ul>
      <p>You should not use the built-in array methods in your implementation.</p>
    `,
    difficulty: 'intermediate',
    topics: ['arrays', 'higher-order functions', 'functional programming'],
    language: 'javascript',
    initialCode: `// Implement the following array methods
function myMap(arr, callback) {
  // Your code here
}

function myFilter(arr, callback) {
  // Your code here
}

function myReduce(arr, callback, initialValue) {
  // Your code here
}

// Return your implementation for testing
function solution() {
  return {
    myMap,
    myFilter,
    myReduce
  };
}`,
    solutionCode: `// Implementation of common array methods
function myMap(arr, callback) {
  const result = [];
  for (let i = 0; i < arr.length; i++) {
    result.push(callback(arr[i], i, arr));
  }
  return result;
}

function myFilter(arr, callback) {
  const result = [];
  for (let i = 0; i < arr.length; i++) {
    if (callback(arr[i], i, arr)) {
      result.push(arr[i]);
    }
  }
  return result;
}

function myReduce(arr, callback, initialValue) {
  let accumulator = initialValue !== undefined ? initialValue : arr[0];
  const startIndex = initialValue !== undefined ? 0 : 1;
  
  for (let i = startIndex; i < arr.length; i++) {
    accumulator = callback(accumulator, arr[i], i, arr);
  }
  
  return accumulator;
}

function solution() {
  return {
    myMap,
    myFilter,
    myReduce
  };
}`,
    category: 'javascript'
  },
  // Add more exercises here
];

export function getCategoryInfo(categorySlug: string) {
  return categories.find((category) => category.slug === categorySlug);
}

export function getCategoryExercises(categorySlug: string) {
  return exercises.filter((exercise) => exercise.category === categorySlug);
}

export function getExerciseBySlug(categorySlug: string, exerciseSlug: string) {
  return exercises.find(
    (exercise) => exercise.category === categorySlug && exercise.slug === exerciseSlug
  );
}
