import { useEffect } from "react";
import { Carousel, initTE } from "tw-elements";
import appleLogo from "../assets/apple-logo.svg";
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
            </div>

            {/* <!--Carousel items--> */}
            <div className="relative w-full overflow-hidden rounded-lg shadow-new-md after:clear-both after:block after:content-['']">
               {/* <!--First item--> */}
               <div
                  className="relative float-left -mr-[100%] w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
                  data-te-carousel-item
                  data-te-carousel-active
               >
                  {/* <img
                     src="https://mdbcdn.b-cdn.net/img/new/slides/041.webp"
                     className="block w-full"
                     alt="Wild Landscape"
                  /> */}
                  <div className="w-full px-8 py-4">
                     <div className="mb-8 flex w-full items-center gap-x-4">
                        <img className="w-10" src={appleLogo} alt="apple logo" />
                        <p className="text-xl font-semibold">Apple</p>
                     </div>
                     <p className="mb-12 text-sm text-DimGray">
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
               {/* <!--Second item--> */}
               <div
                  className="relative float-left -mr-[100%] hidden w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
                  data-te-carousel-item
               >
                  <img
                     src="https://mdbcdn.b-cdn.net/img/new/slides/042.webp"
                     className="block w-full"
                     alt="Camera"
                  />
               </div>
               {/* <!--Third item--> */}
               <div
                  className="relative float-left -mr-[100%] hidden w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
                  data-te-carousel-item
               >
                  <img
                     src="https://mdbcdn.b-cdn.net/img/new/slides/043.webp"
                     className="block w-full"
                     alt="Exotic Fruits"
                  />
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
