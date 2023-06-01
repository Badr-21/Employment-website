import { useEffect, useRef, useState } from "react";
import locationIcon from "../assets/location-icon.svg";
import jobLevelIcon from "../assets/job-level-icon.svg";
import companyIonc from "../assets/company-icon.svg";
import parse from "html-react-parser";

function DisplaySearched({ result, clickedSearch }) {
   const [jobDetails, setJobDetails] = useState();
   const divJobRef = useRef();

   const handleJobDetails = (e) => {
      const details = result.filter((job) => job.id.toString() === e.target.id);
      for (let child of divJobRef.current.children) {
         child.classList.remove("bg-clicked");
      }
      e.target.parentElement.classList.add("bg-clicked");
      setJobDetails(...details);
   };

   const stoh = (str) => {
      const reactElement = parse(str);
      return reactElement;
   };
   useEffect(() => {
      if (result.length) {
         const details = result.filter((job, index) => index === 0);
         setJobDetails(...details);
         divJobRef.current.children[0].classList.add("bg-clicked");
      }
   }, [result]);
   return (
      <section className="w-full">
         {result.length && clickedSearch ? (
            <div className="flex w-full justify-center gap-x-8">
               <div ref={divJobRef}>
                  {result.map((job) => {
                     return (
                        <div
                           key={job.id}
                           className="mb-8 w-[25.5rem] rounded-md border border-JungleGreenTwo p-4 hover:bg-Platinum"
                        >
                           <h2 className="mb-2 text-lg font-bold text-EerieBlack">{job.name}</h2>
                           <div className="mb-2 flex items-start gap-x-4">
                              <p className="text-DimGray">{job.company.name}</p>
                              <img className="w-5" src={companyIonc} alt="company icon" />
                           </div>
                           {job.locations.map((location) => {
                              return (
                                 <div
                                    key={location.name}
                                    className="mb-2 flex items-center gap-x-4 text-DimGray"
                                 >
                                    <p>{location.name + ". "}</p>
                                    <img className="w-3.5" src={locationIcon} alt="location icon" />
                                 </div>
                              );
                           })}
                           <div className="mb-4 flex items-center gap-x-4">
                              <p className=" text-DimGray">{job.levels[0].name}</p>
                              <img className="w-4" src={jobLevelIcon} alt="job level icon" />
                           </div>
                           <button
                              id={job.id}
                              onClick={handleJobDetails}
                              className="text-JungleGreenTwo hover:underline"
                           >
                              More...
                           </button>
                        </div>
                     );
                  })}
               </div>
               <div className="sticky top-8 h-[37rem] w-[33.5rem] rounded-md border border-JungleGreenTwo">
                  {jobDetails ? (
                     <div className="p-4">
                        <h2 className="mb-2 text-lg font-bold text-EerieBlack">
                           {jobDetails.name}
                        </h2>
                        <div className="mb-2 flex items-start gap-x-4">
                           <p className="text-DimGray">{jobDetails.company.name}</p>
                           <img className="w-5" src={companyIonc} alt="company icon" />
                        </div>
                        <div className="flex flex-wrap">
                           {jobDetails.locations.map((location) => {
                              return (
                                 <div
                                    key={location.name}
                                    className="mb-2 flex items-center gap-x-4 text-DimGray"
                                 >
                                    <p>{location.name + ". "}</p>
                                    <img className="w-3.5" src={locationIcon} alt="location icon" />
                                 </div>
                              );
                           })}
                        </div>
                        <div className="mb-2 flex items-center gap-x-4">
                           <p className=" text-DimGray">{jobDetails.levels[0].name}</p>
                           <img className="w-4" src={jobLevelIcon} alt="job level icon" />
                        </div>
                        <div className="mb-4 flex w-full items-center justify-between">
                           <p className="text-DimGray">{jobDetails.publication_date}</p>
                           <button className="rounded-md bg-JungleGreenOne px-4 py-2 text-white hover:opacity-90">
                              <a target="_blank" href={jobDetails.refs.landing_page}>
                                 Apply on website
                              </a>
                           </button>
                        </div>
                        <div className="max-h-[22rem] overflow-y-scroll text-sm font-medium text-EerieBlack">
                           {stoh(jobDetails.contents)}
                        </div>
                     </div>
                  ) : null}
               </div>
            </div>
         ) : (
            // <div className="flex w-full flex-col items-center gap-y-8 pt-16">
            //    <h1 className="text-3xl font-bold text-EerieBlack">
            //       Run a search to find your <span className="text-JungleGreenOne">next job</span>.
            //    </h1>
            //    <p className="text-xl font-medium text-EerieBlack">
            //       Currently there are{" "}
            //       <span className="font-semibold text-JungleGreenOne">{allJobs}</span> jobs in{" "}
            //       <span className="font-semibold text-JungleGreenOne">{allLocations} </span>
            //       different locations around the world.
            //    </p>
            // </div>
            "not found"
         )}
      </section>
   );
}

export default DisplaySearched;
