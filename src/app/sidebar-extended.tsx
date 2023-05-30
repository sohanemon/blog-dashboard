import Image from 'next/image';
import { ReactSVG } from 'react-svg';

export default function SidebarExtended() {
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
    </section>
  );
}
