import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
const ButtonComponent = ({page}) => {
  const [nextpage, setnextpage] = useState("");
  useEffect(()=>{
    setnextpage(page);
  })
  return (
    <div className='w-full flex justify-center'>
    <Link to={nextpage} className='flex justify-center items-center border rounded w-full bg-black text-white h-[50px] max-w-[176px] no-underline' disabled>Continue</Link>
</div>

  )
}

export default ButtonComponent