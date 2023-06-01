import { NavLink, Link } from "react-router-dom";
import logo from "../assets/job-hunt-high-resolution-logo-color-on-transparent-background.svg";

function Header() {
   return (
      <header className="flex w-full items-center gap-x-16 px-8 py-4 text-[1.1rem] font-semibold shadow">
         <Link to="/" reloadDocument>
            <img className="w-36" src={logo} alt="logo" />
         </Link>
         <nav className="flex w-full items-center justify-between">
            <ul className="flex items-center gap-x-8 text-EerieBlack">
               <NavLink
                  className={({ isActive }) => {
                     return isActive ? "rounded-md bg-JungleGreenOne px-2 py-2 text-white" : {};
                  }}
                  to="/"
               >
                  <li>Home</li>
               </NavLink>
               <NavLink
                  className={({ isActive }) => {
                     return isActive ? "rounded-md bg-JungleGreenOne px-2 py-2 text-white" : {};
                  }}
                  to="search-job"
               >
                  <li>Jobs</li>
               </NavLink>
               <NavLink
                  className={({ isActive }) => {
                     return isActive ? "rounded-md bg-JungleGreenOne px-2 py-2 text-white" : {};
                  }}
                  to="companies"
               >
                  <li>Companies</li>
               </NavLink>
            </ul>
            <ul className="flex gap-x-8 text-JungleGreenTwo">
               <li>Log In</li>
               <li>Sing Up</li>
            </ul>
         </nav>
      </header>
   );
}

export default Header;
