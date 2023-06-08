import Companies from "../components/Companies";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Questions from "../components/Questions";
import Steps from "../components/Steps";
import Testimonials from "../components/Testimonials";
import { motion } from "framer-motion";
function Home() {
   return (
      <motion.main
         initial={{ opacity: 0 }}
         animate={{ opacity: 1 }}
         exit={{
            opacity: 0,
         }}
      >
         <Hero />
         <Steps />
         <Companies />
         <Testimonials />
         <Questions />
         <Footer />
      </motion.main>
   );
}

export default Home;
