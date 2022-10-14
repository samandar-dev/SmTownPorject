import React from 'react'
import "./Language.scss"

export default function Language() {
    return (
        <div className='lang'>
            <select className='lang__select'>
                <option value="kor">KOR</option>
                <option value="eng">ENG</option>
                <option value="rus">RUS</option>
            </select>
        </div>
    )
}
