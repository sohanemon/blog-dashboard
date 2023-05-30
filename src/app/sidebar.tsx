import Image from 'next/image';
import Logo from './icons/Logo';

export default function Sidebar() {
  return (
    <section className='relative bg-themeSlate w-[77px] min-h-screen'>
      <Logo />

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
