import classes from "./Projects.module.scss";

import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import { motion, useScroll } from "framer-motion";
import { useRef } from "react";
import { scroller } from "react-scroll";

const Projects = () => {
  const MainButton = styled(Button)({
    type: "button",
    appearance: "button",
    backfaceVisibility: "hidden",
    backgroundColor: "#EB5E28",
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
    "&:disabled": { cursor: "default" },
    "&:hover": { backgroundColor: "#FF672D" },
  });

  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "1rem end"],
  });

  const scrollTo = () => {
    scroller.scrollTo("contact", {
      spy: true,
      smooth: true,
      duration: 500,
    });
  };
  return (
    <motion.div style={{ opacity: scrollYProgress }} ref={ref} name="projects">
      <div className={classes.flexBox}>
        <div className={classes.flexTitle}>
          <div className={classes.square}></div>
          <h1 style={{ color: "var(--white)" }}>Projects</h1>
        </div>
        <div className={classes.flexRow}>
          <h2 style={{ color: "var(--white)" }}>
            As of time, this section is empty
          </h2>
          <MainButton to="contact" onClick={scrollTo}>
            You can help me expand, here
          </MainButton>
        </div>
      </div>
    </motion.div>
  );
};

export default Projects;
