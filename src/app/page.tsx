'use client';
import usePage from '@/store';
import Basics from './basics';
import Prompt from './prompt';

export default function Home() {
  const page = usePage((s) => s.page);
  return (
    <main className='flex flex-col grow'>
      {page === 'prompt' ? <Prompt /> : <Basics />}
    </main>
  );
}
