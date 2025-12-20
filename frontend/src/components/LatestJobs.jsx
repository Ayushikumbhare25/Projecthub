// import React from 'react'
// import LatestJobCards from './LatestJobCards';
// import { useSelector } from 'react-redux'; 

// // const randomJobs = [1, 2, 3, 4, 5, 6, 7, 8];

// const LatestJobs = () => {
//     const {allJobs} = useSelector(store=>store.job);
   
//     return (
//         <div className='max-w-7xl mx-auto my-20'>
//             {/* <h1 className='text-4xl font-bold'><span className='text-[#6A38C2]'>Latest & Top </span>Project</h1> */}
//             <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight text-gray-900">
//   <span className="text-indigo-600">Latest & Top </span>
//   Projects
// </h1>

//             <div className='grid grid-cols-3 gap-4 my-5'>
//                 {
//                     allJobs.length <= 0 ? <span>No Project Available</span> : allJobs?.slice(0,6).map((job) => <LatestJobCards key={job._id} job={job}/>)
//                 }
//             </div>
//         </div>
//     )
// }

// export default LatestJobs
import React from "react";
import LatestJobCards from "./LatestJobCards";

const LatestJobs = () => {
  return (
    <div className="max-w-7xl mx-auto my-20 px-4">
      
      <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight text-gray-900">
        <span className="text-indigo-600">Latest & Top </span>
        Projects
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 my-8">
        {/* LatestJobCards already has hardcoded data */}
        <LatestJobCards />
      </div>

    </div>
  );
};

export default LatestJobs;
