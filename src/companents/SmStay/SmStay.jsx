import React from 'react';
import Footer from '../Footer/Footer';
import Navbar from '../Navbar/Navbar';
import StayRoom from './StayRoom/StayRoom';
import { useLocation } from 'react-router-dom';
import MiniNavbar from '../Navbar/MiniNavbar/MiniNavbar';
import "./SmStay.scss";
import StayRoomItem from './StayRoom/StayRoomItem/StayRoomItem';
import StayConvention from './StayConvention/StayConvention';

export default function SmStay() {
    const location = useLocation()
    const museumNav = [
        { id: 1, path: 'smstay1', title: "ROOM" },
        { id: 2, path: 'smstay2', title: "CONVENTION HALL" },
        { id: 3, path: 'smstay3', title: "온라인예약" },
    ]
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

    return (
        <>
            <div className="stay">
                <Navbar col='black' />

                <h2 className="stay__title">ROOM</h2>

                <MiniNavbar navItems={museumNav} />
                {
                    location.pathname === '/smstay1' ? <StayRoom roomObj={roomObj} /> :
                    location.pathname === '/smstay2' ? <StayConvention roomObj={roomObj} /> :
                        location.pathname === `/smstay1/${+location.pathname.split('').at(-1)}` ?
                            <StayRoomItem roomObj={roomObj} /> : ""
                }
                <Footer col='black' />
            </div>
        </>
    )
}
