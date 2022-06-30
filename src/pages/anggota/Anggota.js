import React from 'react';
import {Link} from 'react-router-dom';
import Navbar from '../../components/Navbar';

import data from '../../json/home.json';

function Anggota() {
  const anggota = data.anggota;

  return (
    <div style={{maxWidth: '414px'}} className='mx-auto'>
      <Navbar />
      <div className='mx-[30px]'>
        <div className='flex justify-between items-center mt-[93px]'>
          <div className='flex'>
            <h1 className='mr-[8px] text-[#E7513B] text-lg font-medium'>543</h1>
            <h1 className='text-lg font-medium'>Volunter</h1>
          </div>
          <div className='flex'>
            <span>
              <svg
                width='48'
                height='48'
                viewBox='0 0 48 48'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <circle opacity='0.12' cx='24' cy='24' r='24' fill='#E7513B' />
                <path
                  d='M23.55 32.1C28.272 32.1 32.1 28.272 32.1 23.55C32.1 18.828 28.272 15 23.55 15C18.828 15 15 18.828 15 23.55C15 28.272 18.828 32.1 23.55 32.1Z'
                  stroke='#E7513B'
                  strokeWidth='2'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                />
                <path
                  d='M33 33L31.2 31.2'
                  stroke='#E7513B'
                  strokeWidth='2'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                />
              </svg>
            </span>
            <span className='ml-[12px]'>
              <svg
                width='48'
                height='48'
                viewBox='0 0 48 48'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <circle opacity='0.12' cx='24' cy='24' r='24' fill='#E7513B' />
                <path
                  d='M21 34H27C32 34 34 32 34 27V21C34 16 32 14 27 14H21C16 14 14 16 14 21V27C14 32 16 34 21 34Z'
                  stroke='#E7513B'
                  strokeWidth='1.5'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                />
                <path
                  d='M27.57 30.5V26.6'
                  stroke='#E7513B'
                  strokeWidth='1.5'
                  strokeMiterlimit='10'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                />
                <path
                  d='M27.57 19.45V17.5'
                  stroke='#E7513B'
                  strokeWidth='1.5'
                  strokeMiterlimit='10'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                />
                <path
                  d='M27.57 24.65C29.0059 24.65 30.17 23.4859 30.17 22.05C30.17 20.614 29.0059 19.45 27.57 19.45C26.1341 19.45 24.97 20.614 24.97 22.05C24.97 23.4859 26.1341 24.65 27.57 24.65Z'
                  stroke='#E7513B'
                  strokeWidth='1.5'
                  strokeMiterlimit='10'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                />
                <path
                  d='M20.43 30.5V28.55'
                  stroke='#E7513B'
                  strokeWidth='1.5'
                  strokeMiterlimit='10'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                />
                <path
                  d='M20.43 21.4V17.5'
                  stroke='#E7513B'
                  strokeWidth='1.5'
                  strokeMiterlimit='10'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                />
                <path
                  d='M20.43 28.55C21.8659 28.55 23.03 27.3859 23.03 25.95C23.03 24.514 21.8659 23.35 20.43 23.35C18.994 23.35 17.83 24.514 17.83 25.95C17.83 27.3859 18.994 28.55 20.43 28.55Z'
                  stroke='#E7513B'
                  strokeWidth='1.5'
                  strokeMiterlimit='10'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                />
              </svg>
            </span>
          </div>
        </div>
        {anggota.map((e) => (
          <>
            <Link to='/volunter'>
              <div className='flex w-ful my-[20px] items-center mt-[30px]'>
                <div>
                  <svg
                    width='48'
                    height='48'
                    viewBox='0 0 48 48'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'
                    xmlnsXlink='http://www.w3.org/1999/xlink'
                  >
                    <circle cx='24' cy='24' r='24' fill='url(#pattern0)' />
                    <defs>
                      <pattern
                        id='pattern0'
                        patternContentUnits='objectBoundingBox'
                        width='1'
                        height='1'
                      >
                        <use
                          xlinkHref='#image0_153_47'
                          transform='scale(0.000976562)'
                        />
                      </pattern>
                      <image
                        id='image0_153_47'
                        width='1024'
                        height='1024'
                        xlinkHref={e.img}
                      />
                    </defs>
                  </svg>
                </div>
                <div className='ml-[12px]'>
                  <h3 className='text-sm font-semibold'>{e.nama}</h3>
                  <div className='flex items-center text-xs text-[#717171] mt-[4px]'>
                    <svg
                      width='14'
                      height='14'
                      viewBox='0 0 14 14'
                      fill='none'
                      xmlns='http://www.w3.org/2000/svg'
                    >
                      <path
                        d='M6.99999 7.83421C8.00515 7.83421 8.81999 7.01937 8.81999 6.01421C8.81999 5.00906 8.00515 4.19421 6.99999 4.19421C5.99483 4.19421 5.17999 5.00906 5.17999 6.01421C5.17999 7.01937 5.99483 7.83421 6.99999 7.83421Z'
                        stroke='#717171'
                      />
                      <path
                        d='M2.11164 4.95246C3.26081 -0.099206 10.745 -0.0933725 11.8883 4.95829C12.5591 7.92163 10.7158 10.43 9.09997 11.9816C7.92747 13.1133 6.07247 13.1133 4.89414 11.9816C3.28414 10.43 1.44081 7.91579 2.11164 4.95246Z'
                        stroke='#717171'
                      />
                    </svg>
                    <p className='ml-[6px]'>{e.kota}</p>
                  </div>
                </div>
              </div>
            </Link>
            <hr />
          </>
        ))}
      </div>
    </div>
  );
}

export default Anggota;
