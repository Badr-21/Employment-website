import logo from "../assets/job-hunt-high-resolution-logo-color-on-transparent-background-two.svg";
import facebook from "../assets/facebook-icon.svg";
import twitter from "../assets/twitter-icon.svg";
import linkedin from "../assets/linkedin-icon.svg";
import instagram from "../assets/instagram-icon.svg";
function Footer() {
   return (
      <footer className="flex w-full flex-shrink-0 flex-wrap items-start justify-center gap-y-4 bg-Jet p-8 font-medium text-white md:justify-between">
         <img className="w-36" src={logo} alt="logo" />
         <div className="flex flex-wrap justify-center gap-x-16 md:flex-nowrap md:justify-start">
            <div className="w-[10rem] text-center">
               <p className="mb-8 hover:cursor-pointer hover:text-JungleGreenTwo">Features</p>
               <p className="mb-4 hover:cursor-pointer hover:text-JungleGreenTwo">
                  Link Shortening
               </p>
               <p className="mb-4 hover:cursor-pointer hover:text-JungleGreenTwo">Branded Links</p>
               <p className="mb-4 hover:cursor-pointer hover:text-JungleGreenTwo">analytics</p>
            </div>
            <div className="w-[10rem] text-center">
               <p className="mb-8 hover:cursor-pointer hover:text-JungleGreenTwo">Resources</p>
               <p className="mb-4 hover:cursor-pointer hover:text-JungleGreenTwo">Blog</p>
               <p className="mb-4 hover:cursor-pointer hover:text-JungleGreenTwo">Developers</p>
               <p className="mb-4 hover:cursor-pointer hover:text-JungleGreenTwo">Support</p>
            </div>
            <div className="w-[10rem] text-center">
               <p className="mb-8 hover:cursor-pointer hover:text-JungleGreenTwo">Company</p>
               <p className="mb-4 hover:cursor-pointer hover:text-JungleGreenTwo">About</p>
               <p className="mb-4 hover:cursor-pointer hover:text-JungleGreenTwo">Our Team</p>
               <p className="mb-4 hover:cursor-pointer hover:text-JungleGreenTwo">Careers</p>
               <p className="mb-4 hover:cursor-pointer hover:text-JungleGreenTwo">Contact</p>
            </div>
         </div>
         <div className="flex w-full justify-center gap-x-2 lg:w-auto lg:justify-start">
            <img className="hover:filter-icon w-8 cursor-pointer" src={facebook} alt="facebook" />
            <img className="hover:filter-icon w-8 cursor-pointer" src={twitter} alt="twitter" />
            <img className="hover:filter-icon w-8 cursor-pointer" src={linkedin} alt="linkedin" />
            <img className="hover:filter-icon w-8 cursor-pointer" src={instagram} alt="instagram" />
         </div>
      </footer>
   );
}

export default Footer;
