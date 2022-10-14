import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import Logo from "../../assets/images/Logo.svg"
import SearchLoginLan from '../SearchLoginLang/SearchLoginLang'
import "./Navbar.scss"

import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { AiOutlineMenu } from 'react-icons/ai';

export default function Navbar() {
    const [age, setAge] = useState("STORE & INFO");

    return (
        <div className='navbar'>
            <div className="container">
                <SearchLoginLan />

                <div className="navbar__inner">
                    <Select
                        className='navbar__store-select'
                        value={age}
                        id="demo-simple-select"
                        labelId="demo-simple-select-label"
                        onChange={(e) => setAge(e.target.value)}
                    >
                        <MenuItem value="STORE & INFO">STORE & INFO</MenuItem>
                        <MenuItem value="Twenty">Twenty</MenuItem>
                        <MenuItem value="Thirty">Thirty</MenuItem>
                    </Select>

                    <ul className="navbar__list navbar__left-list">
                        <li className="navbar__item navbar__left-item">
                            <NavLink to={'/'}>SMTOWN <br /> CHANGWON</NavLink>
                        </li>
                        <li className="navbar__item navbar__left-item">
                            <NavLink to={'/'}>SMTOWN <br /> THEATRE</NavLink>
                        </li>
                        <li className="navbar__item navbar__left-item">
                            <NavLink to={'/'}>SMTOWN <br /> MUSEUM</NavLink>
                        </li>
                    </ul>

                    <div className="navbar__logo-box">
                        <NavLink to={"/"}>
                            <img src={Logo} alt="navbar logo" />
                        </NavLink>
                    </div>

                    <ul className="navbar__list navbar__right-list">
                        <li className="navbar__item">
                            <NavLink to={'/'}>THE PLAY <br /> GROUND K-POP</NavLink>
                        </li>
                        <li className="navbar__item">
                            <NavLink to={'/'}>THE <br /> STAY K-POP</NavLink>
                        </li>
                        <li className="navbar__item">
                            <NavLink to={'/'}>NOTICE & <br /> EVENT</NavLink>
                        </li>
                    </ul>

                    <div className="navbar__menu-box">
                        <button className="navbar__menu-btn">
                            <AiOutlineMenu />
                        </button>
                    </div>
                </div>
            </div>
        </div >
    )
}
