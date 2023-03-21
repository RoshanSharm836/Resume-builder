import React from "react";
import { Link } from "react-router-dom";
import "./Banner.css";

function Banner() {
  return (
    <div className="hero-image">
      <div className="container">
        {/* <img style={{ width: "100%" }} src={Banners} alt="" /> */}

        <div className="hero_content">
          <h2>
            Online CV Builder With <br /> Creative Templates
          </h2>

          <br />
          <p>
            Our Perfect resume builder takes the hassle out of resume writing.
            Choose from several templates and follow easy prompts to create the
            perfect job-ready resume.
          </p>
          <button>
            <Link className="btn_type" to="/basic">
              Create Resume
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Banner;
