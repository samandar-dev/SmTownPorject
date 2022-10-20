import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import "./AboutInformationTwo.scss"

export default function AboutInformationTwo() {
    const { t } = useTranslation()
    const [abInforTwoItems, setAbInforTwoItems] = useState([
        { id: 1, img: "", title: "GONGCHA", categor: "B1F", number: "02-1234-5678" },
        { id: 2, img: "", title: "GONGCHA", categor: "B1F", number: "02-1234-5678" },
        { id: 3, img: "", title: "GONGCHA", categor: "B1F", number: "02-1234-5678" },
        { id: 4, img: "", title: "GONGCHA", categor: "B1F", number: "02-1234-5678" },
        { id: 5, img: "", title: "GONGCHA", categor: "B1F", number: "02-1234-5678" },
        { id: 6, img: "", title: "GONGCHA", categor: "B1F", number: "02-1234-5678" },
        { id: 7, img: "", title: "GONGCHA", categor: "B1F", number: "02-1234-5678" },
        { id: 8, img: "", title: "GONGCHA", categor: "B1F", number: "02-1234-5678" },
        { id: 9, img: "", title: "GONGCHA", categor: "B1F", number: "02-1234-5678" },
        { id: 10, img: "", title: "GONGCHA", categor: "B1F", number: "02-1234-5678" },
        { id: 11, img: "", title: "GONGCHA", categor: "B1F", number: "02-1234-5678" },
        { id: 12, img: "", title: "GONGCHA", categor: "B1F", number: "02-1234-5678" },
    ])

    return (
        <>
            <div className='ab-infor-two'>
                <div className="ab-infor-two__inner">
                    <h3 className='ab-infor-two__title'>{t('about-nav-thre')}</h3>
                    <ul className="ab-infor-two__list">
                        {abInforTwoItems.map(item => (
                            <li className="ab-infor-two__item">
                                <div className="ab-infor-two__img-box">
                                    {/* <img src="https://picsum.photos/250/210" alt="" /> */}
                                </div>

                                <div className="ab-infor-two__desc">
                                    <h4 className='ab-infor-two__desc-title'>{item.title}</h4>
                                    <p className='ab-infor-two__desc-categor'>{item.categor}</p>
                                    <p className='ab-infor-two__desc-number'>{item.number}</p>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </>
    )
}
