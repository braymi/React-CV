import classes from "./Contact.module.scss";

import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";

import { styled } from "@mui/material/styles";
import { useRef, useState } from "react";

import { TextareaAutosize } from "@mui/material";

import emailjs from "emailjs-com";

import AOS from "aos";
import "aos/dist/aos.css";

const Contact = () => {
  AOS.init();
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

  const ref = useRef();

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_3566ac8",
        "template_nlc9hb5",
        e.target,
        "WR94GFPA6uEz3byPT"
      )
      .then(handleOpen())
      .then(
        (result) => {
          console.log(result.text);
          window.location.reload();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  const modalStyle = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "var(--white)",
    border: "0.2rem solid var(--black)",
    boxShadow:
      "0px 11px 15px -7px rgba(235,94,40,0.2), 0px 24px 38px 3px rgba(235,94,40,0.14), 0px 9px 46px 8px rgba(235,94,40,0.12)",
    p: 4,
  };

  return (
    <div
      data-aos="zoom-in"
      className={classes.ContactBody}
      ref={ref}
      name="contact"
    >
      <div className={classes.flexBox}>
        <div className={classes.flexTitle}>
          <div className={classes.square}></div>
          <h1 style={{ color: "var(--white)" }}>Contact me!</h1>
        </div>
        <div className={classes.contactCard}>
          <form
            for="SendMail"
            className={classes.form}
            onSubmit={sendEmail}
            ref={ref}
          >
            <div className={classes.formFlex}>
              <div className={classes.formName}>
                <div className={classes.formFirstName}>
                  <label for="first_name">
                    <h3>First Name</h3>
                  </label>
                  <input
                    type="text"
                    name="first_name"
                    id="first_name"
                    required
                    autoComplete="off"
                  />
                </div>
                <div className={classes.formLastName}>
                  <label for="last_name">
                    <h3>Last Name</h3>
                  </label>
                  <input
                    type="text"
                    name="last_name"
                    id="last_name"
                    required
                    autoComplete="off"
                  />
                </div>
              </div>
              <label for="email">
                <h3>Email</h3>
              </label>
              <input
                type="email"
                name="email"
                id="email"
                required
                autoComplete="off"
              />
              <label for="email_subject">
                <h3>Subject</h3>
              </label>
              <input type="text" name="email_subject" id="email_subject" />
              <label for="message">
                <h3>Message</h3>
              </label>
              <TextareaAutosize
                name="message"
                id="message"
                required
                autoComplete="off"
              />
            </div>
            <MainButton type="submit">Send</MainButton>
            <Modal
              open={open}
              onClose={handleClose}
              aria-labelledby="modal-modal-title"
              aria-describedby="modal-modal-description"
            >
              <Box sx={modalStyle}>
                <Typography id="modal-modal-title" variant="h6" component="h2">
                  Thank you!
                </Typography>
                <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                  Your e-mail is successfully sent!
                </Typography>
              </Box>
            </Modal>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
