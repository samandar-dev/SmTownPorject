import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import "./AboutNav.scss";

export default function AboutNav() {
    const { t } = useTranslation()
    const aboutNav = [
        { id: 1, title: t("about-nav-one") },
        { id: 2, title: t("about-nav-two") },
        { id: 3, title: t("about-nav-thre") },
        { id: 4, title: t("about-nav-four") },
    ]

    return (
        <>
            <div className='about-nav'>
                <div className="about-nav__inner">
                    <div className="container">
                        <ul className="about-nav__list">
                            {aboutNav.map(item => (
                                <li className="about-nav__item" key={item.id}>
                                    <Link to={"/"}>{item.title}</Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}
