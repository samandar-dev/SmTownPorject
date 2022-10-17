import React, { useEffect, useState, useRef } from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import heroimg_1 from "../../assets/images/hero-img-1.png";
import heroimg_2 from "../../assets/images/hero-img-2.png";
import heroimg_3 from "../../assets/images/hero-img-3.png";
import ResponHeroImg_1 from "../../assets/images/respon-hero-img-1.png";
import "./HeroSlider.scss";

export default function HeroSlider() {
    const sliderRef = useRef(null)

    const heroSliderItems = [
        { id: 1, img: heroimg_3, },
        { id: 2, img: [heroimg_1, ResponHeroImg_1], },
        { id: 3, img: heroimg_2, },
    ]

    const settings = {
        // dots: true,
        speed: 300,
        infinite: true,
        initialSlide: 1,
    };

    return (
        <div className='heroSlider'>
            <Slider className="heroSlider__slider" ref={sliderRef} {...settings}>
                {heroSliderItems.map(item => (
                    <li className='heroSlider__item' id={item.id} key={item.id} >
                        {item.id === 2 ?
                            <>
                                <img className='heroSlider__item-img-one' src={item.img[0]} alt="hero item" />
                                <img className='heroSlider__item-img-two' src={item.img[1]} alt="hero item" />
                            </>
                            : <img src={item.img} alt="hero item" />
                        }
                    </li>
                ))}
            </Slider>

            <div className="heroSlider__slider-btns">
                <p onClick={() => sliderRef.current.innerSlider.slickPrev()}>01</p>

                <div className="heroSlider__btns-line-box">
                    <span className='heroSlider__btn-line heroBtnsActLine'></span>
                    <span className='heroSlider__btn-line'></span>
                </div>

                <p onClick={() => sliderRef.current.innerSlider.slickNext()}>02</p>
            </div>
        </div>
    )
}