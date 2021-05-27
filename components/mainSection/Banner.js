import React from 'react';
import style from './Banner.module.css';

function Banner() {
    return (
        <div className="container-fluid">
            <div className={`row d-flex justify-content-center py-5 ${style.motoBg}`}>
                <div className="col-sm-10 text-center" style={{ paddingTop: "80px" }}>
                    <hr />
                    <h5 className={`${style.motoLine}`} style={{}}>
                        Stimulate Your <span style={{ color: "#214252" }}>Business</span> Today
                                </h5>
                    <hr />
                    <div className="row d-flex justify-content-center pb-5">
                        <div className={`col-sm-3 ${style.motoCard}`}>
                            <img
                                src="/cenTwo.svg"
                                className={`img-fluid ${style.anImg} ${style.motoCard}`}
                                style={{ animationDelay: "1s" }}
                                width="250"
                                height="250"
                                alt="Picture"
                            />
                            <p className="px-5 py-2" style={{borderRadius:"10px", marginTop:"20px"}}>Now you can control your customer.Your customer will order your product
                                through your order management portal.
                                    </p>
                        </div>
                        <div className={`col-sm-3 ${style.motoCard}`}>
                            <img
                                src="/center.svg"
                                className={`img-fluid ${style.anImg}  ${style.motoCard}`}
                                style={{ animationDelay: "2s" }}
                                width="250"
                                height="250"
                                alt="Picture"
                            />
                            <p className="px-5 py-2" style={{borderRadius:"10px", marginTop:"20px"}}>Now you can control your customer.Your customer will order your product<br />
                                through your order management portal.
                                    </p>
                        </div>
                        <div className={`col-sm-3 ${style.motoCard}`}>
                            <img
                                src="/orderSec3.svg"
                                className={`img-fluid ${style.anImg}  ${style.motoCard}`}
                                style={{ animationDelay: "3s" }}
                                width="250"
                                height="250"
                                alt="Picture"
                            />
                            <p className="px-5 py-2" style={{borderRadius:"10px", marginTop:"20px"}}>Now you can control your customer.Your customer will order your product
                                through your order management portal.
                                    </p>
                        </div>



                    </div>
                    <div className="d-flex justify-content-center">

                        <p className={`${style.motoDesTwo}`}>Now you can control your customer.Your customer will order your product<br />
                                through your order management portal.Accelerate your business by combining facebook and
                                        <br /> our Store Management.
                                    </p>


                    </div>
                    <div className="d-flex justify-content-center mt-2">
                        <div className={`${style.joinBtn} text-center`}>
                            <h5 >Register</h5>


                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Banner
