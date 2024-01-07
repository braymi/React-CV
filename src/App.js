import HomePage from "./components/HomePage/HomePage";
import Navigation from "./components/Navigation/Navigation";
import Resume from "./components/Resume/Resume";
import Contact from "./components/Contact/Contact";
import Projects from "./components/Projects/Projects";
import { useEffect, useState } from "react";
import MobileNavigation from "./components/MobileNavigation/MobileNavigation";
import ScrollToTop from "react-scroll-to-top";
import { isMobile } from "react-device-detect";

function App() {
  return (
    <>
      {isMobile ? <MobileNavigation /> : <Navigation />}
      <HomePage />
      <Projects />
      <Resume />
      <Contact />
      <ScrollToTop
        smooth
        color="#EB5E28"
        style={
          isMobile
            ? { bottom: "7%", right: "7%", padding: "0" }
            : { bottom: "5%", right: "5%", padding: "0" }
        }
      />
    </>
  );
}

export default App;
