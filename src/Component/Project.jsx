import React, { useRef } from "react";
import "../Style/Input.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Navbar from "./Navbar/Navbar";

export default function Project() {
  const navi = useNavigate();
  let nameRef = useRef();
  let LinkRef = useRef();
  let DesripRef = useRef();
  let TechRef = useRef();

  const Userdetailfromlocal = JSON.parse(localStorage.getItem("resumedata"));
  ////
  let project = [];
  const UpdateProject = async (e) => {
    e.preventDefault();
    let obj = {};
    obj.ProjectName = nameRef.current.value;
    obj.ProjectLink = LinkRef.current.value;
    obj.ProjectDescp = DesripRef.current.value;
    obj.ProjectTech = TechRef.current.value;
    project.push(obj);

    // commit line no 26 to 28 and call this function in handle and this line after
    // it will help us to reuse the code.

    Userdetailfromlocal.project = project;
    localStorage.setItem("resumedata", JSON.stringify(Userdetailfromlocal));
    nameRef.current.value = "";
    LinkRef.current.value = "";
    DesripRef.current.value = "";
    TechRef.current.value = "";
  };

  const post = async (Userdetailfromlocal) => {
    await axios
      .post("https://fastresume-backend.onrender.com", Userdetailfromlocal)
      .then((res) => {
        console.log("res", res.data._id);
        navi(`/resume/${res.data._id}`);
      });
  };

  const handle = async (e) => {
    e.preventDefault();
    let obj = {};
    obj.ProjectName = nameRef.current.value;
    obj.ProjectLink = LinkRef.current.value;
    obj.ProjectDescp = DesripRef.current.value;
    obj.ProjectTech = TechRef.current.value;
    project.push(obj);
    Userdetailfromlocal.project = project;
    localStorage.setItem("resumedata", JSON.stringify(Userdetailfromlocal));

    await post(Userdetailfromlocal);
  };

  return (
    <>
      <Navbar />
      <form onSubmit={handle} className="Project">
        <h1>Projects</h1>
        <label>Project Name</label>
        <input
          type="text"
          ref={nameRef}
          name="projectname"
          id="projectname"
          placeholder="Name of Project"
          required
        />
        <label htmlFor="">Project Link</label>
        <input
          type="text"
          ref={LinkRef}
          name="Link"
          id="Link"
          placeholder="Link of Project"
          required
        />

        <label htmlFor="">Project Description</label>
        <textarea
          type="text"
          placeholder="Short Summary About Project"
          ref={DesripRef}
          name="Description"
          id="Description"
        />
        <label htmlFor="">Teach Slack</label>
        <input
          type="text"
          ref={TechRef}
          name="TechRef"
          id="TechRef"
          placeholder="Eg - Html, React.js, Node.js, JavaScript like this"
          required
        />

        <hr />
        {/* <div className="buttom_section"> */}
        <button className="add" onClick={UpdateProject}>
          +
        </button>
        <input type="submit" value="Done   👍" />
        {/* </div> */}
      </form>
    </>
  );
}
