import React, { useState } from 'react';
import { AiFillCaretLeft, AiFillCaretRight } from 'react-icons/ai';
import "./SmTheatreCurrent.scss";

export default function SmTheatreCurrent() {
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
        {
            id: 8,
            title: "(월요일)",
            data: "2020-03-30",
            desc: [
                { descId: 1, descTime: "12:00", desctext: "[SV] 2015 EXO-LOVE CONCERT in..." },
                { descId: 2, descTime: "16:00", desctext: "[SV] EXO PLANET #5 - EXlpOration" },
            ]
        },
        {
            id: 9,
            title: "(월요일)",
            data: "2020-03-31",
            desc: [
                { descId: 1, descTime: "12:00", desctext: "[SV] 2015 EXO-LOVE CONCERT in..." },
                { descId: 2, descTime: "16:00", desctext: "[SV] EXO PLANET #5 - EXlpOration" },
                { descId: 3, descTime: "17:00", desctext: "[FILM] 1st PRESENT" },
            ]
        },
        {
            id: 10,
            title: "(월요일)",
            data: "2020-03-32",
            desc: [
                { descId: 1, descTime: "12:00", desctext: "[SV] 2015 EXO-LOVE CONCERT in..." },
                { descId: 2, descTime: "16:00", desctext: "[SV] EXO PLANET #5 - EXlpOration" },
                { descId: 3, descTime: "17:00", desctext: "[FILM] 1st PRESENT" },
            ]
        },
    ]
    const mainItems = [
        {
            id: 1,
            categor: "전체",
            title: "[SV] EXO PLANET #5 - ExplOration - ",
            text: "멤버별 개성 넘치는 무대와 화려한 단체 퍼포먼스로 공연장을 가득 채웠던 엑소의 EXO PLANET #5-EXplOration 콘서트를 11월 23일부터 다시 만나실 수 있습니다. SMTOWN THEATRE 극장의 3면 영상과 차원이 다른 사운드로 서라운드 뷰잉 공연을 즐겨보세요.",
            items: [
                { itemsId: 1, name: "출연자", value: "EXO" },
                { itemsId: 2, name: "공연일자", value: "2019.11.23 ~ " },
                { itemsId: 3, name: "관람등급", value: "8세 이상 관람가" },
            ]
        },
        {
            id: 2,
            categor: "Surround Viewing",
            title: "[SV] EXO PLANET #5 - ExplOration - ",
            text: "멤버별 개성 넘치는 무대와 화려한 단체 퍼포먼스로 공연장을 가득 채웠던 엑소의 EXO PLANET #5-EXplOration 콘서트를 11월 23일부터 다시 만나실 수 있습니다. SMTOWN THEATRE 극장의 3면 영상과 차원이 다른 사운드로 서라운드 뷰잉 공연을 즐겨보세요.",
            items: [
                { itemsId: 1, name: "출연자", value: "EXO" },
                { itemsId: 2, name: "공연일자", value: "2019.11.23 ~ " },
                { itemsId: 3, name: "관람등급", value: "8세 이상 관람가" },
            ]
        },
        {
            id: 3,
            categor: "홀로그램",
            title: "[SV] EXO PLANET #5 - ExplOration - ",
            text: "멤버별 개성 넘치는 무대와 화려한 단체 퍼포먼스로 공연장을 가득 채웠던 엑소의 EXO PLANET #5-EXplOration 콘서트를 11월 23일부터 다시 만나실 수 있습니다. SMTOWN THEATRE 극장의 3면 영상과 차원이 다른 사운드로 서라운드 뷰잉 공연을 즐겨보세요.",
            items: [
                { itemsId: 1, name: "출연자", value: "EXO" },
                { itemsId: 2, name: "공연일자", value: "2019.11.23 ~ " },
                { itemsId: 3, name: "관람등급", value: "8세 이상 관람가" },
            ]
        },
        {
            id: 4,
            categor: "라이브",
            title: "[SV] EXO PLANET #5 - ExplOration - ",
            text: "멤버별 개성 넘치는 무대와 화려한 단체 퍼포먼스로 공연장을 가득 채웠던 엑소의 EXO PLANET #5-EXplOration 콘서트를 11월 23일부터 다시 만나실 수 있습니다. SMTOWN THEATRE 극장의 3면 영상과 차원이 다른 사운드로 서라운드 뷰잉 공연을 즐겨보세요.",
            items: [
                { itemsId: 1, name: "출연자", value: "EXO" },
                { itemsId: 2, name: "공연일자", value: "2019.11.23 ~ " },
                { itemsId: 3, name: "관람등급", value: "8세 이상 관람가" },
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

                        <div className="thea-current__slider-btn-box" onClick={() => setSliderAct(sliderAct <= sliderItems.length - 5 ? sliderAct + 1 : sliderAct)}>
                            <button className="thea-current__slider-right-btn"><AiFillCaretRight /></button>
                        </div>
                    </div>

                    <div className="thea-current__main">
                        <div className="thea-current__main-categor-box">
                            <ul className="thea-current__main-categor-list">
                                {mainItems.map(item => (
                                    <li className={`thea-current__main-categor-item ${item.id === categorBtnAct ? "categorAct" : ""}`}>
                                        <button className='thea-current__main-categor-name' onClick={() => (setCategor(item.categor), setCategorBtnAct(item.id))}>{item.categor}</button>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="thea-current__main-content">
                            <ul className="thea-current__main-content-list">
                                {mainItems.map(item => (
                                    <li className="thea-current__main-content-item">
                                        <div className="thea-current__main-content-item-img-box">
                                            {/* <img src="/" alt="" /> */}
                                        </div>

                                        <div className="thea-current__main-content-item-desc">
                                            <button className="thea-current__main-content-item-categor">{item.categor}</button>

                                            <h4 className="thea-current__main-content-item-title">{item.title}</h4>

                                            <ul className="thea-current__main-content-item-list">
                                                {item.items.map(itemCon => (
                                                    <li className="thea-current__main-content-item-item">
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
                                                <button className="thea-current__main-content-item-btn">상세보기</button>
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
