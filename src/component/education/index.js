import { Fade } from "react-awesome-reveal";
const Education = () => {
  return (
    <Fade delay={900}>
      <div class="row">
              <div class="col-lg-6">
                  <h6 class="section-subtitle">RESUME</h6>
                  <h2 class="section-title">EDUCATION</h2>
                  <ul class="time-line">
                      <li class="time-line-item">
                          <span class="badge badge-primary">2022 - 2024</span>
                          <h6 class="time-line-item-title">Student In Unklab UNIVERSITY</h6>
                          <p class="time-line-item-subtitle">UNIVERSITY</p>
                      </li>
                      <li class="time-line-item">
                          <span class="badge badge-primary">2022 - 2024</span>
                          <h6 class="time-line-item-title">Studied at SMA negeri 1 Tomohon</h6>
                          <p class="time-line-item-subtitle">High School</p>
                      </li>
                      <li class="time-line-item">
                          <span class="badge badge-primary">2019 - 2022</span>
                          <h6 class="time-line-item-title">Studied at SMP negeri 1 Tomohon</h6>
                          <p class="time-line-item-subtitle">Junior High School</p>
                      </li>
                  </ul>
              </div>
      </div>
      </Fade>
  );
};
export default Education;