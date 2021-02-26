import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import classes from  "./Navbar.module.css";

const NavBar = () => {
  const [open, setOpen] = useState(false);
  const [screenWidth, setScreenWidth] = useState(0);
  const location = useLocation();

  const trackScreenWidth = () => {
    const width = window.innerWidth;
    setScreenWidth(width);
    if (width > 600) {
      setOpen(true);
    }
  };

  const handleClose = () => {
    if (screenWidth < 600) {
      setOpen(false);
    }
  };

  useEffect(() => {
    trackScreenWidth();
    window.addEventListener("resize", trackScreenWidth);
    return () => window.removeEventListener("resize", trackScreenWidth);
  }, []);

  return (
    <nav className={classes.navbar}>
      <div className={classes.navwrapper}>
        <div className={classes.logo}>
          <Link to="/">
            <img
              src="https://raw.githubusercontent.com/darp-cs/Logo_Images/main/brand-logo.png?raw=true"
              alt="Brand Logo"
            />
          </Link>
        </div>
        <div className= {classes.listwrapper}>
          <img
            src="https://raw.githubusercontent.com/darp-cs/Logo_Images/main/menu-bars.png?raw=true"
            alt="Menu bars"
            style={{ opacity: !open ? 1 : 0 }}
            onClick={() => {
              setOpen(!open);
            }}
          />
          <img
            src="https://raw.githubusercontent.com/darp-cs/Logo_Images/main/cross-menu-icon.png?raw=true"
            alt="Menu cross"
            style={{ opacity: open ? 1 : 0 }}
            onClick={() => {
              setOpen(!open);
            }}
          />

          <ul style={{ left: open ? "0" : "-100vw" }}>
            <li>
              <Link
                to="/"
                onClick={handleClose}
                style={{ color: location.pathname === "/" && "#4071f4" }}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                onClick={handleClose}
                style={{ color: location.pathname === "/works" && "#4071f4" }}
              >
                About Me
              </Link>
            </li>
            <li>
              <Link
                to="/projects"
                onClick={handleClose}
                style={{ color: location.pathname === "/projects" && "#4071f4" }}
              >
                Projects
              </Link>
            </li>
            <li>
              <Link
                to="/resume"
                onClick={handleClose}
                style={{ color: location.pathname === "/resume" && "#4071f4" }}
              >
                Resume
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                onClick={handleClose}
                style={{ color: location.pathname === "/contact" && "#4071f4" }}
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;