import React from "react";
import { Link } from "react-router-dom";
import Banner from "../Banner/Banner";
import "./Landing_Page.css";

function Landing() {
  return (
    <div className="landing">
      <Banner />
      {/* ***********************About us Section***************************** */}
      <div className="about-us">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div className="Box">
                <div className="row">
                  <div className="col-md-2">
                    <img
                      src="https://geeko.netlify.app/img/icons/d1.png"
                      alt=""
                    />
                  </div>

                  <div className="col-md-10">
                    <h5>Easy Online Resume Builder</h5>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Laudantium modi assumenda.
                    </p>
                  </div>
                </div>
              </div>
              <div className="Box">
                <div className="row">
                  <div className="col-md-2">
                    <img
                      src="https://geeko.netlify.app/img/icons/d2.png"
                      alt=""
                    />
                  </div>

                  <div className="col-md-10">
                    <h5>Step By Step Expert Tips</h5>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Laudantium modi assumenda.
                    </p>
                  </div>
                </div>
              </div>
              <div className="Box">
                <div className="row">
                  <div className="col-md-2">
                    <img
                      src="https://geeko.netlify.app/img/icons/d3.png"
                      alt=""
                    />
                  </div>

                  <div className="col-md-10">
                    <h5>Recruiter Approved Phrases</h5>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Laudantium modi assumenda.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-6 content-about">
              <div className="dots">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
              </div>

              <h3>Why Choose Our Platform?</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis at
                dictum risus, non suscipit arcu. Quisque aliquam posuere tortor,
                sit amet convallis nunc scelerisque in.
              </p>

              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis at
                dictum risus, non suscipit arcu. Quisque aliquam posuere tortor,
                sit amet convallis nunc scelerisque in.
              </p>
              <Link to="/basic">
                <button> Lets Build Your CV</button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* *****************    Delivery Product test    ***************************** */}
      <div className="delivery">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div className="dots">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
              </div>

              <h3>We Deliver The Best</h3>

              <p>
                {" "}
                &nbsp;{" "}
                <img
                  src="https://geeko.netlify.app/img/icons/check.png"
                  alt=""
                />
                Proven CV Templates to increase Hiring Chance
              </p>
              <p>
                {" "}
                &nbsp;{" "}
                <img
                  src="https://geeko.netlify.app/img/icons/check.png"
                  alt=""
                />
                Creative and Clean Templates Design
              </p>
              <p>
                {" "}
                &nbsp;{" "}
                <img
                  src="https://geeko.netlify.app/img/icons/check.png"
                  alt=""
                />
                Easy and Intuitive Online CV Builder
              </p>
              <p>
                {" "}
                &nbsp;{" "}
                <img
                  src="https://geeko.netlify.app/img/icons/check.png"
                  alt=""
                />
                Free to use. Developed by hiring professionals.
              </p>
              <p>
                {" "}
                &nbsp;{" "}
                <img
                  src="https://geeko.netlify.app/img/icons/check.png"
                  alt=""
                />
                Fast Easy CV and Resume Formatting
              </p>
              <p>
                {" "}
                &nbsp;{" "}
                <img
                  src="https://geeko.netlify.app/img/icons/check.png"
                  alt=""
                />
                Recruiter Approved Phrases.
              </p>
            </div>

            <div className="col-md-6">
              <img src="https://geeko.netlify.app/img/core-img/cv.png" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Landing;
