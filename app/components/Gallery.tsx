import React from 'react';
import Link from 'next/link';

const Gallery = () => {
  return (
    <div className='section-container'>
      <div className='section'>
        <div className='parent sm:p-16 w-full'>
          <div className='div1 overflow-hidden rounded-3xl flex items-end justify-start group w-full'>
            <img src="/dev1.jpg" alt="" className='h-full w-full rounded-3xl hover:scale-105 delayTime' />
            <div className='absolute bg-white p-8 m-4 rounded-xl hidden gap-4 flex-col group-hover:flex duration-500'>
              <p>Federations</p>
              <Link href='/' className='text-3xl hover:text-green-500 delayTime'>Optmize Your Business.</Link>
            </div>
          </div>
          <div className='div2 overflow-hidden rounded-3xl flex items-end justify-start group'>
            <img src="/dev2.jpg" alt="" className='h-full w-full rounded-3xl hover:scale-105 delayTime' />
            <div className='absolute bg-white p-8 m-4 rounded-xl hidden gap-4 flex-col group-hover:flex'>
              <p>Federations</p>
              <Link href='/' className='text-3xl hover:text-green-500 delayTime'>Financial Counselling.</Link>
            </div>
          </div>
          <div className='div3 overflow-hidden rounded-3xl flex items-end justify-start group'>
            <img src="/dev3.jpg" alt="" className='h-full w-full rounded-3xl hover:scale-105 delayTime' />
            <div className='absolute bg-white p-8 m-4 rounded-xl hidden gap-4 flex-col group-hover:flex'>
              <p>Federations</p>
              <Link href='/' className='text-3xl hover:text-green-500 delayTime'>Optmize Your Business.</Link>
            </div>
          </div>
          <div className='div4 overflow-hidden rounded-3xl flex items-end justify-start group'>
            <img src="/dev4.jpg" alt="" className='h-full w-full rounded-3xl hover:scale-105 delayTime' />
            <div className='absolute bg-white p-8 m-4 rounded-xl hidden gap-4 flex-col group-hover:flex'>
              <p>Federations</p>
              <Link href='/' className='text-3xl hover:text-green-500 delayTime'>Optmize Your Business.</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Gallery
