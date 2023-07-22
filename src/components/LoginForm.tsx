import React, { useState, useRef } from "react";

import { useNavigate } from "react-router-dom";



const LoginForm = () => {
  const info={
useremail : "front@gmail.com",
userpass : "info2015"
  } 
 



const inputRef = useRef<HTMLInputElement>(null);
const passRef = useRef<HTMLInputElement>(null);
const navigate = useNavigate();
const login = () => {
  console.log(inputRef)
  if (inputRef.current && passRef.current) {
  if (
    inputRef.current.value === info.useremail &&
    passRef.current.value === info.userpass
  ) {
    // do something
  }
} {
    navigate('/dashboard');
  }
};
const [user, setUser] = useState({
  mail: "",
  password: "",
  alertColor: "",
  alertText: "",
  tips: "password",
  inputIcon: "fa-solid fa-lock",
});

 const loginSubmit = (e:React.FormEvent) => {
   e.preventDefault();
 
   if (!user.mail || !user.password) {
    setUser({
      ...user,
      alertColor: "alert-warning",
      alertText: "Please, fill this area",
    });
   } 
   else {
     if (
      user.mail === info.useremail &&
      user.password === info.userpass
     ) {
       setUser({
         ...user,
         alertColor: "alert-success",
         alertText: "Your registration is successfully",
       });
     } else {
     setUser({
       ...user,
       alertColor: "alert-danger",
       alertText: "Password or email is wrong!",
     });
     }
   }
 };

 const showPassword = () => {
   if (user.inputIcon === "fa-solid fa-lock") {
    setUser({
      ...user,
      tips: "text",
      inputIcon: "fa-solid fa-lock-open",
    });
   } else {
   setUser({
     ...user,
     tips: "password",
     inputIcon: "fa-solid fa-lock",
   });
   }
 };
  return (
    <div>
      <div className="login   py-5">
        <div className="contact-text  d-flex align-items-center justify-content-center  ">
          <h2 className="text-center mt-3" style={{ color: "#fff" }}>
            My Account
          </h2>
        </div>
        <p className="text-center mt-3">
          <a href="/" style={{ textDecoration: "none", color: "#94a9c9" }}>
            Home
          </a>
         
          <span style={{ color: "#94a9c9" }}> {">"} My account</span>
        </p>

        <div className="all pb-5">
          <div className="small container  pb-5 ">
            <div className="d-flex align-items-center justify-content-center pb-5">
              <form onSubmit={loginSubmit}>
                <p className={`alert ${user.alertColor}`}>{user.alertText}</p>
                <div className="inputOne mb-4 d-flex align-items-center justify-content-center">
                  <input
                    ref={inputRef }
                    onChange={(e) => {
                      setUser({
                        ...user,
                        mail: e.target.value,
                      });
                    }}
                    type="email"
                    className="form-control"
                    placeholder="Email ID"
                    style={{ border: "none" }}
                  />
                  <button className="left">
                    <i className="fa-solid fa-envelope"></i>
                  </button>
                </div>
                <div className="inputOne mb-4 d-flex align-items-center justify-content-center">
                  <input
                    ref={passRef}
                    onChange={(e) => {
                      setUser({
                        ...user,
                        password: e.target.value,
                      });
                    }}
                    type={user.tips}
                    placeholder="Password"
                    style={{ border: "none" }}
                    className="form-control"
                  />
                  <button onClick={showPassword} type="button" className="left">
                    <i className={user.inputIcon}></i>
                  </button>
                </div>
                <div className="mb-3 form-check">
                  <input
                    type="checkbox"
                    id="send"
                    className="form-check-input"
                  />
                  <label className="form-check-label me-5">Remember me</label>
                  <label className="form-check-label-f">Forgot password?</label>
                </div>

                <div className="mb-3 ">
                  <button
                    type="submit"
                    className="btn btn-login"
                    onClick={login}
                  >
                    Login
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
                  }

export default LoginForm
