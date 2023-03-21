import React, { useEffect, useRef, useState } from "react";
import "../Style/resume.css";
import ReactToPrint from "react-to-print";
import { useParams } from "react-router-dom";
import axios from "axios";
import Navbar from "./Navbar/Navbar";
function Resumes() {
  const [data, setData] = useState({});
  const componentRef = useRef();
  const { id } = useParams();
  useEffect(() => {
    localStorage.removeItem("resumedata");
    axios.get(`https://fastresume-backend.onrender.com/${id}`).then((res) => {
      setData(res);
    });
  }, []);

  return (
    <>
      <Navbar />
      <div className="container-box">
        <div className="resume" ref={componentRef}>
          <div className="header">
            <div className="header_box">
              <div className="header_heading">
                <p>
                  <span>{data?.data?.fname}</span>
                  <span>{data?.data?.lname}</span>
                </p>
                <span>{data?.data?.role}</span>
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
                  <span>Address: </span>
                  <span>
                    {" "}
                    {data?.data?.address + "," + data?.data?.country}
                  </span>
                </span>
                <span>
                  <span>Moblie: </span>
                  <span>{data?.data?.phone}</span>
                </span>
                <span>
                  <span>Email: </span>

                  <span>{data?.data?.email}</span>
                </span>
                <span>
                  <span>portfolio: </span>
                  <span>{data?.data?.Portfolio}</span>{" "}
                </span>
                <span>
                  <span>LinkedIn: </span>
                  <span>{" " + data?.data?.LinkedIn}</span>
                </span>
                <span>
                  <span>Github: </span>
                  <span>{data?.data?.github} </span>
                </span>
              </div>
            </section>
            <section>
              <h4>SKILLS</h4>

              <ul>
                {data?.data?.skills?.map((el, i) => {
                  if (el !== "") {
                    return <li key={i}>{el}</li>;
                  }
                })}
              </ul>
            </section>
            <section>
              <h4>Hobbies</h4>
              <ul>
                {data?.data?.hobbies?.map((el, i) => {
                  if (el !== "") {
                    return <li key={i}>{el}</li>;
                  }
                })}
              </ul>
            </section>
            <section>
              <h4>education</h4>
              <div className="education_box">
                {data?.data?.edu?.map((el, i) => {
                  return (
                    <div className="education" key={i}>
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
              <p>{data?.data?.summary}</p>
            </section>
            <section>
              <h4>Projects</h4>

              {data?.data?.project?.map((el, i) => {
                return (
                  <article key={i}>
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
    </>
  );
}

export default Resumes;
