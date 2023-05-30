'use client';
import Image from 'next/image';
import { ChangeEvent, useState } from 'react';
import Logo from './logo';
import { ReactSVG } from 'react-svg';

export default function Basics() {
 
  
  
  return (
    <section className='relative bg-themeSlate flex-col items-center flex  w-full min-h-auto'>
  <div className='absolute z-50 flex flex-col md:flex-row'>
   
   {/* preview and text ends*/}
  </div>
<Image
        className='absolute top-0 right-0'
        src={'/assets/background.svg'}
        alt=''
        width={1245}
        height={375}
      />
 </section>    
)
}


