import React, { useRef, useState } from 'react'
// import { useRef } from "react";
import '../css/Login.css' 

export default function Login(props) {
    const email= useRef('');
    const pass= useRef('');
    return (
        <div className="modal-dialog">
        <div className="modal-content">
            <div className="modal-body">
                <form>
                    <input type="text" name="username" className="username form-control" placeholder="Username" ref={email}/>
                    <input type="password" name="password" className="password form-control" placeholder="password" ref={pass}/>
                </form>
                <button className="btn login" onClick={() => { props.loginpressed(email.current.value, pass.current.value) }}>LOGIN</button>
                <button className="btn login" onClick={props.onHide}>CLOSE</button>
            </div>
        </div>
    </div>
    )
}