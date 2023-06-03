import { useEffect, useState } from "react";
import companies from "../companies_data.json";
import ReactPaginate from "react-paginate";
import DisplayCompanies from "../components/DisplayCompanies";

function CompaniesPage() {
   const [currentCompanies, setCurrentCompanies] = useState(companies);

   const [itemOffset, setItemOffset] = useState(0);
   const itemsPerPage = 20;
   // Simulate fetching items from another resources.
   // (This could be items from props; or items loaded in a local state
   // from an API endpoint with useEffect and useState)
   const endOffset = itemOffset + itemsPerPage;
   //    console.log(`Loading items from ${itemOffset} to ${endOffset}`);
   //    const currentCompanies = companies.slice(itemOffset, endOffset);
   const filteredCompanies = currentCompanies.slice(itemOffset, endOffset);

   const pageCount = Math.ceil(currentCompanies.length / itemsPerPage);

   // Invoke when user click to request another page.
   const handlePageClick = (event) => {
      const newOffset = (event.selected * itemsPerPage) % companies.length;
      //   console.log(`User requested page number ${event.selected}, which is offset ${newOffset}`);
      setItemOffset(newOffset);
   };

   // useEffect(() => {
   //    setCurrentCompanies(companies.slice(itemOffset, endOffset));
   // }, [endOffset]);

   return (
      <main className="p-8">
         <DisplayCompanies
            filteredCompanies={filteredCompanies}
            setCurrentCompanies={setCurrentCompanies}
            itemOffset={itemOffset}
            endOffset={endOffset}
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
      </main>
   );
}

export default CompaniesPage;
