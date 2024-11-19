const profil = () =>{
    return(
        <div className="profile-img-wrapper">
        <img src="images/profile.jpg" alt="profile" />
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
      </div>
    );
};
export default profil;