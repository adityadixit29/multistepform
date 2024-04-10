

const Description = ({title, des}) => {
  return (
        <div className='text-center font-titleFont sm:pb-7 p-2 flex flex-col gap-3'>
            <h1 className='font-bold sm:text-3xl text-2xl '>{title}</h1>
            <p className='font-bodyFont text-sm text-gray-700'>{des}</p>
        </div>

  )
}

export default Description