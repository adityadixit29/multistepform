
const Choice = ({ title, subtitle, img }) => {
    return (
        <div className='2xl:w-1/2 xl:w-[60%] lg:w-[70%] md:w-[80%] p-4 pb-0 pt-3'>
            <button className='w-full border-2 flex gap-3 p-3 sm:pt-2 pt-2 pb-2 rounded focus:ring-2 focus:ring-orange-100 focus:border-1 focus:border-gray-300 hover:transform hover:scale-105 transition-transform duration-300 text-start'>
                <div className='flex items-center justify-center gap-4'>
                    <img src={img} alt="" className='w-10' />
                    <p className="m-0 font-bodyFont text-gray-500">
                        <span className='font-titleFont font-semibold text-black'>{title}</span> {subtitle}
                    </p>
                </div>
            </button>
        </div>
    );
};

export default Choice;
