import React from "react";
import Destination from "./components/destinations/Destination";
import Hero from "./components/hero/Hero";
import Contact from "./components/contact/contact";
import Navbar from "./components/navbar/Navbar";
import Recomadation from "./components/recomendation/Recomadation";
function App() {
  return (
    <div >
     <Navbar/>
     <Hero/>
     <Destination/>
     <Recomadation/>
     <Contact/>
    </div>
  );
}

export default App;
