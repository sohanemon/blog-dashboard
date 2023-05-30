import Image from 'next/image';
import { useState } from 'react';
import Logo from './logo';
import { ReactSVG } from 'react-svg';

export default function Home() {
  return <main className='flex flex-col items-center grow'>
                 <section className='relative bg-themeSlate flex-col items-center flex  w-[100]'>
      
                  <Image
                    className='absolute top-0 right-0'
                    src={'/assets/background.svg'}
                    alt=''
                    width={100}
                    height={100}
                  />
    </section>
    
    </main>;
}
