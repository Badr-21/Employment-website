import { Routes, Route } from "react-router-dom";
import HomePage from "../pages/HomePage";
import SearchJobPage from "../pages/SearchJobPage";
import CompaniesPage from "../pages/CompaniesPage";
import JobDetailsPage from "../pages/JobDetailsPage";
import LogInPage from "../pages/LogInPage";
import SingUpPage from "../pages/SingUpPage";
import { AnimatePresence } from "framer-motion";

function AnimatedRoutes() {
   return (
      <AnimatePresence>
         <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="search-job">
               <Route index element={<SearchJobPage />} />
               <Route path=":id" element={<JobDetailsPage />} />
            </Route>
            <Route path="companies" element={<CompaniesPage />} />
            <Route path="log-in" element={<LogInPage />} />
            <Route path="sign-up" element={<SingUpPage />} />
         </Routes>
      </AnimatePresence>
   );
}

export default AnimatedRoutes;
