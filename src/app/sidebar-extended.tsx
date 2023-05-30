import Image from 'next/image';
import { ReactSVG } from 'react-svg';

export default function SidebarExtended() {
  return (
    <section className='px-4 border-r max-w-[] py-7 border-white/20'>
      <div className='flex gap-2'>
        <div className='p-3 rounded-lg bg-themeLightSlate h-min'>
          <Image src='/assets/camera-fill.svg' alt='' width={24} height={24} />
        </div>
        <div>
          <p className='text-xs font-semibold leading-tight text-white'>
            Language Translation Assistant
          </p>
          <div className='flex items-center gap-2 px-3 py-1 rounded-full bg-themeSlate w-max'>
            <Image src='/assets/chatbot.svg' alt='' width={14} height={14} />
            <p className='text-xs font-semibold leading-tight text-white text-opacity-70'>
              Chatbot
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
