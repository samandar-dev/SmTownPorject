import React from 'react';
import Footer from '../Footer/Footer';
import Navbar from '../Navbar/Navbar';
import SmStay from '../SmStay/SmStay';
import SmMuseum from '../SmMuseum/SmMuseum';
import HeroSlider from '../HeroSlider/HeroSlider';
import SmTownTheatre from '../SmTheatre/SmTheatre';
import SmPlayground from '../SmPlayground/SmPlayground';
import SpaceForPleasure from '../SpaceForPleasure/SpaceForPleasure';
import "./Home.scss";

export default function Home() {
    return (
        <>
            <div className='home'>
                <Navbar col={"white"}/>
                <HeroSlider />
                <SmTownTheatre />
                <SmMuseum />
                <SmPlayground />
                <SmStay />
                <SpaceForPleasure />
                <Footer />
            </div>
        </>
    )
}
