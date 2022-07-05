import React from 'react';
import {Link} from 'react-router-dom';

function NavbarOpen() {
  const [navbarOpen, setNavbarOpen] = React.useState(false);
  return (
    <nav className='h-[74px]'>
      <div className='absolute ml-[33px] mt-[24px]'>
        <button type='button' onClick={() => setNavbarOpen(!navbarOpen)}>
          <svg
            width='24'
            height='24'
            viewBox='0 0 24 24'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              d='M3 7H21'
              stroke='#292D32'
              strokeWidth='1.5'
              strokeLinecap='round'
            />
            <path
              d='M3 12H21'
              stroke='#292D32'
              strokeWidth='1.5'
              strokeLinecap='round'
            />
            <path
              d='M3 17H21'
              stroke='#292D32'
              strokeWidth='1.5'
              strokeLinecap='round'
            />
          </svg>
        </button>
      </div>
      <div
        className={
          'bg-white absolute top-0 h-[100vh] max-w-[414px] transition-all ' +
          (navbarOpen ? 'w-full' : 'w-0')
        }
      >
        <div className={`mx-[20px] ${navbarOpen ? '' : 'hidden'}`}>
          <div className='h-[72px] flex items-center justify-start shadow-sm'>
            <div
              onClick={() => setNavbarOpen(!navbarOpen)}
              className='cursor-pointer'
            >
              <svg
                width='24'
                height='24'
                viewBox='0 0 24 24'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  d='M9.57 5.92999L3.5 12L9.57 18.07'
                  stroke='#292D32'
                  strokeWidth='1.5'
                  strokeMiterlimit='10'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                />
                <path
                  d='M20.5 12H3.67001'
                  stroke='#292D32'
                  strokeWidth='1.5'
                  strokeMiterlimit='10'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                />
              </svg>
            </div>
            <p className='ml-[17px] text-base font-normal'>Menu</p>
          </div>
          <ul className='list-none text-lg '>
            <li className='w-[256px]'>
              <Link to='anggota' className='flex py-[20px] ml-[7px]'>
                <svg
                  width='21'
                  height='22'
                  viewBox='0 0 21 22'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    d='M10.3709 11C13.3834 11 15.8255 8.76144 15.8255 6.00001C15.8255 3.23858 13.3834 1 10.3709 1C7.35844 1 4.91635 3.23858 4.91635 6.00001C4.91635 8.76144 7.35844 11 10.3709 11Z'
                    stroke='#171717'
                    strokeWidth='1.5'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                  />
                  <path
                    d='M19.7419 21C19.7419 17.13 15.5418 14 10.3709 14C5.20001 14 1 17.13 1 21'
                    stroke='#171717'
                    strokeWidth='1.5'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                  />
                </svg>

                <span className='ml-[20px]'>Anggota</span>
              </Link>
            </li>
            <hr />
            <li className='w-[256px]'>
              <div
                className='flex py-[20px] ml-[7px]'
                onClick={() => window.Location('https://peduly.com/tentang')}
              >
                <svg
                  width='24'
                  height='25'
                  viewBox='0 0 24 25'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    d='M12 22.5C17.5 22.5 22 18 22 12.5C22 7 17.5 2.5 12 2.5C6.5 2.5 2 7 2 12.5C2 18 6.5 22.5 12 22.5Z'
                    stroke='#212121'
                    strokeWidth='1.5'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                  />
                  <path
                    d='M12 8.5V13.5'
                    stroke='#212121'
                    strokeWidth='1.5'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                  />
                  <path
                    d='M11.9945 16.5H12.0035'
                    stroke='#212121'
                    strokeWidth='1.5'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                  />
                </svg>

                <span className='ml-[20px]'>Tentang Peduly</span>
              </div>
            </li>
            <hr />
            <li className='w-[256px]'>
              <div
                className='flex py-[20px] ml-[7px]'
                onClick={() =>
                  window.Location('https://peduly.com/donasi/sekali')
                }
              >
                <svg
                  width='22'
                  height='22'
                  viewBox='0 0 22 22'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    d='M11.37 7.88H16.62'
                    stroke='#171717'
                    strokeWidth='1.5'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                  />
                  <path
                    d='M5.38 7.88L6.13 8.63L8.38 6.38'
                    stroke='#171717'
                    strokeWidth='1.5'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                  />
                  <path
                    d='M11.37 14.88H16.62'
                    stroke='#171717'
                    strokeWidth='1.5'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                  />
                  <path
                    d='M5.38 14.88L6.13 15.63L8.38 13.38'
                    stroke='#171717'
                    strokeWidth='1.5'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                  />
                  <path
                    d='M8 21H14C19 21 21 19 21 14V8C21 3 19 1 14 1H8C3 1 1 3 1 8V14C1 19 3 21 8 21Z'
                    stroke='#171717'
                    strokeWidth='1.5'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                  />
                </svg>

                <span className='ml-[20px]'>Donasi</span>
              </div>
            </li>
            <hr />
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default NavbarOpen;
