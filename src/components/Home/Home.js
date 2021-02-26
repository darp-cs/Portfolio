import { Link, useLocation } from "react-router-dom";
import classes from './Home.module.css'

const Home = () => {
  return (
    <div className={classes.home}>
      <div className={classes.title}>
        <h1>
          <p>Hi,</p>
          <p>I am Diego Rodriguez</p>
          <p>Software developer</p>
        </h1>
        <Link to="about">
          <button>More Info</button>
        </Link>
      </div>
      <div className={classes.person}>
          {/* come back and add picture */}
        {/* <img
          src={`${process.env.PUBLIC_URL}/mo-logo.png`}
          alt="person picture"
        /> */}
      </div>
    </div>
  );
};

export default Home;