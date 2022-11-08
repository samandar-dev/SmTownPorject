import React from 'react';
import { ImPhone } from 'react-icons/im';

export default function StayRoom() {
    return (
        <>
            <div className="stayRoom">
                <div className="stayRoom__inner">
                    <div className="stayRoom__top-search-box">
                        <ul className="stayRoom__top-search-list">
                            <li className="stayRoom__top-search-item">
                                <p>체크인</p>
                                <p>2020.07.06(월)</p>
                            </li>
                            <li className="stayRoom__top-search-item">
                                <p>체크아웃</p>
                                <p>2020.07.08(수)</p>
                            </li>
                            <li className="stayRoom__top-search-item">
                                <p>일수</p>
                                <p>2박</p>
                            </li>
                            <li className="stayRoom__top-search-item">
                                <p>성인</p>
                                <p>2</p>
                            </li>
                            <li className="stayRoom__top-search-item">
                                <p>어린이</p>
                                <p>0</p>
                            </li>
                            <li className="stayRoom__top-search-item">
                                <p>유아</p>
                                <p>0</p>
                            </li>
                        </ul>

                        <button className="stayRoom__top-search-submit-btn">검색</button>
                    </div>

                    <div className="stayRoom__phone-box">
                        <span><ImPhone /></span>
                        <a href="tel:055-288-1058">055-288-1058</a>
                    </div>
                </div>
            </div>
        </>
    )
}
