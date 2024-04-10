import React, { useState } from 'react'
import Progress from '../components/Progress'
import Description from "../components/Description"
import Mathcomponent from '../components/Mathcomponent'
import ButtonComponent from '../components/ButtonComponent'
import Button from '../components/Button'
const Math = () => {
  const [clicked, setclicked] = useState(false);
  const handleclick = ()=>{
    setclicked(true);
    // console.log(clicked);
  }
  return (
    <div>
      <Progress complete="80" show={true} prevpage="/rightplace" />
      <div className='sm:pt-5'>
      <Description title="What is your math comfort level?" des="
      Choose the highest level you feel confidence in - you can always adjust later. "/>
      </div>
     <button onClick={handleclick} className='w-[100vw]'>
     <div className='p-5 flex flex-wrap gap-3 justify-center'>
      <Mathcomponent img="arithematic.png" title="Arithematic" subtitle="Introductory" width="85"/>
      <Mathcomponent img="BasicAlgebra.png" title="Basic Algebra" subtitle="Foundational" width="112"/>
      <Mathcomponent img="IntermediateAlgebra.png" title="Intermediate Algebra" subtitle="Intermediate" width="158"/>
      <Mathcomponent img="calculas.png" title="Calculas" subtitle="Advanced" width="85"/>
      </div>
     </button>
      <div className='sm:mt-10'>
      {clicked ? <ButtonComponent page="/ontheway"/> : <Button/>}
     </div>
    </div>
  )
}

export default Math
