import React from 'react';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import { useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import AboutStore from './AboutStore/AboutStore';
import StoreItem from './AboutStore/StoreItem/StoreItem';
import MiniNavbar from "../Navbar/MiniNavbar/MiniNavbar";
import AboutWayToCom from './AboutWayToCom/AboutWayToCom';
import AboutIntroduce from './AboutIntroduce/AboutIntroduce'
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
    const abInforTwoItems = [
        { id: 1, img: "", title: "GONGCHA1", categor: "B1F", number: "01-1234-5678" },
        { id: 2, img: "", title: "GONGCHA2", categor: "1F", number: "02-1234-5678" },
        { id: 3, img: "", title: "GONGCHA3", categor: "2F", number: "03-1234-5678" },
        { id: 4, img: "", title: "GONGCHA4", categor: "3F", number: "04-1234-5678" },
        { id: 5, img: "", title: "GONGCHA5", categor: "4F", number: "05-1234-5678" },
        { id: 6, img: "", title: "GONGCHA6", categor: "5F", number: "06-1234-5678" },
        { id: 7, img: "", title: "GONGCHA7", categor: "6F", number: "07-1234-5678" },
        { id: 8, img: "", title: "GONGCHA8", categor: "7F", number: "08-1234-5678" },
        { id: 9, img: "", title: "GONGCHA9", categor: "8F", number: "09-1234-5678" },
        { id: 10, img: "", title: "GONGCHA10", categor: "9F", number: "10-1234-5678" },
        { id: 11, img: "", title: "GONGCHA11", categor: "10F", number: "11-1234-5678" },
        { id: 12, img: "", title: "GONGCHA12", categor: "R.T", number: "12-1234-5678" },
    ]

    return (
        <>
            <Navbar col="balck" />
            <MiniNavbar navItems={aboutNav} />
            {
                location.pathname === '/about1' ? <AboutIntroduce /> :
                    location.pathname === '/about2' ? <AboutInformation /> :
                        location.pathname === '/about3' ? <AboutStore abInforTwoItems={abInforTwoItems} /> :
                            location.pathname === `/about3item/${+location.pathname.split('/').at(-1)}` ? <StoreItem abInforTwoItems={abInforTwoItems} /> :
                                location.pathname === '/about4' ? <AboutWayToCom /> : ""
            }
            <Footer col="balck" />
        </>
    )
}
