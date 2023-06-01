import React, { useState } from "react";
import Search from "../components/Search";
import DisplaySearched from "../components/DisplaySearched";
const getSessionStorage = () => {
   const result = JSON.parse(sessionStorage.getItem("result"));
   if (result) {
      return JSON.parse(sessionStorage.getItem("result"));
   } else {
      return [];
   }
};

function SearchJob() {
   const [theJob, setTheJob] = useState("");
   const [theLocation, setTheLocation] = useState("");
   const [allLocations, setAllLocations] = useState();
   const [allJobs, setAllJobs] = useState();
   const [result, setResult] = useState(() => getSessionStorage());
   const [clickedSearch, setClickedSearch] = useState(false);

   return (
      <main>
         <Search
            setTheJob={setTheJob}
            setTheLocation={setTheLocation}
            theJob={theJob}
            theLocation={theLocation}
            setResult={setResult}
            result={result}
            setAllLocations={setAllLocations}
            setAllJobs={setAllJobs}
            setClickedSearch={setClickedSearch}
         />
         {clickedSearch ? (
            <DisplaySearched
               result={result}
               allLocations={allLocations}
               allJobs={allJobs}
               clickedSearch={clickedSearch}
            />
         ) : (
            <div className="flex w-full flex-col items-center gap-y-8 pt-16">
               <h1 className="text-3xl font-bold text-EerieBlack">
                  Run a search to find your <span className="text-JungleGreenOne">next job</span>.
               </h1>
               <p className="text-xl font-medium text-EerieBlack">
                  Currently there are{" "}
                  <span className="font-semibold text-JungleGreenOne">{allJobs}</span> jobs in{" "}
                  <span className="font-semibold text-JungleGreenOne">{allLocations} </span>
                  different locations around the world.
               </p>
            </div>
         )}
      </main>
   );
}

export default SearchJob;
