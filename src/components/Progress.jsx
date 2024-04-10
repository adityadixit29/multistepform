import { useEffect, useState } from 'react';
import { MdArrowBackIosNew } from "react-icons/md";
import { Link } from 'react-router-dom';

const Progress = ({complete, show, prevpage}) => {
  const [width, setWidth] = useState(0);
  const [showstatus, setShowstatus] = useState(false);
  useEffect(() => {
    setWidth(complete);
    setShowstatus(show);
  }, []);

  return (
    <div className='flex items-center justify-center pl-5 pr-5 gap-1 sm:pl-[10.5rem] sm:pr-[10.5rem]'>
      {showstatus? <Link to={prevpage} className='cursor-pointer sm:mt-5 sm:mb-5 mt-1 mb-1 border-none hover:bg-gray-100 rounded p-2 text-black'>
        <MdArrowBackIosNew />
      </Link> : ""}
      <div className='mt-5 mb-5 w-full h-1'>
        <div className='w-full h-1 bg-slate-200 rounded-md'>
          <div className='h-1 bg-green-700 rounded-md' style={{ width: `${width}%` }}>
            {/* Dynamic width applied here */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Progress;
