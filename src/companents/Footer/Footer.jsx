import React from 'react'
import { Link } from 'react-router-dom'
import { FaFacebookF } from "react-icons/fa";
import { RiKakaoTalkFill } from "react-icons/ri";
import { BsInstagram, BsArrowUp } from "react-icons/bs";
import FooterLogo from "../../assets/images/footer-logo.svg"
import "./Footer.scss"
import { useTranslation } from 'react-i18next';
import parse from 'html-react-parser';

export default function Footer() {
    const { t } = useTranslation()
    const footerdescitemsOne = [
        { id: 1, text: t("footer-nav-one") },
        { id: 2, text: t("footer-nav-two") },
        { id: 3, text: t("footer-nav-thre") },
        { id: 4, text: t("footer-nav-four") },
    ]
    const footerdescitemsTwo = [
        { id: 1, text: t("footer-link-one") },
        { id: 2, text: t("footer-link-two") },
        { id: 3, text: t("footer-link-thre") },
        { id: 4, text: t("footer-link-four") },
        { id: 5, text: t("footer-link-five") },
    ]

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
                                        {footerdescitemsOne.map(item => (
                                            <Link to={`/`} key={item.id}>
                                                <p>{parse(item.text)}</p>
                                            </Link>
                                        ))}
                                    </li>
                                </ul>

                                <ul className="footer__desc-list footer__desc-list-two">
                                    <li className="footer__desc-item">
                                        {footerdescitemsTwo.map(item => (
                                            <Link to={`/`} key={item.id}>
                                                <p>{parse(item.text)}</p>
                                            </Link>
                                        ))}
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
                                    <option value="패밀리 사이트">{parse(t("footer-select-value-one"))}</option>
                                    <option value="패밀리 사이트">{parse(t("footer-select-value-one"))}</option>
                                    <option value="패밀리 사이트">{parse(t("footer-select-value-one"))}</option>
                                </select>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
