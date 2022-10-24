import React, { useState } from 'react';
import TheatreBasicInfor from './TheaBasicInfor/TheatreBasicInfor';
import "./TheatreCurrentItem.scss";
import TheatreCurrentNotice from './TheaCurrentNotice/TheatreCurrentNotice';
import TheaCurrentRefund from './TheaCurrentRefund/TheaCurrentRefund';
import { useLocation } from 'react-router-dom';

export default function TheatreCurrentItem(props) {
    const location = useLocation()
    const [infoitemAct, setInfoitemAct] = useState(1)
    const infoItems = [
        { id: 1, name: '기본정보' },
        { id: 2, name: '유의사항' },
        { id: 3, name: '취소/환불안내' },
    ]

    console.log(location.pathname.split('').at(-1));

    return (
        <>
            <div className='thea-item'>
                <div className="thea-item__inner">
                    <h3 className="thea-item__title">현재상영작</h3>

                    {
                        props.mainItems.map(item => (
                            item.id === +location.pathname.split('').at(-1) ?
                                <div key={item.id}>
                                    <div className="thea-item__hero">
                                        <div className="thea-item__hero-inner">
                                            <div className="thea-item__hero-img">
                                                {/* <img src="" alt="" /> */}
                                            </div>

                                            <div className="thea-item__hero-desc">
                                                <button className="thea-item__hero-desc-categor">SV (Surround Viewing)</button>

                                                <h4 className="thea-item__hero-desc-title">[SV] EXO PLANET #5 - ExplOration - </h4>

                                                <ul className="thea-item__hero-desc-list">
                                                    <li className="thea-item__hero-desc-item">
                                                        <div>
                                                            <p>출연자</p>
                                                        </div>
                                                        <div>
                                                            <p>EXO</p>
                                                        </div>
                                                    </li>
                                                    <li className="thea-item__hero-desc-item">
                                                        <div>
                                                            <p>공연일자</p>
                                                        </div>
                                                        <div>
                                                            <p>2019.11.23 ~ </p>
                                                        </div>
                                                    </li>
                                                    <li className="thea-item__hero-desc-item">
                                                        <div>
                                                            <p>관람등급</p>
                                                        </div>
                                                        <div>
                                                            <p>8세 이상 관람가</p>
                                                        </div>
                                                    </li>
                                                    <li className="thea-item__hero-desc-item">
                                                        <div>
                                                            <p>상영시간</p>
                                                        </div>
                                                        <div>
                                                            <p>133분</p>
                                                        </div>
                                                    </li>
                                                    <li className="thea-item__hero-desc-item">
                                                        <div>
                                                            <p>티켓가격</p>
                                                        </div>
                                                        <div>
                                                            <p>19,000원</p>
                                                        </div>
                                                    </li>
                                                </ul>

                                                <button className="thea-item__hero-desc-btn">예매하기</button>
                                            </div>
                                        </div>
                                    </div>


                                    <div className="thea-item__info">
                                        <ul className="thea-item__info-top-list">
                                            {infoItems.map(item => (
                                                <li
                                                    key={item.id}
                                                    className={`thea-item__info-top-item ${infoitemAct === item.id ? "infoItemAct" : ""}`}
                                                    onClick={() => setInfoitemAct(item.id)}
                                                >
                                                    <button>{item.name}</button>
                                                </li>
                                            ))}
                                        </ul>

                                        {
                                            infoitemAct === 1 ?
                                                <TheatreBasicInfor /> :
                                                infoitemAct === 2 ?
                                                    <TheatreCurrentNotice /> :
                                                    infoitemAct === 3 ?
                                                        <TheaCurrentRefund /> : ""
                                        }
                                    </div>
                                </div>
                                : ""
                        ))
                    }


                </div>
            </div>
        </>
    )
}