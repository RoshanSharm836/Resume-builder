import { useRef } from "react";
import { useNavigate } from "react-router-dom";

export default function Basic() {
  const navi = useNavigate();

  let fnameRef = useRef();
  let lnameRef = useRef();
  let emailRef = useRef();
  let phoneRef = useRef();
  let countryRef = useRef();
  let cityRef = useRef();
  let dobRef = useRef();
  let summaryRef = useRef();
  let addressRef = useRef();

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
    obj.address = addressRef.current.value;
    obj.summary = summaryRef.current.value;
    localStorage.setItem("resumedata", JSON.stringify(obj));
    console.log(obj);
    navi("/edu");
  };
  return (
    <form className="form" onSubmit={handle}>
      <h1>Basic Detail</h1>
      <label>First Name</label>
      <input type="text" ref={fnameRef} name="fname" id="fname" required />
      <label>Last Name</label>
      <input type="text" ref={lnameRef} name="lname" id="lname" required />
      <label>Email</label>
      <input type="email" ref={emailRef} name="email" id="email" required />
      <label>Phone</label>
      <input type="number" ref={phoneRef} name="phone" id="phone" required />
      <label>Country</label>
      <input
        type="text"
        ref={countryRef}
        name="country"
        id="country"
        required
      />
      <label>City</label>
      <input type="text" ref={cityRef} name="city" id="city" required />
      <label>Place Of Birth</label>
      <input type="date" ref={dobRef} name="dob" id="dob" required />
      <label>Address</label>
      <textarea
        type="text"
        ref={addressRef}
        name="address"
        id="address"
        required
      />
      <label>Professional Summary</label>
      <textarea
        type="text"
        ref={summaryRef}
        name="summary"
        id="summary"
        required
      />
      <input type="submit" value="Next" />
    </form>
  );
}
