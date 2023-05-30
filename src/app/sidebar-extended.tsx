import Image from 'next/image';
import { ReactSVG } from 'react-svg';

export default function SidebarExtended() {
  return (
    <section className='border-r w-52 border-white/20'>
      <div className='flex'>
        <Image
          className='p-3 bg-themeLightSlate'
          src='/assets/camera-fill.svg'
          alt=''
          width={24}
          height={24}
        />
      </div>
    </section>
  );
}
