import { useEffect, useState } from "react";
import companies from "../companies_data.json";
import ReactPaginate from "react-paginate";
import DisplayCompanies from "../components/DisplayCompanies";
import { motion } from "framer-motion";

function CompaniesPage() {
   const [currentCompanies, setCurrentCompanies] = useState(companies);

   const [itemOffset, setItemOffset] = useState(0);
   const itemsPerPage = 20;
   // Simulate fetching items from another resources.
   // (This could be items from props; or items loaded in a local state
   // from an API endpoint with useEffect and useState)
   const endOffset = itemOffset + itemsPerPage;
   //    console.log(`Loading items from ${itemOffset} to ${endOffset}`);
   const filteredCompanies = currentCompanies.slice(itemOffset, endOffset);

   const pageCount = Math.ceil(currentCompanies.length / itemsPerPage);

   // Invoke when user click to request another page.
   const handlePageClick = (event) => {
      const newOffset = (event.selected * itemsPerPage) % companies.length;
      //   console.log(`User requested page number ${event.selected}, which is offset ${newOffset}`);
      setItemOffset(newOffset);
   };

   useEffect(() => {
      window.scrollTo({
         top: 0,
      });
   });

   return (
      <motion.main
         className="p-8"
         initial={{ opacity: 0 }}
         animate={{ opacity: 1 }}
         exit={{
            opacity: 0,
         }}
      >
         <DisplayCompanies
            filteredCompanies={filteredCompanies}
            setCurrentCompanies={setCurrentCompanies}
         />
         <ReactPaginate
            breakLabel="..."
            nextLabel="next >"
            onPageChange={handlePageClick}
            pageRangeDisplayed={1}
            marginPagesDisplayed={1}
            pageCount={pageCount}
            previousLabel="< previous"
            renderOnZeroPageCount={null}
            containerClassName="pagination"
            pageLinkClassName="page-num"
            previousLinkClassName="page-num"
            nextLinkClassName="page-num"
            activeLinkClassName="active"
            disabledLinkClassName="disable-btn"
         />
      </motion.main>
   );
}

export default CompaniesPage;
