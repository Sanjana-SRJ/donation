import React from 'react'
import '../css/LogButton.css'

function LogButton(props) {
    return (
        !props.isLoggedIn ?
            <li className="LogButton">
                <button className="btn btn-outline-danger" onClick={props.openPopup}>Login</button>
            </li>
            :
            <li className="LogButton">
                <span>{props.user}</span>
                <button className="btn btn-outline-danger" onClick={props.logout}>Logout</button>
            </li>
    )
}

export default LogButton