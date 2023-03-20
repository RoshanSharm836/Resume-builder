import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import "../Style/Form.css";
export default function Basic() {
  const navi = useNavigate();

  let fnameRef = useRef();
  let lnameRef = useRef();
  let emailRef = useRef();
  let phoneRef = useRef();
  let countryRef = useRef();
  let cityRef = useRef();
  let dobRef = useRef();
  let addressRef = useRef();

  let obj = {};

  const handle = (e) => {
    e.preventDefault();
    obj.fname = fnameRef.current.value;
    obj.lname = lnameRef.current.value;
    obj.email = emailRef.current.value;
    obj.phone = phoneRef.current.value;
    obj.country = countryRef.current.value;
    obj.state = cityRef.current.value;
    obj.dob = dobRef.current.value;
    obj.address = addressRef.current.value;
    localStorage.setItem("resumedata", JSON.stringify(obj));
    console.log(obj);
    navi("/basicTwo");
  };
  return (
    <form className="form" onSubmit={handle}>
      <h1>Basic Detail</h1>
      <div className="Form_box">
        <div>
          <label>First Name</label>
          <input
            type="text"
            ref={fnameRef}
            name="fname"
            id="fname"
            placeholder="Eg - Rahul "
            required
          />
        </div>
        <div>
          <label>Last Name</label>
          <input
            type="text"
            ref={lnameRef}
            name="lname"
            id="lname"
            placeholder="Eg - Kumar"
            required
          />
        </div>
        <div>
          <label>Email</label>
          <input
            type="email"
            ref={emailRef}
            name="email"
            id="email"
            placeholder="Eg - xyz@gamil.com"
            required
          />
        </div>
        <div>
          <label>Phone</label>
          <input
            type="number"
            ref={phoneRef}
            name="phone"
            id="phone"
            placeholder="Eg - 121355xx152"
            required
          />
        </div>
        <div>
          <label>Country</label>
          <input
            type="text"
            ref={countryRef}
            name="country"
            id="country"
            placeholder="Eg - India"
            required
          />
        </div>

        <div>
          <label>State</label>
          <input
            type="text"
            ref={cityRef}
            name="city"
            id="city"
            placeholder="Eg - Pune"
            required
          />
        </div>

        <div>
          <label>Place Of Birth</label>
          <input type="date" ref={dobRef} name="dob" id="dob" required />
        </div>
        <div>
          <label>Address</label>
          <textarea
            type="text"
            ref={addressRef}
            name="address"
            id="address"
            placeholder="Short address"
            required
          />
        </div>
      </div>
      <input type="submit" value="Next     ▶" />
    </form>
  );
}
