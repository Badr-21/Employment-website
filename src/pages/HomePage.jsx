import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Questions from "../components/Questions";
import Steps from "../components/Steps";
import Testimonials from "../components/Testimonials";
function Home() {
   return (
      <main>
         <Hero />
         <Steps />
         <Testimonials />
         <Questions />
         <Footer />
      </main>
   );
}

export default Home;
