import React from 'react';
import Slider from 'react-slick';
import { ImPhone } from 'react-icons/im';
import "./StayRoom.scss";

export default function StayRoom() {
    const roomObj = [
        {
            id: 1,
            title: 'STANDARD TWIN',
            desc: "월넛 브라운톤 인테리어가 돋보이는 스탠다드룸에서는 아늑한 휴식을 선사합니다. 한국적인 요소를 부여해 온화하고 단아한 무드가 느껴지는 트윈룸에서 완벽한 휴식을 누려보십시오.",
            info: [
                "3인 (최대 4인)",
                "침실, 욕실, 화장실",
                "더블1, 싱글1"
            ],
            imgs: [
                'https://picsum.photos/id/56/665/290',
                'https://picsum.photos/id/57/665/290',
                'https://picsum.photos/id/58/665/290',
            ]
        },
        {
            id: 2,
            title: 'STANDARD Double',
            desc: "월넛 브라운톤 인테리어가 돋보이는 스탠다드룸에서는 아늑한 휴식을 선사합니다. 한국적인 요소를 부여해 온화하고 단아한 무드가 느껴지는 트윈룸에서 완벽한 휴식을 누려보십시오.",
            info: [
                "3인 (최대 4인)",
                "침실, 욕실, 화장실",
                "더블1, 싱글1"
            ],
            imgs: [
                'https://picsum.photos/id/156/665/290',
                'https://picsum.photos/id/157/665/290',
                'https://picsum.photos/id/158/665/290',
            ]
        },
        {
            id: 3,
            title: 'STANDARD Ondol',
            desc: "월넛 브라운톤 인테리어가 돋보이는 스탠다드룸에서는 아늑한 휴식을 선사합니다. 한국적인 요소를 부여해 온화하고 단아한 무드가 느껴지는 트윈룸에서 완벽한 휴식을 누려보십시오.",
            info: [
                "3인 (최대 4인)",
                "침실, 욕실, 화장실",
                "더블1, 싱글1"
            ],
            imgs: [
                'https://picsum.photos/id/256/665/290',
                'https://picsum.photos/id/257/665/290',
                'https://picsum.photos/id/258/665/290',
            ]
        },
        {
            id: 4,
            title: 'STUDIO New',
            desc: "월넛 브라운톤 인테리어가 돋보이는 스탠다드룸에서는 아늑한 휴식을 선사합니다. 한국적인 요소를 부여해 온화하고 단아한 무드가 느껴지는 트윈룸에서 완벽한 휴식을 누려보십시오.",
            info: [
                "3인 (최대 4인)",
                "침실, 욕실, 화장실",
                "더블1, 싱글1"
            ],
            imgs: [
                'https://picsum.photos/id/356/665/290',
                'https://picsum.photos/id/357/665/290',
                'https://picsum.photos/id/358/665/290',
            ]
        },
        {
            id: 5,
            title: 'STUDIO Party',
            desc: "월넛 브라운톤 인테리어가 돋보이는 스탠다드룸에서는 아늑한 휴식을 선사합니다. 한국적인 요소를 부여해 온화하고 단아한 무드가 느껴지는 트윈룸에서 완벽한 휴식을 누려보십시오.",
            info: [
                "3인 (최대 4인)",
                "침실, 욕실, 화장실",
                "더블1, 싱글1"
            ],
            imgs: [
                'https://picsum.photos/id/456/665/290',
                'https://picsum.photos/id/457/665/290',
                'https://picsum.photos/id/458/665/290',
            ]
        },
        {
            id: 6,
            title: 'STUDIO Future',
            desc: "월넛 브라운톤 인테리어가 돋보이는 스탠다드룸에서는 아늑한 휴식을 선사합니다. 한국적인 요소를 부여해 온화하고 단아한 무드가 느껴지는 트윈룸에서 완벽한 휴식을 누려보십시오.",
            info: [
                "3인 (최대 4인)",
                "침실, 욕실, 화장실",
                "더블1, 싱글1"
            ],
            imgs: [
                'https://picsum.photos/id/556/665/290',
                'https://picsum.photos/id/557/665/290',
                'https://picsum.photos/id/558/665/290',
            ]
        },
    ];

    const settings = {
        speed: 300,
        infinite: true,
        initialSlide: 1,
    };

    return (
        <>
            <div className="stayRoom">
                <div className="stayRoom__inner">
                    <div className="stayRoom__top-search">
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
                    </div>

                    <div className="stayRoom__main">
                        <div className="stayRoom__main-phone-box">
                            <div className="stayRoom__phone">
                                <a href="tel:055-288-1058">
                                    <span><ImPhone /></span>055-288-1058
                                </a>
                            </div>
                        </div>

                        <ul className="stayRoom__main-list">
                            {roomObj.map(item => (
                                <li className="stayRoom__main-item" key={item.id}>
                                    <div className="stayRoom__main-item-slider-box">
                                        <Slider className="stayRoom__main-item-slider" {...settings}>
                                            {item.imgs.map(itemImg => (
                                                <li className='stayRoom__main-item-img' key={item.id}>
                                                    <img src={itemImg} alt={item.title} />
                                                </li>
                                            ))}
                                        </Slider>
                                    </div>

                                    <div className="stayRoom__main-item-desc">
                                        <h3 className="stayRoom__main-item-desc-title">{item.title}</h3>
                                        <p className="stayRoom__main-item-desc-text">{item.desc}</p>

                                        <div className="stayRoom__main-item-desc-info">
                                            <ul className="stayRoom__main-item-desc-info-list">
                                                <li className="stayRoom__main-item-desc-info-one-item">
                                                    <p>Capacity</p>
                                                </li>
                                                <li className="stayRoom__main-item-desc-info-one-item">
                                                    <p>Room</p>
                                                </li>
                                                <li className="stayRoom__main-item-desc-info-one-item">
                                                    <p>Bed</p>
                                                </li>
                                            </ul>

                                            <ul className="stayRoom__main-item-desc-info-list">
                                                {item.info.map(infoItems => (
                                                    <li className="stayRoom__main-item-desc-info-two-item" key={item.id}>
                                                        <p>{infoItems}</p>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>

                                        <div className="stayRoom__main-item-desc-btn">
                                            <button>Detail</button>
                                        </div>
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
