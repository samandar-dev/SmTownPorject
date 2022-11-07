import React from 'react';
import Footer from '../Footer/Footer';
import Navbar from '../Navbar/Navbar';
import SmTheatre from './SmTheatre/SmTheatre';
import { useTranslation } from 'react-i18next';
import { useLocation } from 'react-router-dom';
import MiniNavbar from '../Navbar/MiniNavbar/MiniNavbar';
import TheatreCurrent from "./TheatreCurrent/TheatreCurrent";
import TheatreBasicInfor from './TheatreCurrent/TheatreCurrentItem/TheaBasicInfor/TheatreBasicInfor';
import TheatreCurrentItem from './TheatreCurrent/TheatreCurrentItem/TheatreCurrentItem';

export default function SmTheatrePages() {
    const { t } = useTranslation()
    const location = useLocation()
    const theatreNav = [
        { id: 1, path: 'theatre1', title: "SMTOWN THEATRE" },
        { id: 2, path: 'theatre2', title: "현재상영작" },
        { id: 3, path: 'theatre3/1', title: "온라인예매" },
    ]

    const mainItems = [
        {
            id: 1,
            categor: "전체",
            title: "[SV] EXO PLANET #1 - ExplOration - ",
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
            title: "[SV] EXO PLANET #2 - ExplOration - ",
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
            title: "[SV] EXO PLANET #3 - ExplOration - ",
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
            title: "[SV] EXO PLANET #4 - ExplOration - ",
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
            <Navbar col="balck" />
            <MiniNavbar navItems={theatreNav} />
            {
                location.pathname === '/theatre1' ? <SmTheatre /> :
                    location.pathname === '/theatre2' ? <TheatreCurrent mainItems={mainItems} /> :
                        location.pathname === `/theatre3/${+location.pathname.split('').at(-1)}` ? <TheatreCurrentItem mainItems={mainItems} /> : ""
            }
            <Footer col="balck" />
        </>
    )
}
