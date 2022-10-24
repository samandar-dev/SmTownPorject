import React, { useState } from 'react';
import { AiFillCaretLeft, AiFillCaretRight } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import "./TheatreCurrent.scss";

export default function TheatreCurrent(props) {
    const [sliderAct, setSliderAct] = useState(1)
    const [categor, setCategor] = useState('all')
    const [categorBtnAct, setCategorBtnAct] = useState(1)

    const sliderItems = [
        {
            id: 1,
            title: "(월요일)",
            data: "2020-03-23",
            desc: [
                { descId: 1, descTime: "12:00", desctext: "[SV] 2015 EXO-LOVE CONCERT in..." },
                { descId: 2, descTime: "16:00", desctext: "[SV] EXO PLANET #5 - EXlpOration" },
                { descId: 3, descTime: "17:00", desctext: "[FILM] 1st PRESENT" },
            ]
        },
        {
            id: 2,
            title: "(월요일)",
            data: "2020-03-24",
            desc: [
                { descId: 1, descTime: "12:00", desctext: "[SV] 2015 EXO-LOVE CONCERT in..." },
                { descId: 2, descTime: "16:00", desctext: "[SV] EXO PLANET #5 - EXlpOration" },
                { descId: 3, descTime: "17:00", desctext: "[FILM] 1st PRESENT" },
            ]
        },
        {
            id: 3,
            title: "(월요일)",
            data: "2020-03-25",
            desc: [
                { descId: 1, descTime: "12:00", desctext: "[SV] 2015 EXO-LOVE CONCERT in..." },
                { descId: 2, descTime: "16:00", desctext: "[SV] EXO PLANET #5 - EXlpOration" },
            ]
        },
        {
            id: 4,
            title: "(월요일)",
            data: "2020-03-26",
            desc: [
                { descId: 1, descTime: "12:00", desctext: "[SV] 2015 EXO-LOVE CONCERT in..." },
                { descId: 2, descTime: "16:00", desctext: "[SV] EXO PLANET #5 - EXlpOration" },
            ]
        },
        {
            id: 5,
            title: "(월요일)",
            data: "2020-03-27",
            desc: [
                { descId: 1, descTime: "12:00", desctext: "[SV] 2015 EXO-LOVE CONCERT in..." },
                { descId: 2, descTime: "16:00", desctext: "[SV] EXO PLANET #5 - EXlpOration" },
                { descId: 3, descTime: "17:00", desctext: "[FILM] 1st PRESENT" },
            ]
        },
        {
            id: 6,
            title: "(월요일)",
            data: "2020-03-28",
            desc: [
                { descId: 1, descTime: "12:00", desctext: "[SV] 2015 EXO-LOVE CONCERT in..." },
                { descId: 2, descTime: "16:00", desctext: "[SV] EXO PLANET #5 - EXlpOration" },
                { descId: 3, descTime: "17:00", desctext: "[FILM] 1st PRESENT" },
            ]
        },
        {
            id: 7,
            title: "(월요일)",
            data: "2020-03-29",
            desc: [
                { descId: 1, descTime: "12:00", desctext: "[SV] 2015 EXO-LOVE CONCERT in..." },
                { descId: 2, descTime: "16:00", desctext: "[SV] EXO PLANET #5 - EXlpOration" },
            ]
        },
    ]

    return (
        <>
            <div className='thea-current'>
                <div className="thea-current__inner">
                    <h3 className='thea-current__title'>현재상영작</h3>

                    <div className="thea-current__slider">
                        <div className="thea-current__slider-btn-box" onClick={() => setSliderAct(sliderAct >= 1 ? sliderAct - 1 : sliderAct)}>
                            <button className="thea-current__slider-left-btn"><AiFillCaretLeft /></button>
                        </div>

                        <div className="thea-current__slider-box">
                            <ul className="thea-current__slider-list" style={{
                                transform: `translateX(-${sliderAct * 170 - 170}px)`
                            }}>
                                {sliderItems.map(item => (
                                    <li className="thea-current__slider-item" key={item.id}>
                                        <div className="thea-current__slider-title-box">
                                            <p className="thea-current__slider-item-title"><span>{item.data}</span>  <br />  {item.title}</p>
                                            {/* <p className="thea-current__slider-title-number">{item.title}</p> */}
                                        </div>

                                        <div className="thea-current__slider-main">
                                            <ul className="thea-current__slider-main-list">
                                                {item.desc.map(descItem => (
                                                    <li className="thea-current__slider-main-item" key={descItem.descId}>
                                                        <span className='thea-current__slider-main-time'>{descItem.descTime}</span>
                                                        <p className='thea-current__slider-main-text'>{descItem.desctext}</p>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="thea-current__slider-btn-box" onClick={() => setSliderAct(sliderAct <= sliderItems.length - 5 ? sliderAct + 1 : sliderAct)}
                        >
                            <button className="thea-current__slider-right-btn"><AiFillCaretRight /></button>
                        </div>
                    </div>

                    <div className="thea-current__main">
                        <div className="thea-current__main-categor-box">
                            <ul className="thea-current__main-categor-list">
                                {props.mainItems.map(item => (
                                    <li className={`thea-current__main-categor-item ${item.id === categorBtnAct ? "categorAct" : ""}`} key={item.id}>
                                        <button className='thea-current__main-categor-name' onClick={() => (setCategor(item.categor), setCategorBtnAct(item.id))}>{item.categor}</button>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="thea-current__main-content">
                            <ul className="thea-current__main-content-list">
                                {props.mainItems.map(item => (
                                    <li className="thea-current__main-content-item" key={item.id}>
                                        <div className="thea-current__main-content-item-img-box">
                                            {/* <img src="/" alt="" /> */}
                                        </div>

                                        <div className="thea-current__main-content-item-desc">
                                            <button className="thea-current__main-content-item-categor">{item.categor}</button>

                                            <h4 className="thea-current__main-content-item-title">{item.title}</h4>

                                            <ul className="thea-current__main-content-item-list">
                                                {item.items.map(itemCon => (
                                                    <li className="thea-current__main-content-item-item" key={itemCon.itemsId}>
                                                        <div>
                                                            <p>{itemCon.name}</p>
                                                        </div>
                                                        <div>
                                                            <p>{itemCon.value}</p>
                                                        </div>
                                                    </li>
                                                ))}
                                            </ul>

                                            <div className="thea-current__main-content-item-text">
                                                <p>{item.text}</p>
                                            </div>

                                            <div className="thea-current__main-content-item-btns">
                                                <Link to={`/theatre3/${item.id}`}>
                                                    <button className="thea-current__main-content-item-btn">상세보기</button>
                                                </Link>
                                                <button className="thea-current__main-content-item-btn">예매하기</button>
                                            </div>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
