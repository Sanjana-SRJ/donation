import React, { useEffect } from 'react'
import '../css/Home.css'
import { useNavigate } from "react-router-dom";

function Home() {
  let navi = useNavigate()
  useEffect(() => {
    document.title = "Daan"
  }, [])
  return (
    <div className='container-fluid' style={{ paddingTop: "80px" }}>
      <div style={{ display: "flex" }}>
        <div style={{ width: "60%", float: "left", height: "410px", display: "flex" }}>
          <img src="../images/home.jpg" alt="donate" width={"100%"} height={"100%"}/>
        </div>
        <div style={{ width: "40%", float: "right", display: "flex" }}>
          <div style={{ marginTop: "100px" }}>
            <div className='header_right'>
              <h3>IF YOU HAVE A</h3>
              <h2>DISABILITY, DON'T
                <br />
                LET PEOPLE DIMINISH
                <br />
                YOUR ABILITY
              </h2>
            </div>
          </div>
        </div>
      </div>
      <div className='text-center header_div'>
        <h1 className='my-4'>CONTRIBUTE WITH US</h1>
        <p className='text-center'>Narayan Seva Sansthan is an NGO in India based in Udaipur (Rajasthan). Established in 1985, we have worked extensively for more than three 3 decades to reach out and rehabilitate differently able people from the underprivileged segment. Narayan Seva Sansthan works with 480 branches in India and 49 branches abroad while focusing on alleviating disabilities and providing proper Physical, Social, and Economic Rehabilitation to the needy. We do this through well-planned and comprehensive programs in health, education, rehabilitation, corrective surgeries, and helping aid distribution making us the best charity organization in India</p>
      </div>
      <button className='btn btn-outline-secondary btn-dark text-light' onClick={()=>{navi("/donate")}}>Donate With Us</button>
    </div>
  )
}

export default Home