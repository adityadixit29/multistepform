import { useState } from 'react'
import Choice from '../components/Choice'
import ButtonComponent from '../components/ButtonComponent'
import Description from '../components/Description'
import Progress from '../components/Progress'
import Button from '../components/Button'

const Describe = () => {
  const [clicked, setclicked] = useState(false);
  const handleclick = ()=>{
    setclicked(true);
    // console.log(clicked);
  }
  return (
    <div>
      <Progress complete="20" show={false} />
      <Description title="Which describes you best?" des="This will help us personalize your experience"/>
    <button onClick={handleclick}>
    <div className='md:flex md:flex-col md:items-center w-[100vw]'>
        <Choice title="Student" subtitle="or soon to be enrolled" img="student1.png" />
        <Choice title="Professional" subtitle="pursuing a career" img="professional.png" />
        <Choice title="Parent" subtitle="of a school-age-child" img="parents.png" />
        <Choice title="Lifelong Learner" subtitle="" img="student.png" />
        <Choice title="Teacher" subtitle="" img="teacher.png" />
        <Choice title="Other" subtitle="" img="other.png" />
      </div>
    </button>
      
      <div className='flex justify-center m-4'>
      {clicked ? <ButtonComponent page="/interested" /> : <Button/>}
      </div>
    </div>
  )
}

export default Describe