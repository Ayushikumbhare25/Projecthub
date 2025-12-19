import React, { useState } from 'react'
import { Button } from './ui/button'
import { Search } from 'lucide-react'
import { useDispatch } from 'react-redux';
import { setSearchedQuery } from '@/redux/jobSlice';
import { useNavigate } from 'react-router-dom';

const HeroSection = () => {
    const [query, setQuery] = useState("");
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const searchJobHandler = () => {
        dispatch(setSearchedQuery(query));
        navigate("/browse");
    }

    return (
        <div className='text-center'>
            <div className='flex flex-col gap-5 my-10'>
                {/* <span className=' mx-auto px-4 py-2 rounded-full bg-gray-100 text-[#F83002] font-medium'>We Build & Manage Impactful Projects</span> */}
                <section className="w-full flex justify-center px-4 pt-10">
  <div
    className="
      relative w-full max-w-6xl
      bg-cover bg-center
      rounded-3xl
      overflow-hidden
    "
    style={{
      backgroundImage:
        "url('https://res.cloudinary.com/dz2gmsumk/image/upload/v1766167350/job_khen6m.avif')",
    }}
  >
    {/* Stronger Overlay for readability */}
    <div className="absolute inset-0 bg-black/65"></div>

    {/* Content */}
    <div className="relative z-10 flex flex-col items-center text-center px-6 py-24 space-y-6">

      {/* Badge */}
      <span className="
        inline-block px-6 py-2 rounded-full
        bg-gradient-to-r from-indigo-500 to-pink-500
        text-white text-sm font-semibold tracking-wide
        shadow-md
      ">
        We Build & Manage Impactful Projects
      </span>

      {/* Heading */}
      <h1 className="
        text-4xl md:text-5xl lg:text-6xl
        font-extrabold leading-tight tracking-tight
        text-white
      ">
        Showcasing Projects <br />
        That Inspire{" "}
        <span className="bg-gradient-to-r from-indigo-300 to-pink-400 bg-clip-text text-transparent">
          Trust
        </span>
      </h1>

      {/* Paragraph */}
      <p className="
        max-w-xl
        text-base md:text-lg
        text-gray-200
        leading-relaxed
      ">
        Discover our projects, read what our clients say, and get in touch with us easily through our platform.
      </p>

    </div>
  </div>
</section>



                {/* <div className='flex w-[40%] shadow-lg border border-gray-200 pl-3 rounded-full items-center gap-4 mx-auto'>
                    <input
                        type="text"
                        placeholder='Find your dream jobs'
                        onChange={(e) => setQuery(e.target.value)}
                        className='outline-none border-none w-full'

                    />
                    <Button onClick={searchJobHandler} className="rounded-r-full bg-[#6A38C2]">
                        <Search className='h-5 w-5' />
                    </Button>
                </div> */}
            </div>
        </div>
    )
}

export default HeroSection