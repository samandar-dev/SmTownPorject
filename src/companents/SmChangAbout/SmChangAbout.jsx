import React from 'react'
import Footer from '../Footer/Footer'
import Navbar from '../Navbar/Navbar'
import AboutNav from "../SmChangAbout/AboutNav/AboutNav"
import AboutInformation from './AboutInformation/AboutInformation'

export default function SmChangAbout() {
    return (
        <>
            <Navbar col="balck" />
            <AboutNav />
            <AboutInformation />
            <Footer col="balck" />
        </>
    )
}
