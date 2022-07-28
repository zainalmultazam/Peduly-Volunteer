import axios from 'axios';
import React, {useEffect, useState} from 'react';
import {useParams} from 'react-router-dom';
import Nav from '../../components/Nav';
import {API_URL, IMAGE_API_URL} from '../../config/API';

function Detail() {
  const [data, setData] = useState();

  const {slug} = useParams();

  const getDetail = async () => {
    const response = await axios.get(`${API_URL}/${slug}`);
    setData(response.data.data);
  };

  useEffect(() => {
    getDetail();
  }, [data]); // eslint-disable-line

  return (
    <div style={{maxWidth: '414px'}} className='mx-auto'>
      <Nav title='Detail' back='/anggota' />
      <div className='mx-[20px] mb-14'>
        <div className='text-center h-[201px] flex flex-col items-center justify-center'>
          <img
            src={`${IMAGE_API_URL}/${data?.image}`}
            alt=''
            className='rounded-full w-[86px] h-[86px] object-cover'
          />
          <h1 className='mt-[14px] text-lg font-medium'>{data?.name}</h1>
          <p className='text-sm font-normal'>{data?.position}</p>
        </div>
        <hr />
        <div className='flex py-[24px]'>
          <div className='mt-1 ml-[5px]'>
            <svg
              width='24'
              height='24'
              viewBox='0 0 24 24'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                d='M7.47998 18.35L10.58 20.75C10.98 21.15 11.88 21.35 12.48 21.35H16.28C17.48 21.35 18.78 20.45 19.08 19.25L21.48 11.95C21.98 10.55 21.08 9.35 19.58 9.35H15.58C14.98 9.35 14.48 8.85 14.58 8.15L15.08 4.95C15.28 4.05 14.68 3.05 13.78 2.75C12.98 2.45 11.98 2.85 11.58 3.45L7.47998 9.55'
                stroke='#171717'
                strokeWidth='1.5'
                strokeMiterlimit='10'
              />
              <path
                d='M2.37988 18.35V8.55C2.37988 7.15 2.97988 6.65 4.37988 6.65H5.37988C6.77988 6.65 7.37988 7.15 7.37988 8.55V18.35C7.37988 19.75 6.77988 20.25 5.37988 20.25H4.37988C2.97988 20.25 2.37988 19.75 2.37988 18.35Z'
                stroke='#171717'
                strokeWidth='1.5'
                strokeLinecap='round'
                strokeLinejoin='round'
              />
            </svg>
          </div>

          <div className='ml-[17px]'>
            <h1 className='text-lg font-medium'>Ulasan</h1>
            <p className='text-[14px] leading-[22px] font-normal text-[#171717]'>
              {data?.review}
            </p>
          </div>
        </div>
        <hr />
        <div className='flex py-[24px]'>
          <div className='mt-1 ml-[5px]'>
            <svg
              width='24'
              height='24'
              viewBox='0 0 24 24'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                d='M11.9999 13.43C13.723 13.43 15.1199 12.0331 15.1199 10.31C15.1199 8.58687 13.723 7.19 11.9999 7.19C10.2768 7.19 8.87988 8.58687 8.87988 10.31C8.87988 12.0331 10.2768 13.43 11.9999 13.43Z'
                stroke='#171717'
                strokeWidth='1.5'
              />
              <path
                d='M3.61995 8.49C5.58995 -0.170002 18.42 -0.160001 20.38 8.5C21.53 13.58 18.37 17.88 15.6 20.54C13.59 22.48 10.41 22.48 8.38995 20.54C5.62995 17.88 2.46995 13.57 3.61995 8.49Z'
                stroke='#171717'
                strokeWidth='1.5'
              />
            </svg>
          </div>

          <div className='ml-[17px]'>
            <h1 className='text-lg font-medium'>Lokasi</h1>
            <p className='text-sm font-normal text-[#171717]'>
              {data?.location}
            </p>
          </div>
        </div>
        <hr />
        <div className='flex py-[24px] '>
          <div className='mt-1 ml-[5px]'>
            <svg
              width='24'
              height='24'
              viewBox='0 0 24 24'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                d='M3.5 18V7C3.5 3 4.5 2 8.5 2H15.5C19.5 2 20.5 3 20.5 7V17C20.5 17.14 20.5 17.28 20.49 17.42'
                stroke='#171717'
                strokeWidth='1.5'
                strokeLinecap='round'
                strokeLinejoin='round'
              />
              <path
                d='M6.35 15H20.5V18.5C20.5 20.43 18.93 22 17 22H7C5.07 22 3.5 20.43 3.5 18.5V17.85C3.5 16.28 4.78 15 6.35 15Z'
                stroke='#171717'
                strokeWidth='1.5'
                strokeLinecap='round'
                strokeLinejoin='round'
              />
              <path
                d='M8 7H16'
                stroke='#171717'
                strokeWidth='1.5'
                strokeLinecap='round'
                strokeLinejoin='round'
              />
              <path
                d='M8 10.5H13'
                stroke='#171717'
                strokeWidth='1.5'
                strokeLinecap='round'
                strokeLinejoin='round'
              />
            </svg>
          </div>

          <div className='ml-[17px]'>
            <h1 className='text-lg font-medium'>Sertifikat</h1>
            <p className='text-sm font-normal text-[#E7513B]'>
              {data?.cetificate ? (
                <a
                  href={`${data?.cetificate}`}
                  target='_blank'
                  rel='noreferrer'
                >
                  {data.cetificate}
                </a>
              ) : (
                <span className='text-[#171717]'>
                  Belum bisa mendapatkan sertifikat
                </span>
              )}
            </p>
          </div>
        </div>
        <hr />
      </div>
    </div>
  );
}

export default Detail;
