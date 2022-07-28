import React from 'react';
import Nav from '../components/Nav';
import data from '../json/home.json';

function Gabung() {
  const gabung = data.gabungsekarang;

  return (
    <div style={{maxWidth: '414px'}} className='mx-auto'>
      <Nav title='Pilih Lokasi' back='/' />
      <div className=' mx-[20px]'>
        {gabung.map((e) => (
          <div key={e.id}>
            <a
              href={e.form}
              target='_blank'
              className='flex w-full justify-between py-[28px]'
              rel='noreferrer'
            >
              <h1 className='ml-[10px] text-lg font-normal '>{e.kota}</h1>
              <div className='mr-[7px]'>
                <svg
                  width='24'
                  height='24'
                  viewBox='0 0 24 24'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    d='M8.95001 4.08004L15.47 10.6C16.24 11.37 16.24 12.63 15.47 13.4L8.95001 19.92'
                    stroke='#171717'
                    strokeWidth='1.5'
                    strokeMiterlimit='10'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                  />
                </svg>
              </div>
            </a>
            <hr />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Gabung;
