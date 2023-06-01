import { useEffect } from "react";
import { Collapse, initTE } from "tw-elements";

function Questions() {
   useEffect(() => {
      initTE({ Collapse });
   }, []);

   return (
      <section className="flex w-full flex-col items-center gap-y-8 px-8">
         <h2 className="text-2xl font-bold">Frequently asked questions (FAQs)</h2>
         <div className="w-1/2" id="accordionExample">
            <div className="mb-4 rounded-lg border ">
               <p id="headingOne">
                  <button
                     className="group relative flex w-full items-center p-4 text-[1.125rem] font-semibold text-EerieBlack"
                     type="button"
                     data-te-collapse-init
                     data-te-target="#collapseOne"
                     aria-expanded="true"
                     aria-controls="collapseOne"
                  >
                     What is HuntJob about?
                     <span className="ml-auto h-4 w-4 rotate-[-180deg] transition-transform duration-200 ease-in-out group-[[data-te-collapse-collapsed]]:rotate-0">
                        <svg
                           xmlns="http://www.w3.org/2000/svg"
                           fill="none"
                           viewBox="0 0 24 24"
                           strokeWidth="1.5"
                           stroke="currentColor"
                        >
                           <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                           />
                        </svg>
                     </span>
                  </button>
               </p>
               <div
                  id="collapseOne"
                  className="!visible"
                  data-te-collapse-item
                  data-te-collapse-show
                  aria-labelledby="headingOne"
                  data-te-parent="#accordionExample"
               >
                  <div className="p-4 text-base font-semibold text-DimGray">
                     HuntJob is an worldwide employment website for job listings where current and
                     former employees anonymously review companies.
                  </div>
               </div>
            </div>
            <div className="mb-4 rounded-lg border">
               <p id="headingTwo">
                  <button
                     className="group relative flex w-full items-center p-4 text-[1.125rem] font-semibold text-EerieBlack"
                     type="button"
                     data-te-collapse-init
                     data-te-collapse-collapsed
                     data-te-target="#collapseTwo"
                     aria-expanded="false"
                     aria-controls="collapseTwo"
                  >
                     What benefits come from creating an account?
                     <span className="ml-auto h-4 w-4 rotate-[-180deg] transition-transform duration-200 ease-in-out group-[[data-te-collapse-collapsed]]:mr-0 group-[[data-te-collapse-collapsed]]:rotate-0">
                        <svg
                           xmlns="http://www.w3.org/2000/svg"
                           fill="none"
                           viewBox="0 0 24 24"
                           strokeWidth="1.5"
                           stroke="currentColor"
                        >
                           <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                           />
                        </svg>
                     </span>
                  </button>
               </p>
               <div
                  id="collapseTwo"
                  className="!visible hidden"
                  data-te-collapse-item
                  aria-labelledby="headingTwo"
                  data-te-parent="#accordionExample"
               >
                  <div className="p-4 text-base font-semibold text-DimGray">
                     You will get notifications for every job post that matches your search.
                  </div>
               </div>
            </div>
            <div className="mb-4 rounded-lg border">
               <p id="headingThree">
                  <button
                     className="group relative flex w-full items-center p-4 text-[1.125rem] font-semibold text-EerieBlack"
                     type="button"
                     data-te-collapse-init
                     data-te-collapse-collapsed
                     data-te-target="#collapseThree"
                     aria-expanded="false"
                     aria-controls="collapseThree"
                  >
                     Are there any remote jobs?
                     <span className="ml-auto h-4 w-4 rotate-[-180deg] transition-transform duration-200 ease-in-out group-[[data-te-collapse-collapsed]]:mr-0 group-[[data-te-collapse-collapsed]]:rotate-0">
                        <svg
                           xmlns="http://www.w3.org/2000/svg"
                           fill="none"
                           viewBox="0 0 24 24"
                           strokeWidth="1.5"
                           stroke="currentColor"
                        >
                           <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                           />
                        </svg>
                     </span>
                  </button>
               </p>
               <div
                  id="collapseThree"
                  className="!visible hidden"
                  data-te-collapse-item
                  aria-labelledby="headingThree"
                  data-te-parent="#accordionExample"
               >
                  <div className="p-4 text-base font-semibold text-DimGray">
                     Yes, there are plenty of them and for every level.
                  </div>
               </div>
            </div>
            <div className="mb-4 rounded-lg border">
               <p id="headingFour">
                  <button
                     className="group relative flex w-full items-center p-4 text-[1.125rem] font-semibold text-EerieBlack"
                     type="button"
                     data-te-collapse-init
                     data-te-collapse-collapsed
                     data-te-target="#collapseFour"
                     aria-expanded="false"
                     aria-controls="collapseFour"
                  >
                     Do you guarantee that the companies will respond to me?
                     <span className="ml-auto h-4 w-4 rotate-[-180deg] transition-transform duration-200 ease-in-out group-[[data-te-collapse-collapsed]]:mr-0 group-[[data-te-collapse-collapsed]]:rotate-0">
                        <svg
                           xmlns="http://www.w3.org/2000/svg"
                           fill="none"
                           viewBox="0 0 24 24"
                           strokeWidth="1.5"
                           stroke="currentColor"
                        >
                           <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                           />
                        </svg>
                     </span>
                  </button>
               </p>
               <div
                  id="collapseFour"
                  className="!visible hidden"
                  data-te-collapse-item
                  aria-labelledby="headingFour"
                  data-te-parent="#accordionExample"
               >
                  <div className="p-4 text-base font-semibold text-DimGray">
                     No, the companies have the right to contact you or not-lg font-semiboldd on
                     their own criteria.
                  </div>
               </div>
            </div>
            <div className="mb-4 rounded-lg border">
               <p id="headingFive">
                  <button
                     className="group relative flex w-full items-center p-4 text-[1.125rem] font-semibold text-EerieBlack"
                     type="button"
                     data-te-collapse-init
                     data-te-collapse-collapsed
                     data-te-target="#collapseFive"
                     aria-expanded="false"
                     aria-controls="collapseFive"
                  >
                     Is HuntJob free?
                     <span className="ml-auto h-4 w-4 rotate-[-180deg] transition-transform duration-200 ease-in-out group-[[data-te-collapse-collapsed]]:mr-0 group-[[data-te-collapse-collapsed]]:rotate-0">
                        <svg
                           xmlns="http://www.w3.org/2000/svg"
                           fill="none"
                           viewBox="0 0 24 24"
                           strokeWidth="1.5"
                           stroke="currentColor"
                        >
                           <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                           />
                        </svg>
                     </span>
                  </button>
               </p>
               <div
                  id="collapseFive"
                  className="!visible hidden"
                  data-te-collapse-item
                  aria-labelledby="headingFive"
                  data-te-parent="#accordionExample"
               >
                  <div className="p-4 text-base font-semibold text-DimGray">
                     Yes, it's 100% free.
                  </div>
               </div>
            </div>
         </div>
      </section>
   );
}

export default Questions;
