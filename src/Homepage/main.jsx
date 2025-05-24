import { createRoot } from "react-dom/client";
import "../assets/tailwind.css";
import Navbar from "../layouts/Navbar";
import Herosection from "../pages/Herosection";

import FeatureSection from "../pages/FeatureSection";
import Footer from "../layouts/Footer";


createRoot(document.getElementById("root"))
  .render(
    <div>
   <Navbar/>
   <Herosection/>
   <FeatureSection/>
   <Footer/>
    </div>
  );

