import React from 'react';
import style from './Header.module.css'

function Header() {
    return (
        <div className="container-fluid" style={{ margin: "0", padding: "0" }}>
            <div className={`${style.header}`} >
                <div className={`${style.headTxt}`} style={{ background: "rgba(255,255,255, 0.1)", backdropFilter: "blur(10px)" }}>
                    <h1>Pricing that scales to fit your needs<br />
                    </h1>
                    <h2>eVision Free Tier</h2>
                    <h4>Gain free, hands-on experience with the eVision platform, products, and services</h4>
                    <div className="d-flex justify-content-center mt-5">
                        <div className={`${style.joinBtn}`}>
                            <h5 >Create a Free Account</h5>


                        </div>
                    </div>
                    <div className={`container ${style.package}`}>
                        <h5>Types of offers</h5>
                        <p>Explore various products and start building on eVision using the Free Tier. Three different types of free offers are available depending on the product used. See below for details on each product.</p>
                        {/* <hr/> */}
                        <div className="row d-flex justify-content-around">
                            <div className={`col-sm-3 text-center ${style.priceCard}`}>
                                <img
                                    src="/price.svg"
                                    className={`img-fluid`}
                                    style={{ animationDelay: "3s" }}
                                    width="150"
                                    height="150"
                                    alt="Picture"
                                />
                                <h5 style={{ color: "green" }}>Always Free</h5>
                                <small>API access : 50 per month<br />
                                Registration Free<br />
                                Secure, scalable API's<br/>
                                Available to all customers

                                </small>
                                <hr/>
                                <div className="d-flex justify-content-center">
                                    <div className={`${style.detailsBtn}`}>
                                        <h5 >See Details</h5>
                                    </div>
                                </div>
                            </div>
                            <div className={`col-sm-3 text-center ${style.priceCard}`}>
                                <img
                                    src="/store.svg"
                                    className={`img-fluid`}
                                    style={{ animationDelay: "3s" }}
                                    width="150"
                                    height="150"
                                    alt="Picture"
                                />
                                <h5 style={{ color: "green" }}>Partial Free</h5>
                                <small>This tier offers do not expire<br />
                                Registration Free<br />
                                Fast & Managed API's<br />
                                Secure, scalable API's
                                </small>
                                <hr/>
                                <div className="d-flex justify-content-center">
                                    <div className={`${style.detailsBtn}`}>
                                        <h5 >See Details</h5>
                                    </div>
                                </div>
                            </div>
                            <div className={`col-sm-3 text-center ${style.priceCard}`}>
                                <img
                                    src="/moto.svg"
                                    className={`img-fluid`}
                                    style={{ animationDelay: "3s" }}
                                    width="150"
                                    height="150"
                                    alt="Picture"
                                />
                                <h5 style={{ color: "green" }}>Full Access</h5>
                                <small>This tier offers do not expire<br />
                                Registration Free<br />
                                Fast & Managed API's<br />
                                Secure, scalable API's
                                </small>
                                <hr/>
                                <div className="d-flex justify-content-center">
                                    <div className={`${style.detailsBtn}`}>
                                        <h5 >See Details</h5>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>

                </div>


            </div>


        </div>
    )
}

export default Header
