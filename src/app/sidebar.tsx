import Image from 'next/image';

export default function Sidebar() {
  return (
    <section className='relative bg-themeSlate'>
      <div className=''>
        <Image
          className='ab'
          src={'/assets/bar.svg'}
          alt=''
          width={70}
          height={1024}
        />
      </div>
    </section>
  );
}
