import logo from "../assets/job-hunt-high-resolution-logo-color-on-transparent-background.svg";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

function SingUpPage() {
   const handleSubmit = (e) => {
      e.preventDefault();
   };
   return (
      <motion.main
         className="flex flex-col items-center bg-Platinum p-8"
         initial={{ opacity: 0 }}
         animate={{ opacity: 1 }}
         exit={{
            opacity: 0,
         }}
      >
         <img className="mb-8 w-60 " src={logo} alt="logo" />
         <section className="flex flex-col rounded-md bg-white p-4 sm:w-[30rem]">
            <h1 className="mb-2 text-3xl font-semibold text-EerieBlack">
               Ready to take the next step?
            </h1>
            <p className="mb-2 text-xl text-DimGray">Create an account or sign in.</p>
            <p className="mb-2 border-b border-Platinum pb-4 text-sm text-DimGray">
               By creating an account or logging in, you understand and agree to Indeed's{" "}
               <span className="cursor-pointer text-JungleGreenTwo">Terms</span>. You also
               acknowledge our <span className="cursor-pointer text-JungleGreenTwo">Cookie</span>{" "}
               and <span className="cursor-pointer text-JungleGreenTwo">Privacy</span> policies.
            </p>
            <form className="w-full py-2" onSubmit={handleSubmit}>
               <div className="flex flex-col sm:mb-4 sm:flex-row sm:gap-x-4 ">
                  <input
                     className="mb-4 w-full rounded-md border border-Platinum px-4 py-2 outline-none sm:mb-0 sm:w-1/2"
                     type="text"
                     name="first-name"
                     placeholder="First name"
                  />
                  <input
                     className="mb-4 w-full rounded-md border border-Platinum px-4 py-2 outline-none sm:mb-0 sm:w-1/2"
                     type="text"
                     name="last-name"
                     placeholder="Last name"
                  />
               </div>
               <input
                  className="mb-4 w-full rounded-md border border-Platinum px-4 py-2 outline-none"
                  type="email"
                  placeholder="Email"
               />
               <input
                  className="mb-4 w-full rounded-md border border-Platinum px-4 py-2 outline-none"
                  type="password"
                  name="password"
                  placeholder="Password"
               />
               <input
                  className="mb-4 w-full rounded-md border border-Platinum px-4 py-2 outline-none"
                  type="password"
                  name="password"
                  placeholder="Confirm password"
               />
               <div className="f-full flex flex-col items-center gap-y-4">
                  {" "}
                  <button
                     className="rounded-md bg-JungleGreenTwo px-4 py-2 font-semibold text-white hover:cursor-pointer hover:bg-JungleGreenOne"
                     type="submit"
                  >
                     Sing up
                  </button>
                  <Link to="/log-in">
                     <p className="cursor-pointer text-JungleGreenTwo">Already have an account?</p>
                  </Link>
               </div>
            </form>
         </section>
      </motion.main>
   );
}

export default SingUpPage;
