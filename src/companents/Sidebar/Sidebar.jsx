import React from 'react'
import { Link } from 'react-router-dom'
import Logo from "../../assets/images/Logo.svg"
import SearchLoginLang from '../SearchLoginLang/SearchLoginLang'
import "./Sidebar.scss"

export default function Sidebar() {
    const sidebarItems = ["SMTOWN CHANGWON", "SMTOWN THEATRE", "SMTOWN MUSEUM", "THE PLAY GROUND K-POP", "THE STAY K-POP", "NOTICE & EVENT"]

    return (
        <div className='sidebar'>
            <div className="container">
                <SearchLoginLang />

                <div className="sidebar__inner d-flex align-items-center">
                    <ul className="sidebar__list d-flex align-items-center">
                        {sidebarItems.map((item, inx) => inx + 1 <= 3 ?
                            <li className="sidebar__item" key={inx + 1}>
                                <Link to={'/'}>{item}</Link>
                            </li>
                            : "")}
                    </ul>

                    <div className="sidebar__logo-box col-4">
                        <Link to={"/"}>
                            <img src={Logo} alt="sidebar logo" />
                        </Link>
                    </div>

                    <ul className="sidebar__list d-flex align-items-center">
                        {sidebarItems.map((item, inx) => inx + 1 > 3 ?
                            <li className="sidebar__item" key={inx + 1}>
                                <Link to={'/'}>{item}</Link>
                            </li>
                            : "")}
                    </ul>
                </div>
            </div>
        </div>
    )
}
