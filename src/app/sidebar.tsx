import Image from 'next/image';
import Logo from './icons/Logo';
import HomeIcon from './icons/HomeIcon';

export default function Sidebar() {
  return (
    <section className='relative bg-themeSlate flex-col items-center flex  w-[77px] min-h-screen'>
      <Logo />

      {/* #todo menus */}
      <div className='space-y-5'>
        {menus.map((el) => (
          <div key={el.title} className='flex flex-col items-center gap-2'>
            {el.icon}
            <p className='capitalize'>{el.title}</p>
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
    title: 'home',
    icon: <HomeIcon />,
  },
  {
    title: 'home',
    icon: <HomeIcon />,
  },
  {
    title: 'home',
    icon: <HomeIcon />,
  },
  {
    title: 'home',
    icon: <HomeIcon />,
  },
  {
    title: 'home',
    icon: <HomeIcon />,
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
