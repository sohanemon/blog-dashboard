import Image from 'next/image';
import { useState } from 'react';
import Logo from './logo';
import { ReactSVG } from 'react-svg';

const Prompts = () => {
  return (
    <div className='relative bg-themeSlate flex-col'>
      <Image
        className='absolute top-0 right-0'
        src='icons/background.svg'
        alt=''
        width={100}
        height={100}
      />
    </div>
  );
};

export default Prompts;