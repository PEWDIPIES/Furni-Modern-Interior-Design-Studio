import React from "react";
import team1 from "/src/assets/images/person_1.jpg";
import team2 from "/src/assets/images/person_2.jpg";
import team3 from "/src/assets/images/person_3.jpg";
import team4 from "/src/assets/images/person_4.jpg";
const Ourteam = () => {
  return (
    <div>
      <div className="untree_co-section">
        <div className="container">
          <div className="row mb-5">
            <div className="col-lg-5 mx-auto text-center">
              <h2 className="section-title">Our Team</h2>
            </div>
          </div>

          <div className="row">
            <div className="col-12 col-md-6 col-lg-3 mb-5 mb-md-0">
              <img
                src={team1}
                className="img-fluid mb-5"
                alt="person1"
              />
              <h3 className>
                <a href="#">
                  <span className="">Lawson</span> Arnold
                </a>
              </h3>
              <span className="d-block position mb-4">CEO, Founder, Atty.</span>
              <p>
                Separated they live in. Separated they live in Bookmarksgrove
                right at the coast of the Semantics, a large language ocean.
              </p>
              <p className="mb-0">
                <a href="#" className="more dark">
                  Learn More <span class="icon-arrow_forward"></span>
                </a>
              </p>
            </div>

            <div className="col-12 col-md-6 col-lg-3 mb-5 mb-md-0">
              <img
                src={team2}
                className="img-fluid mb-5"
                alt="person2"
              />

              <h3 className>
                <a href="#">
                  <span className="">Jeremy</span> Walker
                </a>
              </h3>
              <span className="d-block position mb-4">CEO, Founder, Atty.</span>
              <p>
                Separated they live in. Separated they live in Bookmarksgrove
                right at the coast of the Semantics, a large language ocean.
              </p>
              <p className="mb-0">
                <a href="#" className="more dark">
                  Learn More <span class="icon-arrow_forward"></span>
                </a>
              </p>
            </div>

            <div className="col-12 col-md-6 col-lg-3 mb-5 mb-md-0">
              <img
                src={team3}
                class="img-fluid mb-5"
                alt="person3"
              />
              <h3 className>
                <a href="#">
                  <span class="">Patrik</span> White
                </a>
              </h3>
              <span className="d-block position mb-4">CEO, Founder, Atty.</span>
              <p>
                Separated they live in. Separated they live in Bookmarksgrove
                right at the coast of the Semantics, a large language ocean.
              </p>
              <p className="mb-0">
                <a href="#" className="more dark">
                  Learn More <span className="icon-arrow_forward"></span>
                </a>
              </p>
            </div>
            <div className="col-12 col-md-6 col-lg-3 mb-5 mb-md-0">
              <img
                src={team4}
                class="img-fluid mb-5"
                alt="person4"
              />

              <h3 className>
                <a href="#">
                  <span class="">Kathryn</span> Ryan
                </a>
              </h3>
              <span className="d-block position mb-4">CEO, Founder, Atty.</span>
              <p>
                Separated they live in. Separated they live in Bookmarksgrove
                right at the coast of the Semantics, a large language ocean.
              </p>
              <p className="mb-0">
                <a href="#" className="more dark">
                  Learn More <span className="icon-arrow_forward"></span>
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ourteam;
