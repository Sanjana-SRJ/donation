import React from 'react'
import '../css/Footer.css'
import { Link } from 'react-router-dom'

export default function Footer() {
    return (
        <>
            <footer className="text-center text-lg-start bg-color2" style={{marginTop:"5px"}}>
                <section className="d-flex justify-content-lg-between p-4 border-bottom bg-color1">
                    <div className="me-5 d-lg-block">
                        <span className="text-white">Get connected with us on social networks :</span>
                    </div>
                    <div className='float'>
                        <a href="" className="me-4 link-secondary">
                            <i className="fab fa-facebook-f copyright"></i>
                        </a>
                        <a href="" className="me-4 link-secondary">
                            <i className="fab fa-twitter copyright"></i>
                        </a>
                        <a href="" className="me-4 link-secondary">
                            <i className="fab fa-google copyright"></i>
                        </a>
                        <a href="" className="me-4 link-secondary">
                            <i className="fab fa-instagram copyright"></i>
                        </a>
                        <a href="" className="me-4 link-secondary">
                            <i className="fab fa-linkedin copyright"></i>
                        </a>
                        <a href="" className="me-4 link-secondary">
                            <i className="fab fa-github copyright"></i>
                        </a>
                    </div>
                </section>
                <section className="bg-color2">
                    <div className="container-fluid text-center text-md-start mt-5">
                        <div className="row mt-3">
                            <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                                <h6 className="text-uppercase fw-bold text-white">DAAN
                                </h6>
                                <div className="separater"></div>
                                <p className="copyright">
                                    We are India's trusted and transparent crowdfunding platform, with a vision to create a social impact. Our unique model allows people from across the globe to donate towards raising funds for products required by NGOs and charities in India, which are then delivered to them by us.
                                </p>
                            </div>
                            <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                                <h6 className="text-uppercase fw-bold text-white">DAAN Funding Group Jabalpur
                                </h6>
                                <div className="separater"></div>
                                <p className="copyright">
                                    Daan Headquarter, Jabalpur, Madhya Pradesh - 482001,
                                    India
                                </p>
                                <p className="copyright">
                                    T- +91-00000-00000
                                </p>
                                <p className="copyright">
                                    E-mail daan@gmail.com
                                </p>
                            </div>
                            <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                                <h6 className="text-uppercase fw-bold text-white">
                                    QUICK LINKS
                                </h6>
                                <div className="separater"></div>

                                <p className="copyright">
                                    <Link to={"/"}>
                                        <span className="text-reset">Home</span>
                                    </Link>
                                </p>
                                <p className="copyright">
                                    <Link to={"/aboutus"}>
                                        <span className="text-reset">About Us</span>
                                    </Link>
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
            </footer>
        </>
    )
}