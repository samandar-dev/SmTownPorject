import React, { useState, useEffect } from 'react';
import { AiFillCaretLeft, AiFillCaretRight } from 'react-icons/ai';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';


import "./PlayOnlineReservation.scss";

export default function PlayOnlineReservation() {
    const [daysArr, setDaysArr] = useState([]);
    const [monthName, setMonthName] = useState("");
    const [dayNameIndx, setDayNameIndx] = useState(1);
    const [month, setMonth] = useState(new Date().getMonth());
    const [year, setYear] = useState(new Date().getFullYear());

    const getDaysInMonth = (month, year) => {
        var monthNames = ['January', 'February', 'March', 'April', 'May',
            'June', 'July', 'August', 'September', 'October', 'November', 'December'];

        var daysNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
        var date = new Date(year, month, 1);
        var arr = [];

        setDayNameIndx(new Date(date).getDay());

        while (date.getMonth() === month) {
            setMonthName(monthNames[date.getMonth()])
            arr.push({ day: date.getDate(), month: monthNames[date.getMonth()], dayName: daysNames[new Date(date).getDay()] });
            date.setDate(date.getDate() + 1);
        }

        return setDaysArr(arr);
    }

    useEffect(() => {
        getDaysInMonth(month, year)
    }, [])

    console.log(month, year);
    console.log(daysArr);

    return (
        <>
            <div className="pOnline">
                <div className="pOnline__inner">
                    <h3 className="pOnline__title">온라인예약</h3>

                    <div className="pOnline__slider">
                        <div className="pOnline__slider-top">
                            <button className="pOnline__left-btn" onClick={() => (setMonth(month > 0 ? month - 1 : month), getDaysInMonth(month, year))}>
                                <AiFillCaretLeft />
                            </button>

                            <h3 className="pOnline__month-year">{monthName} {year}</h3>

                            <button className="pOnline__right-btn" onClick={() => (setMonth(month < 11 ? month + 1 : month), getDaysInMonth(month, year))}>
                                <AiFillCaretRight />
                            </button>
                        </div>

                        <div className="pOnline__slider-info">
                            <ul className="pOnline__slider-into-list">
                                <li className="pOnline__slider-info-item">
                                    <p>Step By 1M</p>
                                </li>
                                <li className="pOnline__slider-info-item">
                                    <p>Learner</p>
                                </li>
                                <li className="pOnline__slider-info-item">
                                    <p>Master</p>
                                </li>
                                <li className="pOnline__slider-info-item">
                                    <p>Popup</p>
                                </li>
                                <li className="pOnline__slider-info-item">
                                    <p>Booking Open</p>
                                </li>
                                <li className="pOnline__slider-info-item">
                                    <p>Class levell</p>
                                </li>
                            </ul>

                            <div className="pOnline__slider-info-selects">
                                <select className='pOnline__slider-info-select'>
                                    <option value="">All Instuctors</option>
                                    <option value="">All Instuctors</option>
                                    <option value="">All Instuctors</option>
                                    <option value="">All Instuctors</option>
                                </select>

                                <select className='pOnline__slider-info-select'>
                                    <option value="">All Calss Type</option>
                                    <option value="">All Instuctors</option>
                                    <option value="">All Instuctors</option>
                                    <option value="">All Instuctors</option>
                                </select>
                            </div>
                        </div>

                        <ul className="pOnline__slider-list">
                            <li style={{ width: `${dayNameIndx * 160 - 160}px`, height: '182px' }}></li>
                            {daysArr.map(item => (
                                <li className="pOnline__slider-item" key={item.day}>
                                    <div className="pOnline__slider-item-top">
                                        <p>{item.day}</p>
                                        <p>{item.dayName}</p>
                                    </div>

                                    <div className="pOnline__slider-item-main">
                                        <p>Minny Park</p>
                                        <p>Step By 1M</p>
                                        <p>Yeji Kim</p>
                                        <p>Isabella</p>
                                        <p>Youjin Kim</p>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}
