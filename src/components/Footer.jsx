import logo from "../assets/job-hunt-high-resolution-logo-color-on-transparent-background-two.svg";
import facebook from "../assets/facebook-icon.svg";
import twitter from "../assets/twitter-icon.svg";
import linkedin from "../assets/linkedin-icon.svg";
import instagram from "../assets/instagram-icon.svg";
function Footer() {
   return (
      <footer className="flex w-full items-start justify-between bg-Jet p-8 font-medium text-white">
         <img className="w-36" src={logo} alt="logo" />
         <div>
            <p className="mb-8">Features</p>
            <p className="mb-4">Link Shortening</p>
            <p className="mb-4">Branded Links</p>
            <p className="mb-4">analytics</p>
         </div>
         <div>
            <p className="mb-8">Resources</p>
            <p className="mb-4">Blog</p>
            <p className="mb-4">Developers</p>
            <p className="mb-4">Support</p>
         </div>
         <div>
            <p className="mb-8">Company</p>
            <p className="mb-4">About</p>
            <p className="mb-4">Our Team</p>
            <p className="mb-4">Careers</p>
            <p className="mb-4">Contact</p>
         </div>
         <div className="group/item flex gap-x-2">
            <img className="w-8" src={facebook} alt="facebook" />
            <img className="w-8" src={twitter} alt="twitter" />
            <img className="w-8" src={linkedin} alt="linkedin" />
            <img className="w-8" src={instagram} alt="instagram" />
         </div>
      </footer>
   );
}

export default Footer;
