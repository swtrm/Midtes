import "./App.css";
import Information from "./component/information";
import Education from "./component/education";
import Hobby from "./component/hobby";
import Profile from "./component/profile";
import { Fade } from "react-awesome-reveal";
import Info from "./component/Info";
const App = () => {
  return (
      <Fade delay={800}>
      <div>
        <header>
          <button className="btn btn-white btn-share ml-auto mr-3 ml-md-0 mr-md-auto"><img src="images/share.svg" alt="share" className="btn-img" />
            SHARE</button>
          <nav className="collapsible-nav" id="collapsible-nav">
            <a href="index.html" className="nav-link active">HOME</a>
            <a href="resume.html" className="nav-link">RESUME</a>
            <a href="portfolio.html" className="nav-link">PORTFOLIO</a>
            <a href="blog.html" className="nav-link">BLOG</a>
            <a href="contact.html" className="nav-link">CONTACT</a>
          </nav>
          <button className="btn btn-menu-toggle btn-white rounded-circle" data-toggle="collapsible-nav" data-target="collapsible-nav"><img src="images/hamburger.svg" alt="hamburger" /></button>
        </header>
        <div className="content-wrapper">
          <aside>
            <Profile/>
            <Information/>
          </aside>
          <main>
            <Info/>
            <section className="resume-section">
              <Education/>
            </section>
            <section className="services-section">
              <h6 className="section-subtitle">WHAT I LIKE</h6>
              <h2 className="section-title">HOBBY</h2>
              <Hobby/>
            </section>
            <footer>Live Resume @ <a href="https://www.bootstrapdash.com" target="_blank" rel="noopener noreferrer">BootstrapDash</a>. All Rights Reserved 2020</footer>
          </main>
        </div>
      </div>
      </Fade>
  );
};

export default App;
