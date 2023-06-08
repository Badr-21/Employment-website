import userProfileIcon from "../assets/user-profile-icon.svg";
import magnifyingGlassIcon from "../assets/magnifying-glass-icon.svg";
import applyJobIcon from "../assets/apply-job-icon.svg";
import checkedSuccessIcon from "../assets/checked-success-icon.svg";
function Steps() {
   return (
      <section className="mb-8 flex w-full flex-col items-center px-8">
         <h2 className="mb-12 text-2xl font-bold">How does it work?</h2>
         <div className="flex w-full flex-wrap justify-center gap-8 md:justify-between">
            <div className="relative flex w-[18rem] flex-col justify-between rounded-md border p-8 shadow-new-md">
               <h3 className="text-xl font-bold text-EerieBlack">Create an account</h3>
               <p className="text-DimGray">
                  Sign up easily with your basic information to gain access to personalized job
                  recommendations and the ability to upload your resume.
               </p>
               <p className="font-semibold text-EerieBlack hover:cursor-pointer hover:text-JungleGreenTwo hover:underline">
                  Learn more
               </p>
               <img
                  className="absolute left-[1rem] top-[-1.5rem] w-12"
                  src={userProfileIcon}
                  alt="use profile icon"
               />
            </div>
            <div className="relative flex w-[18rem] flex-col justify-between rounded-md border p-8 shadow-new-md">
               <h3 className="text-xl font-bold text-EerieBlack">Search a Job</h3>
               <p className="text-DimGray">
                  Use our powerful search engine to filter job listings based on location, industry,
                  and experience level, ensuring you find the right opportunities.
               </p>
               <p className="font-semibold text-EerieBlack hover:cursor-pointer hover:text-JungleGreenTwo hover:underline">
                  Learn more
               </p>
               <img
                  className="absolute left-[1rem] top-[-1.5rem] w-14"
                  src={magnifyingGlassIcon}
                  alt="magnifying glass icon"
               />
            </div>
            <div className="relative flex w-[18rem] flex-col justify-between rounded-md border p-8 shadow-new-md">
               <h3 className="text-xl font-bold text-EerieBlack">Apply to Jobs</h3>
               <p className="text-DimGray">
                  Submit applications effortlessly through our user-friendly interface, including
                  uploading your resume and writing tailored cover letters.
               </p>
               <p className="font-semibold text-EerieBlack hover:cursor-pointer hover:text-JungleGreenTwo hover:underline">
                  Learn more
               </p>
               <img
                  className="absolute left-[1rem] top-[-1.5rem] w-12"
                  src={applyJobIcon}
                  alt="apply job icon"
               />
            </div>
            <div className="relative flex w-[18rem] flex-col justify-between rounded-md border p-8 shadow-new-md">
               <h3 className="text-xl font-bold text-EerieBlack">Get Hired</h3>
               <p className="text-DimGray">
                  Manage your applications, track their status, and communicate with employers.
                  Prepare for interviews with our resources, and celebrate when you receive and
                  accept a job offer.
               </p>
               <p className="font-semibold text-EerieBlack hover:cursor-pointer hover:text-JungleGreenTwo hover:underline">
                  Learn more
               </p>
               <img
                  className="absolute left-[1rem] top-[-1.5rem] w-12"
                  src={checkedSuccessIcon}
                  alt="checked success icon"
               />
            </div>
         </div>
      </section>
   );
}

export default Steps;
