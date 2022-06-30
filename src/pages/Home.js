import React from 'react';
import Navbar from '../components/Navbar';
import data from '../json/home.json';

function Home() {
  const kategori = data.kategori;
  const pesan = data.katamereka;

  return (
    <div style={{maxWidth: '414px'}} className='mx-auto'>
      <Navbar />
      <div className='relative mt-[72px]'>
        <img
          src='https://s3-alpha-sig.figma.com/img/ce4b/c0a3/8b29531d1bc68e83c2f9000187c323e6?Expires=1657497600&Signature=cGBPMeGx3bnYuICK659XOVgMuF12E-dnJCmiEa5I68JaCVA0V42gL6MxSUG6~EF-XJuPJRwymTIfeEbuLOU4cukFYGGMu4LKdslSW3fW3nnr9wLkPDrO3leVrqFNuiTLl7uZ4kXqHDnIzMm2JGc3p-UXjqZnjjQl-lsJr1wJDhwuPKSYybD6x~mXmODC6cQpfQ9tPvx3n10J4JUit1bwERSX002Q2-x~BL70Ca4EI6CupgZ2dsGIaoHMGRLgdgJ4vdCfkugVARDkzkW6ca8QUHHqcEkm~rPoutpHkQQxid7yRHMh-CT87FeUTg6C5xKuXIPqa62Tka-UkH43bTHJZw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA'
          alt=''
          width={414}
          height={414}
          className='object-cover'
        />
        <div className='absolute top-0 flex justify-center text-center w-full  text-white  mt-[52px] '>
          <h1 className='text-xl  font-semibold max-w-[254px] '>
            Menjadi bagian dari komunitas orang baik
          </h1>
        </div>
        <div className='relative shadow-sm bg-white rounded-[15px] w-full max-w-[354px] flex text-center mx-auto justify-evenly h-[100px] items-center -mt-[50px] z-auto'>
          <div>
            <h3 className='text-xl font-semibold text-[#E7513B]'>1340+</h3>
            <h6 className='text-xs font-light text-[#000000]'>Volunteer</h6>
          </div>
          <div>
            <h3 className='text-xl font-semibold text-[#E7513B]'>670+</h3>
            <h6 className='text-xs font-light text-[#000000]'>Program</h6>
          </div>
          <div>
            <h3 className='text-xl font-semibold text-[#E7513B]'>320+</h3>
            <h6 className='text-xs font-light text-[#000000]'>Dukungan</h6>
          </div>
        </div>
      </div>
      <div className='mx-[30px] mt-[24px] text-[#212121]'>
        <h1 className=' font-medium text-lg'>Tentang Peduly</h1>
        <p className='font-normal text-base mt-[16px]'>
          Mulai dari menjaga lingkungan sampai membantu kemanusiaan, kita selalu
          berharap dunia menjadi tempat tinggal yang lebih baik.
        </p>
        <p className='font-normal text-base mt-[16px]'>
          di Peduly, kami memberdayakan volunteer <br />
          yang memiliki niat baik menjadi sebuah <br /> tindakan baik. mulai
          dari aktivitas nyata semua perubahan bisa terjadi.
        </p>
        <hr className='mt-[41px]' />
        <div className='mt-[24px]'>
          <h1 className='text-lg font-medium'>Aksi nyata</h1>
          <p className='mt-[16px] text-sm font-normal'>
            Kepedulian menjadi sebuah tindakan
          </p>
        </div>
        <div className='overflow-x-scroll whitespace-nowrap mx-0 py-[33px] pr-[20px]'>
          {kategori.map((value) => (
            <button
              key={value.object}
              type='button'
              className='h-[41px] px-[35px] ml-2 py-[5px] shadow-md text-[#e7513b] mr-[10px] rounded-[15px]  text-[14px] bg-white inline-block '
            >
              <div className='flex flex-row content-center'>
                <img
                  style={{
                    marginRight: '10px',
                    width: '20px',
                  }}
                  src={value.imgUrl}
                  alt=''
                />
                {value.title}
              </div>
            </button>
          ))}
        </div>
      </div>
      <div className='shadow-inner'>
        <div className='h-[371px]  text-center flex flex-col mx-auto justify-center'>
          <h1 className=' text-lg font-medium mb-[16px]'>Kata mereka</h1>
          <div className='overflow-x-scroll flex flex-row'>
            {pesan.map((e, i, r) => (
              <div className='inline-block py-1 mx-[8px]'>
                <div
                  className={
                    'flex items-center flex-col  w-[348px] h-[214px] shadow-md rounded-[15px] ' +
                    (i + 1 === r.length ? 'mr-[25px]' : i === 0 && 'ml-[25px]')
                  }
                >
                  <div className='mt-[23px]'>
                    <svg
                      width='48'
                      height='48'
                      viewBox='0 0 48 48'
                      fill='none'
                      xmlns='http://www.w3.org/2000/svg'
                    >
                      <circle cx='24' cy='24' r='24' fill='#D9D9D9' />
                    </svg>
                  </div>
                  <div className='w-[80px] h-[35px] mt-[8px]'>
                    <h3 className='text-xs font-semibold'>Brook Lopes</h3>
                    <h4 className='text-[10px] leading-4 font-light'>
                      Volunteer Peduly
                    </h4>
                  </div>
                  <p className='text-sm font-normal max-w-[283px]'>
                    “Saya sangat puas dengan semua program yang saya kerjakan di
                    peduly. saya bangga memiliki kesempatan menjadi volunteer
                    disini.”
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className='mt-[24px] text-center max-w-[348px] mx-auto'>
        <h1 className='text-lg font-semibold'>Tunggu apa lagi!</h1>
        <p className='text-base font-normal'>
          Saatnya menjadi pahlawan dimulai dari <br /> menjadi volunteer bersama
          kami
        </p>
      </div>
      <div className='mt-[16px] mb-[32px] mx-[30px]'>
        <button className='bg-[#E7513B] text-white w-full font-bold rounded-full text-[18px]   h-[60px]'>
          Gabung Sekarang
        </button>
        <button className='bg-white text-[#E7513B] border-[1px] border-[#E7513B] w-full font-bold rounded-full text-[18px] mt-[16px]  h-[60px]'>
          Lihat Anggota
        </button>
      </div>
    </div>
  );
}

export default Home;
