import React, { useState } from "react";
import {Link, useNavigate} from "react-router-dom";
import './Login.css';
import './Menu.css';
import { images } from "../asset/image";

function Login(){
  const navigate=useNavigate();
  const [message,setMessage] =useState('');
  const [Password,setpassword]=useState('');

  const handleChange = event => {
    setMessage(event.target.value);

    console.log('value is:',event.target.value);
  };
  const handleChange2 =event =>{
    setpassword(event.target.value);

    console.log('value is: event.target.value');
  };
  function loginClick (){
    if (message==="admin" && Password==="admin"){
         navigate("/Landing/Dashboard");
    }
  }
  return(
    <>
    <main>
      <div className="full">
        <img src={images.logoOne} alt=""/>
        <div className="Form-container">
          <h1>Login your account</h1>
          <input type="text" placeholder="Username" onChange={handleChange}/>
          <input type="text"  placeholder="Password" onChange={handleChange2}/>
          <nav id="Lognav">
          <a onClick={loginClick} id="Logbutton">Login</a>
          </nav>
          
          <nav>
            <Link to="/Password-reset">Forgot Password?</Link>
          </nav>
        </div>
      </div>
    </main>
    </>
  );
}
export default Login;