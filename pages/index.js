import { Fragment } from "react";
import LandingLayout from '../components/layout/landing/landing.layout';
import Banner from '../components/mainSection/Banner'
import Header from '../components/mainSection/Header'


export default function Home() {
  return (
    <Fragment>
      <LandingLayout>
          <Header/>
          <Banner/>
      </LandingLayout>
    </Fragment>
  )
}
