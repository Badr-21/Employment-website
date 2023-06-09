import { Link } from "react-router-dom";
import appleLogo from "../assets/apple-logo.svg";
import behanceLogo from "../assets/behance-logo.svg";
import microsoftLogo from "../assets/microsoft-logo.svg";
import printerestLogo from "../assets/pinterest-logo.svg";
import teslaMotorsLogo from "../assets/tesla-motors-logo.svg";
import nikeLogo from "../assets/nike-logo.svg";
import intelLogo from "../assets/intel-logo.svg";
import bookingLogo from "../assets/booking-logo.svg";
import samsungLogo from "../assets/samsung-logo.svg";
import airbnbLogo from "../assets/airbnb-logo.svg";
import pfizerLogo from "../assets/pfizer-logo.svg";
import siemensLogo from "../assets/siemens-logo.svg";

function Companies() {
   return (
      <section className="mb-4 flex flex-col items-center px-8">
         <h2 className="mb-4 text-2xl font-bold">Companies</h2>
         <p className="mb-8 text-xl text-DimGray">Some of the companies we work with</p>
         <div className="mb-8 flex flex-wrap items-center justify-center gap-y-12 sm:justify-between">
            <div className="flex w-[17rem] items-center justify-center">
               <img className="w-24" src={appleLogo} alt="apple icon" />
            </div>
            <div className="flex w-[17rem] items-center justify-center">
               <img className="w-24" src={behanceLogo} alt="behance icon" />
            </div>
            <div className="flex w-[17rem] items-center justify-center">
               <img className="w-24" src={microsoftLogo} alt="microsoft icon" />
            </div>
            <div className="flex w-[17rem] items-center justify-center">
               <img className="w-24" src={printerestLogo} alt="printerest icon" />
            </div>
            <div className="flex w-[17rem] items-center justify-center">
               <img className="w-24" src={teslaMotorsLogo} alt="tesla icon" />
            </div>
            <div className="flex w-[17rem] items-center justify-center">
               <img className="w-24" src={nikeLogo} alt="nike icon" />
            </div>
            <div className="flex w-[17rem] items-center justify-center">
               <img className="w-24" src={intelLogo} alt="intel icon" />
            </div>
            <div className="flex w-[17rem] items-center justify-center">
               <img className="w-24" src={bookingLogo} alt="booking icon" />
            </div>
            <div className="flex w-[17rem] items-center justify-center">
               <img className="w-24" src={samsungLogo} alt="samsung icon" />
            </div>
            <div className="flex w-[17rem] items-center justify-center">
               <img className="w-24" src={airbnbLogo} alt="airbnb icon" />
            </div>
            <div className="flex w-[17rem] items-center justify-center">
               <img className="w-24" src={pfizerLogo} alt="pfizer icon" />
            </div>
            <div className="flex w-[17rem] items-center justify-center">
               <img className="w-24" src={siemensLogo} alt="siemens icon" />
            </div>
         </div>
         <Link to="companies">
            <p className="font-semibold text-DimGray hover:text-JungleGreenOne">View all</p>
         </Link>
      </section>
   );
}

export default Companies;
