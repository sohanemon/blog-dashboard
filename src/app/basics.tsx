'use client';
import Image from 'next/image';
import { ChangeEvent, useState } from 'react';
import Logo from './logo';
import { ReactSVG } from 'react-svg';

export default function Basics() {
 
  
  
  return (
    <section className='relative bg-themeSlate flex-col items-center flex  w-full min-h-auto'>
  <div className='absolute z-50 flex flex-col md:flex-row'>
  <div className='w-[1000px] min-h-[1010px] rounded-lg bg-rgba-opacity m-5 mb-0'>
          <div className='flex m-10 items-start'>
          <ReactSVG src={"/assets/jesusIcon.svg"} />
                <div className='ml-10 w-full'>
                          <p className='text-xs font-medium leading-loose text-white  pb-0 mb-3'>Name of Prompt *</p>
                          <input
                  className="w-full p-3 rounded-md bg-transparent text-[10px] whitespace-normal align-top ml-1"
                  placeholder="jesusgpt"
                /> 
                <p className='text-xs font-medium leading-loose text-white  pb-0 mb-3 mt-10'>Description * *</p>
                          <input
                  className="w-full h-[86px] p-3 rounded-md bg-transparent text-[10px] whitespace-normal align-top ml-1"
                  placeholder="For Example: Generate personalized emails like a pro"
                /> 
                <p className='text-xs font-medium leading-loose text-white  pb-0 mb-3 mt-10'>Tags*</p>
                          <input
                  className="w-full p-3 rounded-md bg-transparent text-[10px] whitespace-normal align-top ml-1"
                  placeholder="Search for Tags..."
                /> 
                <p className='text-xs font-medium leading-loose text-white  pb-0 mb-3 mt-10' >Bounty *</p>
                          <input
                  className="w-full p-3 rounded-md bg-transparent text-[10px] whitespace-normal align-top ml-1"
                  placeholder="Individual Prompt"
                /> 

<button className='flex items-center bg-white rounded pl-8 pr-8 pt-2 pb-2 mt-10'><p className='black-text  text-[10px] '>Save</p></button>
                </div>
          </div>
  </div>
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


