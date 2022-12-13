import React from 'react'
import '../css/signup.css'
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import {v4} from 'uuid';

const signUpSubmit = (e,navi) => {
    e.preventDefault()

    let users = {id:v4()};
    for(let i=0;i<7;i++){
       users[e.target[i].name]= e.target[i].value
    }
    
    const headers = { 
        'Content-Type': 'application/json'};

    axios.post('http://[::1]:4000/users', users, {headers}
  
    ).then(result=>{
        console.log(result)
    })



    navi("/")
    alert("You have Successfully Signed Up, Now you can Login with your Email and Password")
}

export default function Signup() {
    let navi = useNavigate()
    return (

        <div id="box"><h1>Register</h1><br />
            <form onSubmit={(e) => signUpSubmit(e,navi)}>
                <input className="input" type="text" name="fname" placeholder="First name" required />
                <input type="text" className="input" name="lname" placeholder="Last name" required />
                <input type="email" className="input" name="email" placeholder="Email ID" required />
                <input type="number" maxLength="10" className="input" name="number" required placeholder="Mobile Number" />
                <input type="text" className="input" name="addr" required placeholder="Address" />
                <input type="password" className="input" name="pass" required placeholder="Password" />
                <br />
                <input type="checkbox" name="checkbox" style={{ marginTop: "20px", marginLeft: "50px" }} required />
                <label >By checking the box, you acknowledge that you have read and understood the terms of the Privacy Notice.</label>
                <br />
                <input type="submit" style={{ borderColor: "rgb(234, 126, 43)", width: "30%", height: "10%", marginTop: "20px", marginLeft: "50px" }} />
            </form>
        </div >
    )
}


