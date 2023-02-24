import React, { useRef } from "react";
function Edu() {
  let snameRef = useRef();
  let degreeRef = useRef();
  let sdateRef = useRef();
  let edateRef = useRef();
  let cityRef = useRef();
  let DesripRef = useRef();

  const Userdetailfromlocal = JSON.parse(localStorage.getItem("resumedata"));
  let obj = {};
  const handle = (e) => {
    e.preventDefault();
    obj.school = snameRef.current.value;
    obj.degree = degreeRef.current.value;
    obj.sdateRef = sdateRef.current.value;
    obj.edateRef = edateRef.current.value;
    obj.city = cityRef.current.value;
    obj.desc = DesripRef.current.value;
    console.log(Userdetailfromlocal, "kawhdk");
    Userdetailfromlocal.edu = obj;
    localStorage.setItem("resumedata", JSON.stringify(Userdetailfromlocal));
    console.log(Userdetailfromlocal, "kawhdk");
  };

  return (
    <form className="edu" onSubmit={handle}>
      <label>Eduction</label>
      <label htmlFor="">School</label>
      <input type="text" ref={snameRef} name="schoolname" id="schoolname" />
      <label htmlFor="">Degree</label>
      <input type="text" ref={degreeRef} name="Degree" id="Degree" />
      <label htmlFor="">Starting & Ending Date</label>
      <input type="date" ref={sdateRef} name="sdate" id="sdate" />
      <input type="date" ref={edateRef} name="edate" id="edate" />
      <label htmlFor="">City</label>
      <input type="text" ref={cityRef} name="City" id="City" />
      <label htmlFor="">Description</label>
      <textarea
        type="text"
        ref={DesripRef}
        name="Description"
        id="Description"
      />
      <input type="submit" value="Next" />
    </form>
  );
}

export default Edu;
