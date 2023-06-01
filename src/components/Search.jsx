import { useEffect, useRef, useState } from "react";
import jobs from "../jobs_data.json";
import { Link, useNavigate } from "react-router-dom";
import { Toaster, toast } from "react-hot-toast";

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
   clickedSearch,
}) {
   const [showLocations, setShowLocations] = useState(true);
   const [showJobError, setShowJobError] = useState(false);
   const [showLocationError, setShowLocationError] = useState(false);

   const inputLocationRef = useRef();

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
      // console.log(e.target.textContent);
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
            console.log(currentJobs);
            // setNavigation(true);
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
            console.log(currentJobs);
            // setNavigation(true);
         }
      }
      if (theJob.length && theLocation.length) {
         if (theLocation.length < 3) {
            setShowLocationError(true);
         } else if (theJob.length < 3) {
            setShowJobError(true);
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
            console.log(currentJobs);
            // setNavigation(true);
         }
      }
      if (!theJob.length && !theLocation.length) {
         console.log("none");
         toast.error("Either enter a job or location.");
      }
      setShowLocations(false);
   };

   // const handleSubmit = (e) => {
   //    e.preventDefault();
   //    search();
   // };

   // useEffect(() => {
   //    if (navigation) {
   //       setTimeout(() => {
   //          navigate("search-result", { state: { result: result } });
   //       }, 1000);
   //    }
   // });

   useEffect(() => {
      if (result) {
         sessionStorage.setItem("result", JSON.stringify(result));
      }
   });

   useEffect(() => {
      setAllLocations(currentLocations.length);
      setAllJobs(jobs.length);
   });

   return (
      <section className="w-full px-8 py-12">
         <Toaster
            toastOptions={{
               error: {
                  style: {
                     backgroundColor: "white",
                     color: "red",
                     fontWeight: "bold",
                  },
               },
            }}
         />
         <form className="flex w-full items-start justify-center gap-x-8">
            <div>
               <div className="w-[26rem] rounded-md border border-JungleGreenTwo pl-4">
                  <label className="font-semibold text-JungleGreenOne" htmlFor="job">
                     What
                  </label>
                  <input
                     className="w-[22.2rem] py-2 pl-4 outline-none"
                     id="job"
                     type="text"
                     name="job"
                     placeholder="Job title, keyword"
                     onChange={handleJob}
                  />
               </div>
               {showJobError ? (
                  <p className="relative z-20 text-red-500">job must be 3 characters or more.</p>
               ) : null}
            </div>
            {/* <select className="border" name="company" value={theCompany} onChange={handleCompany}>
               {currentCompanies.map((currentCompany) => (
                  <option value={currentCompany} key={currentCompany}>
                     {currentCompany}
                  </option>
               ))}
            </select> */}
            <div>
               <div className="relative w-[26rem] rounded-md border border-JungleGreenTwo pl-4">
                  <div className="w-full">
                     <label className="font-semibold text-JungleGreenOne" htmlFor="location">
                        Where
                     </label>
                     <input
                        className="w-[21.6rem]  py-2 pl-4 outline-none"
                        id="location"
                        type="text"
                        name="location"
                        placeholder="City, state, country, or 'remote'"
                        onChange={handleLocation}
                        ref={inputLocationRef}
                     />
                  </div>
                  <div
                     className={
                        "absolute left-0 top-11 z-10 max-h-[15.5rem] w-full overflow-hidden bg-white py-2 pl-4 "
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
                  <p className="relative z-20 text-red-500">
                     location must be 3 characters or more.
                  </p>
               ) : null}
            </div>
            <Link onClick={handleSearch}>
               <button
                  className="rounded-md border bg-JungleGreenOne px-4 py-2 font-semibold text-white hover:opacity-90"
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
