'use client';
import Image from 'next/image';
import { useState } from 'react';
import Logo from './logo';
import { ReactSVG } from 'react-svg';

export default function Sidebar() {
  const [isSelected, setIsSelected] = useState('chat');

  return (
    <section className='relative bg-themeSlate flex-col items-center flex  w-[77px] min-h-[1010px]'>
      <Logo />

      {/* #todo menus */}
      <div className='absolute z-50 space-y-2 top-32'>
        {menus.map((el) => (
          <div
            onClick={() => setIsSelected(el.title)}
            key={el.title}
            className={`flex flex-col select-none items-center gap-2 cursor-pointer from-[#3E3E3E] to-[#979797] via-[#2C2C2C] rounded-2xl px-1.5 py-2 ${
              isSelected === el.title && 'bg-gradient-to-tr text-white'
            }`}
          >
            <ReactSVG src={el.icon} />
            <p className='capitalize font-semibold text-[8px]'>{el.title}</p>
          </div>
        ))}
      </div>
      <ReactSVG
        className='absolute z-50 cursor-pointer bottom-8'
        src='/assets/logout.svg'
      />
      {/* #fix bar section */}
      <Image
        className='absolute top-0 right-0'
        src={'/assets/bar.svg'}
        alt=''
        width={70}
        height={1024}
      />
    </section>
  );
}

const menus = [
  {
    title: 'home',
    icon: '/assets/home.svg',
  },
  {
    title: 'chat',
    icon: '/assets/chat.svg',
  },
  {
    title: 'create',
    icon: '/assets/create.svg',
  },
  {
    title: 'community',
    icon: '/assets/community.svg',
  },
  {
    title: 'collections',
    icon: '/assets/collections.svg',
  },
  {
    title: 'bounty',
    icon: '/assets/bounty.svg',
  },
  {
    title: 'learn',
    icon: '/assets/learn.svg',
  },
  {
    title: 'flux',
    icon: '/assets/flux.svg',
  },
];
