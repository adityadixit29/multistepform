import React from 'react'
import Progress from '../components/Progress'
import ButtonComponent from '../components/ButtonComponent'
const Rightplace = () => {
  return (
    <>
      <div>
        <Progress complete="60" show={true} prevpage="/interested" />
        <div className='md:flex items-center md:gap-[9rem] md:pt-10'>
          <div className='w-full flex justify-center md:justify-end mb-12 md:w-1/2'>
            <img src="pully.png" alt="" className='sm:w-[20rem] lg:w-[20rem] w-[15rem]' />
          </div>
          <div className='mb-10 flex justify-start p-4 md:w-1/2'>
            <div className='text-start font-titleFont sm:pb-7 p-2 md:w-[70%]'>
              <h1 className='font-bold sm:text-3xl text-2xl '>You're in the right place</h1>
              <p className='font-bodyFont text-sm text-black'>Brilliant gets you hands-on to help improve your professional skills and knowledge. You'll interact with concepts and solve fun problems in math, science, and computer science</p>
            </div>
          </div>
        </div>
      </div>
     <div className='sm:mt-10'>
     <ButtonComponent page="/math"/>
     </div>
    </>
  )
}

export default Rightplace