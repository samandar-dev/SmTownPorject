import React, { useState } from 'react';
import "./PlayReservation.scss";

export default function PlayReservation() {
    const [categorAct, setCategorAct] = useState(1)
    const [purchaseleftBtnsAct, setPurchaseLeftBtnsAct] = useState(1)

    return (
        <>
            <div className="playReser">
                <div className="playReser__inner">
                    <h3 className='playReser__title'>MYPAGE</h3>

                    <div className="playReser__main">
                        <div className="playReser__left">
                            <div className="playReser__left-box">
                                <h4>구매내역</h4>

                                <ul className="playReser__left-list">
                                    <li className={`playReser__left-item ${purchaseleftBtnsAct === 1 ? "purchaseAct" : ""}`} onClick={() => setPurchaseLeftBtnsAct(1)}>
                                        <p>- 예약내역</p>
                                    </li>
                                    <li className={`playReser__left-item ${purchaseleftBtnsAct === 2 ? "purchaseAct" : ""}`} onClick={() => setPurchaseLeftBtnsAct(2)}>
                                        <p>- 취소/환불내역</p>
                                    </li>
                                </ul>
                            </div>

                            <div className="playReser__left-box">
                                <h4>회원정보</h4>

                                <ul className="playReser__left-lisrt">
                                    <li className={`playReser__left-item ${purchaseleftBtnsAct === 3 ? "purchaseAct" : ""}`} onClick={() => setPurchaseLeftBtnsAct(3)}>
                                        <p>- 내정보수정</p>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div className="playReser__right">
                            <ul className="playReser__right-categor-list">
                                <li className={`playReser__right-categor-item ${categorAct === 1 ? "playReserCategorAct" : ""}`}
                                    onClick={() => setCategorAct(1)}>
                                    <p>PLAYGROUND(1)</p>
                                </li>
                                <li className={`playReser__right-categor-item ${categorAct === 2 ? "playReserCategorAct" : ""}`}
                                    onClick={() => setCategorAct(2)}>
                                    <p>STAY(2)</p>
                                </li>
                            </ul>

                            <ul className="playReser__right-tickets-list">
                                <li className="playReser__right-tickets-item">
                                    <h4 className="playReser__right-tickets-title">댄스 스튜디오 8회권</h4>

                                    <div className="playReser__right-tickets-item-box">
                                        <ul className="playReser__right-tickets-item-list">
                                            <li className="playReser__right-tickets-item-chiled">
                                                <p>예약번호</p>
                                            </li>
                                            <li className="playReser__right-tickets-item-chiled">
                                                <p>예약상품 / 옵션</p>
                                            </li>
                                            <li className="playReser__right-tickets-item-chiled">
                                                <p>예약상태</p>
                                            </li>
                                            <li className="playReser__right-tickets-item-chiled">
                                                <p>확인/취소</p>
                                            </li>
                                        </ul>

                                        <ul className="playReser__right-tickets-item-main-list">
                                            <li className="playReser__right-tickets-item-main-chiled">
                                                <p>20200612 <br /> <span>20200612ABCD5</span></p>
                                            </li>
                                            <li className="playReser__right-tickets-item-main-chiled">
                                                <p>보컬트레이닝 기초 #1 <br /> <span>사용일 : 2020. 01. 05 (2시 ~ 4시)</span></p>
                                            </li>
                                            <li className="playReser__right-tickets-item-main-chiled">
                                                <p>사용대기</p>
                                            </li>
                                            <li className="playReser__right-tickets-item-main-chiled">
                                                <p>예약취소</p>
                                            </li>
                                        </ul>
                                    </div>
                                </li>
                                <li className={`playReser__right-tickets-item ${categorAct === 2 ? "d-none" : ""}`}>
                                    <h4 className="playReser__right-tickets-title">댄스 스튜디오 8회권</h4>

                                    <div className="playReser__right-tickets-item-box">
                                        <ul className="playReser__right-tickets-item-list">
                                            <li className="playReser__right-tickets-item-chiled">
                                                <p>예약번호</p>
                                            </li>
                                            <li className="playReser__right-tickets-item-chiled">
                                                <p>예약상품 / 옵션</p>
                                            </li>
                                            <li className="playReser__right-tickets-item-chiled">
                                                <p>예약상태</p>
                                            </li>
                                            <li className="playReser__right-tickets-item-chiled">
                                                <p>확인/취소</p>
                                            </li>
                                        </ul>

                                        <ul className="playReser__right-tickets-item-main-list">
                                            <li className="playReser__right-tickets-item-main-chiled">
                                                <p>20200612 <br /> <span>20200612ABCD5</span></p>
                                            </li>
                                            <li className="playReser__right-tickets-item-main-chiled">
                                                <p>보컬트레이닝 기초 #1 <br /> <span>사용일 : 2020. 01. 05 (2시 ~ 4시)</span></p>
                                            </li>
                                            <li className="playReser__right-tickets-item-main-chiled">
                                                <p>사용대기</p>
                                            </li>
                                            <li className="playReser__right-tickets-item-main-chiled">
                                                <p>예약취소</p>
                                            </li>
                                        </ul>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
