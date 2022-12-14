import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";

function Footer() {
  return (
    <footer>
      <div className="single_col">
        <a href="https://twitter.com/nessvah_">
          {" "}
          <FontAwesomeIcon icon={faLinkedin} className="social-icons" />
        </a>
        <a href="https://github.com/Nessvah">
          {" "}
          <FontAwesomeIcon icon={faGithub} className="social-icons fa-5" />
        </a>
      </div>
    </footer>
  );
}

export default Footer;
