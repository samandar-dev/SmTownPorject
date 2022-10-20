import React from 'react'
import Footer from '../Footer/Footer'
import Navbar from '../Navbar/Navbar'
import AboutNav from "../SmChangAbout/AboutNav/AboutNav"
import AboutInformation from './AboutInformation/AboutInformation'
import AboutInformationItem from './AboutInformationItem/AboutInformationItem'
import AboutInformationTwo from './AboutInformationTwo/AboutInformationTwo'
import AboutWayToCom from './AboutWayToCom/AboutWayToCom'

export default function SmChangAbout() {
    return (
        <>
            <Navbar col="balck" />
            <AboutNav />
            {/* <AboutInformation /> */}
            {/* <AboutInformationTwo /> */}
            {/* <AboutInformationItem /> */}
            <AboutWayToCom />
            <Footer col="balck" />
        </>
    )
}
