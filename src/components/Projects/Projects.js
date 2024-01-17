import classes from "./Projects.module.scss";

import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { ThemeProvider, createTheme } from "@mui/material/styles";

import { scroller } from "react-scroll";
import { Link } from "react-router-dom";
import burgerImage from "./burger.png";
import kitchenImage from "./kitchen.png";
import portfolioImage from "./portfolio.png";

const Projects = () => {
  const darkTheme = createTheme({
    palette: {
      mode: "dark",
    },
  });
  const projects = [
    {
      id: 0,
      name: "Upload and retrieve your own data",
      description:
        "This project is a little bit more complex with data handling, than the Burger App. This project requires an account, and it technically acts as a portfolio for the logged in user. There is a known issue with the site, where upon login a refresh is needed for the page. The cause of this issue is the login API which wasn't built by me from the ground up.",
      date: "January, 2024",
      link: "https://portofoliodata.netlify.app/",
      img: portfolioImage,
    },
    {
      id: 1,
      name: "Make your own burger app",
      description:
        "This project was a long jump for me, since I haven't had experience with Full-Stack development, but I took the challange and managed, somehow.",
      date: "December, 2023",
      link: "http://main-order.netlify.app",
      img: burgerImage,
    },
    {
      id: 2,
      name: "Retrieve the orders from the burger app",
      description: `This side of the "project" is the continuation for the Burger App, because this is where the "orders" pop up.`,
      date: "December, 2023",
      link: "https://main-kitchen.netlify.app/",
      img: kitchenImage,
    },
  ];
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
    "&:disabled": { cursor: "default" },
    "&:hover": { backgroundColor: "var(--highlight)" },
  });

  const scrollTo = () => {
    scroller.scrollTo("contact", {
      spy: true,
      smooth: true,
      duration: 500,
    });
  };
  return (
    <ThemeProvider theme={darkTheme}>
      <div className={classes.flexBox} name="projects">
        <div className={classes.flexTitle}>
          <div className={classes.square}></div>
          <h1 style={{ color: "var(--heading)" }}>Projects</h1>
        </div>
        <div className={classes.flexRow}>
          <h2 style={{ color: "var(--heading)" }}>
            As of time, I only have projects for myself
          </h2>
          <MainButton to="contact" onClick={scrollTo}>
            You can help me expand, here
          </MainButton>
        </div>
        <div className={classes.projects}>
          {projects.map((project) => (
            <Link to={project.link}>
              <Card sx={{ minWidth: 300, maxWidth: 300 }}>
                <CardHeader title={project.name} subheader={project.date} />
                <CardMedia
                  component="img"
                  height="194"
                  image={project.img}
                  alt=""
                  sx={{ padding: "0.5rem" }}
                />
                <CardContent>
                  <Typography variant="body2" color="text.secondary">
                    {project.description}
                  </Typography>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </ThemeProvider>
  );
};

export default Projects;
