import React from 'react';

const AboutUs = () => {
  return (
    <div className='section-container p-10 bg-pink-100'>
      <div className='section gap-16'>

        <div className='h-[520px] w-[95vw] max-w-[440px] overflow-hidden rounded-xl group flex items-end justify-end'>
          <img
            src="/about-us.png"
            alt="About Us"
            className='w-[440px] h-full group-hover:scale-105 transition-all duration-300 rounded-xl'
          />
          <div className='absolute bg-white flex items-center gap-4 p-4 rounded-xl m-4'>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-14">
              <path strokeLinecap="round" strokeLinejoin="round" d="M16.712 4.33a9.027 9.027 0 0 1 1.652 1.306c.51.51.944 1.064 1.306 1.652M16.712 4.33l-3.448 4.138m3.448-4.138a9.014 9.014 0 0 0-9.424 0M19.67 7.288l-4.138 3.448m4.138-3.448a9.014 9.014 0 0 1 0 9.424m-4.138-5.976a3.736 3.736 0 0 0-.88-1.388 3.737 3.737 0 0 0-1.388-.88m2.268 2.268a3.765 3.765 0 0 1 0 2.528m-2.268-4.796a3.765 3.765 0 0 0-2.528 0m4.796 4.796c-.181.506-.475.982-.88 1.388a3.736 3.736 0 0 1-1.388.88m2.268-2.268 4.138 3.448m0 0a9.027 9.027 0 0 1-1.306 1.652c-.51.51-1.064.944-1.652 1.306m0 0-3.448-4.138m3.448 4.138a9.014 9.014 0 0 1-9.424 0m5.976-4.138a3.765 3.765 0 0 1-2.528 0m0 0a3.736 3.736 0 0 1-1.388-.88 3.737 3.737 0 0 1-.88-1.388m2.268 2.268L7.288 19.67m0 0a9.024 9.024 0 0 1-1.652-1.306 9.027 9.027 0 0 1-1.306-1.652m0 0 4.138-3.448M4.33 16.712a9.014 9.014 0 0 1 0-9.424m4.138 5.976a3.765 3.765 0 0 1 0-2.528m0 0c.181-.506.475-.982.88-1.388a3.736 3.736 0 0 1 1.388-.88m-2.268 2.268L4.33 7.288m6.406 1.18L7.288 4.33m0 0a9.024 9.024 0 0 0-1.652 1.306A9.025 9.025 0 0 0 4.33 7.288" />
            </svg>
            <div className='flex flex-col'>
              <span className='text-5xl font-semibold'>250+</span>
              <span className='text-sm'>Services we provide</span>
            </div>
          </div>
        </div>

        <div className='flex flex-col gap-8 max-w-[600px]'>
          <span className='badge badge-outline p-4 font-bold text-gray-400 tracking-widest text-xl '>ABOUT US</span>
          <h2 className='sm:text-6xl text-4xl font-bold'>Financial Future with Expertise</h2>

          {['Trusted Service', 'Consulting Group', 'Wealth Advisors'].map((title, index) => (
            <div key={index} className='flex flex-row gap-2 items-start justify-start '>

              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="size-12 h-10">
                <path d="M6 9h6V5l7 7-7 7v-4H6V9z" />
              </svg>

              <div>
                <span className='sm:text-4xl text-3xl'>{title}</span>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iure minus, ipsum eveniet quam fugiat ab pariatur modi ipsam reprehenderit excepturi!</p>
              </div>

            </div>
          ))}
        </div>

      </div>
    </div>
  );
}

export default AboutUs;

