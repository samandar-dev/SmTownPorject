import React, { useState } from 'react'
import smStayImg_1 from "../../../assets/images/smStay-img-1.png"
import smStayImg_2 from "../../../assets/images/smStay-img-2.png"
import smStayImg_3 from "../../../assets/images/smStay-img-3.png"
import smStayImg_4 from "../../../assets/images/smStay-img-4.png"
import smStayImg_5 from "../../../assets/images/smStay-img-5.png"
import smStayImg_6 from "../../../assets/images/smStay-img-6.png"
import smStayImg_7 from "../../../assets/images/smStay-img-7.png"
import SmStayItems from './StayItems/StayItems';
import ViewModal from './ViewModal/ViewModal'
import "./HomeStay.scss"

export default function HomeStay() {
    const [stayItemActive, setStayItemActive] = useState(1)
    const [viewModalAct, setViewModalAct] = useState(false)
    const [viewItem, setViewItem] = useState({ parentID: 1, chiledID: 1 })

    const stayItems = [
        {
            id: 1,
            title: "Standard Room",
            info: [
                { infoID: 1, infoImg: smStayImg_1, infoTitle: "Standard Twin" },
                { infoID: 2, infoImg: smStayImg_4, infoTitle: "Standard Twin" },
                { infoID: 3, infoImg: smStayImg_7, infoTitle: "Standard Twin" },
                { infoID: 4, infoImg: smStayImg_6, infoTitle: "Standard Twin" },
            ],
        },
        {
            id: 2,
            title: "Studio Room",
            info: [
                { infoID: 1, infoImg: smStayImg_5, infoTitle: "Studio Room" },
                { infoID: 2, infoImg: smStayImg_3, infoTitle: "Studio Room" },
                { infoID: 3, infoImg: smStayImg_6, infoTitle: "Studio Room" },
            ],
        },
        {
            id: 3,
            title: "Convention Hall",
            info: [
                { infoID: 1, infoImg: smStayImg_2, infoTitle: "Convention Hall" },
            ],
        },
    ]

    return (
        <>
            <div className='smStay'>
                <div className="smStay__inner">
                    <p className="smStay__name-big">THE STAY K-POP</p>
                    <div className="smStay__bg-color"></div>

                    <div className="container">
                        <div className="smStay__content">
                            <div className="smStay__btns-box">
                                <ul className="smStay__btns-list">
                                    {stayItems.map(item => (
                                        <li className="smStay__btns-item" key={item.id}>
                                            <button className={`smStay__btn ${item.id === stayItemActive ? "smbtnAct" : ""}`}
                                                onClick={() => setStayItemActive(item.id)}>
                                                {item.title}
                                            </button>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <ul className="smStay__list">
                                {stayItems.map(item => (
                                    item.id === stayItemActive ?
                                        <SmStayItems item={item} setViewItem={setViewItem} setViewModalAct={setViewModalAct} key={item.id} /> :
                                        item.id === 3 ?
                                            <SmStayItems item={item} setViewItem={setViewItem} setViewModalAct={setViewModalAct} key={item.id} />
                                            : ""
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            <ViewModal
                stayItems={stayItems}
                viewItem={viewItem}
                viewModalAct={viewModalAct}
                setViewModalAct={setViewModalAct}
            />
        </>
    )
}
