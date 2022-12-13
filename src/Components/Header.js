import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Image from 'react-bootstrap/Image'
import { NavLink } from 'react-router-dom'
import LogButton from "./LogButton"
import '../css/Header.css'

function Header(props) {

  return (
    <>
      <Navbar style={{ position: "fixed", zIndex: "1" ,top:"0"}} expand="lg">
        <Container fluid >
          <Image src='../images/daan_icon.png' alt='logo' className="headerimg" />
          <LogButton openPopup={props.openPopup} isLoggedIn={props.isLoggedIn} logout={props.logout} user={props.user} />
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link as={NavLink} to='/' className="nav_i">Home</Nav.Link>
              <Nav.Link as={NavLink} to='/donate' className="nav_i">Donations</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default Header