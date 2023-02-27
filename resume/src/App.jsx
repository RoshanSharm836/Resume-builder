import logo from "./logo.svg";
import "./App.css";
import Edu from "./Component/Edu";
import { useRef } from "react";
import Skills from "./Component/Skills";

function App() {
  let fnameRef = useRef();
  let lnameRef = useRef();
  let emailRef = useRef();
  let phoneRef = useRef();
  let countryRef = useRef();
  let cityRef = useRef();
  let dobRef = useRef();
  let summaryRef = useRef();

  let obj = {};

  const handle = (e) => {
    e.preventDefault();
    obj.fname = fnameRef.current.value;
    obj.lname = lnameRef.current.value;
    obj.email = emailRef.current.value;
    obj.phone = phoneRef.current.value;
    obj.country = countryRef.current.value;
    obj.city = cityRef.current.value;
    obj.dob = dobRef.current.value;
    obj.summary = summaryRef.current.value;
    localStorage.setItem("resumedata", JSON.stringify(obj));
    console.log(obj);
  };

  return (
    <div className="App">
      {/* <form className="form" onSubmit={handle}>
        <lable>First Name</lable>
        <input type="text" ref={fnameRef} name="fname" id="fname" />
        <lable>Last Name</lable>
        <input type="text" ref={lnameRef} name="lname" id="lname" />
        <lable>Email</lable>
        <input type="email" ref={emailRef} name="email" id="email" />
        <lable>Phone</lable>
        <input type="number" ref={phoneRef} name="phone" id="phone" />
        <lable>Country</lable>
        <input type="text" ref={countryRef} name="country" id="country" />
        <lable>City</lable>
        <input type="text" ref={cityRef} name="city" id="city" />
        <lable>Place Of Birth</lable>
        <input type="date" ref={dobRef} name="dob" id="dob" />
        <label>Professional Summary</label>
        <textarea type="text" ref={summaryRef} name="summary" id="summary" />
        <input type="submit" value="Next" />
      </form> */}

      {/* call when apps next btm clicked  */}
      <Edu />
      {/* call when edu next btm clicked */}
      {/* <Skills /> */}
    </div>
  );
}

export default App;
