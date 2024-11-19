import "./App.css";
import profil from "./component/profile";
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
      <profil/>
      <information/>
    </aside>
    <main>
    <section className="intro-section">
        <h2 className="section-title">Hello, Swarsh Mait!</h2>
        <p>saya adalah seorang mahasiswa semester 5 dari universitas klabat, Aermadidi Sulawesi utara, saya tinggal di kota Tomohon kolongan 1 Sulawesi utara dan saya anak ke-3 dari 3 bersaudara, saya berusia 20 dan hobi saya yaitu menggambar, membaca, dan bermain game Online tetapi saya juga suka bermain volly ball.</p>
        <a href="#!" className="btn btn-primary btn-hire-me">Know me more</a>
      </section>
      <section className="resume-section">
        <education/>
      </section>
      <section className="services-section">
        <h6 className="section-subtitle">WHAT I LIKE</h6>
        <h2 className="section-title">HOBBY</h2>
        <hobby/>
      </section>
      <section className="testimonial-section">
        <div id="testimonialCarousel" className="testimonial-carousel carousel slide" data-ride="carousel">
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img src="images/Profile.jpg" alt="profile" className="testimonial-img" />
              <p className="testimonial-name">Swarsh Mait</p>
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
