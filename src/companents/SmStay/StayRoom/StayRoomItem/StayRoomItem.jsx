import React from 'react';
import { BsCalendar3 } from 'react-icons/bs';
import { useLocation, useNavigate } from 'react-router-dom';
import "./StayRoomItem.scss";

export default function StayRoomItem(props) {
    const location = useLocation()
    const itemInfo = [
        {
            id: 1,
            name: 'Detail',
            infos: [
                '· 객실크기 : 실내 29.42 ㎡, 발코니 6.28 ㎡',
                '· 베드타입 : 싱글 베드 1개 & 세미 더블 베드 1개',
                '· 체크인 : 15:00',
                '· 체크아웃 : 11:00',
            ]
        },
        {
            id: 2,
            name: 'Amenities',
            infos: [
                '· GiGA Genie 서비스 (음악, 어메니티 요청)',
                '· Ace Heritz 프리미엄 침대',
                '· Julia B. 프리미엄 침구',
                '· HD Smart TV (USB HDMI)',
                '· 에어컨 / 히팅시스템 / 공기청정기',
                '· 전화기 / 개인금고 / 우산',
                '· 슬리퍼 / 구두클리너 / 구둣주걱 / 구둣솔',
                '· 비상용 휴대 조명기기',
                '· 무료 와이파이',
            ]
        },
        {
            id: 3,
            name: 'Detail',
            infos: [
                "· 수용 인원 : 기준 2인 (최대 3인)', 기준 인원 외 인원 추가 요금 별도 / 예약실에 문의 바랍니다.",
                '· 휠체어 객실 문 너비 : 84cm',
                '· 어린이 바디 어메니티는 어린이 동반 시 1회 1개 무료로 제공되며, 추가로 요청하실 경우 별도 요금이 발생됩니다.',
                '· 객실 내 금연 (실외 흡연 공간 별도 마련)',
                '· 사전 등록된 차량만 출입이 가능하므로 투숙 전 차량 등록바랍니다.',
            ]
        }
    ]

    return (
        <>
            <section className="sRoomItem">
                {props.roomObj.map(item => (
                    item.id === +location.pathname.split('').at(-1) ?
                        <div className="sRoomItem__inner">
                            {/* <div className="sRoomItem__location">
                                <p>{}</p>
                            </div> */}

                            <div className="sRoomItem__top">
                                <h3 className="sRoomItem__title">{item.title.split(' ')[1]}</h3>
                                <button className="sRoomItem__btn"><span><BsCalendar3 /></span> 예약하기</button>
                            </div>

                            <div className="sRoomItem__main">
                                <div className="sRoomItem__main-img">
                                    <img src="https://picsum.photos/1140/290" alt="" />
                                </div>

                                <div className="sRoomItem__main-desc">
                                    <h4 className="sRoomItem__main-desc-title">{item.title}</h4>
                                    <p className="sRoomItem__main-desc-text">{item.desc}</p>

                                    <div className="sRoomItem__main-desc-info">
                                        <ul className="sRoomItem__main-desc-info-list">
                                            <li className="sRoomItem__main-desc-info-one-item">
                                                <p>Capacity</p>
                                            </li>
                                            <li className="sRoomItem__main-desc-info-one-item">
                                                <p>Room</p>
                                            </li>
                                            <li className="sRoomItem__main-desc-info-one-item">
                                                <p>Bed</p>
                                            </li>
                                        </ul>

                                        <ul className="sRoomItem__main-desc-info-list">
                                            {item.info.map((infos, inInx) => (
                                                <li className="sRoomItem__main-desc-info-two-item" key={inInx}>
                                                    <p>{infos}</p>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>

                                <div className="sRoomItem__main-media">
                                    <ul className="sRoomItem__main-media-list">
                                        {item.imgs.map((img, imInx) => (
                                            <li className="sRoomItem__main-media-item" key={imInx}>
                                                <img src={img} alt={item.title} />
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                <div className="sRoomItem__main-info">
                                    <ul className="sRoomitem__main-info-list">
                                        {itemInfo.map(item => (
                                            <li className="sRoomItem__main-info-item" key={item.id}>
                                                <h5 className="sRoomItem__main-info-name">{item.name}</h5>

                                                <ul className="sRoomItem__main-info-item-list">
                                                    {item.infos.map((info, inx) => (
                                                        <li className="sRoomItem__main-info-item-two" key={inx + 1}>
                                                            <p>{info}</p>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div> : ""
                ))}
            </section>
        </>
    )
}
