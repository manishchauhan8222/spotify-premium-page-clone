import React from 'react'

const Hero = () => {
  return (
    <div className='w-full h-[480px] bg-[#1D75DE] text-white mx-auto'>
      <div className='lg:py-36 lg:px-40 text-left mx-auto py-[10%] px-[2%]'>
        <h1 className='md:text-4xl text-2xl font-extrabold'>Get Premium free for 1 month</h1>
        <p className='py-10 md:text-2xl text-xl font-lighct font-normal'>Only $9.99/month after. Cancel anytime.</p>
        <div className="flex flex-col md:flex-row ">
            <button className='uppercase rounded-full bg-gray-900 text-sm px-8 py-4 hover:bg-[#0B0909]'>get started</button>
            <button className='uppercase text-sm my-2 px-8 py-3 bg-transparent border-2 rounded-full lg:ml-3 hover:bg-[#1A69C7]'>view plans</button>
        </div>
        <p className="py-8 text-xs font-light"><span className='underline cursor-pointer'>Terms and conditions apply.</span> 1 month free not available for users who have already tried Premium.</p>
      </div>
    </div>
  )
}

export default Hero
