'use client';
import Image from 'next/image';
import { useState } from 'react';
import Logo from './logo';
import { ReactSVG } from 'react-svg';

export default function Prompt() {
  const [isSelected, setIsSelected] = useState('chat');

  return (
    <section className='relative bg-themeSlate flex-col items-center flex  w-full min-h-auto'>
  <div className='absolute z-50 flex'>
      <div className='w-[448px] min-h-[1010px] rounded-lg bg-rgba-opacity m-5 mb-0'>
      <p className='text-xs font-medium leading-loose p-5 text-white  pb-0'>Prompt</p>
      <input
  className="w-[400px] min-h-[149px] p-2 rounded-md bg-transparent m-5 text-5 whitespace-normal align-top"
  placeholder="You are a multilingual assistant that translates"
/>  

<div className='flex justify-between'>
    <div className='flex items-center text-xs font-medium leading-loose p-5 text-white '>
      <span className='pr-4'>Veriables  </span><span><ReactSVG src={"/assets/info.svg"} /></span>
    </div>

    <div className='flex items-center text-xs font-medium leading-loose p-5 text-white '>
      <span><ReactSVG src={"/assets/plus.svg"} /></span><span className='pl-2'>Add  </span>
    </div>
</div>


        </div>











        <div className='w-[542px] min-h-[1010px]t rounded-lg bg-rgba-opacity m-5 ml-0'>
            Preview and Test
  </div>
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


