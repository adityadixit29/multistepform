import React from 'react'
import Progress from '../components/Progress'
import Description from "../components/Description"
import Mathcomponent from '../components/Mathcomponent'
import ButtonComponent from '../components/ButtonComponent'
const Math = () => {
  return (
    <div>
      <Progress complete="80" show={true} prevpage="/rightplace" />
      <div className='sm:pt-5'>
      <Description title="What is your math comfort level?" des="
      Choose the highest level you feel confidence in - you can always adjust later. "/>
      </div>
      <div className='p-5 flex flex-wrap gap-3 justify-center'>
      <Mathcomponent img="arithematic.png" title="Arithematic" subtitle="Introductory" width="85"/>
      <Mathcomponent img="BasicAlgebra.png" title="Basic Algebra" subtitle="Foundational" width="112"/>
      <Mathcomponent img="IntermediateAlgebra.png" title="Intermediate Algebra" subtitle="Intermediate" width="158"/>
      <Mathcomponent img="calculas.png" title="Calculas" subtitle="Advanced" width="85"/>
      </div>
      <div className='sm:mt-10'>
     <ButtonComponent page="/ontheway"/>
     </div>
    </div>
  )
}

export default Math