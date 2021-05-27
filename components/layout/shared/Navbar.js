import React from 'react';


function Navbar() {
    return (
        <div className="container">
                <nav class="navbar navbar-expand-lg navbar-light">
                    <a class="navbar-brand" href="#" style={{fontSize:"30px",color:"#02475e", fontFamily:"'Rubik', sans-serif"}}>eVision</a>
                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
                        <div class="navbar-nav">
                            <a class="nav-link mr-2" href="#" style={{fontSize:"15px",color:"#02475e",letterSpacing:"1px", fontFamily:"'Rubik', sans-serif"}}>Home <span class="sr-only">(current)</span></a>
                            <a class="nav-link mr-2" href="#" style={{fontSize:"15px",color:"#02475e",letterSpacing:"1px", fontFamily:"'Rubik', sans-serif"}}>Features</a>
                            <a class="nav-link" href="#" style={{fontSize:"15px",color:"#02475e",letterSpacing:"1px", fontFamily:"'Rubik', sans-serif"}}>Pricing</a>
                            {/* <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a> */}
                        </div>
                    </div>
                </nav>
        </div>
    )
}

export default Navbar
