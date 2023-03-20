import React from "react";

import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import "../Style/Form.css";
export default function Basictwo() {
  const navi = useNavigate();

  let LinkedInRef = useRef();
  let githubRef = useRef();
  let PortfolioRef = useRef();
  let summaryRef = useRef();
  let roleRef = useRef();

  const Userdetailfromlocal = JSON.parse(localStorage.getItem("resumedata"));
  ////
  const handle = (e) => {
    e.preventDefault();
    // let obj = {};

    Userdetailfromlocal.github = githubRef.current.value;
    Userdetailfromlocal.LinkedIn = LinkedInRef.current.value;
    Userdetailfromlocal.Portfolio = PortfolioRef.current.value;
    Userdetailfromlocal.summary = summaryRef.current.value;
    Userdetailfromlocal.role = roleRef.current.value;

    console.log(Userdetailfromlocal);
    localStorage.setItem("resumedata", JSON.stringify(Userdetailfromlocal));
    navi("/edu");
  };
  return (
    <form className="form" onSubmit={handle}>
      <h1>Basic Detail</h1>
      <div className="Form_box">
        <div>
          <label>Role</label>
          <input
            type="text"
            ref={roleRef}
            name="role"
            id="role"
            placeholder="Eg - Web developer"
            required
          />
        </div>
        <div>
          <label>Github</label>
          <input
            type="url"
            ref={githubRef}
            name="Github"
            id="Github"
            placeholder="Eg - https://github.com/xyz"
            required
          />
        </div>
        <div>
          <label>LinkedIn</label>
          <input
            type="url"
            ref={LinkedInRef}
            name="LinkedIn"
            id="LinkedIn"
            placeholder="Eg - https://linkedin.com/in/xyz"
            required
          />
        </div>

        <div>
          <label>Portfolio</label>
          <input
            type="url"
            ref={PortfolioRef}
            name="Portfolio"
            id="Portfolio"
            placeholder="Enter url of Portfolio"
            required
          />
        </div>
        <div>
          <label>Professional Summary</label>
          <textarea
            type="text"
            ref={summaryRef}
            name="summary"
            id="summary"
            placeholder="summary"
            required
          />
        </div>
      </div>
      <input type="submit" value="Next     ▶" />
    </form>
  );
}
