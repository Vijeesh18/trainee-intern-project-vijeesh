import React from "react";
import Menu from "./Menu";
import UserForm from "./Userform";
import './adduser';

function AddNew(){

    return(

        <div className="Landing">
            <Menu />
            <div>

                <div className="topbar">
                
                </div>
           
                <UserForm />

            </div>
            
        </div>
        
    );

}

export default AddNew;






