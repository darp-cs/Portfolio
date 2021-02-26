import classes from './app.module.css';
import Home from './components/Home/Home';
import Projects from './components/Projects/Projects';
import Resume from './components/Resume/Resume';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import Navbar from './components/Navbar/Navbar';
import About from './components/About/About'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

function app() {
  return (

    <Router>

        <div className={classes.app}>
        <Navbar/>
        <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/projects" component={Projects} />
        <Route exact path="/resume" component={Resume} />
        <Route exact path="/about" component={About} />
        <Route exact path="/contact" component={Contact} />
        </Switch>
        <Footer />
        </div>
    
    </Router>
    
  );
}

export default app;
