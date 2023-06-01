import "./App.css";
import Header from "./components/Header";
import AnimatedRoutes from "./animatedRoutes/AnimatedRoutes";
import { BrowserRouter as Router } from "react-router-dom";

function App() {
   return (
      <Router>
         <Header />
         <AnimatedRoutes />
      </Router>
   );
}

export default App;
