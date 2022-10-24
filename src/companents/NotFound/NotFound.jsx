import React from 'react'
import { BiArrowBack } from 'react-icons/bi';
import { useNavigate } from 'react-router-dom';
import "./NotFound.scss"

export default function NotFound() {
    const backBtn = useNavigate()
    return (
        <>
            <div className="notfound">
                <button className="notfound__back-btn" onClick={() => backBtn(-1)}>
                    <BiArrowBack />
                </button>

                <h2 className='notfound__title'>Page not found ???</h2>
            </div>
        </>
    )
}
