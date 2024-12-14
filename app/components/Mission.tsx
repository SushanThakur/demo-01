import React from 'react'

const journey = [
  {
    id: "01",
    title: "Our Mission",
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque et accusamus suscipit sint tempora doloribus sapiente assumenda quidem laudantium nulla?"
  },
  {
    id: "02",
    title: "Our Value",
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque et accusamus suscipit sint tempora doloribus sapiente assumenda quidem laudantium nulla?"
  },
  {
    id: "03",
    title: "Our Vision",
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque et accusamus suscipit sint tempora doloribus sapiente assumenda quidem laudantium nulla?"
  },
  {
    id: "04",
    title: "Our Goal",
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque et accusamus suscipit sint tempora doloribus sapiente assumenda quidem laudantium nulla?"
  },
]

const Mission = () => {
  return (
    <div className='section-container p-10'>
      <div className='section gap-16'>

        <div className='flex flex-col gap-8 justify-center items-center'>
          <span className='badge badge-outline p-4 font-bold text-gray-400 tracking-widest text-xl  '>OUR JOURNEY</span>
          <h2 className='sm:text-6xl font-bold text-center max-w-[800px] text-4xl'>Navigating Finances with Expertise</h2>

          <div className='flex flex-wrap gap-8 items-center justify-center max-w-[1200px] '>

            {journey.map((j) => (
              <Journey {...j} key={j.id} />
            ))}

          </div>


        </div>

      </div>
    </div>
  )
}

const Journey = (props: { id: string, title: string, text: string }) => {

  const { id, title, text } = props;

  return (
    <>
      <div className='flex flex-col gap-4 max-w-[380px]'>
        <div className='flex flex-row gap-4 items-center'>
          <span className='text-2xl bg-purple-200 px-2 py-1 rounded-full'>{id}</span>
          <h2 className='text-3xl'>{title}</h2>
        </div>
        <p>{text}</p>
      </div>
    </>
  )
}

export default Mission
