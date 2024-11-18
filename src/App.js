import "./App.css";

const App = () => {
  return (
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
      <div className="profile-img-wrapper">
        <img src="images/profile.jpg" alt="profile" />
      </div>
      <h1 className="profile-name">Swarsh Mait</h1>
      <div className="text-center">
        <span className="badge badge-white badge-pill profile-designation">UI / UX Designer</span>
      </div>
      <nav className="social-links">
        <a href="#!" className="social-link"><i className="fab fa-facebook-f" /></a>
        <a href="#!" className="social-link"><i className="fab fa-twitter" /></a>
        <a href="#!" className="social-link"><i className="fab fa-behance" /></a>
        <a href="#!" className="social-link"><i className="fab fa-dribbble" /></a>
        <a href="#!" className="social-link"><i className="fab fa-github" /></a>
      </nav>
      <div className="widget">
        <h5 className="widget-title">personal information</h5>
        <div className="widget-content">
          <p>BIRTHDAY : 17 November 2004</p>
          <p>PHONE : 082192001039</p>
          <p>MAIL : swarshmait@gmail.com</p>
          <p>Location : Tomohon sulawesi utara</p>
          <button className="btn btn-download-cv btn-primary rounded-pill"> <img src="images/download.svg" alt="download" className="btn-img" />DOWNLOAD CV </button>
        </div>
      </div>
      <div className="widget card">
        <div className="card-body">
          <div className="widget-content">
            <h5 className="widget-title card-title">LANGUAGES</h5>
            <p>English : native</p>
            <p>Spanish : fluent</p>
            <p>Italian : fluent</p>
          </div>
        </div>
      </div>
      <div className="widget card">
        <div className="card-body">
          <div className="widget-content">
            <h5 className="widget-title card-title">INTERESTS</h5>
            <p>Video games</p>
            <p>Finance</p>
            <p>Basketball</p>
            <p>Theatre</p>
          </div>
        </div>
      </div>
    </aside>
    <main>
      <section className="intro-section">
        <h2 className="section-title">Hello, Daisy Murphy!</h2>
        <p>I'm Creative Director and UI/UX Designer from Sydney, Australia, working in web development and print
          media. I enjoy turning complex problems into simple, beautiful and intuitive designs. My job is to
          build your website so that it is functional and user-friendly but at the same time attractive.
          Moreover, I add personal touch to your product and make sure that is eye-catching and easy to use.
          My aim is to bring across your message and identity in the most creative way. I created web design
          for many famous brand companies.</p>
        <a href="#!" className="btn btn-primary btn-hire-me">HIRE ME</a>
      </section>
      <section className="resume-section">
        <div className="row">
          <div className="col-lg-6">
            <h6 className="section-subtitle">RESUME</h6>
            <h2 className="section-title">EDUCATION</h2>
            <ul className="time-line">
              <li className="time-line-item">
                <span className="badge badge-primary">1998 - 2005</span>
                <h6 className="time-line-item-title">Master In Computer Science</h6>
                <p className="time-line-item-subtitle">MASTER, UNIVERSITY</p>
                <p className="time-line-item-content">Mauris magna sapien, pharetra consectetur fringilla
                  vitae, interdum sed tortor.</p>
              </li>
              <li className="time-line-item">
                <span className="badge badge-primary">1995 - 1998</span>
                <h6 className="time-line-item-title">Studied at Harvard University</h6>
                <p className="time-line-item-subtitle">UNIVERSITY</p>
                <p className="time-line-item-content">Mauris magna sapien, pharetra consectetur fringilla
                  vitae, interdum sed tortor.
                </p>
              </li>
              <li className="time-line-item">
                <span className="badge badge-primary">1993 - 1995</span>
                <h6 className="time-line-item-title">Studied at Oxford University</h6>
                <p className="time-line-item-subtitle">UNIVERSITY</p>
                <p className="time-line-item-content">Mauris magna sapien, pharetra consectetur fringilla
                  vitae, interdum sed tortor.
                </p>
              </li>
            </ul>
          </div>
          <div className="col-lg-6">
            <h6 className="section-subtitle">RESUME</h6>
            <h2 className="section-title">Experience</h2>
            <ul className="time-line">
              <li className="time-line-item">
                <span className="badge badge-primary">2010 - 2014</span>
                <h6 className="time-line-item-title">UI/UX Designer</h6>
                <p className="time-line-item-subtitle">Web Agency</p>
                <p className="time-line-item-content">Mauris magna sapien, pharetra consectetur fringilla
                  vitae, interdum sed
                  tortor.</p>
              </li>
              <li className="time-line-item">
                <span className="badge badge-primary">2008 - 2010</span>
                <h6 className="time-line-item-title">Web Designer</h6>
                <p className="time-line-item-subtitle">Apple Inc.</p>
                <p className="time-line-item-content">Mauris magna sapien, pharetra consectetur fringilla
                  vitae, interdum sed
                  tortor.
                </p>
              </li>
              <li className="time-line-item">
                <span className="badge badge-primary">2006 - 2008</span>
                <h6 className="time-line-item-title">Graphic Designer</h6>
                <p className="time-line-item-subtitle">Apple Inc.</p>
                <p className="time-line-item-content">Mauris magna sapien, pharetra consectetur fringilla
                  vitae, interdum sed
                  tortor.
                </p>
              </li>
            </ul>
          </div>
        </div>
      </section>
      <section className="services-section">
        <h6 className="section-subtitle">WHAT I DO</h6>
        <h2 className="section-title">SERVICES</h2>
        <div className="row">
          <div className="media service-card col-lg-6">
            <div className="service-icon">
              <img src="assets/images/001-target.svg" alt="target" />
            </div>
            <div className="media-body">
              <h5 className="service-title">web designing</h5>
              <p className="service-description">Mauris magna sapien, pharetra consectetur fringilla vitae, interdum sed
                tortor.</p>
            </div>
          </div>
          <div className="media service-card col-lg-6">
            <div className="service-icon">
              <img src="assets/images/003-idea.svg" alt="bulb" />
            </div>
            <div className="media-body">
              <h5 className="service-title">Graphic design</h5>
              <p className="service-description">Mauris magna sapien, pharetra consectetur fringilla vitae, interdum sed
                tortor.
              </p>
            </div>
          </div>
          <div className="media service-card col-lg-6">
            <div className="service-icon">
              <img src="assets/images/002-development.svg" alt="development" />
            </div>
            <div className="media-body">
              <h5 className="service-title">Development</h5>
              <p className="service-description">Mauris magna sapien, pharetra consectetur fringilla vitae, interdum sed
                tortor.
              </p>
            </div>
          </div>
          <div className="media service-card col-lg-6">
            <div className="service-icon">
              <img src="assets/images/004-smartphone.svg" alt="smartphone" />
            </div>
            <div className="media-body">
              <h5 className="service-title">Mobile design</h5>
              <p className="service-description">Mauris magna sapien, pharetra consectetur fringilla vitae, interdum sed
                tortor.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="testimonial-section">
        <div id="testimonialCarousel" className="testimonial-carousel carousel slide" data-ride="carousel">
          <div className="carousel-inner">
            <div className="carousel-item active">
              <p className="testimonial-content">Mauris magna sapien, pharetra consectetur fringilla vitae,
                interdum sed tortor.</p>
              <img src="assets/images/Profile.png" alt="profile" className="testimonial-img" />
              <p className="testimonial-name">Nout Golstein</p>
            </div>
            <div className="carousel-item">
              <p className="testimonial-content">Mauris magna sapien, pharetra consectetur fringilla vitae,
                interdum sed tortor.</p>
              <img src="assets/images/Profile.png" alt="profile" className="testimonial-img" />
              <p className="testimonial-name">Nout Golstein</p>
            </div>
            <div className="carousel-item">
              <p className="testimonial-content">Mauris magna sapien, pharetra consectetur fringilla vitae,
                interdum sed tortor.</p>
              <img src="assets/images/Profile.png" alt="profile" className="testimonial-img" />
              <p className="testimonial-name">Nout Golstein</p>
            </div>
          </div>
          <ol className="carousel-indicators">
            <li data-target="#testimonialCarousel" data-slide-to={0} className="active" />
            <li data-target="#testimonialCarousel" data-slide-to={1} />
            <li data-target="#testimonialCarousel" data-slide-to={2} />
          </ol>
        </div>
      </section>
      <footer>Live Resume @ <a href="https://www.bootstrapdash.com" target="_blank" rel="noopener noreferrer">BootstrapDash</a>. All Rights Reserved 2020</footer>
    </main>
  </div>
</div>

  );
};

export default App;
