// import React, { useEffect, useState } from 'react'
// import Navbar from './shared/Navbar'
// import FilterCard from './FilterCard'
// import Job from './Job';
// import { useSelector } from 'react-redux';
// import { motion } from 'framer-motion';

// // const jobsArray = [1, 2, 3, 4, 5, 6, 7, 8];

// const Jobs = () => {
//     const { allJobs, searchedQuery } = useSelector(store => store.job);
//     const [filterJobs, setFilterJobs] = useState(allJobs);

//     useEffect(() => {
//         if (searchedQuery) {
//             const filteredJobs = allJobs.filter((job) => {
//                 return job.title.toLowerCase().includes(searchedQuery.toLowerCase()) ||
//                     job.description.toLowerCase().includes(searchedQuery.toLowerCase()) ||
//                     job.location.toLowerCase().includes(searchedQuery.toLowerCase())
//             })
//             setFilterJobs(filteredJobs)
//         } else {
//             setFilterJobs(allJobs)
//         }
//     }, [allJobs, searchedQuery]);

//     return (
//         <div>
            
//             <Navbar />
            
//             <div className='max-w-7xl mx-auto mt-5'>
//                 <div className='flex gap-5'>
//                     <div className='w-20%'>
//                         <FilterCard />
//                     </div>
//                     {
//                         filterJobs.length <= 0 ? <span>Job not found</span> : (
//                             <div className='flex-1 h-[88vh] overflow-y-auto pb-5'>
//                                 <div className='grid grid-cols-3 gap-4'>
//                                     {
//                                         filterJobs.map((job) => (
//                                             <motion.div
//                                                 initial={{ opacity: 0, x: 100 }}
//                                                 animate={{ opacity: 1, x: 0 }}
//                                                 exit={{ opacity: 0, x: -100 }}
//                                                 transition={{ duration: 0.3 }}
//                                                 key={job?._id}>
//                                                 <Job job={job} />
//                                             </motion.div>
//                                         ))
//                                     }
//                                 </div>
//                             </div>
//                         )
//                     }
//                 </div>
//             </div>


//         </div>
//     )
// }

// export default Jobs
import React from "react";
import Navbar from "./shared/Navbar";
import { motion } from "framer-motion";

const testimonials = [
  {
    id: 1,
    name: "Calel",
    designation: "CEO",
    location: "India",
    image:
      "https://res.cloudinary.com/dz2gmsumk/image/upload/v1762066202/samples/smile.jpg",
    testimonial:
      "The team delivered our project on time with excellent quality. Very professional and reliable.",
  },
  {
    id: 2,
    name: "Isourse",
    designation: "Founder",
    location: "India",
    image:
      "https://res.cloudinary.com/dz2gmsumk/image/upload/v1762066209/main-sample.png",
    testimonial:
      "Great experience working with this team. They truly understand design and development.",
  },
  {
    id: 3,
    name: "Remo",
    designation: "CTO",
    location: "India",
    image:
      "https://res.cloudinary.com/dz2gmsumk/image/upload/v1762066208/cld-sample.jpg",
    testimonial:
      "A reliable partner delivering high-quality software solutions on time.",
  },
  {
    id: 4,
    name: "EmpathyMode",
    designation: "Product Manager",
    location: "India",
    image:
      "https://res.cloudinary.com/dz2gmsumk/image/upload/v1762066206/samples/woman-on-a-football-field.jpg",
    testimonial:
      "Their attention to detail and understanding of user experience is outstanding.",
  },
  {
    id: 5,
    name: "TechNova",
    designation: "Co-Founder",
    location: "India",
    image:
      "https://res.cloudinary.com/dz2gmsumk/image/upload/v1762066206/samples/upscale-face-1.jpg",
    testimonial:
      "Smooth communication and excellent delivery. Highly recommended team.",
  },
];

const Jobs = () => {
  return (
    <div>
      <Navbar />

      <div className="max-w-7xl mx-auto mt-10 px-4">
        <h1 className="font-bold text-2xl mb-8">
          Happy Clients ({testimonials.length})
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((item) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="bg-white rounded-xl shadow-md p-6 border border-gray-100"
            >
              {/* Client Info */}
              <div className="flex items-center gap-4">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-12 h-12 rounded-full object-cover border"
                />
                <div>
                  <h3 className="font-semibold text-gray-900">
                    {item.name}
                  </h3>
                  <p className="text-sm text-gray-500">
                    {item.designation} • {item.location}
                  </p>
                </div>
              </div>

              {/* Testimonial */}
              <p className="mt-4 text-gray-600 text-sm leading-relaxed">
                “{item.testimonial}”
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Jobs;
