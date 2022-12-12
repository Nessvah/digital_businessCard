import "./info.css";

function Info() {
  return (
    <header className="container">
      <img
        src="/public/profile-pic.png"
        alt="picture of Sílvia Vanessa"
        srcset=""
      />
      <div className="main-info">
        <h1>Sílvia Vanessa</h1>
        <h2>Frontend Developer</h2>
        <address>www.silviavanessa.dev</address>
      </div>

      <div className="buttons">
        <button>Email</button>
        <button className="btn_linkedin">Linkedin</button>
      </div>
    </header>
  );
}

export default Info;
