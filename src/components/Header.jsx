import logo from "../assets/job-hunt-high-resolution-logo-color-on-transparent-background.svg";
function Header() {
   return (
      <header className="flex w-full gap-x-16 p-8 text-[1.1rem] font-semibold shadow">
         <img className="w-36" src={logo} alt="logo" />
         <nav className="flex w-full justify-between">
            <ul className="flex gap-x-8 text-EerieBlack">
               <li className="">Home</li>
               <li>Jobs</li>
               <li>Companies</li>
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
