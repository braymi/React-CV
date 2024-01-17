import classes from "./Navigation.module.scss";
import { useState } from "react";

import { Link, animateScroll as scroll } from "react-scroll";
import { DarkModeSwitch } from "react-toggle-dark-mode";
import useLocalStorage from "use-local-storage";

const Navigation = () => {
  const defaultDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  const [theme, setTheme] = useLocalStorage(
    "theme",
    defaultDark ? "dark" : "light"
  );

  const [isDarkMode, setDarkMode] = useState(theme === "dark" ? false : true);

  const switchTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    setDarkMode(!isDarkMode);
  };

  const scrollToTop = () => {
    scroll.scrollToTop();
  };
  return (
    <header className={classes.desktop}>
      <nav>
        <div className={classes.navFlex}>
          <div className={classes.leftNav}>
            <div className={classes.headerSquare}></div>
            <h1 style={{ margin: "0 0.2rem 0 0.5rem", fontWeight: "bolder" }}>
              <Link
                style={{ cursor: "pointer" }}
                onClick={scrollToTop}
                spy={true}
                smooth={true}
                duration={500}
              >
                Raymond Beres
              </Link>
            </h1>
            <h3 style={{ fontFamily: "Quattrocento", margin: "0" }}>/</h3>
            <h3 style={{ fontFamily: "Quattrocento", margin: "0" }}>
              Junior Front End Developer
            </h3>
          </div>
          <div className={classes.rightNav}>
            <Link
              style={{ cursor: "pointer" }}
              onClick={scrollToTop}
              spy={true}
              smooth={true}
              duration={500}
            >
              <h3>About Me</h3>
            </Link>
            <Link
              style={{ cursor: "pointer" }}
              to="projects"
              offset={-20}
              spy={true}
              smooth={true}
              duration={500}
            >
              <h3>Projects</h3>
            </Link>
            <Link
              style={{ cursor: "pointer" }}
              to="resume"
              offset={-20}
              spy={true}
              smooth={true}
              duration={500}
            >
              <h3>Resumé</h3>
            </Link>
            <Link
              style={{ cursor: "pointer" }}
              to="contact"
              spy={true}
              smooth={true}
              duration={500}
            >
              <h3>Contact</h3>
            </Link>
            <DarkModeSwitch
              style={{ marginLeft: "1rem" }}
              checked={isDarkMode}
              onChange={switchTheme}
              moonColor="#121212"
              sunColor="#ece5f0"
            />
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navigation;
