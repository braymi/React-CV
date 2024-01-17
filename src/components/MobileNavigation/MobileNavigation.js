import classes from "./MobileNavigation.module.scss";

import { Link } from "react-scroll";

import { useState } from "react";

import { DarkModeSwitch } from "react-toggle-dark-mode";
import useLocalStorage from "use-local-storage";

import PersonIcon from "@mui/icons-material/Person";
import AppShortcutIcon from "@mui/icons-material/AppShortcut";
import ImportContactsIcon from "@mui/icons-material/ImportContacts";
import ConnectWithoutContactIcon from "@mui/icons-material/ConnectWithoutContact";

const MobileNavigation = () => {
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

  return (
    <header className={classes.mobile}>
      <nav className={classes.navFlex}>
        <Link
          to="home"
          spy={true}
          smooth={true}
          duration={500}
          className={classes.navItem}
        >
          <PersonIcon fontSize="medium" />
          About me
        </Link>
        <Link
          to="projects"
          spy={true}
          smooth={true}
          duration={500}
          className={classes.navItem}
        >
          <AppShortcutIcon fontSize="medium" />
          Projects
        </Link>
        <Link
          to="resume"
          spy={true}
          smooth={true}
          duration={500}
          className={classes.navItem}
        >
          <ImportContactsIcon fontSize="medium" />
          Resumé
        </Link>
        <Link
          to="contact"
          spy={true}
          smooth={true}
          duration={500}
          className={classes.navItem}
        >
          <ConnectWithoutContactIcon fontSize="medium" />
          Contact
        </Link>
        <DarkModeSwitch
          checked={isDarkMode}
          onChange={switchTheme}
          moonColor="#121212"
          sunColor="#ece5f0"
        />
      </nav>
    </header>
  );
};
export default MobileNavigation;
