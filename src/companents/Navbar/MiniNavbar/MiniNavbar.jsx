import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import "./MiniNavbar.scss";

export default function MiniNavbar(props) {
    const [navActive, setNavActive] = useState(1)

    return (
        <>
            <div className='about-nav'>
                <div className="about-nav__inner">
                    <div className="container">
                        <ul className="about-nav__list">
                            {props.navItems.map(item => (
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
