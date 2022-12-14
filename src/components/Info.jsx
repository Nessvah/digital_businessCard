import "./info.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";

function Info() {
  const emailIcon = <FontAwesomeIcon icon={faEnvelope} />;
  const linkedinIcon = <FontAwesomeIcon icon={faLinkedin} />;

  return (
    <header className="container">
      <img src="/profile-pic.png" alt="picture of Sílvia Vanessa" srcset="" />
      <div className="main-info">
        <h1>Sílvia Vanessa</h1>
        <h3>Frontend Developer</h3>
        <address>www.silviavanessa.dev</address>
      </div>

      <div className="btn_container">
        <a href="mailto:info@silviavanessa.dev" className="info--link">
          {" "}
          {emailIcon} Email
        </a>
        <a
          href="https://twitter.com/nessvah_"
          className="info--link info--link__blue"
        >
          {" "}
          {linkedinIcon} Linkedin
        </a>
      </div>
    </header>
  );
}

export default Info;
