import parse from 'html-react-parser';
import React from 'react'
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import SmPlayImg_1 from '../../assets/images/smPlay-img-1.png';
import SmPlayImg_2 from '../../assets/images/smPlay-img-2.png';
import SmPlayImg_3 from '../../assets/images/smPlay-img-3.png';
import SmPlayImg_4 from '../../assets/images/smPlay-img-4.png';
import SmPlayImg_5 from '../../assets/images/smPlay-img-5.png';
import SmPlayImg_6 from '../../assets/images/smPlay-img-6.png';
import "./SmPlayground.scss"

export default function SmPlayground() {
    const smPLayItems = [
        { id: 1, img: "", title: "" },
        { id: 2, img: SmPlayImg_1, title: "Everyshing Studio" },
        { id: 3, img: SmPlayImg_2, title: "Everything Corner" },
        { id: 4, img: SmPlayImg_3, title: "Dance Studio" },
        { id: 5, img: "", title: "" },
        { id: 6, img: "", title: "" },
        { id: 7, img: SmPlayImg_4, title: "Band Studio" },
        { id: 8, img: "", title: "DREAM SPARK" },
        { id: 9, img: SmPlayImg_5, title: "Creators Lab" },
        { id: 10, img: "", title: "" },
        { id: 11, img: "", title: "" },
        { id: 12, img: "", title: "" },
        { id: 13, img: SmPlayImg_6, title: "K-Beauty & Fashion zone" },
        { id: 14, img: "", title: "" },
        { id: 15, img: "", title: "" },
    ]

    const settings = {
        dots: true,
        speed: 300,
        infinite: true,
        initialSlide: 0,
    };

    const {t} = useTranslation()

    return (
        <>
            <div className='smPlay'>
                <h3 className='smPlay__title-one'>{parse(t("playground-title"))}</h3>

                <h3 className='smPlay__title-two'>
                    누구나 마음껏 뛰놀고, 즐기고, 노래하는 <br /> <span>SM PLAYGROUND</span>
                </h3>

                <div className="smPlay__name-box">
                    <p className='smPlay__name-big'>THE PLAYGROUND K-POP</p>
                </div>

                <div className="smPlay__slider-box">
                    <ul className="smPlay__slider-list">
                        {smPLayItems.map(item => (
                            <li className="smPlay__slider-item" key={item.id}>
                                <Link to={"/"}>
                                    <div className="smPlay__slider-item-img-box">
                                        {item.img !== "" ? <img src={item.img} alt="" /> : ""}
                                        <p className="smPlay__slider-item-title">{item.title}</p>
                                    </div>
                                </Link>
                            </li>
                        ))}
                    </ul>

                    <Slider className='smPlay__slider' {...settings}>
                        {smPLayItems.map(item => (
                            item.img !== "" ?
                                <li className="smPlay__slider-item" key={item.id}>
                                    <Link to={"/"}>
                                        <div className="smPlay__slider-item-img-box">
                                            <img src={item.img} alt="" />
                                            <p className="smPlay__slider-item-title">{item.title}</p>
                                        </div>
                                    </Link>
                                </li> : ""
                        ))}
                    </Slider>
                </div>
            </div>
        </>
    )
}
