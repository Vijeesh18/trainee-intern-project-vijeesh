import React from "react";
import { Link, useNavigate } from "react-router-dom";
import Menu from "./Menu";
import './Menu.css';
import Table from "./Table";
import './adduser.css';
function Dashboard(){
    let navigate=useNavigate();
    const buttonpick =() =>{
        navigate('/Landing/AddNew');
    }
    return(
        <div className="Landing">
            <Menu/>
            <div>
                <div className="topbar">
                <button className="btn2" onClick={()=>buttonpick()}>
                    AddNew
                </button>
                <button className="btn2"onClick={()=>buttonpick()}>Log Out</button>

                </div>
                <h2 id="welcoming">Welcome Back</h2>
                <div className="table1"><Table/></div>
            </div>
        </div>
    );
}
export default Dashboard;