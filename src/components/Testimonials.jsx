import { useEffect } from "react";
import { Carousel, initTE } from "tw-elements";
import appleLogo from "../assets/apple-logo.svg";
import behanceLogo from "../assets/behance-logo.svg";
import microsoftLogo from "../assets/microsoft-logo.svg";
import printerestLogo from "../assets/pinterest-logo.svg";
import teslaMotorsLogo from "../assets/tesla-motors-logo.svg";
import goldenStarIcon from "../assets/golden-star-icon.svg";
import avatarOne from "../assets/avatar-one.jpg";
import avatarTwo from "../assets/avatar-two.jpg";
import avatarThree from "../assets/avatar-three.jpg";
import avatarFour from "../assets/avatar-four.jpg";
import avatarFive from "../assets/avatar-five.jpg";
function Testimonials() {
   useEffect(() => {
      initTE({ Carousel });
   }, []);
   return (
      <section className="flex w-full flex-col items-center gap-y-8 p-8">
         <h2 className="text-2xl font-bold">Testimonials</h2>
         <div
            id="carouselExampleIndicators"
            className="relative w-2/3 rounded-lg border px-16 py-8"
            data-te-carousel-init
            data-te-carousel-slide
         >
            {/* <!--Carousel indicators--> */}
            <div
               className="absolute bottom-0 left-0 right-0 z-[2] mx-[15%] mb-4 flex list-none justify-center p-0"
               data-te-carousel-indicators
            >
               <button
                  type="button"
                  data-te-target="#carouselExampleIndicators"
                  data-te-slide-to="0"
                  data-te-carousel-active
                  className="mx-[3px] box-content h-[3px] w-[30px] flex-initial cursor-pointer border-0 border-y-[10px] border-solid border-transparent bg-JungleGreenOne bg-clip-padding p-0 -indent-[999px] opacity-50 transition-opacity duration-[600ms] ease-[cubic-bezier(0.25,0.1,0.25,1.0)] motion-reduce:transition-none"
                  aria-current="true"
                  aria-label="Slide 1"
               ></button>
               <button
                  type="button"
                  data-te-target="#carouselExampleIndicators"
                  data-te-slide-to="1"
                  className="mx-[3px] box-content h-[3px] w-[30px] flex-initial cursor-pointer border-0 border-y-[10px] border-solid border-transparent bg-JungleGreenOne bg-clip-padding p-0 -indent-[999px] opacity-50 transition-opacity duration-[600ms] ease-[cubic-bezier(0.25,0.1,0.25,1.0)] motion-reduce:transition-none"
                  aria-label="Slide 2"
               ></button>
               <button
                  type="button"
                  data-te-target="#carouselExampleIndicators"
                  data-te-slide-to="2"
                  className="mx-[3px] box-content h-[3px] w-[30px] flex-initial cursor-pointer border-0 border-y-[10px] border-solid border-transparent bg-JungleGreenOne bg-clip-padding p-0 -indent-[999px] opacity-50 transition-opacity duration-[600ms] ease-[cubic-bezier(0.25,0.1,0.25,1.0)] motion-reduce:transition-none"
                  aria-label="Slide 3"
               ></button>
               <button
                  type="button"
                  data-te-target="#carouselExampleIndicators"
                  data-te-slide-to="3"
                  className="mx-[3px] box-content h-[3px] w-[30px] flex-initial cursor-pointer border-0 border-y-[10px] border-solid border-transparent bg-JungleGreenOne bg-clip-padding p-0 -indent-[999px] opacity-50 transition-opacity duration-[600ms] ease-[cubic-bezier(0.25,0.1,0.25,1.0)] motion-reduce:transition-none"
                  aria-label="Slide 4"
               ></button>
               <button
                  type="button"
                  data-te-target="#carouselExampleIndicators"
                  data-te-slide-to="4"
                  className="mx-[3px] box-content h-[3px] w-[30px] flex-initial cursor-pointer border-0 border-y-[10px] border-solid border-transparent bg-JungleGreenOne bg-clip-padding p-0 -indent-[999px] opacity-50 transition-opacity duration-[600ms] ease-[cubic-bezier(0.25,0.1,0.25,1.0)] motion-reduce:transition-none"
                  aria-label="Slide 5"
               ></button>
            </div>

            {/* <!--Carousel items--> */}
            <div className="relative mb-4 h-[19rem] w-full overflow-hidden rounded-lg shadow-new-md after:clear-both after:block after:content-['']">
               {/* <!--First item--> */}
               <div
                  className="relative float-left -mr-[100%] w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
                  data-te-carousel-item
                  data-te-carousel-active
               >
                  <div className="w-full px-8 py-4">
                     <div className="mb-8 flex w-full items-center gap-x-4">
                        <img className="w-10" src={microsoftLogo} alt="microsoft logo" />
                        <p className="text-xl font-semibold">Microsoft</p>
                     </div>
                     <p className="mb-12 text-sm font-medium text-DimGray">
                        I had relocated to a new city and was struggling to find employment in my
                        area of expertise. That's when I came across this employment website. It not
                        only allowed me to search for jobs based on location but also provided
                        useful information about the local job market and industry trends. Thanks to
                        the website's resources and job alerts, I quickly found a job that matched
                        my skills, and I'm now happily employed in my new city.
                     </p>
                     <div className="mb-4 flex justify-between">
                        <div className="flex gap-x-2">
                           <img
                              className="h-10 w-10 rounded-full"
                              src={avatarOne}
                              alt="michael r image"
                           />
                           <div>
                              <p className="font-semibold text-EerieBlack">Michael R</p>
                              <p className="text-sm text-DimGray">system embedded engineer</p>
                           </div>
                        </div>
                        <div className="flex">
                           <img className="w-6" src={goldenStarIcon} alt="5 star rating" />
                           <img className="w-6" src={goldenStarIcon} alt="5 star rating" />
                           <img className="w-6" src={goldenStarIcon} alt="5 star rating" />
                           <img className="w-6" src={goldenStarIcon} alt="5 star rating" />
                           <img className="w-6" src={goldenStarIcon} alt="5 star rating" />
                        </div>
                     </div>
                  </div>
               </div>
               {/* <!--Second item--> */}
               <div
                  className="relative float-left -mr-[100%] hidden w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
                  data-te-carousel-item
               >
                  <div className="w-full px-8 py-4">
                     <div className="mb-8 flex w-full items-center gap-x-4">
                        <img className="w-10" src={behanceLogo} alt="behance logo" />
                        <p className="text-xl font-semibold">Behance</p>
                     </div>
                     <p className="mb-12 text-sm font-medium text-DimGray">
                        I was hesitant to try an online employment website, but I'm so glad I did.
                        The website provided me with a wide range of job options in my desired
                        field, and the application process was straightforward. The best part was
                        that I received personalized job recommendations based on my skills and
                        preferences. Thanks to this website, I secured a fantastic job that aligned
                        perfectly with my career goals.
                     </p>
                     <div className="mb-4 flex justify-between">
                        <div className="flex gap-x-2">
                           <img
                              className="h-10 w-10 rounded-full"
                              src={avatarTwo}
                              alt="sarah m image"
                           />
                           <div>
                              <p className="font-semibold text-EerieBlack">Sarah M</p>
                              <p className="text-sm text-DimGray">Product manager</p>
                           </div>
                        </div>
                        <div className="flex">
                           <img className="w-6" src={goldenStarIcon} alt="5 star rating" />
                           <img className="w-6" src={goldenStarIcon} alt="5 star rating" />
                           <img className="w-6" src={goldenStarIcon} alt="5 star rating" />
                           <img className="w-6" src={goldenStarIcon} alt="5 star rating" />
                           <img className="w-6" src={goldenStarIcon} alt="5 star rating" />
                        </div>
                     </div>
                  </div>
               </div>
               {/* <!--Third item--> */}
               <div
                  className="relative float-left -mr-[100%] hidden w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
                  data-te-carousel-item
               >
                  <div className="w-full px-8 py-4">
                     <div className="mb-8 flex w-full items-center gap-x-4">
                        <img className="w-10" src={appleLogo} alt="apple logo" />
                        <p className="text-xl font-semibold">Apple</p>
                     </div>
                     <p className="mb-12 text-sm font-medium text-DimGray">
                        I had been searching for a job for months, but it wasn't until I registered
                        on this employment website that I found success. Within a week, I received
                        multiple interview requests and finally landed my dream job. The platform
                        was user-friendly, and the job listings were relevant and up to date. I
                        highly recommend this website to anyone looking for employment
                        opportunities.
                     </p>
                     <div className="mb-4 flex justify-between">
                        <div className="flex gap-x-2">
                           <img
                              className="h-10 w-10 rounded-full"
                              src={avatarThree}
                              alt="john d image"
                           />
                           <div>
                              <p className="font-semibold text-EerieBlack">John D</p>
                              <p className="text-sm text-DimGray">Full stack developer</p>
                           </div>
                        </div>
                        <div className="flex">
                           <img className="w-6" src={goldenStarIcon} alt="5 star rating" />
                           <img className="w-6" src={goldenStarIcon} alt="5 star rating" />
                           <img className="w-6" src={goldenStarIcon} alt="5 star rating" />
                           <img className="w-6" src={goldenStarIcon} alt="5 star rating" />
                           <img className="w-6" src={goldenStarIcon} alt="5 star rating" />
                        </div>
                     </div>
                  </div>
               </div>
               {/* <!--Fourth item--> */}
               <div
                  className="relative float-left -mr-[100%] hidden w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
                  data-te-carousel-item
               >
                  <div className="w-full px-8 py-4">
                     <div className="mb-8 flex w-full items-center gap-x-4">
                        <img className="w-10" src={printerestLogo} alt="pinterest logo" />
                        <p className="text-xl font-semibold">Pinterest</p>
                     </div>
                     <p className="mb-12 text-sm font-medium text-DimGray">
                        As a recent college graduate, I was overwhelmed by the job search process.
                        However, this employment website made it much easier for me. The website had
                        a wide range of entry-level job opportunities, and I appreciated the ability
                        to filter job listings based on my qualifications. The website's resume
                        builder and interview tips were invaluable resources that helped me secure
                        my first professional position. I highly recommend this website to fellow
                        graduates.
                     </p>
                     <div className="mb-4 flex justify-between">
                        <div className="flex gap-x-2">
                           <img
                              className="h-10 w-10 rounded-full"
                              src={avatarFour}
                              alt="emily l image"
                           />
                           <div>
                              <p className="font-semibold text-EerieBlack">Emily L</p>
                              <p className="text-sm text-DimGray">UX/UI designer</p>
                           </div>
                        </div>
                        <div className="flex">
                           <img className="w-6" src={goldenStarIcon} alt="5 star rating" />
                           <img className="w-6" src={goldenStarIcon} alt="5 star rating" />
                           <img className="w-6" src={goldenStarIcon} alt="5 star rating" />
                           <img className="w-6" src={goldenStarIcon} alt="5 star rating" />
                           <img className="w-6" src={goldenStarIcon} alt="5 star rating" />
                        </div>
                     </div>
                  </div>
               </div>
               {/* <!--Fifth item--> */}
               <div
                  className="relative float-left -mr-[100%] hidden w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
                  data-te-carousel-item
               >
                  <div className="w-full px-8 py-4">
                     <div className="mb-8 flex w-full items-center gap-x-4">
                        <img className="w-10" src={teslaMotorsLogo} alt="tesla motors logo" />
                        <p className="text-xl font-semibold">Tesla motors</p>
                     </div>
                     <p className="mb-12 text-sm font-medium text-DimGray">
                        I had been out of the workforce for several years due to personal
                        commitments, and I was worried about reentering the job market. This
                        employment website provided a supportive and inclusive environment for
                        individuals like me. With their assistance, I successfully reestablished my
                        career and found a fulfilling job. I can't thank them enough for their
                        dedication to helping job seekers
                     </p>
                     <div className="mb-4 flex justify-between">
                        <div className="flex gap-x-2">
                           <img
                              className="h-10 w-10 rounded-full"
                              src={avatarFive}
                              alt="david s image"
                           />
                           <div>
                              <p className="font-semibold text-EerieBlack">David S</p>
                              <p className="text-sm text-DimGray">Mechanical engineer</p>
                           </div>
                        </div>
                        <div className="flex">
                           <img className="w-6" src={goldenStarIcon} alt="5 star rating" />
                           <img className="w-6" src={goldenStarIcon} alt="5 star rating" />
                           <img className="w-6" src={goldenStarIcon} alt="5 star rating" />
                           <img className="w-6" src={goldenStarIcon} alt="5 star rating" />
                           <img className="w-6" src={goldenStarIcon} alt="5 star rating" />
                        </div>
                     </div>
                  </div>
               </div>
            </div>

            {/* <!--Carousel controls - prev item--> */}
            <button
               className="absolute bottom-0 left-0 top-0 z-[1] flex w-[15%] items-center justify-center border-0 bg-none p-0 text-center text-white opacity-50 transition-opacity duration-150 ease-[cubic-bezier(0.25,0.1,0.25,1.0)] hover:text-white hover:no-underline hover:opacity-90 hover:outline-none focus:text-white focus:no-underline focus:opacity-90 focus:outline-none motion-reduce:transition-none"
               type="button"
               data-te-target="#carouselExampleIndicators"
               data-te-slide="prev"
            >
               <span className="inline-block h-8 w-6">
                  <svg
                     xmlns="http://www.w3.org/2000/svg"
                     fill="none"
                     viewBox="0 0 24 24"
                     strokeWidth="1.5"
                     stroke="currentColor"
                     className="h-6 w-6 rounded-full bg-JungleGreenOne"
                  >
                     <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15.75 19.5L8.25 12l7.5-7.5"
                     />
                  </svg>
               </span>
               <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
                  Previous
               </span>
            </button>
            {/* <!--Carousel controls - next item--> */}
            <button
               className="absolute bottom-0 right-0 top-0 z-[1] flex w-[15%] items-center justify-center border-0 bg-none p-0 text-center text-white opacity-50 transition-opacity duration-150 ease-[cubic-bezier(0.25,0.1,0.25,1.0)] hover:text-white hover:no-underline hover:opacity-90 hover:outline-none focus:text-white focus:no-underline focus:opacity-90 focus:outline-none motion-reduce:transition-none"
               type="button"
               data-te-target="#carouselExampleIndicators"
               data-te-slide="next"
            >
               <span className="inline-block h-8 w-6">
                  <svg
                     xmlns="http://www.w3.org/2000/svg"
                     fill="none"
                     viewBox="0 0 24 24"
                     strokeWidth="1.5"
                     stroke="currentColor"
                     className="h-6 w-6 rounded-full bg-JungleGreenOne"
                  >
                     <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M8.25 4.5l7.5 7.5-7.5 7.5"
                     />
                  </svg>
               </span>
               <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
                  Next
               </span>
            </button>
         </div>
      </section>
   );
}

export default Testimonials;
