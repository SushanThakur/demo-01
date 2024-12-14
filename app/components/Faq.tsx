import React from 'react'

const Faq = () => {
  return (
    <div className='section-container p-10'>
      <div className='section gap-16'>

        <div className='flex flex-col gap-8 justify-center items-center'>
          <span className='badge badge-outline p-4 font-bold text-gray-400 tracking-widest text-xl  '>Frequently asked</span>
          <h2 className='sm:text-6xl text-4xl font-bold text-center max-w-[800px]'>Frequently Asked Question</h2>

          <div className='flex flex-wrap gap-8 items-center justify-center max-w-[800px] w-[95vw] '>

            <div className="collapse collapse-arrow bg-blue-200 w-full">
              <input type="radio" name="my-accordion-2" defaultChecked />
              <div className="collapse-title text-xl font-medium">Question 1</div>
              <div className="collapse-content">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti perspiciatis tempore fugit iure culpa velit dolor, labore nemo ut laudantium!</p>
              </div>
            </div>
            <div className="collapse collapse-arrow bg-blue-200">
              <input type="radio" name="my-accordion-2" />
              <div className="collapse-title text-xl font-medium">Question 2</div>
              <div className="collapse-content">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Et, ad labore? Modi pariatur facilis, hic quidem fuga maiores error placeat.</p>
              </div>
            </div>
            <div className="collapse collapse-arrow bg-blue-200">
              <input type="radio" name="my-accordion-2" />
              <div className="collapse-title text-xl font-medium">Question 3</div>
              <div className="collapse-content">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore dignissimos officia iure est? Obcaecati voluptatibus doloremque commodi at sunt deserunt.</p>
              </div>
            </div>
            <div className="collapse collapse-arrow bg-blue-200">
              <input type="radio" name="my-accordion-2" />
              <div className="collapse-title text-xl font-medium">Question 4</div>
              <div className="collapse-content">
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquid deleniti nemo quae mollitia officia! Autem quod maiores magni explicabo dolorem?</p>
              </div>
            </div>

          </div>


        </div>

      </div>
    </div>
  )
}

export default Faq
