import React from 'react';
import Login from './Login/Login';
import Search from './Search/Search';
import Language from './Language/Language';
import "./SearchLoginLang.scss";

export default function SearchLoginLan(props) {
    return (
        <>
            <div className='searchLoginLang'>
                <ul className="searchLoginLang__list">
                    <li className="searchLoginLang__item">
                        <Search />
                    </li>
                    <li className="searchLoginLang__item">
                        <Login col={props.col}/>
                    </li>
                    <li className="searchLoginLang__item">
                        <Language col={props.col}/>
                    </li>
                </ul>
            </div>
        </>
    )
}
