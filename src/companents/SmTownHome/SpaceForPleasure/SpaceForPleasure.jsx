import parse from 'html-react-parser'
import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'
import Slider from 'react-slick'
import spaceImg from "../../../assets/images/space-img.png"
import spaceLogo_1 from "../../../assets/images/space-logo-1.png"
import spaceLogo_2 from "../../../assets/images/space-logo-2.png"
import spaceLogo_3 from "../../../assets/images/space-logo-3.png"
import spaceLogo_4 from "../../../assets/images/space-logo-4.png"
import spaceLogo_5 from "../../../assets/images/space-logo-5.png"
import spaceLogo_6 from "../../../assets/images/space-logo-6.png"
import spaceLogo_7 from "../../../assets/images/space-logo-7.png"
import spaceLogo_8 from "../../../assets/images/space-logo-8.png"
import "./SpaceForPleasure.scss"

export default function SpaceForPleasure() {
    const [spaceItemActive, setSpaceItemActive] = useState(1)
    const { t } = useTranslation()

    const settings = {
        speed: 300,
        infinite: false,
        initialSlide: 0,
    };

    const spaceTopItems = [
        { id: 1, title: "F&B", },
        { id: 2, title: "Retail", },
        { id: 3, title: "Book Cafe", },
        { id: 4, title: "Goods Store" },
        { id: 5, title: "Restaurant", },
        { id: 6, title: "Attraction", },
        { id: 7, title: "Sound Garden", },
    ]

    const spaceLogoItems = [
        { id: 1, logo: spaceLogo_1, path: "https://www.starbucks.com/" },
        { id: 2, logo: spaceLogo_2, path: "https://shakeshack.com/#/" },
        { id: 3, logo: spaceLogo_8, path: "https://subway.ru/" },
        { id: 4, logo: spaceLogo_4, path: "#" },
        { id: 5, logo: spaceLogo_5, path: "#" },
        { id: 6, logo: spaceLogo_3, path: "#" },
        { id: 7, logo: spaceLogo_6, path: "#" },
        { id: 8, logo: spaceLogo_7, path: "#" },
    ]

    return (
        <div className='space'>
            <div className="space__inner">
                <div className="space__top-list-box">
                    <ul className="space__top-list">
                        {spaceTopItems.map(item => (
                            <li
                                key={item.id}
                                className={`space__top-item ${spaceItemActive === item.id ? "spaceItemAct" : ""}`}
                                onClick={() => setSpaceItemActive(item.id)}
                            >
                                <Link to={'/'}>
                                    <p className='space__top-title'>{item.title}</p>
                                </Link>
                            </li>
                        ))}
                    </ul>

                    <Slider className='space__slider' {...settings}>
                        {spaceTopItems.map(item => (
                            <li
                                key={item.id}
                                className={`space__top-item ${spaceItemActive === item.id ? "spaceItemAct" : ""}`}
                                onClick={() => setSpaceItemActive(item.id)}
                            >
                                <Link to={'/'}>
                                    <p className='space__top-title'>{item.title}</p>
                                </Link>
                            </li>
                        ))}
                    </Slider>
                </div>

                <div className="space__desc-img-box">
                    <div className="space__desc">
                        <h3 className="space__desc-title">프리미엄 외식공간</h3>
                        <p className='space__desc-link'>Premium Dining Out Place</p>

                        <p className="space__desc-text">{parse(t("space-title"))}</p>

                        <div className="space__desc-logo-box">
                            <ul className="space__desc-logo-list">
                                {spaceLogoItems.map(item => (
                                    <li className="space__desc-logo-item" key={item.id}>
                                        <img src={item.logo} alt="브랜드" />
                                    </li>
                                ))}
                            </ul>

                            <Slider className='space__logo-slider' {...settings}>
                                {spaceLogoItems.map(item => (
                                    <li className="space__desc-logo-item" key={item.id}>
                                        <a href={item.path}>
                                            <img src={item.logo} alt="브랜드" />
                                        </a>
                                    </li>
                                ))}
                            </Slider>
                        </div>
                    </div>

                    <div className="space__img">
                        <img src={spaceImg} alt="" />
                    </div>
                </div>
            </div>
            <p className="space__name-big">SPACE FOR PLEASURE</p>
        </div>
    )
}
