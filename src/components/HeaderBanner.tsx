import LogoIcon from '../assets/header-images/logo.svg?react';
import SunIcon from '../assets/header-images/sun.svg?react';

const HeaderBanner = () => {
  return (
    <header className='flex justify-between rounded-3xl bg-neutral-500 p-4 '>
      <LogoIcon width={150} fill='white' />
      <button
        type='button'
        aria-label='Toggle theme'
        className='h-12 w-12 flex items-center justify-center rounded-xl 
        bg-neutral-700 text-neutral-0 hover:bg-neutral-600
        focus:ring-2 focus:ring-red-500 focus:ring-offset-2 focus:ring-offset-neutral-900 focus:bg-neutral-600'
      >
        <SunIcon className='size-5' />
      </button>
    </header>
  );
};

export default HeaderBanner;
