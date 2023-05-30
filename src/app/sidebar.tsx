import Image from 'next/image';

export default function Sidebar() {
  return (
    <section className='relative bg-themeSlate w-[77px] min-h-screen h-full'>
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
