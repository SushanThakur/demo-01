import React from 'react'

const Faq = () => {
  return (
    <div className='section-container p-10'>
      <div className='section gap-16'>

        <div className='flex flex-col gap-8 justify-center items-center'>
          <span className='badge badge-outline p-4 font-bold text-gray-400 tracking-widest text-xl  '>Frequently asked</span>
          <h2 className='sm:text-6xl text-4xl font-bold text-center max-w-[800px]'>Frequently Asked Question</h2>

          <div className='flex flex-wrap gap-8 items-center justify-center max-w-[800px] '>

            <div className="collapse collapse-arrow bg-base-200">
              <input type="radio" name="my-accordion-2" defaultChecked />
              <div className="collapse-title text-xl font-medium">Click to open this one and close others</div>
              <div className="collapse-content">
                <p>hello</p>
              </div>
            </div>
            <div className="collapse collapse-arrow bg-base-200">
              <input type="radio" name="my-accordion-2" />
              <div className="collapse-title text-xl font-medium">Click to open this one and close others</div>
              <div className="collapse-content">
                <p>hello</p>
              </div>
            </div>
            <div className="collapse collapse-arrow bg-base-200">
              <input type="radio" name="my-accordion-2" />
              <div className="collapse-title text-xl font-medium">Click to open this one and close others</div>
              <div className="collapse-content">
                <p>hello</p>
              </div>
            </div>
            <div className="collapse collapse-arrow bg-base-200">
              <input type="radio" name="my-accordion-2" />
              <div className="collapse-title text-xl font-medium">Click to open this one and close others</div>
              <div className="collapse-content">
                <p>hello</p>
              </div>
            </div>

          </div>


        </div>

      </div>
    </div>
  )
}

export default Faq
