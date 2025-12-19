// // import React from 'react'
// // import { Badge } from './ui/badge'
// // import { useNavigate } from 'react-router-dom'

// // const LatestJobCards = ({job}) => {
// //     const navigate = useNavigate();
// //     return (
// //         <div onClick={()=> navigate(`/description/${job._id}`)} className='p-5 rounded-md shadow-xl bg-white border border-gray-100 cursor-pointer'>
// //             <div>
// //                 <h1 className='font-medium text-lg'>{job?.company?.name}</h1>
// //                 <p className='text-sm text-gray-500'>India</p>
// //             </div>
// //             <div>
// //                 <h1 className='font-bold text-lg my-2'>{job?.title}</h1>
// //                 <p className='text-sm text-gray-600'>{job?.description}</p>
// //             </div>
// //             <div className='flex items-center gap-2 mt-4'>
// //                 <Badge className={'text-blue-700 font-bold'} variant="ghost">{job?.position} Positions</Badge>
// //                 <Badge className={'text-[#F83002] font-bold'} variant="ghost">{job?.jobType}</Badge>
// //                 <Badge className={'text-[#7209b7] font-bold'} variant="ghost">{job?.salary}LPA</Badge>
// //             </div>

// //         </div>
// //     )
// // }

// // export default LatestJobCards


// import React from "react";

// const LatestJobCards = ({ job }) => {
//   return (
//     <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden border border-gray-100">
      
//       {/* Image */}
//       <img
//         src={job?.image || "https://via.placeholder.com/300x200"}
//         alt="project"
//         className="w-full h-44 object-cover"
//       />

//       {/* Content */}
//       <div className="p-4 space-y-2">
        
//         {/* Category */}
//         <h3 className="text-blue-600 font-semibold text-sm">
//           {job?.category}
//         </h3>

//         {/* Title */}
//         <h2 className="font-semibold text-gray-900 text-base">
//           {job?.title}
//         </h2>

//         {/* Description */}
//         <p className="text-gray-500 text-sm line-clamp-3">
//           {job?.description}
//         </p>

//         {/* Read More Button */}
//         <button
//           className="
//             mt-3 inline-block
//             bg-orange-500 hover:bg-orange-600
//             text-white text-xs font-semibold
//             px-4 py-2 rounded-md
//           "
//         >
//           READ MORE
//         </button>
//       </div>
//     </div>
//   );
// };

// export default LatestJobCards;

import React from "react";

const projects = [
  {
    id: 1,
    category: "Consultation",
    title: "Business Growth Consultation",
    description:
      "Mumbai",
    image:
      "https://res.cloudinary.com/dz2gmsumk/image/upload/v1766168205/OIP_nkwcnj.webp",
  },
  {
    id: 2,
    category: "Design",
    title: "UI/UX Design System",
    description:
      "Indore",
    image:
      "https://res.cloudinary.com/dz2gmsumk/image/upload/v1766161921/uiux_ogoqoc.jpg",
  },
  {
    id: 3,
    category: "Development",
    title: "Website Development",
    description:
      "Bangolare",
    image:
      "https://res.cloudinary.com/dz2gmsumk/image/upload/v1766168205/360_F_457937822_6guyVRMr4cCdCr36zPg7Er7WRaf0FbSn_uonacw.jpg",
  },
  {
    id: 4,
    category: "Mobile",
    title: "App Development",
    description:
      "Pune",
    image:
      "https://res.cloudinary.com/dz2gmsumk/image/upload/v1766167350/job_khen6m.avif",
  },
  {
    id: 5,
    category: "Media",
   title: "Digital Media Production",
    description:
      "Delhi",
    image:
      "https://res.cloudinary.com/dz2gmsumk/image/upload/v1766161921/uiux_ogoqoc.jpg",
  },
];

const LatestJobCards = () => {
  return (
    <>
      {projects.map((project) => (
        <div
          key={project.id}
          className="bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden border border-gray-100"
        >
          {/* Image */}
          <img
            src={project.image}
            alt="project"
            className="w-full h-44 object-cover"
          />

          {/* Content */}
          <div className="p-4 space-y-2">
            {/* Category */}
            <h3 className="text-blue-600 font-semibold text-sm">
              {project.category}
            </h3>

            {/* Title */}
            <h2 className="font-semibold text-gray-900 text-base">
              {project.title}
            </h2>

            {/* Description */}
            <p className="text-gray-500 text-sm line-clamp-3">
              {project.description}
            </p>

            {/* Read More Button */}
            <button
              className="
                mt-3 inline-block
                bg-orange-500 hover:bg-orange-600
                text-white text-xs font-semibold
                px-4 py-2 rounded-md
              "
            >
              READ MORE
            </button>
          </div>
        </div>
      ))}
    </>
  );
};

export default LatestJobCards;
