import React from 'react';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import { useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import AboutStore from './AboutStore/AboutStore';
import StoreItem from './AboutStore/StoreItem/StoreItem';
import MiniNavbar from "../Navbar/MiniNavbar/MiniNavbar";
import AboutWayToCom from './AboutWayToCom/AboutWayToCom';
import AboutInformation from './AboutInformation/AboutInformation';

export default function SmChangAbout() {
    const { t } = useTranslation()
    const location = useLocation()
    const aboutNav = [
        { id: 1, path: 'about1', title: t("about-nav-one") },
        { id: 2, path: 'about2', title: t("about-nav-two") },
        { id: 3, path: 'about3', title: t("about-nav-thre") },
        { id: 4, path: 'about4', title: t("about-nav-four") },
    ]

    return (
        <>
            <Navbar col="balck" />
            <MiniNavbar navItems={aboutNav} />
            {
                location.pathname === '/about1' ? <AboutInformation /> :
                    location.pathname === '/about2' ? <AboutStore /> :
                        location.pathname === '/about3' ? <StoreItem /> :
                            location.pathname === '/about4' ? <AboutWayToCom /> : ""
            }
            <Footer col="balck" />
        </>
    )
}
