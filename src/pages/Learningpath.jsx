import React, { useEffect, useState } from 'react'
import Description from '../components/Description'
import Loader from "../components/Loader"
const Learningpath = () => {
    const [loading, setLoading] = useState(true);
    useEffect(()=>{
        setTimeout(()=>{
            setLoading(false)
        },3000)
    })
  return (
    <div className='w-full h-[100vh] md:flex md:flex-col md:justify-center'>
      {loading? <Loader/> :
      <div>
      <Description title="Learning path based on your answers" des="Choose one to get started. You can switch anytime"/>

<div className='p-5 flex flex-col gap-4 justify-center items-center md:flex-row'>
    <button className='w-[350px] border rounded h-[170px] flex items-center text-sm p-3 relative hover:scale-105 transition-transform duration-300'>
       
        <div className='absolute bg-yellow-500 font-titleFont font-semibold pl-3 pr-3 pt-1 pb-1 rounded-2xl top-[-14px] left-[102px] uppercase text-sm'>Most Popular</div>
        <div className='w-[70%] flex'>
        <p className="m-0 font-bodyFont">
                <span className='font-titleFont font-semibold text-black'>Foundational Math</span> Build your foundational skills in algebra, geometry, and probability.
            </p>
        </div>
        <div>
            <img src="finalimg.png" alt="" />
        </div>
    </button>
    <div className='w-[350px] border h-[170px] flex items-center text-sm p-3 rounded hover:scale-105 transition-transform duration-300'>
        <button className='w-[70%] flex '>
        <p className="m-0 font-bodyFont">
                <span className='font-titleFont font-semibold text-black'>Mathematical Thinking</span> Build your foundational skills in algebra, geometry, and probability.
            </p>
        </button>
        <div>
            <img src="finalimg.png" alt="" />
        </div>
    </div>
    
</div>
      </div>}
      
    </div>
  )
}

export default Learningpath