import React from 'react'
import { Link } from 'react-router-dom'
import { FaFacebookF } from "react-icons/fa";
import { RiKakaoTalkFill } from "react-icons/ri";
import { BsInstagram, BsArrowUp } from "react-icons/bs";
import FooterLogo from "../../assets/images/footer-logo.svg"
import "./Footer.scss"

export default function Footer() {
    return (
        <div className='footer'>
            <div className="container">
                <div className="footer__inner">
                    <button className="footer__top-btn" onClick={() => window.scrollTo(0, 0)}>
                        <BsArrowUp />
                    </button>

                    <div className="footer__logo-desc">
                        <div className="footer__logo">
                            <img src={FooterLogo} alt="footer logo" />
                        </div>

                        <div className="footer__info">
                            <div className="footer__desc">
                                <ul className="footer__desc-list footer__desc-list-one">
                                    <li className="footer__desc-item-top">
                                        <Link to={"/"}>
                                            <p>이용약관</p>
                                        </Link>
                                    </li>
                                    <li className="footer__desc-item-top">
                                        <Link to={"/"}>
                                            <p>개인정보처리방침</p>
                                        </Link>
                                    </li>
                                    <li className="footer__desc-item-top">
                                        <Link to={"/"}>
                                            <p>티켓서비스이용약관</p>
                                        </Link>
                                    </li>
                                    <li className="footer__desc-item-top">
                                        <Link to={"/"}>
                                            <p>오시는길</p>
                                        </Link>
                                    </li>
                                </ul>

                                <ul className="footer__desc-list footer__desc-list-two">
                                    <li className="footer__desc-item">
                                        <Link to={"/"}>
                                            <p>(주)창원문화복합타운</p>
                                        </Link>
                                    </li>
                                    <li className="footer__desc-item">
                                        <Link to={"/"}>
                                            <p>경남 창원시 의창구 팔동 35-7</p>
                                        </Link>
                                    </li>
                                    <li className="footer__desc-item">
                                        <Link to={"/"}>
                                            <p>대표자 : 이세종</p>
                                        </Link>
                                    </li>
                                    <li className="footer__desc-item">
                                        <Link to={"/"}>
                                            <p>사업자등록번호 : 480-81-00898</p>
                                        </Link>
                                    </li>
                                    <li className="footer__desc-item">
                                        <Link to={"/"}>
                                            <p>개인정보책임자 : 이세종</p>
                                        </Link>
                                    </li>
                                </ul>

                                <p className='footer__desc-info'>ⓒ SMTOWN CHANGWON Co., Ltd. All Rights Reserved</p>
                            </div>

                            <div className="footer__networks">
                                <ul className="footer__networks-list">
                                    <li className="footer__networks-item">
                                        <Link to={"/"}>
                                            <RiKakaoTalkFill />
                                        </Link>
                                    </li>
                                    <li className="footer__networks-item">
                                        <Link to={"/"}>
                                            <FaFacebookF />
                                        </Link>
                                    </li>
                                    <li className="footer__networks-item">
                                        <Link to={"/"}>
                                            <BsInstagram />
                                        </Link>
                                    </li>
                                </ul>

                                <select className="footer__nwtworks-select">
                                    <option value="패밀리 사이트">패밀리 사이트</option>
                                    <option value="패밀리 사이트">패밀리 사이트</option>
                                    <option value="패밀리 사이트">패밀리 사이트</option>
                                </select>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
