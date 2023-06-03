import { useEffect, useState } from "react";
import locationIcon from "../assets/location-icon.svg";
import arrowDownIcon from "../assets/arrow-down-icon.svg";
import companies from "../companies_data.json";

function DisplayCompanies({ filteredCompanies, setCurrentCompanies, itemOffset, endOffset }) {
   const [showIndustriesFilter, setShowIndustriesFilter] = useState(false);
   const [showLocationsFilter, setShowLocationFilter] = useState(false);
   const [showSizesFilter, setShowSizesFilter] = useState(false);

   const handleShowIndustriesFilter = () => {
      setShowIndustriesFilter(!showIndustriesFilter);
      setShowLocationFilter(false);
      setShowSizesFilter(false);
   };

   const handleShowLocationsFilter = () => {
      setShowLocationFilter(!showLocationsFilter);
      setShowIndustriesFilter(false);
      setShowSizesFilter(false);
   };

   const handleShowSizesFilter = () => {
      setShowIndustriesFilter(false);
      setShowLocationFilter(false);
      setShowSizesFilter(!showSizesFilter);
   };

   const industries = companies
      .map((company) => company.industries.map((industry) => industry.name))
      .flat()
      .filter((idt, index, arr) => arr.indexOf(idt) === index);

   const locations = companies
      .map((company) => company.locations.map((location) => location.name))
      .flat()
      .filter((loc, index, arr) => arr.indexOf(loc) === index);

   const sizes = companies
      .map((company) => company.size.name)
      .filter((comp, index, arr) => arr.indexOf(comp) === index)
      .sort()
      .reverse();

   const names = companies
      .map((company) => company.name)
      .filter((name, index, arr) => arr.indexOf(name) === index);

   const handleFilterIndustry = (e) => {
      const filteredByIndustry = companies.filter((company) => {
         for (let i = 0; i < company.industries.length; i++) {
            return company.industries[i].name === e.target.textContent;
         }
      });
      setCurrentCompanies(filteredByIndustry);
   };

   const handleFilterLocation = (e) => {
      const filteredByLocation = companies.filter((company) => {
         for (let i = 0; i < company.locations.length; i++) {
            return company.locations[i].name === e.target.textContent;
         }
      });
      setCurrentCompanies(filteredByLocation);
   };

   const handleFilterSize = (e) => {
      const filteredBySize = companies.filter(
         (company) => company.size.name === e.target.textContent
      );
      setCurrentCompanies(filteredBySize);
   };
   return (
      <article className="w-full">
         <section className="mb-16 flex flex-col items-center">
            <h1 className="mb-12 text-3xl font-bold text-EerieBlack">
               <span className="text-JungleGreenTwo">Companies</span> that we work with.
            </h1>
            <div className=" flex w-full justify-start gap-x-8">
               <div className="relative self-start">
                  <div
                     onClick={handleShowIndustriesFilter}
                     className="flex items-center gap-x-2 rounded-md bg-JungleGreenTwo py-2 pl-4 pr-2 font-semibold text-white hover:cursor-pointer hover:bg-DimGray"
                  >
                     <p>Industries</p>
                     <img className="w-6" src={arrowDownIcon} alt="arrow icon" />
                  </div>
                  <div
                     className={`absolute w-[15rem] overflow-y-scroll bg-white ${
                        showIndustriesFilter ? "h-[18rem] pl-2 pt-2" : "h-0"
                     }`}
                  >
                     {industries.map((industry) => (
                        <p
                           className="mb-1 cursor-pointer text-[.9rem] hover:text-DimGray"
                           key={industry}
                           onClick={handleFilterIndustry}
                        >
                           {industry}
                        </p>
                     ))}
                  </div>
               </div>
               <div className="relative self-start">
                  <div
                     onClick={handleShowLocationsFilter}
                     className="flex items-center gap-x-2 rounded-md bg-JungleGreenTwo py-2 pl-4 pr-2 font-semibold text-white hover:cursor-pointer hover:bg-DimGray"
                  >
                     <p>Locations</p>
                     <img className="w-6" src={arrowDownIcon} alt="arrow icon" />
                  </div>
                  <div
                     className={`absolute w-[15rem] overflow-y-scroll bg-white ${
                        showLocationsFilter ? "h-[18rem] pl-2 pt-2" : "h-0"
                     }`}
                  >
                     {locations.map((location) => (
                        <p
                           className="mb-1 cursor-pointer text-[.9rem] hover:text-DimGray"
                           key={location}
                           onClick={handleFilterLocation}
                        >
                           {location}
                        </p>
                     ))}
                  </div>
               </div>
               <div className="relative self-start">
                  <div
                     onClick={handleShowSizesFilter}
                     className="flex items-center gap-x-2 rounded-md bg-JungleGreenTwo py-2 pl-4 pr-2 font-semibold text-white hover:cursor-pointer hover:bg-DimGray"
                  >
                     <p>Size</p>
                     <img className="w-6" src={arrowDownIcon} alt="arrow icon" />
                  </div>
                  <div
                     className={`absolute w-[7rem] overflow-y-hidden bg-white shadow ${
                        showSizesFilter ? "h-auto pl-2 pt-2" : "h-0"
                     }`}
                  >
                     {sizes.map((size) => (
                        <p
                           className="mb-1 cursor-pointer text-[.9rem] hover:text-DimGray"
                           key={size}
                           onClick={handleFilterSize}
                        >
                           {size}
                        </p>
                     ))}
                  </div>
               </div>
            </div>
         </section>
         <section className="mb-8 flex w-full flex-wrap justify-center gap-8">
            {filteredCompanies?.map((company) => (
               <div
                  className="max-h-max w-[18rem] rounded-md border border-JungleGreenTwo p-4 shadow-md"
                  key={company.id}
               >
                  <div className="mb-4 flex items-center gap-x-4">
                     <img
                        className="max-w-[4rem]"
                        src={company.refs.logo_image}
                        alt={`${company.name} logo`}
                     />
                     <h2 className="text-lg font-bold text-EerieBlack">{company.name}</h2>
                  </div>
                  <div className="mb-4">
                     {company.locations.map((location) => (
                        <p key={location.name} className="flex items-start gap-x-4 text-DimGray">
                           {location.name}{" "}
                           <img className="w-4" src={locationIcon} alt="location icon" />
                        </p>
                     ))}
                  </div>
                  <p className="mb-4 text-DimGray">
                     {company.industries.map((industry) => industry.name + " ")}
                  </p>
                  <p className="mb-8 text-DimGray">{company.size.name}</p>
               </div>
            ))}
         </section>
      </article>
   );
}

export default DisplayCompanies;
