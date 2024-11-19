import { Slide } from "react-awesome-reveal";
const Information = () =>{
    return(
      <Slide>
          <div className="widget">
          <h5 className="widget-title">personal information</h5>
          <div className="widget-content">
            <p>BIRTHDAY : 17 November 2004</p>
            <p>PHONE : 082192001039</p>
            <p>MAIL : swarshmait@gmail.com</p>
            <p>Location : Tomohon sulawesi utara</p>
            <button className="btn btn-download-cv btn-primary rounded-pill"> <img src="images/download.svg" alt="download" className="btn-img" />DOWNLOAD CV </button>
          </div>
          <div className="widget card">
            <div className="card-body">
              <div className="widget-content">
                <h5 className="widget-title card-title">LANGUAGES</h5>
                <p>English : native</p>
                <p>indonesia : fluent</p>
              </div>
            </div>
          </div>
          <div className="widget card">
            <div className="card-body">
              <div className="widget-content">
                <h5 className="widget-title card-title">INTERESTS</h5>
                <p>Video games</p>
                <p>Programming</p>
                <p>Volly Ball</p>
              </div>
            </div>
          </div>
          </div>
        </Slide>
    );
};
export default Information ;