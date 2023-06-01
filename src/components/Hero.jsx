import heroImage from "../assets/hero-image.png";
function Hero() {
   return (
      <article className="flex w-full items-center justify-between px-8">
         <section>
            <h1 className=" flex text-4xl font-bold text-EerieBlack">
               If opportunity doesn't knock
               <span className="text-JungleGreenTwo">, build a door.</span>
            </h1>
            <p className="mb-8 self-end text-right text-2xl font-semibold text-EerieBlack">
               Milton Berle
            </p>
            <p className="mb-8 text-xl font-semibold text-DimGray">
               Getting your dream job has never been easier, HuntJob is here for you.
            </p>
            <button className="rounded-md bg-JungleGreenOne px-4 py-2 font-semibold text-white hover:opacity-90">
               Explore
            </button>
         </section>
         <section>
            <img className="w-[33rem]" src={heroImage} alt="woman work on laptop" />
         </section>
      </article>
   );
}

export default Hero;
