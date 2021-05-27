import React, { Fragment } from 'react'
import Footer from '../shared/Footer';
import Navbar from '../shared/Navbar';


function LandingLayout(props) {
    return (
        <Fragment>
            <Navbar />
            {props.children}
            <Footer />
        </Fragment>
    )
}

export default LandingLayout
