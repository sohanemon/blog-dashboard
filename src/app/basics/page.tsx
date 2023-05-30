'use client';
import Image from 'next/image';
import { ReactSVG } from 'react-svg';

export default function Basics() {
  return (
    <section className='relative flex flex-col items-center w-full bg-themeSlate min-h-auto'>
      <div className='absolute z-50 flex flex-col md:flex-row'>
        <div className='w-[1000px] min-h-[1010px] rounded-lg bg-rgba-opacity m-5 mb-0'>
          <div className='flex items-start m-10'>
            <ReactSVG src={'/assets/jesusIcon.svg'} />
            <div className='w-full ml-10'>
              <p className='pb-0 mb-3 text-xs font-medium leading-loose text-white'>
                Name of Prompt *
              </p>
              <input
                className='w-full p-3 rounded-md bg-transparent text-[10px] whitespace-normal align-top ml-1'
                placeholder='jesusgpt'
              />
              <p className='pb-0 mt-10 mb-3 text-xs font-medium leading-loose text-white'>
                Description * *
              </p>
              <input
                className='w-full h-[86px] p-3 rounded-md bg-transparent text-[10px] whitespace-normal align-top ml-1'
                placeholder='For Example: Generate personalized emails like a pro'
              />
              <p className='pb-0 mt-10 mb-3 text-xs font-medium leading-loose text-white'>
                Tags*
              </p>
              <input
                className='w-full p-3 rounded-md bg-transparent text-[10px] whitespace-normal align-top ml-1'
                placeholder='Search for Tags...'
              />
              <p className='pb-0 mt-10 mb-3 text-xs font-medium leading-loose text-white'>
                Bounty *
              </p>
              <input
                className='w-full p-3 rounded-md bg-transparent text-[10px] whitespace-normal align-top ml-1'
                placeholder='Individual Prompt'
              />

              <button className='flex items-center pt-2 pb-2 pl-8 pr-8 mt-10 bg-white rounded'>
                <p className='black-text  text-[10px] '>Save</p>
              </button>
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
  );
}
