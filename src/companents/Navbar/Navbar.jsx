import parse from 'html-react-parser';
import React, { useState } from 'react';
import Select from '@mui/material/Select';
import { NavLink } from 'react-router-dom';
import MenuItem from '@mui/material/MenuItem';
import { AiOutlineMenu } from 'react-icons/ai';
import Logo from "../../assets/images/Logo.svg";
import BlackLogo from "../../assets/images/black-logo.svg";
import SearchLoginLang from '../SearchLoginLang/SearchLoginLang';
import "./Navbar.scss"

export default function Navbar(props) {
    const [age, setAge] = useState("STORE & INFO");
    const sidebarItems = [
        "SMTOWN <br/> CHANGWON", "SMTOWN <br/> THEATRE", "SMTOWN <br/> MUSEUM",
        "THE PLAY <br/> GROUND K-POP", "THE <br/> STAY K-POP", "NOTICE & <br/> EVENT"
    ]
    const sidebarItemsTwo = [
        "SMTOWN <br/> CHANGWON", "SMTOWN <br/> THEATRE", "SMTOWN <br/> MUSEUM",
        "THE PLAY GROUND <br/> K-POP", "THE STAY <br/> K-POP", "NOTICE & <br/> EVENT"
    ]

    return (
        <div className='navbar'>
            {props.col === "white" ? <div className="navbar__bg-color"></div> : ""}

            <div className="container">
                <SearchLoginLang col={props.col} />

                <div className="navbar__inner" style={{ justifyContent: `${props.col === 'white' ? "space-between" : 'center'}` }}>
                    <Select
                        value={age}
                        id="demo-simple-select"
                        className='navbar__store-select'
                        labelId="demo-simple-select-label"
                        onChange={(e) => setAge(e.target.value)}
                    >
                        <MenuItem value="STORE & INFO" style={{ color: `${props.col === 'white' ? "#fff" : '#000'}` }}>STORE & INFO</MenuItem>
                        <MenuItem value="Twenty" style={{ color: `${props.col === 'white' ? "#fff" : '#000'}` }}>Twenty</MenuItem>
                        <MenuItem value="Thirty" style={{ color: `${props.col === 'white' ? "#fff" : '#000'}` }}>Thirty</MenuItem>
                    </Select>

                    <ul className="navbar__list navbar__left-list" style={{ maxWidth: `${props.col === 'white' ? '405px' : "384px"}` }}>
                        {
                            props.col === 'white'
                                ? sidebarItems.map((item, inx) => inx + 1 <= 3 ?
                                    <li className="navbar__item" key={inx + 1}>
                                        <NavLink to={'/'}>{parse(item)}</NavLink>
                                    </li>
                                    : ""
                                )
                                : sidebarItemsTwo.map((item, inx) => inx + 1 <= 3 ?
                                    <li className="navbar__item" key={inx + 1} style={{ width: "100%", maxWidth: "127px", textAlign: "center" }}>
                                        <NavLink to={'/'} style={{ color: '#000', textAlign: 'center', fontWeight: '400' }}>{parse(item)}</NavLink>
                                    </li>
                                    : ""
                                )
                        }
                    </ul>

                    <div className={`navbar__logo-box navbar__logo-box-two`} style={{ maxWidth: `${props.col === 'white' ? '426px' : "234px"}` }}>
                        {
                            props.col === 'white'
                                ? <NavLink to={"/"}>
                                    <img src={Logo} alt="navbar logo" style={{ width: "74px", height: "70px" }} />
                                </NavLink>
                                : <NavLink to={"/"}>
                                    <img src={BlackLogo} alt="navbar logo" style={{ width: "85px", height: "77px" }} />
                                </NavLink>
                        }
                    </div>

                    <ul className="navbar__list navbar__left-list" style={{ maxWidth: `${props.col === 'white' ? '405px' : "384px"}` }}>
                        {
                            props.col === 'white'
                                ? sidebarItems.map((item, inx) => inx + 1 > 3 ?
                                    <li className="navbar__item" key={inx + 1}>
                                        <NavLink to={'/'}>{parse(item)}</NavLink>
                                    </li>
                                    : ""
                                )
                                : sidebarItemsTwo.map((item, inx) => inx + 1 > 3 ?
                                    <li className="navbar__item" key={inx + 1} style={{ width: "100%", maxWidth: "127px", textAlign: "center" }}>
                                        <NavLink to={'/'} style={{ color: '#000', textAlign: 'center', fontWeight: '400' }}>{parse(item)}</NavLink>
                                    </li>
                                    : ""
                                )
                        }
                    </ul>

                    <div className="navbar__menu-box">
                        <button className="navbar__menu-btn" style={{ color: `${props.col === 'white' ? "#fff" : '#000'}` }}>
                            <AiOutlineMenu />
                        </button>
                    </div>
                </div>
            </div>
        </div >
    )
}
