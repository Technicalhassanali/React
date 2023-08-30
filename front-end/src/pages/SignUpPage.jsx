import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../App.css";
import axios from 'axios';
import useToken from '../Hooks/useToken'

export default function SignUpPage() {

    const[token,setToken] = useToken();
    const[errorMessage,setErrorMessage]=useState('');
    const[nameValue,setNameValue] = useState('');
    const[emailValue,setEmailValue] = useState('');
    const[passwordValue,setPasswordValue]=useState('');
    const[confirmpasswordValue,setConfirmPasswordValue]=useState('');

    function handleSubmit(e){
      e.preventDefault();

  //     let dt = {
  //       name:nameValue,
  //       email:emailValue,
  //       password:passwordValue
  //     }
  //    fetch('http://localhost:3000/api/signup', {
  //   method: 'POST',
  //   body: JSON.stringify(dt),
  //   headers: {
  //     'Content-Type': 'application/json; charset=UTF-8',
  //   }
  // })
  //   .then((response) => response.text())
  //   .then((data) => {
  //     console.log(data);
  //   })
  //   .catch((error) => console.log(error));

  // console.log(setToken('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0ZTBmNWUzNTY1MjVlOGM2ZDJjM2QyMiIsImVtYWlsIjoiMTIzNDU4QGdtYWlsLmNvbSIsIm5hbWUiOiIxMjM0IiwiaXNWZXJpZmllZCI6ZmFsc2UsImlhdCI6MTY5MjQ2NDYxMSwiZXhwIjoxNjkyNDY4MjExfQ.KywXRKQ9r7NK5w12zLeAGL5Bf6jeth4_kbE7UtTwbtU'))
 console.log(token)
  // axios.post('http://localhost:3000/api/signup', {
      //   name:nameValue,
      //   email:emailValue,
      //   password:passwordValue
      // })
      // .then(function (response) {
      //   let token = response.data;
      //   // setToken(token);
      //   console.log({data:response})
      // })
      // .catch(function (error) {
      //   console.log(error);
      // });
    }
  return (
    <>
      <h2>SignUp</h2>
      {errorMessage && <div className="fail">{errorMessage}</div>}
    <form onSubmit={handleSubmit}>
    <div className="form-group">
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" value={nameValue} onChange={(e)=>setNameValue(e.target.value)}/>
      </div>
    <div className="form-group">
        <label htmlFor="email">Email Address:</label>
        <input type="email" id="email" value={emailValue} onChange={(e)=>setEmailValue(e.target.value)}/>
      </div>
      <div className="form-group">
        <label htmlFor="password">Password:</label>
        <input type="password" id="password" value={passwordValue} onChange={(e)=>setPasswordValue(e.target.value)}/>
      </div>
      <div className="form-group">
        <label htmlFor="confirmpassword">Confirm Password:</label>
        <input type="password" id="confirmpassword" value={confirmpasswordValue} onChange={(e)=>setConfirmPasswordValue(e.target.value)}/>
      </div>
      <button className="btn" type="submit" disabled={!emailValue || !passwordValue || passwordValue!==confirmpasswordValue}>Signup</button>{" "}
      <button className="btn" type="reset">Reset Password</button>{" "}
      
      <Link to="/signup">
      <button className="btn" type="button">Don't have Account Signup</button>
      </Link>
    </form>
    </>
  );
}
