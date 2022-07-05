import React from 'react';
import {Link} from 'react-router-dom';

function Nav({title, back}) {
  return (
    <div
      style={{maxWidth: '414px'}}
      className='w-full sticky top-0 bg-white flex h-[72px] items-center shadow-sm z-50'
    >
      <div className='ml-[20px]'>
        <Link to={back}>
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
              d='M20.5 12H3.66998'
              stroke='#292D32'
              strokeWidth='1.5'
              strokeMiterlimit='10'
              strokeLinecap='round'
              strokeLinejoin='round'
            />
          </svg>
        </Link>
      </div>
      <span className='ml-[17px] text-base font-normal'>{title}</span>
    </div>
  );
}

export default Nav;
