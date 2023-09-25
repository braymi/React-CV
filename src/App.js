import HomePage from "./components/HomePage/HomePage";
import Navigation from "./components/Navigation/Navigation";
import Resume from "./components/Resume/Resume";
import Contact from "./components/Contact/Contact";
import Projects from "./components/Projects/Projects";
import { useEffect, useState } from "react";
import MobileNavigation from "./components/MobileNavigation/MobileNavigation";

function App() {
  const [windowDimension, setWindowDimension] = useState(null);

  useEffect(() => {
    setWindowDimension(window.innerWidth);
  }, []);

  useEffect(() => {
    function handleResize() {
      setWindowDimension(window.innerWidth);
    }

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const isMobile = windowDimension <= 850;
  return (
    <>
      {isMobile ? <MobileNavigation /> : <Navigation />}
      <HomePage />
      <Projects />
      <Resume />
      <Contact />
    </>
  );
}

export default App;
