import React from 'react'
import Footer from '../Footer/Footer'
import HeroSlider from '../HeroSlider/HeroSlider'
import Navbar from '../Navbar/Navbar'
import Sidebar from '../Sidebar/Sidebar'
import SmMuseum from '../SmMuseum/SmMuseum'
import SmPlayground from '../SmPlayground/SmPlayground'
import SmStay from '../SmStay/SmStay'
import SmTownTheatre from '../SmTheatre/SmTheatre'
import SpaceForPleasure from '../SpaceForPleasure/SpaceForPleasure'
import "./Home.scss"

export default function Home() {
    return (
        <div className='home'>
            <div className="home__hero-bg-color"></div>
            {/* <Sidebar /> */}

            <div className="home__header">
                <Navbar />
            </div>

            <div className="home__hero">
                <HeroSlider />
            </div>

            <div className="home__theatre">
                <SmTownTheatre />
            </div>

            <div className="home__smMusuem">
                <SmMuseum />
            </div>

            <div className="home__smPlay">
                <SmPlayground />
            </div>

            <div className="home__smStay">
                <SmStay />
            </div>

            <div className="home__space">
                <SpaceForPleasure />
            </div>

            <div className="home__footer">
                <Footer />
            </div>
        </div>
    )
}
