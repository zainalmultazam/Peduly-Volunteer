import React, {useEffect, useState} from 'react';
import {Link} from 'react-router-dom';
import Nav from '../../components/Nav';
import {useTransition, animated} from 'react-spring';
import axios from 'axios';
import {API_URL, IMAGE_API_URL} from '../../config/API';

function Anggota() {
  const [data, setData] = useState([]);
  const [search, setSearch] = useState(false);
  const [searchLoacation, setSearchLocation] = useState(false);
  const [total, setTotal] = useState(0);
  const [locations, setLocations] = useState([]);
  const [query, setQuery] = useState('');
  const [kategori, setKategori] = useState('');
  const [loading, setIsloading] = useState(false);
  const [active, setActive] = useState('none');

  const transitionSearch = useTransition(search, {
    from: {x: 0, y: -5, opacity: 0},
    enter: {x: 0, y: 0, opacity: 1},
    leave: {x: 0, y: -100, opacity: 0, display: 'none'},
  });

  const transitionSearchLocation = useTransition(searchLoacation, {
    from: {x: 0, y: -5, opacity: 0},
    enter: {x: 0, y: 0, opacity: 1},
    leave: {x: 0, y: -100, opacity: 0, display: 'none'},
  });

  const getAnggota = async () => {
    const response = await axios.get(API_URL);
    setIsloading(true);
    setData(response.data.data);
    setTotal(response.data.total);
  };

  const getLocatonArray = () => {
    let locs = [];

    data.forEach((e) => {
      locs = [...locs, e.location];
    });

    setLocations([...new Set(locs)]);
  };

  useEffect(() => {
    getAnggota();
  }, []);

  useEffect(() => {
    getLocatonArray();
  }, [data]);

  const anggota = data.filter((e) => {
    if (active === 'none') {
      return e;
    } else if (active === 'search') {
      if (query === '') {
        return e;
      } else if (
        e.name.replace(/\s/g, '').toLowerCase().includes(query.toLowerCase())
      ) {
        return e;
      }
    } else if (active === 'kategori') {
      if (kategori === '' || kategori === 'semua') {
        return e;
      } else if (
        e.location
          .replace(/\s/g, '')
          .toLowerCase()
          .includes(kategori.toLowerCase())
      ) {
        return e;
      }
    }
    return '';
  });

  return (
    <div style={{maxWidth: '414px'}} className='mx-auto'>
      <Nav title='Volunteer' back='/' />
      <div className='mx-[30px]'>
        <div className='flex justify-between items-center mt-[20px] transition-all duration-75'>
          <div className='flex'>
            <h1 className='mr-[8px] text-[#E7513B] text-lg font-medium'>
              {total}
            </h1>
            <h1 className='text-lg font-medium'>Volunter</h1>
          </div>
          <div className='flex'>
            <span
              onClick={() => {
                setSearch(!search);
                setSearchLocation(false);
                setActive('search');
              }}
              className='cursor-pointer'
            >
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
            <span
              className='ml-[12px] cursor-pointer'
              onClick={() => {
                setSearchLocation(!searchLoacation);
                setSearch(false);
                setActive('kategori');
              }}
            >
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
        {transitionSearch(
          (style, item) =>
            item && (
              <animated.form
                style={style}
                className='w-full border-2 my-5 h-[60px] rounded-full flex items-center'
              >
                <input
                  type='text'
                  onChange={(e) => setQuery(e.target.value)}
                  className=' w-full outline-none px-5 bg-transparent text-[16px] leading-[22px] font-normal text-[#212121]'
                  placeholder='search'
                />
                <button hidden type='submit' />
              </animated.form>
            ),
        )}
        {transitionSearchLocation(
          (style, item) =>
            item && (
              <animated.form
                style={style}
                className='w-full border-2 my-5 h-[60px] rounded-full flex items-center'
              >
                <select
                  name='kota'
                  className='w-full bg-transparent outline-none mx-5 text-[16px] leading-[22px] font-normal text-[#212121] py-2 cursor-pointer'
                  placeholder='Pilih Lokasi'
                  onChange={(e) => setKategori(e.target.value)}
                  defaultValue={'DEFAULT'}
                >
                  <option value={'DEFAULT'} hidden>
                    Pilih Kota
                  </option>
                  <option value='semua'>semua kota</option>
                  {locations?.map((e) => (
                    <option key={e} value={e}>
                      {e}
                    </option>
                  ))}
                </select>
              </animated.form>
            ),
        )}
        {loading ? (
          anggota.length > 0 ? (
            anggota.map((e) => (
              <div key={e.id}>
                <Link to={`/anggota/detail/${e.id}`}>
                  <div className='flex w-ful my-[20px] items-center mt-[30px]'>
                    <div>
                      <img
                        src={`${IMAGE_API_URL}/${e.image}`}
                        className='rounded-full w-[48px] h-[48px]'
                        alt=''
                      />
                    </div>
                    <div className='ml-[12px]'>
                      <h3 className='text-sm font-semibold'>{e.name}</h3>
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
                        <p className='ml-[6px]'>{e.location}</p>
                      </div>
                    </div>
                  </div>
                </Link>
                <hr />
              </div>
            ))
          ) : (
            <p className='w-full text-center py-6 text-sm'>Tidak Ditemukan</p>
          )
        ) : (
          <p className='w-full text-center py-6 text-sm'>sabar</p>
        )}
      </div>
    </div>
  );
}

export default Anggota;
