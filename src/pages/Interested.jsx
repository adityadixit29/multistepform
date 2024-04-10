import { useState } from 'react'
import Choice from '../components/Choice'
import ButtonComponent from '../components/ButtonComponent'
import Description from '../components/Description'
import Progress from '../components/Progress'
import Button from '../components/Button'
const Interested = () => {
  const [clicked, setclicked] = useState(false);
  const handleclick = ()=>{
    setclicked(true);
    // console.log(clicked);
  }

  return (
    <div>
       <div>
       <Progress complete="40" show={true} prevpage="/"/>
       </div>
      <Description title="Which are you most interested in?" des="Choose just one. This will help us get you started(but won't limit your experience"/>
       <button onClick={handleclick}>
      <div className='md:flex md:flex-col md:items-center w-[100vw]'>
      <Choice title="Learning specific skills to advance my career" subtitle="" img="graph.png"/>
      <Choice  title="Exploring new topics I'm interested in" subtitle="" img="explore.png"/>
      <Choice title="Refreshing my math foundations" subtitle="" img="refresh.png"/>
      <Choice title="Excercising my brain to stay sharp" subtitle="" img="target.png"/>
      <Choice title="Something else" subtitle="" img="somethingelse.png"/>
      </div>
      </button>

      <div className='flex justify-center m-4'>
      {clicked ? <ButtonComponent page="/rightplace"/> : <Button/>}
      </div>
    </div>
  )
}

export default Interested