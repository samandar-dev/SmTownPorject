import React, { useState } from 'react'
import "./SmTheatre.scss"

export default function SmTheatre() {
    const [facilActiveitem, setFacilActiveItem] = useState(1)
    const smtheaPageitems = [
        { id: 1, title: "Hologram Concert", text: "SM Artist 공연을 홀로그램으로 실제처럼" },
        { id: 2, title: "Hologram Musical", text: "SM음원으로 제작한 뮤지컬을 홀로그램으로" },
        { id: 3, title: "Multimedia Show", text: "영상·음향·조명 효과를 극대화 한 공연" },
        { id: 4, title: "Replay Concert", text: "실제 콘서트장에 온 것 같은 실황 중계 콘서트" },
        { id: 5, title: "Surround Viewing", text: "SM 콘서트를 가공, 270도 스크린으로 콘텐츠화" },
        { id: 6, title: "Media Art Museum", text: "수납된 객석과 파사드를 스크린으로" },
    ]

    const smtheaitems = [
        { id: 1, img: "", title: "로비" },
        { id: 2, img: "", title: "공연장/홀" },
        { id: 3, img: "", title: "물품보관함" },
        { id: 4, img: "", title: "티켓박스" },
        { id: 5, img: "", title: "분장실" },
        { id: 6, img: "", title: "VIP Room" },
        { id: 7, img: "", title: "etc" },
    ]

    return (
        <>
            <div className='thea-page'>
                <div className="thea-page__inner">
                    <h3 className='thea-page__title'>SMTOWN THEATRE</h3>

                    <div className="thea-page__main">
                        <div className="thea-page__content">
                            <div className="thea-page__content-left-img-box">
                                <img src="https://picsum.photos/590/550" alt="" />
                            </div>

                            <div className="thea-page__content-right">
                                <div className="thea-page__content-title-box">
                                    <p className='thea-page__content-right-categor'>Theatres</p>

                                    <h4 className="thea-page__content-right-title">
                                        SM만의 독자적인 뉴미디어 콘텐츠를 메인으로 <br />
                                        콘서트, 뮤지컬 등 고퀄리티 공연이 이루어지는 공간
                                    </h4>
                                </div>

                                <ul className="thea-page__content-list">
                                    <li className="thea-page__content-item">
                                        <h4 className='thea-page__content-item-title'>New Media Interaction </h4>

                                        <p className="thea-page__content-item-text">
                                            전용 홀로그램, 서라운드뷰잉, 인터랙티브 등 <br />
                                            뉴미디어 콘텐츠와 다양한 전문시스템을 가진 <br />
                                            단 하나의 공연장
                                        </p>
                                    </li>
                                    <li className="thea-page__content-item">
                                        <h4 className='thea-page__content-item-title'>Transform Utility </h4>

                                        <p className="thea-page__content-item-text">
                                            뉴미디어, 스탠딩콘서트, 전문 무대공연, 전문 음악공연, 전시 등 <br />
                                            콘텐츠 및 사용 용도에 따른 무대장치, 파사드 스크린, 객석의 <br />
                                            가변으로 유용하고 다양한 변형이 가능한 멀티 퍼포스
                                        </p>
                                    </li>
                                    <li className="thea-page__content-item">
                                        <h4 className='thea-page__content-item-title'>'Only one' system </h4>

                                        <p className="thea-page__content-item-text">
                                            관객을 270도 둘러싸는 40m의 초대형 파사드 서라운드뷰 <br />
                                            이머시브, 잔향가변, 음상일치, 멀티트랙 플레이백 기능을 <br />
                                            가진 3D 입체음향 시스템 <br />
                                            4K 4만 ANSI부터 2만 ANSI까지 11대의 DLP를 활용한 초고화질 영상 <br />
                                        </p>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="thea-page__items">
                        <ul className="thea-page__items-list">
                            {smtheaPageitems.map(item => (
                                <li className="thea-page__items-item" key={item.id}>
                                    <div className="thea-page__items-img-box">
                                        <img src="https://picsum.photos/480/270" alt="" />
                                    </div>

                                    <div className="thea-page__items-desc">
                                        <h5 className='thea-page__items-desc-title'>{item.title}</h5>
                                        <p className="thea-page__items-desc-text">{item.text}</p>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="thea-page__facilities">
                        <button className="thea-page__facilities-title">Facilities</button>

                        <div className="thea-page__facilities-list-box">
                            <ul className="thea-page__facilities-list">
                                {smtheaitems.map(item => (
                                    <li
                                        className={`thea-page__facilities-item ${facilActiveitem === item.id ? "facilActItem" : "facilNoAct"}`}
                                        key={item.id} onMouseMove={() => setFacilActiveItem(item.id)}
                                    >
                                        <div className="thea-page__facilities-item-img-box">
                                            <img src="https://picsum.photos/480/270" alt="" />
                                        </div>

                                        <div className="thea-page__facilities-item-desc">
                                            <p>{item.title}</p>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <button className='thea-page__facilities-spaceUses'>Space uses</button>
                    </div>
                </div>
            </div>
        </>
    )
}
