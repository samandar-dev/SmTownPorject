import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Footer from '../Footer/Footer'
import Navbar from '../Navbar/Navbar'
import AboutNav from "../SmChangAbout/AboutNav/AboutNav"
import SmTheatreCurrent from '../SmTheatrePage/SmTheatreCurrent/SmTheatreCurrent'
import SmTheatrePage from '../SmTheatrePage/SmTheatrePage'
import AboutInformation from './AboutInformation/AboutInformation'
import AboutInformationItem from './AboutInformationItem/AboutInformationItem'
import AboutInformationTwo from './AboutInformationTwo/AboutInformationTwo'
import AboutWayToCom from './AboutWayToCom/AboutWayToCom'

export default function SmChangAbout() {
    return (
        <>
            <Navbar col="balck" />
            <AboutNav />
            {/* <SmTheatrePage /> */}
            <SmTheatreCurrent/>
            {/* <Routes>
                <Route path='/about1' element={<AboutInformation />} />
                <Route path='/about2' element={<AboutInformationTwo />} />
                <Route path='/about3' element={<AboutInformationItem />} />
                <Route path='/about4' element={<AboutWayToCom />} />
            </Routes> */}
            <Footer col="balck" />
        </>
    )
}
