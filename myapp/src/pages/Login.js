import React from "react";
import {Link} from "react-router-dom";
import './Login.css';
import './Menu.css';
import { images } from "../asset/image";

function Login(){
  return(
    <>
    <main>
      <div className="full">
        <img src={images.logoOne} alt=""/>
        <div className="Form-container">
          <h1>Login your account</h1>
          <input type="text" placeholder="Username"/>
          <input type="text"  placeholder="Password"/>
          <Link to="/Landing/Dashboard" id="Logbutton">Login</Link>
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