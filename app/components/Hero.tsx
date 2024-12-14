const Hero = () => {
  return (
    <div className='w-screen flex items-center justify-center '>


      <div className='w-[95vw] max-w-[1400px] flex lg:flex-row flex-col items-center justify-center gap-8 md:gap-16 mt-[80px]'>
        <div className='flex flex-col gap-8 sm:max-w-[600px]'>
          <h1 className='sm:text-8xl text-6xl font-bold'>Best Solution For Business</h1>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatibus nostrum libero deserunt facere quisquam quia repudiandae suscipit dolor, pariatur odit.</p>


          <div className='flex flex-row gap-8'>
            <div className='flex flex-row gap-4 items-center bg-green-500 px-8 py-4 rounded-full font-bold cursor-pointer hover:bg-green-600 delayTime text-white'>
              Get Started
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4">
                <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
              </svg>

            </div>
            <div className='flex flex-row gap-4 items-center px-8 py-4 rounded-full border-2 border-green-500 cursor-pointer hover:bg-green-500 delayTime'>Learn More</div>
          </div>


          <div className='flex flex-row gap-4'>
            <div className="avatar-group -space-x-6 rtl:space-x-reverse">
              <div className="avatar">
                <div className="w-12">
                  <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
                </div>
              </div>
              <div className="avatar">
                <div className="w-12">
                  <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
                </div>
              </div>
              <div className="avatar placeholder">
                <div className="bg-neutral text-neutral-content w-12">
                  <span>1M+</span>
                </div>
              </div>
            </div>
            <div className='flex flex-col items-center justify-center'>
              <span className='text-xl'>Happy Client</span>
              <div className="rating gap-2">
                <div>
                  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" disabled />
                  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" disabled />
                  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" disabled />
                  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" disabled />
                  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                </div>
                (5.0)
              </div>
            </div>
          </div>

        </div>


        <div className='lg:h-[520px] overflow-hidden rounded-xl group flex flex-row items-end justify-end h-[520px]'>
          <img
            src="/hero-person-standing.png"
            alt="Home Page Picture"
            className='w-[440px] group-hover:scale-105 delayTime'
          />
          <div className='absolute bg-white flex flex-row items-center gap-4 p-4 rounded-xl m-4'>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-14">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 0 0 2.625.372 9.337 9.337 0 0 0 4.121-.952 4.125 4.125 0 0 0-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 0 1 8.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0 1 11.964-3.07M12 6.375a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0Zm8.25 2.25a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0Z" />
            </svg>

            <div className='flex flex-col'>
              <span className='text-5xl font-semibold'>50+</span>
              <span className='text-sm'>Active Clients</span>
            </div>
          </div>
        </div>


      </div>
    </div>
  )
}

export default Hero