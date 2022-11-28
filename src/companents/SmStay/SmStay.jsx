import React from 'react';
import Footer from '../Footer/Footer';
import Navbar from '../Navbar/Navbar';
import StayRoom from './StayRoom/StayRoom';
import { useLocation } from 'react-router-dom';
import MiniNavbar from '../Navbar/MiniNavbar/MiniNavbar';
import "./SmStay.scss";

export default function SmStay() {
    const location = useLocation()
    const museumNav = [
        { id: 1, path: 'smstay1', title: "ROOM" },
        { id: 2, path: 'smstay2', title: "CONVENTION HALL" },
        { id: 3, path: 'smstay3', title: "온라인예약" },
    ]

    return (
        <>
            <div className="stay">
                <Navbar col='black' />

                <h2 className="stay__title">ROOM</h2>

                <MiniNavbar navItems={museumNav} />
                {
                    location.pathname === '/smstay1' ? <StayRoom /> : ""
                }
                <Footer col='black' />
            </div>
        </>
    )
}
