'use client';
import Image from 'next/image';
import { useState } from 'react';
import { ReactSVG } from 'react-svg';

export default function SidebarExtended() {
  const [isSelected, setIsSelected] = useState('prompt');

  return (
    <section className='px-4 border-r max-w-[14rem] py-7 border-white/20'>
      <div className='flex gap-2'>
        <div className='p-3 rounded-lg bg-themeLightSlate h-min'>
          <Image src='/assets/camera-fill.svg' alt='' width={24} height={24} />
        </div>
        <div>
          <p className='mb-1 ml-1 text-xs font-semibold leading-5 text-white'>
            Language Translation Assistant
          </p>
          <div className='flex items-center gap-2 px-3 py-1 rounded-full bg-themeSlate w-max'>
            <Image src='/assets/chatbot.svg' alt='' width={12} height={12} />
            <p className='text-[8px] font-semibold tracking-wider text-white text-opacity-70'>
              Chatbot
            </p>
          </div>
        </div>
      </div>

      {/* more menu */}
      <div className='mt-5 space-y-2'>
        {data?.map((el) => (
          <div
            onClick={() => setIsSelected(el.title)}
            key={el.title}
            className={`flex items-center select-none gap-3 px-3 py-3 capitalize cursor-pointer from-[#3E3E3E] to-[#979797] via-[#2C2C2C] rounded-2xl ${
              isSelected === el.title && 'bg-gradient-to-tr text-white'
            }`}
          >
            <ReactSVG src={el.icon} />
            <p className='text-xs font-medium leading-loose'>{el.title}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

const data = [
  {
    title: 'prompt',
    icon: '/assets/prompt.svg',
  },
  {
    title: 'basics',
    icon: '/assets/basics.svg',
  },
];
