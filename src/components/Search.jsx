import { useEffect, useRef, useState } from "react";
import jobs from "../jobs_data.json";
import { Link } from "react-router-dom";

function Search({
   setTheJob,
   theJob,
   setTheLocation,
   theLocation,
   setResult,
   result,
   setAllLocations,
   setAllJobs,
   setClickedSearch,
}) {
   const [showLocations, setShowLocations] = useState(true);
   const [showJobError, setShowJobError] = useState(false);
   const [showLocationError, setShowLocationError] = useState(false);
   const [showPlaceholder, setShowPlaceholder] = useState(true);

   const inputLocationRef = useRef();
   const locationsRef = useRef();

   const handleJob = (e) => {
      setTheJob(e.target.value);
      setShowJobError(false);
   };

   const handleLocation = (e) => {
      setTheLocation(e.target.value);
      setShowLocations(true);
      setShowLocationError(false);
   };

   const clickOnLocation = (e) => {
      inputLocationRef.current.value = e.target.textContent;
      setTheLocation(e.target.textContent);
   };

   const currentLocations = jobs
      .map((job) => job.locations)
      .map((locations) => locations.map((location) => location.name))
      .flat()
      .filter((loc, index, arr) => arr.indexOf(loc) === index);

   const handleSearch = (e) => {
      e.preventDefault();
      if (!theLocation.length && theJob.length) {
         if (theJob.length < 3) {
            setShowJobError(true);
         } else {
            const currentJobs = jobs.filter((job) =>
               job.name.toLowerCase().includes(theJob.toLowerCase())
            );
            setResult(currentJobs);
            setClickedSearch(true);
         }
      }
      if (!theJob.length && theLocation.length) {
         if (theLocation.length < 3) {
            setShowLocationError(true);
         } else {
            const currentJobs = jobs.filter((job) => {
               for (let i = 0; i < job.locations.length; i++) {
                  return job.locations[i].name.toLowerCase().includes(theLocation.toLowerCase());
               }
            });
            setResult(currentJobs);
            setClickedSearch(true);
         }
      }
      if (theJob.length && theLocation.length) {
         if (theLocation.length < 3) {
            setShowLocationError(true);
         } else if (theJob.length < 3) {
            setShowJobError(true);
         } else if (theJob.length < 3 && theLocation.length < 3) {
            setShowJobError(true);
            setShowLocationError(true);
         } else {
            let currentJobs = jobs.filter((job) =>
               job.name.toLowerCase().includes(theJob.toLowerCase())
            );
            currentJobs = currentJobs.filter((job) => {
               for (let i = 0; i < job.locations.length; i++) {
                  return job.locations[i].name.toLowerCase().includes(theLocation.toLowerCase());
               }
            });
            setResult(currentJobs);
            setClickedSearch(true);
         }
      }
      if (!theJob.length && !theLocation.length) {
         setShowJobError(true);
         setShowLocationError(true);
      }
      setShowLocations(false);
   };

   useEffect(() => {
      if (result) {
         sessionStorage.setItem("result", JSON.stringify(result));
      }
   });

   useEffect(() => {
      setAllLocations(currentLocations.length);
      setAllJobs(jobs.length);
   });

   useEffect(() => {
      const handlePlaceholder = () => {
         if (window.innerWidth <= 640) {
            setShowPlaceholder(false);
         } else {
            setShowPlaceholder(true);
         }
      };
      handlePlaceholder();
      window.addEventListener("resize", handlePlaceholder);
      return () => window.removeEventListener("rezise", handlePlaceholder);
   }, []);

   useEffect(() => {
      const closeFilterLocation = (e) => {
         if (!locationsRef.current.contains(e.target)) {
            setShowLocations(false);
         }
      };
      document.body.addEventListener("click", closeFilterLocation, true);
      return () => document.body.removeEventListener("click", closeFilterLocation, true);
   });

   return (
      <section className="z-0 mb-8 w-full px-8 pt-12 lg:py-12">
         <form className="flex w-full flex-col items-center gap-y-8 lg:flex-row lg:items-start lg:justify-center lg:gap-x-8">
            <div className="w-full lg:w-[26rem]">
               <div
                  className={`w-full rounded-md border pl-4  lg:w-[26rem] ${
                     showJobError ? "border-red-500" : "border-JungleGreenTwo"
                  }`}
               >
                  <label
                     className={`font-semibold ${
                        showJobError ? "text-red-500" : "text-JungleGreenOne"
                     } `}
                     htmlFor="job"
                  >
                     What
                  </label>
                  <input
                     className="w-[50%] py-2 pl-4 outline-none lg:w-[22.2rem]"
                     id="job"
                     type="text"
                     name="job"
                     placeholder={showPlaceholder ? "Job title, keyword" : ""}
                     onChange={handleJob}
                  />
               </div>
               {showJobError ? (
                  <p className="z-2 relative text-red-500">job must be 3 characters or more.</p>
               ) : null}
            </div>
            <div className="w-full lg:w-[26rem]">
               <div
                  className={`relative w-full rounded-md border pl-4 lg:w-[26rem] ${
                     showLocationError ? "border-red-500" : "border-JungleGreenTwo"
                  }`}
               >
                  <div className="w-full">
                     <label
                        className={`font-semibold ${
                           showLocationError ? "text-red-500" : "text-JungleGreenOne"
                        } `}
                        htmlFor="location"
                     >
                        Where
                     </label>
                     <input
                        className="w-[50%] py-2 pl-4 outline-none lg:w-[21.6rem]"
                        id="location"
                        type="text"
                        name="location"
                        placeholder={showPlaceholder ? "City, state, country, or 'remote'" : ""}
                        onChange={handleLocation}
                        ref={inputLocationRef}
                     />
                  </div>
                  <div
                     ref={locationsRef}
                     className={
                        "z-1 absolute left-0 top-11 max-h-[15rem] w-full overflow-hidden bg-white pl-4 "
                     }
                  >
                     {theLocation.length && showLocations
                        ? currentLocations
                             .filter((currentLocation) =>
                                currentLocation.toLowerCase().includes(theLocation)
                             )
                             .map((currentLocation) => (
                                <p
                                   key={currentLocation}
                                   className="cursor-pointer"
                                   onClick={clickOnLocation}
                                >
                                   {currentLocation}
                                </p>
                             ))
                        : null}
                  </div>
               </div>
               {showLocationError ? (
                  <p className="z-2 relative text-red-500">
                     location must be 3 characters or more.
                  </p>
               ) : null}
            </div>
            <Link className="flex w-full justify-center lg:w-auto" onClick={handleSearch}>
               <button
                  className="w-full rounded-md border bg-JungleGreenOne px-4 py-2 font-semibold text-white hover:opacity-90 sm:w-1/2 lg:w-[6rem]"
                  type="submit"
               >
                  Search
               </button>
            </Link>
         </form>
      </section>
   );
}

export default Search;
