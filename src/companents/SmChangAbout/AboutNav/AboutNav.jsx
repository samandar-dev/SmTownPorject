import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import "./AboutNav.scss";

export default function AboutNav() {
    const { t } = useTranslation()
    const [navActive, setNavActive] = useState(1)
    const aboutNav = [
        { id: 1, path: 'about1', title: t("about-nav-one") },
        { id: 2, path: 'about2', title: t("about-nav-two") },
        { id: 3, path: 'about3', title: t("about-nav-thre") },
        { id: 4, path: 'about4', title: t("about-nav-four") },
    ]

    return (
        <>
            <div className='about-nav'>
                <div className="about-nav__inner">
                    <div className="container">
                        <ul className="about-nav__list">
                            {aboutNav.map(item => (
                                <li className="about-nav__item" key={item.id} onClick={() => setNavActive(item.id)}>
                                    <Link to={"/" + item.path}>
                                        <button className={`about-nav__item-btn ${navActive === item.id ? "navAct" : ""}`}>{item.title}</button>
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}
