import React, { useRef } from "react";
import "../Style/Input.css";
import { useNavigate } from "react-router-dom";
function Edu() {
  const navi = useNavigate();

  let snameRef = useRef();
  let degreeRef = useRef();
  let sdateRef = useRef();
  let edateRef = useRef();
  let cityRef = useRef();
  let DesripRef = useRef();

  const Userdetailfromlocal = JSON.parse(localStorage.getItem("resumedata"));
  let arr = Userdetailfromlocal.edu || [];
  const UpdateEdu = (e) => {
    let obj = {};
    e.preventDefault();
    if (
      DesripRef.current.value === "" ||
      degreeRef.current.value === "" ||
      sdateRef.current.value === "" ||
      edateRef.current.value === "" ||
      cityRef.current.value === "" ||
      snameRef.current.value === ""
    ) {
      alert("Enter value");
      return;
    }
    obj.school = snameRef.current.value;
    obj.degree = degreeRef.current.value;
    obj.sdateRef = sdateRef.current.value;
    obj.edateRef = edateRef.current.value;
    obj.city = cityRef.current.value;
    obj.desc = DesripRef.current.value;
    console.log("first", obj);
    arr.push(obj);
    Userdetailfromlocal.edu = arr;
    localStorage.setItem("resumedata", JSON.stringify(Userdetailfromlocal));
    console.log("array", arr);
    snameRef.current.value = "";
    degreeRef.current.value = "";
    sdateRef.current.value = "";
    edateRef.current.value = "";
    cityRef.current.value = "";
    DesripRef.current.value = "";
  };
  const handle = (e) => {
    e.preventDefault();
    let obj = {};
    obj.school = snameRef.current.value;
    obj.degree = degreeRef.current.value;
    obj.sdateRef = sdateRef.current.value;
    obj.edateRef = edateRef.current.value;
    obj.city = cityRef.current.value;
    obj.desc = DesripRef.current.value;

    console.log(obj, "kawhdk");
    arr.push(obj);
    console.log("array", arr);
    Userdetailfromlocal.edu = arr;
    localStorage.setItem("resumedata", JSON.stringify(Userdetailfromlocal));
    console.log(Userdetailfromlocal, "kawhdk");
    navi("/skill");
  };

  return (
    <form onSubmit={handle} className="edu">
      <h1>Education</h1>
      <label>School/College</label>
      <input
        type="text"
        ref={snameRef}
        name="schoolname"
        id="schoolname"
        placeholder="School / college name"
        required
      />
      <label htmlFor="">Degree</label>
      <input
        type="text"
        ref={degreeRef}
        name="Degree"
        placeholder="Eg - Intermediate, Bachelor of Computer Science"
        id="Degree"
        required
      />
      <div className="date">
        <label htmlFor="">Starting Date</label>
        <input type="date" ref={sdateRef} name="sdate" id="sdate" required />
        <label htmlFor="">Ending Date</label>
        <input type="date" ref={edateRef} name="edate" id="edate" required />
      </div>
      <label htmlFor="">City</label>
      <input
        type="text"
        ref={cityRef}
        name="City"
        placeholder="Eg - pune"
        id="City"
        required
      />
      <label htmlFor="">Description</label>
      <textarea
        type="text"
        ref={DesripRef}
        placeholder="Eg - Graduated with ..."
        name="Description"
        id="Description"
      />
      <button className="add" onClick={UpdateEdu}>
        +
      </button>
      <input type="submit" value="Next     ▶" />
    </form>
  );
}

export default Edu;
