import React from 'react'

function Footer() {
    return (
        <div className="container" >
            <footer className={`row d-flex justify-content-around align-items-center pt-5`} >
                <div className="col-sm-3">
                    <p className="text-center" style={{ color: "#888" }}>Copyright © 2021 ERA InfoTech Ltd.</p>
                </div>
                <div className="col-sm-4">
                    <p className="text-center" style={{ color: "#888" }}> Help Center  | Terms  |  Privacy Policy</p>
                </div>


                <div className=" col-sm-3 d-flex justify-content-center align-items-center" >
                    <img

                        src="/flag.png"
                        className="img-fluid"
                        width="20"
                        height="10"
                        alt="Picture"
                        style={{ position: "relative", top: "-6px" }}


                    />
                    <p className="text-center ml-2" style={{ color: "#888" }}>Bangladesh</p>
                </div>

            </footer>
        </div>
    )
}

export default Footer
