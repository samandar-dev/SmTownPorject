import React from 'react'
import { Link } from 'react-router-dom'
import smStayImg_1 from "../../assets/images/smStay-img-1.png"
import smStayImg_2 from "../../assets/images/smStay-img-2.png"
import "./SmStay.scss"

export default function SmStay() {
    return (
        <div className='smStay'>
            <div className="smStay__inner">
                <p className="smStay__name-big">THE STAY K-POP</p>
                <div className="smStay__bg-color"></div>

                <div className="container">
                    <div className="smStay__content">
                        <div className="smStay__btns-box">
                            <button className='smStay__btn smbtnAct'>Standard Room</button>
                            <button className='smStay__btn'>Studio Room</button>
                        </div>

                        <ul className="smStay__list">
                            <li className='smStay__item'>
                                <Link to={"/"}>
                                    <div className="smStay__item-img-box">
                                        <img src={smStayImg_1} alt="" />

                                        <div className="smStay__item-desc">
                                            <h4 className='smStay__item-desc-title'>Standard <br /> Twin</h4>

                                            <div className="smStay__item-desc-line">
                                                <span></span>
                                            </div>

                                            <button className="smStay__item-desc-btn">view</button>
                                        </div>
                                    </div>
                                </Link>
                            </li>

                            <li className='smStay__item smStay__item-two'>
                                <Link to={"/"}>
                                    <div className="smStay__item-img-box">
                                        <img src={smStayImg_2} alt="" />
                                    </div>

                                    <div className="smStay__item-desc">
                                        <h4 className='smStay__item-desc-title'>Convention <br /> Hall</h4>

                                        <div className="smStay__item-desc-line">
                                            <span></span>
                                        </div>

                                        <button className="smStay__item-desc-btn">view</button>
                                    </div>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}
