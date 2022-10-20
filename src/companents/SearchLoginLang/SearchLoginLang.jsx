import React from 'react';
import Login from './Login/Login';
import Search from './Search/Search';
import Language from './Language/Language';
import "./SearchLoginLang.scss";

export default function SearchLoginLan(props) {
    return (
        <>
            <div className='searchLoginLang' style={{ paddingTop: `${props.col === 'white' ? "12px" : "64px"}` }}>
                <ul className="searchLoginLang__list">
                    <li className="searchLoginLang__item">
                        <Search col={props.col} />
                    </li>
                    <li className="searchLoginLang__item">
                        <Login col={props.col} />
                    </li>
                    <li className="searchLoginLang__item">
                        <Language col={props.col} />
                    </li>
                </ul>
            </div>
        </>
    )
}
