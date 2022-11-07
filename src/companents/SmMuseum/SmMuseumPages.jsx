import React from 'react';
import Footer from '../Footer/Footer';
import Navbar from '../Navbar/Navbar';
import SmMuseum from './SmMuseum/SmMuseum';
import { useLocation } from 'react-router-dom';
import MiniNavbar from '../Navbar/MiniNavbar/MiniNavbar';
import MuseumExperience from './MuseumExperience/MuseumExperience';

export default function SmMuseumPage() {
    const location = useLocation()
    const museumNav = [
        { id: 1, path: 'museum1', title: "SMTOWN MUSEUM" },
        { id: 2, path: 'museum2', title: "체험프로그램" },
        { id: 3, path: 'museum3', title: "온라인예매" },
    ]

    return (
        <>
            <Navbar col='black' />
            <MiniNavbar navItems={museumNav} />
            {
                location.pathname === '/museum1' ? <SmMuseum /> :
                    location.pathname === '/museum2' ? <MuseumExperience /> : ""
            }
            <Footer col='black' />
        </>
    )
}
