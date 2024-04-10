import React from 'react'
import { MdOutlineStar } from "react-icons/md";
import Progress from '../components/Progress';
import ButtonComponent from '../components/ButtonComponent'
const OnTheWay = () => {
  return (
    <div>
      <Progress complete="100" show={true} prevpage="/math" />
      <div className='pl-10 pr-10 p-5 md:flex md:justify-center' >
        <div className='md:flex md:w-[70%] md:justify-center md:gap-[9.25rem]'>
          <div className='flex justify-center'>
            <img src="donelogo.png" alt="" />
          </div>
          <div className='md:w-1/2 md:flex md:flex-col md:justify-center '>
            <p className='font-bold sm:text-3xl text-2xl pl-4'>You're on your way!</p>
            <p className='flex text-yellow-500 text-2xl md:text-4xl pl-4 md:pt-5'>
              <MdOutlineStar />
              <MdOutlineStar />
              <MdOutlineStar />
              <MdOutlineStar />
              <MdOutlineStar />
            </p>
            <p className='font-bodyFont text-sm text-gray-700 text-justify pl-4 w-[90%] '>"Through its engaging and well-structured courses, Brilliant has taught me mathematical concepts that I previously struggled to understand. I now feel confident approaching both technical job interviews and real world problem solving situations."</p>
            <p className='pl-4 pt-3 font-bodyFont text-sm italic'>- Jacob S.</p>
          </div>
        </div>
      </div>
      <div className='md:pt-5'>
        <ButtonComponent page="/learningpath" />
      </div>
    </div>
  )
}

export default OnTheWay