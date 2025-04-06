// components/layout/Header.tsx
'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { categories } from '@/data/categories';

export default function Header() {
  const pathname = usePathname();
  
  return (
    <header className="bg-slate-800 text-white shadow-md">
      <div className="container mx-auto px-4 py-4">
        <nav className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-xl font-bold mb-4 md:mb-0">
            <Link href="/" className="hover:text-blue-400 transition-colors">
              Code Exercises
            </Link>
          </div>
          
          <ul className="flex flex-wrap gap-6">
            <li>
              <Link 
                href="/" 
                className={`hover:text-blue-400 transition-colors ${
                  pathname === '/' ? 'text-blue-400 font-medium' : ''
                }`}
              >
                Home
              </Link>
            </li>
            
            {categories.map((category) => (
              <li key={category.slug}>
                <Link 
                  href={`/${category.slug}`}
                  className={`hover:text-blue-400 transition-colors ${
                    pathname?.startsWith(`/${category.slug}`) ? 'text-blue-400 font-medium' : ''
                  }`}
                >
                  {category.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
