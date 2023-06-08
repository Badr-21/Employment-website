import { useState } from "react";
import locationIcon from "../assets/location-icon.svg";
import jobLevelIcon from "../assets/job-level-icon.svg";
import companyIonc from "../assets/company-icon.svg";
import parse from "html-react-parser";
import { motion } from "framer-motion";

const getLocatlStorage = () => {
   const jobDetails = localStorage.getItem("job-details");
   if (jobDetails) {
      return JSON.parse(localStorage.getItem("job-details"));
   } else {
      return [];
   }
};

function JobDetailsPage() {
   const [jobDetails, setJobDetails] = useState(() => getLocatlStorage());

   const parseString = (str) => {
      const reactElement = parse(str);
      return reactElement;
   };

   return (
      <motion.main
         initial={{ opacity: 0 }}
         animate={{ opacity: 1 }}
         exit={{
            opacity: 0,
         }}
      >
         {jobDetails ? (
            <div className="p-4">
               <h2 className="mb-4 text-2xl font-bold text-EerieBlack">{jobDetails.name}</h2>
               <div className="mb-2 flex items-start gap-x-4">
                  <p className="text-lg text-DimGray">{jobDetails.company.name}</p>
                  <img className="w-5" src={companyIonc} alt="company icon" />
               </div>
               <div className="flex flex-wrap">
                  {jobDetails.locations.map((location) => {
                     return (
                        <div
                           key={location.name}
                           className="mb-2 flex items-center gap-x-4 text-lg text-DimGray"
                        >
                           <p>{location.name + ". "}</p>
                           <img className="w-3.5" src={locationIcon} alt="location icon" />
                        </div>
                     );
                  })}
               </div>
               <div className="mb-2 flex items-center gap-x-4">
                  <p className=" text-lg text-DimGray">{jobDetails.levels[0].name}</p>
                  <img className="w-4" src={jobLevelIcon} alt="job level icon" />
               </div>
               <div className="mb-4 flex w-full flex-col gap-y-4 sm:flex-row sm:items-center sm:justify-between">
                  <p className="text-lg text-DimGray">{jobDetails.publication_date}</p>
                  <button className="rounded-md bg-JungleGreenOne px-4 py-2 text-lg text-white hover:opacity-90">
                     <a target="_blank" href={jobDetails.refs.landing_page}>
                        Apply on website
                     </a>
                  </button>
               </div>
               <div className="text-base font-medium text-EerieBlack">
                  {parseString(jobDetails.contents)}
               </div>
            </div>
         ) : null}
      </motion.main>
   );
}

export default JobDetailsPage;
