import { useEffect, useRef, useState } from "react";
import locationIcon from "../assets/location-icon.svg";
import jobLevelIcon from "../assets/job-level-icon.svg";
import companyIonc from "../assets/company-icon.svg";
import { Link } from "react-router-dom";
import parse from "html-react-parser";

function DisplaySearched({ result, clickedSearch }) {
   const [jobDetails, setJobDetails] = useState();
   const [showJobDetails, setShowJobDetails] = useState(true);
   const divJobRef = useRef();

   const handleJobDetails = (e) => {
      const details = result.filter((job) => job.id.toString() === e.target.id);
      for (let child of divJobRef.current.children) {
         child.classList.remove("bg-clicked");
      }
      e.target.parentElement.parentElement.classList.add("bg-clicked");
      setJobDetails(...details);
   };

   const handleJobDetailsNewTab = (e) => {
      const jobDetails = result.filter((job) => job.id.toString() === e.target.id);
      localStorage.setItem("job-details", JSON.stringify(...jobDetails));
   };

   const parseString = (str) => {
      const reactElement = parse(str);
      return reactElement;
   };

   useEffect(() => {
      if (window.innerWidth > 1000) {
         if (result.length) {
            const details = result.filter((job, index) => index === 0);
            setJobDetails(...details);
            divJobRef.current.children[0].classList.add("bg-clicked");
         }
      }
   }, [result]);

   useEffect(() => {
      const handleShowJobDetails = () => {
         if (window.innerWidth <= 900) {
            setShowJobDetails(false);
         } else {
            setShowJobDetails(true);
         }
      };
      handleShowJobDetails();
      window.addEventListener("resize", handleShowJobDetails);
      return () => window.removeEventListener("rezise", handleShowJobDetails);
   }, [result, window.innerWidth]);

   return (
      <section className="w-full p-8">
         {result.length && clickedSearch ? (
            <div className="flex w-full justify-center gap-x-8">
               <div className={showJobDetails ? "" : "w-full"} ref={divJobRef}>
                  {result.map((job) => {
                     return (
                        <div
                           key={job.id}
                           className={`${
                              showJobDetails ? "w-[25.5rem]" : "w-full"
                           } mb-8  rounded-md border border-JungleGreenTwo p-4 hover:bg-Platinum`}
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
                           <Link
                              to={showJobDetails ? "" : `${job.id}`}
                              target={showJobDetails ? "" : "_blank"}
                           >
                              <button
                                 id={job.id}
                                 onClick={
                                    showJobDetails ? handleJobDetails : handleJobDetailsNewTab
                                 }
                                 className="text-JungleGreenTwo hover:underline"
                              >
                                 More...
                              </button>
                           </Link>
                        </div>
                     );
                  })}
               </div>
               <div
                  className={`sticky top-8 h-[37rem] w-[33.5rem] overflow-y-scroll rounded-md  border border-JungleGreenTwo p-4 ${
                     showJobDetails ? "" : "hidden"
                  }`}
               >
                  {jobDetails ? (
                     <div>
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
                        <div className="text-sm font-medium text-EerieBlack">
                           {parseString(jobDetails.contents)}
                        </div>
                     </div>
                  ) : null}
               </div>
            </div>
         ) : (
            <div className="flex w-full flex-col items-center">
               <h2 className="mb-4 text-2xl font-bold">
                  The search did not match any <span className="text-JungleGreenTwo">jobs</span>.
               </h2>
               <div>
                  <p className="mb-2 text-lg font-semibold">Search suggestions</p>
                  <ul className="list-disc">
                     <li>Try more general keywords</li>
                     <li>Check your spelling</li>
                     <li>Replace abbreviations with the entire word</li>
                     <li>Change location/try remote</li>
                  </ul>
               </div>
            </div>
         )}
      </section>
   );
}

export default DisplaySearched;
