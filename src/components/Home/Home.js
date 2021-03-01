import { Link, useLocation } from "react-router-dom";
import classes from './Home.module.css'

const Home = () => {
  return (
    <div className={classes.home}>
      <div className={classes.title}>
        <h1>
          <p>Hi,</p>
          <p>My name is, Diego Rodriguez</p>
          <p>and I am a Software developer</p>
        </h1>
        <Link to="about">
          <button>More Info</button>
        </Link>
      </div>
      <div className={classes.person}>
         
        <img
          src="https://raw.githubusercontent.com/darp-cs/Images/main/portfolio-img.jpg?raw=true"
          alt="Headshot"
        />
      </div>
    </div>
  );
};

export default Home;