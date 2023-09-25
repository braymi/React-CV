import classes from "./Resume.module.scss";

import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import Avatar from "@mui/material/Avatar";

import AOS from "aos";
import "aos/dist/aos.css";

const Resume = () => {
  AOS.init();
  const work = [
    {
      id: 0,
      date: "06/2023 - Current",
      name: "Casa Mureseana",
      post: "Delivery Driver",
      img: "https://play-lh.googleusercontent.com/IlwofeIN_B14-pld5En1eVunef5ybUjc_IKMQwBuuCvMErocAb2a9Hoe_BtnP6Jed2k=w240-h480-rw",
      location: "Târgu-Mureș, Romania",
    },
    {
      id: 1,
      date: "05/2023 - 06/23",
      name: "WebBeds",
      post: "Contract Support Executive",
      img: "https://d2osdnqd2igqfx.cloudfront.net/AcuCustom/Sitename/DAM/136/WebBeds_Web.jpg",
      location: "Târgu-Mureș, Romania",
    },
    {
      id: 2,
      date: "06/2021 - 04/2023",
      name: "SC Mev Fest Catering SRL",
      img: "https://is2-ssl.mzstatic.com/image/thumb/Purple116/v4/aa/c7/8f/aac78f88-ff1b-1956-bcde-dd9e02c4c58e/source/512x512bb.jpg",
      post: "Delivery Driver",
      location: "Târgu-Mureș, Romania",
    },
    {
      id: 3,
      date: "03/2021 - 06/2021",
      name: "SC SportVision SRL",
      post: "Sales representative",
      img: "https://www.sportvision.ro/files/images/logo/logo_sv_footer.png",
      location: "Târgu-Mureș, Romania",
    },
    {
      id: 4,
      date: "02/2021 - 03/2021",
      name: "SC Oligraf SRL",
      post: "Graphic Designer",
      img: "https://oligraf.ro/wp-content/uploads/2022/09/Oligrafx-Logo-1-1024x1024.jpg",
      location: "Târgu-Mureș, Romania",
    },
    {
      id: 5,
      date: "08/2020 - 01/2021",
      name: "SC Mev Fest Catering SRL",
      img: "https://is2-ssl.mzstatic.com/image/thumb/Purple116/v4/aa/c7/8f/aac78f88-ff1b-1956-bcde-dd9e02c4c58e/source/512x512bb.jpg",
      post: "Delivery Driver",
      location: "Târgu-Mureș, Romania",
    },
    {
      id: 6,
      date: "02/2020 - 05/2020",
      name: "ITG GmbH + Puma GmbH",
      post: "Warehouse Worker",
      img: "https://d3r623tes721q0.cloudfront.net/rEoZHWxvOZY0oCrqc5a12907da75ac768a07c70fb72215efae25a2b6/itg-logo_profile_square.jpeg",
      location: "Schwaig, Germany",
    },
    {
      id: 7,
      date: "12/2019 - 02/2020",
      name: "Crazy Pizza",
      post: "Delivery Driver",
      img: "https://png.pngtree.com/png-vector/20190916/ourmid/pngtree-block-icon-for-your-project-png-image_1731069.jpg",
      location: "Târgu-Mureș, Romania",
    },
    {
      id: 8,
      date: "06/2019 - 12/2019",
      name: "SC Mev Fest Catering SRL",
      img: "https://is2-ssl.mzstatic.com/image/thumb/Purple116/v4/aa/c7/8f/aac78f88-ff1b-1956-bcde-dd9e02c4c58e/source/512x512bb.jpg",
      post: "Delivery Driver",
      location: "Târgu-Mureș, Romania",
    },
  ];

  const education = [
    {
      id: 0,
      name: "Front End Web Developer",
      place: "ITSchool.ro",
      date: "04/2023 - 10/2023",
      address: "-",
      img: "https://scontent.fclj3-1.fna.fbcdn.net/v/t39.30808-6/277463468_5296790307005924_2704744971853385517_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=a2f6c7&_nc_ohc=Iv6N7pzFJW0AX-7uEcS&_nc_ht=scontent.fclj3-1.fna&oh=00_AfAbY_v6knM0puO1RTBesGOKbbSMYvOSU-0D4yCYKKFAow&oe=6515FAB9",
    },
    {
      id: 1,
      name: "College - Informatics (Abandoned)",
      place: "Sapientia EMTE",
      date: "01/09/2018 - 22/05/2019",
      address: "Corunca 1C, Romania",
      img: "https://sapientia.ro/img/defpic.jpg",
    },
    {
      id: 2,
      name: "Baccalaureate - Social studies, intensive English",
      place: "Colegiul Național Unirea",
      date: "15/09/2014 - 15/06/2018",
      address: "Str. Mihai Viteazul 17, Târgu-Mureș, Romania",
      img: "https://colegiulunirea.ro/newicons/logobig.png",
    },
  ];

  const skillset = [
    {
      id: 0,
      element: "HTML",
    },
    {
      id: 1,
      element: "CSS/SASS",
    },
    {
      id: 2,
      element: "JavaScript",
    },
    {
      id: 3,
      element: "ReactJS",
    },
    {
      id: 4,
      element: "Communication",
    },
    {
      id: 5,
      element: "Teamwork",
    },
    {
      id: 6,
      element: "Hungarian main language",
    },
    {
      id: 7,
      element: "Well-spoken English",
    },
    {
      id: 8,
      element: "Well-spoken Romanian",
    },
  ];

  const MainButton = styled(Button)({
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

  return (
    <div data-aos="zoom-in" className={classes.ResumeBody} name="resume">
      <div className={classes.flexBox}>
        <div className={classes.flexTitle}>
          <div className={classes.square}></div>
          <h1 style={{ color: "var(--white)" }}>Resumé</h1>
        </div>
        <div className={classes.flexRow}>
          <h2 style={{ color: "var(--white)", fontWeight: "800" }}>
            Work experience
          </h2>
          <MainButton>Download my Resumé</MainButton>
        </div>
        {work.map((work) => (
          <div className={classes.flexCard}>
            <div className={classes.flexDetails}>
              <div className={classes.titleBox}>
                <h2>{work.date}</h2>
                <Avatar src={work.img} />
              </div>
              <h3>{work.post}</h3>
              <p>{work.name}</p>
              <p>{work.location}</p>
            </div>
          </div>
        ))}
        <div className={classes.flexRow}>
          <h2 style={{ color: "var(--white)", fontWeight: "800" }}>
            Education
          </h2>
        </div>
        {education.map((education) => (
          <div className={classes.flexCard}>
            <div className={classes.flexDetails}>
              <div className={classes.titleBox}>
                <h2>{education.date}</h2>
                <Avatar src={education.img} />
              </div>
              <h3>{education.name}</h3>
              <p>{education.place}</p>
              <p>{education.address}</p>
            </div>
          </div>
        ))}
        <hr />
        <div className={classes.flexCard} style={{ display: "block" }}>
          <h2>Personal skillset</h2>
          <div className={classes.skillFlex}>
            {skillset.map((skill) => (
              <div className={classes.skillElement}>
                <div class={classes.skillSquare}></div>
                <p>{skill.element}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resume;
