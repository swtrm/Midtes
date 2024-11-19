import { Slide } from "react-awesome-reveal";
const Hobby = () =>{
    return(
        <Slide delay={900}>
        <div className="row">
          <div className="media service-card col-lg-6">
            <div className="service-icon">
              <img src="images/001-target.svg" alt="target" />
            </div>
            <div className="media-body">
              <h5 className="service-title">Volly ball</h5>
              <p className="service-description"> sometime i like to play it but i'm not to good.</p>
            </div>
          </div>
          <div className="media service-card col-lg-6">
            <div className="service-icon">
              <img src="images/003-idea.svg" alt="bulb" />
            </div>
            <div className="media-body">
              <h5 className="service-title">Reading</h5>
              <p className="service-description">i really like to read comic and manhwa/manhua
              </p>
            </div>
          </div>
          <div className="media service-card col-lg-6">
            <div className="service-icon">
              <img src="images/002-development.svg" alt="development" />
            </div>
            <div className="media-body">
              <h5 className="service-title">art</h5>
              <p className="service-description">i like art,sometime i like to draw
              </p>
            </div>
          </div>
          <div className="media service-card col-lg-6">
            <div className="service-icon">
              <img src="images/004-smartphone.svg" alt="smartphone" />
            </div>
            <div className="media-body">
              <h5 className="service-title">Video game</h5>
              <p className="service-description">i like to play mobile game like mobile legend and honor of kings
              </p>
            </div>
          </div>
        </div>
        </Slide>
    );
};
export default Hobby ;