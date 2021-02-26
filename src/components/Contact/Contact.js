import classes from "./Contact.module.css";

const About = () => {
  return (
    <div className={classes.contact}>
      <h1>Contact me!</h1>
      

<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d417298.69525476696!2d-81.12002999277088!3d35.20283071048617!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88541fc4fc381a81%3A0x884650e6bf43d164!2sCharlotte%2C%20NC!5e0!3m2!1sen!2sus!4v1614349155420!5m2!1sen!2sus" 
        frameBorder="0"
        allowFullScreen=""
        aria-hidden="false"
        tabIndex="0"></iframe>

      <h4>Phone</h4>
      <p>000 000 0000</p>

      <h4>Email</h4>
      <p>Diegoarod14@gmail.com</p>

      <h4>Located in:</h4>
      <p>Charlotte, NC</p>
    </div>
  );
};

export default About;