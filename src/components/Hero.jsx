import { Link } from "react-router-dom";
import heroImage from "../assets/hero-image.png";
function Hero() {
   return (
      <article className="mb-8 flex w-full flex-col-reverse items-center justify-between px-8 md:flex-row">
         <section>
            <h1 className="text-3xl font-bold text-EerieBlack sm:text-4xl">
               If opportunity doesn't knock,
               <span className="text-JungleGreenTwo"> build a door.</span>
            </h1>
            <p className="mb-8 self-end text-right text-xl font-semibold text-EerieBlack sm:text-2xl">
               Milton Berle
            </p>
            <p className="mb-8 text-lg font-semibold text-DimGray sm:text-xl">
               Getting your dream job has never been easier, HuntJob is here for you.
            </p>
            <Link to="search-job">
               <button className="rounded-md bg-JungleGreenOne px-4 py-2 font-semibold text-white hover:opacity-90">
                  Explore
               </button>
            </Link>
         </section>
         <section className=" mb-4 sm:mb-0">
            <img className="w-[25rem] sm:w-[33rem]" src={heroImage} alt="woman work on laptop" />
         </section>
      </article>
   );
}

export default Hero;
