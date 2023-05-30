import Image from 'next/image';

export default function Sidebar() {
  return (
    <section className='relative bg-themeSlate'>
      <Image src={'/public/assets/bar.svg'} alt='' width={70} height={1024} />
    </section>
  );
}
