import React, { useEffect, useRef, useState } from "react";
import "../Style/resume.css";
import ReactToPrint from "react-to-print";
function Resumes() {
  const [data, setData] = useState({});
  const componentRef = useRef();
  useEffect(() => {
    const a = JSON.parse(localStorage.getItem("resumedata"));
    setData(a);
  }, []);

  return (
    <div className="container-box">
      <div className="resume" ref={componentRef}>
        <div className="header">
          <div className="header_box">
            <div className="header_heading">
              <p>
                <span>{data?.fname}</span>
                <span>{data?.lname}</span>
              </p>
              <span>FULLSTACK DEVELOPER</span>
            </div>
            {/* <img
              src="https://th.bing.com/th/id/OIP.P2ixwd8Oykw_Gaqv98RR2QHaE8?pid=ImgDet&rs=1"
              alt="img"
            /> */}
          </div>
        </div>
        <div className="left">
          <section>
            <div class="contact-info">
              <span>
                <span>Address : </span>
                <span> {data?.address + "," + data?.country}</span>
              </span>
              <span>
                <span>Moblie :</span>
                <span>{data?.phone}</span>
              </span>
              <span>
                <span>Email :</span>

                <span>{data?.email}</span>
              </span>
              <span>
                <span>portfolio :</span>
                <span>{data?.Portfolio}</span>{" "}
              </span>
              <span>
                <span>LinkedIn:</span>
                <span>{" " + data?.LinkedIn}</span>
              </span>
              <span>
                <span>Github :</span>
                <span>{data?.github} </span>
              </span>
            </div>
          </section>
          <section>
            <h4>TECHNICAL SKILLS</h4>

            <ul>
              {data?.skills?.map((el) => {
                if (el !== "") {
                  return <li>{el}</li>;
                }
              })}
            </ul>
          </section>
          <section>
            <h4>Hobbies</h4>
            <ul>
              {data?.hobbies?.map((el) => {
                if (el !== "") {
                  return <li>{el}</li>;
                }
              })}
            </ul>
          </section>
          <section>
            <h4>education</h4>
            <div className="education_box">
              {data?.edu?.map((el) => {
                return (
                  <div className="education">
                    <h5>
                      <b>{el.degree}</b>
                    </h5>
                    <p>{el.school + "," + el.city}</p>
                    <p>{el.sdateRef + " - " + el.edateRef}</p>
                    <p>{el.desc}</p>
                  </div>
                );
              })}
            </div>
          </section>
        </div>
        <div className="right">
          <section>
            <h4>PROFESSIONAL Summary</h4>
            <p>{data?.summary}</p>
          </section>
          <section>
            <h4>Projects</h4>

            {data?.project?.map((el) => {
              return (
                <article>
                  <h5>{el.ProjectName}</h5>
                  <p>{el.ProjectDescp}</p>
                  <p>
                    <span>Teach Slacks: </span>
                    <span>{el.ProjectTech}</span>
                  </p>
                  {/* <ul>
                    <li>Landing page</li>
                  </ul> */}
                </article>
              );
            })}
          </section>
        </div>
      </div>
      <ReactToPrint
        trigger={() => <button>Print this out!</button>}
        content={() => componentRef.current}
      />
    </div>
  );
}

export default Resumes;
