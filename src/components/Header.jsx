import { useState, useEffect, useRef } from "react";
import { NavLink, Link } from "react-router-dom";
import logo from "../assets/job-hunt-high-resolution-logo-color-on-transparent-background.svg";
import closeIcon from "../assets/close-icon.svg";
import menuHamburger from "../assets/menu-hamburger-icon.svg";

function Header() {
   const [showSideBar, setShowSideBar] = useState(false);
   const [responsiveHeader, setResponsiveHeader] = useState(false);
   const navRef = useRef();

   const handleSideBar = () => {
      setShowSideBar(!showSideBar);
   };

   useEffect(() => {
      const handleResponsiveHeader = () => {
         if (window.innerWidth < 768) {
            setResponsiveHeader(true);
         } else {
            setResponsiveHeader(false);
         }
      };
      handleResponsiveHeader();
      window.addEventListener("resize", handleResponsiveHeader);
      return () => window.removeEventListener("rezise", handleResponsiveHeader);
   }, []);

   useEffect(() => {
      const closeSideBar = (e) => {
         if (!navRef.current.contains(e.target)) {
            setShowSideBar(false);
         }
      };
      document.body.addEventListener("click", closeSideBar, true);
      return () => document.body.removeEventListener("click", closeSideBar, true);
   });
   return (
      <header className="relative z-10 flex w-full items-center gap-x-8 px-8 py-4 text-[1.1rem] font-semibold shadow md:gap-x-12">
         <img
            className={`${responsiveHeader ? "" : "hidden"} w-8 hover:cursor-pointer`}
            src={menuHamburger}
            alt="menu hamburger icon"
            onClick={handleSideBar}
         />
         <Link className="flex-shrink-0" to="/" reloadDocument>
            <img className="w-36" src={logo} alt="logo" />
         </Link>
         <nav
            ref={navRef}
            className={`${
               showSideBar ? "left-[0rem]" : "left-[-12rem]"
            } transition-left absolute top-0 flex w-[12rem] flex-col items-start gap-y-8 bg-white px-8 py-4 shadow duration-300 md:static md:w-full md:flex-row md:items-center md:justify-between md:shadow-none`}
         >
            <img
               className={`${responsiveHeader ? "" : "hidden"} w-8 hover:cursor-pointer`}
               src={closeIcon}
               alt="close icon"
               onClick={handleSideBar}
            />
            <ul className="flex flex-col gap-y-4 text-EerieBlack md:flex-row md:items-center md:gap-x-8">
               <NavLink
                  className={({ isActive }) => {
                     return isActive
                        ? "rounded-md bg-JungleGreenOne px-2 py-2 text-center text-white"
                        : {};
                  }}
                  to="/"
               >
                  <li>Home</li>
               </NavLink>
               <NavLink
                  className={({ isActive }) => {
                     return isActive
                        ? "rounded-md bg-JungleGreenOne px-2 py-2 text-center text-white"
                        : {};
                  }}
                  to="search-job"
               >
                  <li>Jobs</li>
               </NavLink>
               <NavLink
                  className={({ isActive }) => {
                     return isActive
                        ? "rounded-md bg-JungleGreenOne px-2 py-2 text-center text-white"
                        : {};
                  }}
                  to="companies"
               >
                  <li>Companies</li>
               </NavLink>
            </ul>
            <ul className="flex flex-col gap-y-8 text-JungleGreenTwo md:flex-row md:gap-x-8">
               <Link to="log-in">
                  <li>Log In</li>
               </Link>
               <Link to="sign-up">
                  <li>Sing Up</li>
               </Link>
            </ul>
         </nav>
      </header>
   );
}

export default Header;
