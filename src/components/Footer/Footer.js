
import "./Footer.css";
import React from 'react';

const Footer = () => {
    return (
      <footer>
        <a
          href="https://www.youtube.com/"
          target="_blank"
        >
          <img
            src="https://raw.githubusercontent.com/darp-cs/Logo_Images/main/youtube-icon.png?raw=true"
            alt="Youtube-icon"
          />
        </a>
        <a href="https://www.facebook.com/" target="_blank">
          <img
            src="https://raw.githubusercontent.com/darp-cs/Logo_Images/main/facebook-con.png?raw=true"
            alt="Facebook-icon"
          />
        </a>
        <a
          href="https://www.linkedin.com/in/diego-rodriguez-perez/"
          target="_blank"
        >
          <img
            src="https://raw.githubusercontent.com/darp-cs/Logo_Images/main/linkedin-icon.png?raw=true"
            alt="LinkIn-icon"
          />
        </a>
        <a href="https://twitter.com/Diego_rod14" target="_blank">
          <img
            src="https://raw.githubusercontent.com/darp-cs/Logo_Images/main/twitter-icon.png?raw=true"
            alt="Twitter-icon"
          />
        </a>
      </footer>
    );
  };
  
  export default Footer;