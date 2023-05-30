import Image from 'next/image';
import { ReactSVG } from 'react-svg';

export default function SidebarExtended() {
  return (
    <section className='px-4 border-r w-52 py-7 border-white/20'>
      <div className='flex'>
        <div className='p-3 rounded-lg bg-themeLightSlate'>
          <Image src='/assets/camera-fill.svg' alt='' width={24} height={24} />
        </div>
        <div>
          <p className='text-xs font-semibold leading-tight text-white'>
            Language Translation Assistant
          </p>
        </div>
      </div>
    </section>
  );
}
