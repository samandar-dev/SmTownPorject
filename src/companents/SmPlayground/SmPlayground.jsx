import React from 'react';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import { useLocation } from 'react-router-dom';
import MiniNavbar from '../Navbar/MiniNavbar/MiniNavbar';
import ThePlayground from './ThePlayground.jsx/ThePlayground';
import PlayReservation from './PLayReservation/PlayReservation';
import PlaygroundExperienc from './PlaygroundExperienc/PlaygroundExperienc';
import PlayOnlineReservation from './PLayOnlineReservation/PlayOnlineReservation';

export default function SmPlayground() {
    const location = useLocation()
    const museumNav = [
        { id: 1, path: 'playground1', title: "THE PLAYGROUND K-POP" },
        { id: 2, path: 'playground2', title: "체험프로그램" },
        { id: 3, path: 'playground3', title: "예약조회" },
        { id: 4, path: 'playground4', title: "온라인예약" },
    ]

    return (
        <>
            <div className="smPlayground">
                <Navbar col='black' />
                <MiniNavbar navItems={museumNav} />
                {
                    location.pathname === '/playground1' ? <ThePlayground /> :
                        location.pathname === '/playground2' ? <PlaygroundExperienc /> :
                            location.pathname === '/playground3' ? <PlayReservation /> :
                                location.pathname === '/playground4' ? <PlayOnlineReservation /> : ""
                }
                <Footer col='black' />
            </div>
        </>
    )
}
