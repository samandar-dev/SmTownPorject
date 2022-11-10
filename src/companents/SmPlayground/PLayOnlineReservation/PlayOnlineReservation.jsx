import { AiFillCaretLeft, AiFillCaretRight } from 'react-icons/ai';
import React, { useState, useEffect } from 'react';
import "./PlayOnlineReservation.scss";
import PlayOnlineResModal from './PlayOnlineResModal/PlayOnlineResModal';

export default function PlayOnlineReservation() {
    const [daysArr, setDaysArr] = useState([]);
    const [monthName, setMonthName] = useState("");
    const [dayNameInx, setDayNameInx] = useState(0);
    const [todayDay, setTodayDay] = useState(new Date().getDate());
    const [todayDayClick, setTodayDayClick] = useState(0);
    const [thisMonthName, setThisMonthName] = useState("");
    const [month, setMonth] = useState(new Date().getMonth());
    const [year, setYear] = useState(new Date().getFullYear());

    const getDaysInMonth = (month, year) => {
        var monthNames = ['January', 'February', 'March', 'April', 'May',
            'June', 'July', 'August', 'September', 'October', 'November', 'December'];

        var daysNames = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
        var date = new Date(year, month, 1);
        var arr = [];

        setDayNameInx(new Date(date).getDay() === 0 ? 6 : new Date(date).getDay() - 1)
        setThisMonthName(monthNames[new Date().getMonth()])

        while (date.getMonth() === month) {
            setMonthName(monthNames[date.getMonth()])

            arr.push({
                day: date.getDate(),
                month: monthNames[date.getMonth()],
                dayNameIndex: new Date(date).getDay() === 0 ? 6 : new Date(date).getDay() - 1,
                dayName: daysNames[new Date(date).getDay() === 0 ? 6 : new Date(date).getDay() - 1]
            });
            date.setDate(date.getDate() + 1);
        }

        return setDaysArr(arr);
    }

    const priveBtnHnadler = () => {
        setMonth(month - 1)
        if (month > 0) {
            getDaysInMonth(month, year)
        }
        else {
            setMonth(11)
            setYear(year - 1)
            getDaysInMonth(month, year)
        }
    }

    const nextBtnHnadler = () => {
        setMonth(month + 1)
        if (month < 11) {
            getDaysInMonth(month, year)
        }
        else {
            setMonth(0)
            setYear(year + 1)
            getDaysInMonth(month, year)
        }
    }

    useEffect(() => {
        getDaysInMonth(month, year)
    }, [month, year])

    console.log(thisMonthName);

    return (
        <>
            <div className="pOnline">
                <div className="pOnline__inner">
                    <h3 className="pOnline__title">온라인예약</h3>

                    <div className="pOnline__slider">
                        <div className="pOnline__slider-top">
                            <button className="pOnline__left-btn" onClick={() => priveBtnHnadler()}>
                                <AiFillCaretLeft />
                            </button>

                            <h3 className="pOnline__month-year">{monthName} {year}</h3>

                            <button className="pOnline__right-btn" onClick={() => nextBtnHnadler()}>
                                <AiFillCaretRight />
                            </button>
                        </div>

                        <div className="pOnline__slider-info">
                            <ul className="pOnline__slider-into-list">
                                <li className="pOnline__slider-info-item">
                                    <p><span>S</span> Step By 1M</p>
                                </li>
                                <li className="pOnline__slider-info-item">
                                    <p><span>L</span> Learner</p>
                                </li>
                                <li className="pOnline__slider-info-item">
                                    <p><span>M</span> Master</p>
                                </li>
                                <li className="pOnline__slider-info-item">
                                    <p><span>P</span> Popup</p>
                                </li>
                                <li className="pOnline__slider-info-item">
                                    <p><span></span> Booking Open</p>
                                </li>
                                <li className="pOnline__slider-info-item">
                                    <p><span>!</span> Class levell</p>
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
                            <li style={{ width: `${dayNameInx * 160}px`, height: '182px' }}></li>
                            {daysArr.map(item => (
                                <li
                                    key={item.day}
                                    className={`pOnline__slider-item
                                    ${item.month === thisMonthName ? item.day < todayDay
                                            ? "untilThisDay" : item.day === todayDay
                                                ? "todayDayAct" : "" : ""
                                        }`}
                                    onClick={() => setTodayDayClick(item.day)}
                                >
                                    <div className="pOnline__slider-item-top">
                                        <p className='pOnline__slider-item-top-day'>{item.day}</p>
                                        <p className='pOnline__slider-item-top-dayName'>{item.dayName}</p>
                                    </div>

                                    <div className="pOnline__slider-item-main">
                                        <ul className="pOnline__slider-item-main-list">
                                            <li className="pOnline__slider-item-main-item">
                                                <p><span>S</span> Minny Park</p>
                                            </li>
                                            <li className="pOnline__slider-item-main-item">
                                                <p><span>M</span> Step By 1M</p>
                                            </li>
                                            <li className="pOnline__slider-item-main-item">
                                                <p><span>L</span> Yeji Kim</p>
                                            </li>
                                            <li className="pOnline__slider-item-main-item">
                                                <p><span>L</span> Isabella</p>
                                            </li>
                                            <li className="pOnline__slider-item-main-item">
                                                <p><span>S</span> Youjin Kim</p>
                                            </li>
                                        </ul>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>

            {/* {
                daysArr !== [] ?
                    <PlayOnlineResModal setTodayDayClick={setTodayDayClick} todayDayClick={todayDayClick} item={daysArr[todayDayClick]} />
                    : ""
            } */}
        </>
    )
}
