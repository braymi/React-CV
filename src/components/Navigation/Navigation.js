import classes from "./Navigation.module.scss";

import { Link } from "react-scroll";

const Navigation = () => {
  return (
    <header className={classes.desktop}>
      <nav>
        <div className={classes.navFlex}>
          <div className={classes.leftNav}>
            <div className={classes.headerSquare}></div>
            <h1 style={{ margin: "0 0.2rem 0 0.5rem", fontWeight: "bolder" }}>
              <Link
                style={{ cursor: "pointer" }}
                to="home"
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
              to="home"
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
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navigation;
