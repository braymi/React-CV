import classes from "./HomePage.module.scss";

import { Link } from "react-router-dom";

import { scroller } from "react-scroll";

import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

const HomePage = () => {
  const MainButton = styled(Button)({
    appearance: "button",
    backfaceVisibility: "hidden",
    backgroundColor: "var(--highlight)",
    borderRadius: "0.3rem",
    borderWidth: "0",
    boxShadow:
      "rgba(50, 50, 93, .1) 0 0 0 1px inset,rgba(50, 50, 93, .1) 0 2px 5px 0,rgba(0, 0, 0, .07) 0 1px 1px 0",
    boxSizing: "border-box",
    color: "#fff",
    cursor: "pointer",
    fontSize: "100%",
    height: "3rem",
    lineHeight: 1.15,
    margin: "1rem 0 0",
    outline: "none",
    overflow: "hidden",
    padding: "0 2rem",
    position: "relative",
    textAlign: ["center", "center"],
    textTransform: "none",
    transform: "translateZ(0)",
    transition: "all .2s,box-shadow .08s ease-in",
    userSelect: "none",
    WebkitUserSelect: "none",
    touchAction: "manipulation",
    width: "50%",
    fontFamily: [
      "-apple-system",
      "system-ui",
      "Segoe UI",
      "Roboto",
      "Helvetica Neue",
      "Ubuntu,sans-serif",
    ].join(","),
    "&:focus": {
      boxShadow:
        "rgba(217, 217, 217, 0.1) 0 0 0 1px inset, rgba(217, 217, 217, .2) 0 6px 15px 0, rgba(217, 217, 217, .1) 0 2px 2px 0, rgba(217, 217, 217, .3) 0 0 0 4px",
    },
    "&:disabled": { cursor: "default" },
    "&:hover": { backgroundColor: "#FF672D" },
  });

  const SecondButton = styled(Button)({
    appearance: "button",
    backfaceVisibility: "hidden",
    borderRadius: "0.3rem",
    borderColor: "black",
    borderWidth: "0",
    boxShadow:
      "rgba(50, 50, 93, .1) 0 0 0 1px inset,rgba(50, 50, 93, .1) 0 2px 5px 0,rgba(0, 0, 0, .07) 0 1px 1px 0",
    boxSizing: "border-box",
    color: "#fff",
    cursor: "pointer",
    fontSize: "100%",
    height: "3rem",
    lineHeight: 1.15,
    margin: "1rem 0 0",
    outline: "none",
    overflow: "hidden",
    padding: "0 2rem",
    position: "relative",
    textAlign: ["center", "center"],
    textTransform: "none",
    transform: "translateZ(0)",
    transition: "all .2s,box-shadow .08s ease-in",
    userSelect: "none",
    WebkitUserSelect: "none",
    touchAction: "manipulation",
    width: "50%",
    border: "0.5px solid black",
    fontFamily: [
      "-apple-system",
      "system-ui",
      "Segoe UI",
      "Roboto",
      "Helvetica Neue",
      "Ubuntu,sans-serif",
    ].join(","),
    "&:focus": {
      boxShadow:
        "rgba(217, 217, 217, 0.1) 0 0 0 1px inset, rgba(217, 217, 217, .2) 0 6px 15px 0, rgba(217, 217, 217, .1) 0 2px 2px 0, rgba(217, 217, 217, .3) 0 0 0 4px",
    },
    "&:disabled": { cursor: "default" },
    "&:hover": { border: "1px solid black" },
  });

  const scrollToResume = () => {
    scroller.scrollTo("resume", {
      spy: true,
      smooth: true,
      duration: 500,
      offset: -20,
    });
  };

  const scrollToProjects = () => {
    scroller.scrollTo("projects", {
      spy: true,
      smooth: true,
      duration: 500,
      offset: -20,
    });
  };

  return (
    <div className={classes.HomePageBody} name="home">
      <div className={classes.bgFlexBox}>
        <div className={classes.smallSquare}>
          <div className={classes.topSmallSquare}>
            <img src={require("./assets/me.jpg")} alt="Myself" />
            <h1 style={{ fontFamily: "Inter Tight" }}>Raymond Beres</h1>
            <hr />
            <h3 style={{ color: "var(--text)" }}>Junior Front End Developer</h3>
          </div>
          <div className={classes.squareSocial}>
            <Link to="https://www.facebook.com/beres.raymond/" target="_blank">
              <FacebookIcon fontSize="large" />
            </Link>
            <Link to="https://www.instagram.com/b.raymi" target="_blank">
              <InstagramIcon fontSize="large" />
            </Link>
            <Link
              to="https://www.linkedin.com/in/raymond-beres-7ab302291/"
              target="_blank"
            >
              <LinkedInIcon fontSize="large" />
            </Link>
          </div>
        </div>
        <div className={classes.squareDesc}>
          <h1 className={classes.mainTitle}>Howdy!</h1>
          <h2>Who am I and what do I do?</h2>
          <p>
            I consider myself a positive and mature person, who fights to
            achieve the best results in any given objective. In my previous jobs
            I have proven my abilty work even under pressure. In the same time
            I'm an adventurous, friendly person, who is able to bring smile on
            peoples faces, but in the same time I have maximum seriousness when
            it comes to work, and I do my best to achieve everything possible
            and necessary
          </p>
          <div className={classes.buttonFlex}>
            <MainButton
              variant="contained"
              sx={{ backgroundColor: "var(--highlight)" }}
              onClick={scrollToResume}
            >
              Resumé
            </MainButton>

            <SecondButton
              variant="outlined"
              sx={{ color: "var(--text)", borderColor: "var(--text)" }}
              onClick={scrollToProjects}
            >
              Projects
            </SecondButton>
          </div>
        </div>
      </div>
      <div className={classes.bgSquare}></div>
    </div>
  );
};

export default HomePage;
