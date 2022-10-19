import React from 'react'
import "./Search.scss"

export default function Search(props) {
    return (
        <>
            <div className='search' style={{ display: `${props.col === 'white' ? "block" : "none"}` }}>
                <button className='search__btn'>SEARCH</button>
            </div>
        </>
    )
}
