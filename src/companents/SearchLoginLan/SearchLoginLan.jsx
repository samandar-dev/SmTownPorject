import React from 'react'
import Login from './Login/Login'
import Search from './Search/Search'
import Language from './Language/Language'
import "./SearchLoginLan.scss"

export default function SearchLoginLan() {
    return (
        <>
            <div className='searchLoginLan'>
                <ul className="searchLoginLan__list d-flex align-items-center">
                    <li className="searchLoginLan__item">
                        <Search />
                    </li>
                    <li className="searchLoginLan__item">
                        <Login />
                    </li>
                    <li className="searchLoginLan__item">
                        <Language />
                    </li>
                </ul>
            </div>
        </>
    )
}
