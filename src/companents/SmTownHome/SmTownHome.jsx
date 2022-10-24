import React from 'react';
import Footer from '../Footer/Footer';
import Navbar from '../Navbar/Navbar';
import SmStay from './HomeStay/HomeStay';
import SmMuseum from './HomeMuseum/HomeMuseum';
import HeroSlider from '../HeroSlider/HeroSlider';
import SmTownTheatre from './HomeTheatre/HomeTheatre';
import SmPlayground from './HomePlayground/HomePlayground';
import SpaceForPleasure from './SpaceForPleasure/SpaceForPleasure';

export default function SmTownHome() {
    return (
        <>
            <Navbar col={"white"} />
            <HeroSlider />
            <SmTownTheatre />
            <SmMuseum />
            <SmPlayground />
            <SmStay />
            <SpaceForPleasure />
            <Footer col={"white"} />
        </>
    )
}
