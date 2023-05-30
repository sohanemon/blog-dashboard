'use client';
import Image from 'next/image';
import Logo from './icons/Logo';
import HomeIcon from './icons/HomeIcon';
import ChatIcon from './icons/chatIcon';
import CreateIcon from './icons/CreateIcon';
import CommunityIcon from './icons/CommunityIcon';
import CollectionsIcon from './icons/CollectionsIcon';
import BountyIcon from './icons/BountyIcon';
import { useState } from 'react';

export default function Sidebar() {
  const [isSelected, setIsSelected] = useState('chat');
  console.log('🛑 ~ Sidebar ~ isSelected:', isSelected);

  return (
    <section className='relative bg-themeSlate flex-col items-center flex  w-[77px] min-h-[1024px]'>
      <Logo />

      {/* #todo menus */}
      <div className='absolute z-50 space-y-5 top-40'>
        {menus.map((el) => (
          <div
            onClick={() => setIsSelected(el.title)}
            key={el.title}
            className={`flex flex-col items-center gap-2 from-[#3E3E3E] to-[#979797] via-[#2C2C2C] rounded-2xl px-1.5 py-2 ${
              isSelected === el.title && 'bg-gradient-to-tr'
            }`}
          >
            {el.icon}
            <p className='capitalize text-[8px]'>{el.title}</p>
          </div>
        ))}
      </div>

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
    icon: <HomeIcon />,
  },
  {
    title: 'chat',
    icon: <ChatIcon />,
  },
  {
    title: 'create',
    icon: <CreateIcon />,
  },
  {
    title: 'community',
    icon: <CommunityIcon />,
  },
  {
    title: 'collection',
    icon: <CollectionsIcon />,
  },
  {
    title: 'bounty',
    icon: <BountyIcon />,
  },
  {
    title: 'home',
    icon: <HomeIcon />,
  },
  {
    title: 'home',
    icon: <HomeIcon />,
  },
];
