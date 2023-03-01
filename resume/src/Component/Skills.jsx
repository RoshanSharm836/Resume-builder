import React, { useRef } from "react";
import "../Style/Input.css";
import { useNavigate } from "react-router-dom";

function Skills() {
  const navi = useNavigate();

  let one_hobRef = useRef();
  let two_hobRef = useRef();
  let three_hobRef = useRef();
  let four_hobRef = useRef();
  let five_hobRef = useRef();
  let oneRef = useRef();
  let twoRef = useRef();
  let threeRef = useRef();
  let fourRef = useRef();
  let fiveRef = useRef();

  const Userdetailfromlocal = JSON.parse(localStorage.getItem("resumedata"));
  let arr = [];
  let arr1 = [];
  let obj = {};
  const handle = (e) => {
    e.preventDefault();
    arr.push(one_hobRef.current.value);
    arr.push(two_hobRef.current.value);
    arr.push(three_hobRef.current.value);
    arr.push(four_hobRef.current.value);
    arr.push(five_hobRef.current.value);
    arr1.push(oneRef.current.value);
    arr1.push(twoRef.current.value);
    arr1.push(threeRef.current.value);
    arr1.push(fourRef.current.value);
    arr1.push(fiveRef.current.value);
    Userdetailfromlocal.hobbies = arr;
    Userdetailfromlocal.skills = arr1;

    localStorage.setItem("resumedata", JSON.stringify(Userdetailfromlocal));
    console.log(Userdetailfromlocal, "kawhdk");
    navi("/resume");
  };

  return (
    <form className="skill" onSubmit={handle}>
      <label>Skills</label>
      <hr />
      <input type="text" ref={oneRef} name="one" id="oneRef" required />
      <input type="text" ref={twoRef} name="two" id="twoRef" required />
      <input type="text" ref={threeRef} name="three" id="threeRef" required />
      <input type="text" ref={fourRef} name="four" id="fourRef" />
      <input type="text" ref={fiveRef} name="five" id="fiveRef" />

      <label>Hobbies</label>
      <hr />
      <input type="text" ref={one_hobRef} name="one" id="one_hobRef" required />
      <input type="text" ref={two_hobRef} name="two" id="two_hobRef" required />
      <input
        type="text"
        ref={three_hobRef}
        name="three"
        id="three_hobRef"
        required
      />
      <input type="text" ref={four_hobRef} name="four" id="four_hobRef" />
      <input type="text" ref={five_hobRef} name="five" id="five_hobRef" />
      <input type="submit" value="Done" />
    </form>
  );
}

export default Skills;
