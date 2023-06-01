import { Routes, Route } from "react-router-dom";
import HomePage from "../pages/HomePage";
import SearchJobPage from "../pages/SearchJobPage";
import CompaniesPage from "../pages/CompaniesPage";
import SearchResultPage from "../pages/SearchResultPage";
function AnimatedRoutes() {
   return (
      <>
         <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="search-job">
               <Route index element={<SearchJobPage />} />
               <Route path="search-result" element={<SearchResultPage />} />
            </Route>
            <Route path="companies" element={<CompaniesPage />} />
         </Routes>
      </>
   );
}

export default AnimatedRoutes;
