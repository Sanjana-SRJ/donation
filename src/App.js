import React, { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './Components/Home'
import Signup from './Components/Signup'
import Popup from './Components/Popup'
import Donate from './Components/Donate'
import Footer from './Components/Footer'
import AboutUs from './Components/AboutUs'
import Header from './Components/Header'
import Donationinfo from './Components/Donationinfo'

function App() {
  const [popupShow, setPopupShow] = useState(false)
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [user, setUser] = useState("")
  const [alert, setAlert] = useState(false)

  const openPopup = () => {
    setPopupShow(true)
  }

  const logout = () => {
    setIsLoggedIn(false)

  }

  const loginPressed = (email, pass) => {

    if (email === "admin" && pass === "admin") {
      console.log("logged in")
      setIsLoggedIn(true)
      setPopupShow(false)
      setUser(email)
      setAlert(false)
    }
    else {
      setAlert(true)
    }
  }

  return (
    <>
      <Router>
        <Header openPopup={openPopup} isLoggedIn={isLoggedIn} logout={logout} user={user} />
        <Popup show={popupShow} onHide={() => { setPopupShow(false); setAlert(false) }} loginpressed={loginPressed} alert={alert} />
        <Routes>
          <Route index element={<Home />} />
          <Route path="donate" element={<Donate />} />
          <Route path="signup" element={<Signup />} />
          <Route path="aboutus" element={<AboutUs />} />
          <Route path="/donationinfo">
            <Route path=":id" element={<Donationinfo />} />
          </Route>
        </Routes>
        <Footer />
      </Router>
    </>
  )
}

export default App