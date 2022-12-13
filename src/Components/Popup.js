import '../css/PopUp.css'
import Modal from 'react-bootstrap/Modal';
import React from 'react';
import PropTypes from 'prop-types'
import Login from './Login'
import { useNavigate } from "react-router-dom";
import { Outlet } from 'react-router-dom'

function Popup(props) {
    let navi = useNavigate()
    return (
        <>
            <Modal
                {...props}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered>
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">
                        LOGIN HERE
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {props.alert && <div className="alert alert-danger alert-dismissible" role="alert">
                        Incorrect Username Or Password
                        <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                    </div>
                    }
                    <Login loginpressed={props.loginpressed} onHide={props.onHide} />

                </Modal.Body>
                <Modal.Footer>
                    <label style={{ position: "absolute", left: 10, }}>Not Registered?</label>
                    <button className="btn login" onClick={() => { props.onHide(); navi("/signup") }}>SIGN-UP</button>
                </Modal.Footer>
            </Modal>
            <Outlet />
        </>
    );
}

export default Popup

Popup.propTypes = {
    alert: PropTypes.bool
}