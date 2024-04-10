import {  useEffect, useState } from 'react'

const Mathcomponent = ({img, title, subtitle, width}) => {
    const [newwidth, setNewWidth] = useState("0px")
    useEffect(()=>{
        setNewWidth(width)
    })
  return (
    <button className='border-1 border-gray-300 w-[12.5rem] h-[170px] rounded flex flex-col justify-center items-center focus:border-orange-300 focus:shadow-md hover:scale-105 transition-transform duration-300'>
        <img src={img} alt="" className='pt-2' style={{width:`${newwidth}px`}}/>
        <div className='pt-4 flex gap-2 flex-col'>
            <p className='m-0 font-titleFont font-bold text-xs text-center'>{title}</p>
            <p className='m-0 font-bodyFont text-gray-400'>{subtitle}</p>
        </div>
    </button>
  )
}

export default Mathcomponent