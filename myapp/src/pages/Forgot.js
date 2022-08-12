import React from "react";
import "./Login.css";
import pic from 'C:/Users/shiya/OneDrive/Documents/GitHub/trainee-intern-project-vijeesh/myapp/src/asset/image/forgot_pass.jpg';
function  Forgot(){
    return(
        <>
        <main>
            <div className="full">
                <img src={pic} alt=""/>
                <div className="Form-container" id="formforgot">
                    <h1 id="forgot">Forgot Password</h1>
                    <p id="forgotemail">Enter your email and we will send you a link to resest Password</p>
                    <input type="text" placeholder="Email Address"/>
                    <button id="forgot-button">Submit</button>
                </div>
            </div>

    
        </main>
        </>
    );
}
export default Forgot;