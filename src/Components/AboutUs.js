import React,{useEffect} from 'react'
import { useNavigate } from "react-router-dom";

function AboutUs() {
    let navi = useNavigate()
    useEffect(() => {
        document.title = "Get to Know more about Daan"
      }, [])
    return (
        <div className='container-fluid' style={{ textAlign: "center",paddingTop:"80px"}}>
            <img src="../images/dona.png" alt="donate" width={"100%"} height={"100%"} style={{ border: "1px solid black" }} />
            <div className='container my-5'>
                <h2 className='' style={{ borderBottom: "5px solid orange" }}>Our Purpose</h2>
                <p className='my-3' >We’ve revolutionized the crowdfunding industry with our one-of-its-kind platform that allows people anywhere in the world to donate towards products needed by NGOs. With trust, transparency and empathy, we’re striving hard to create a better world by bringing people together to create a lasting impact.</p>
                <p> Our website is a perfect way to reach out to your target audiences, and let them know what you do and why you do it. Informing your audience about why your charity matters are crucial. Our website allows you to educate your audience about what you are trying to achieve.</p>
                <button className='btn btn-outline-secondary btn-warning' onClick={()=>{navi("/donate")}}>Donate Now</button>
            </div>
        </div>
    )
}

export default AboutUs