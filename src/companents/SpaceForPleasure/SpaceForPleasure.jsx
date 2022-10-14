import React from 'react'
import { Link } from 'react-router-dom'
import Slider from 'react-slick'
import spaceImg from "../../assets/images/space-img.png"
import spaceLogo_1 from "../../assets/images/space-logo-1.png"
import spaceLogo_2 from "../../assets/images/space-logo-2.png"
import spaceLogo_3 from "../../assets/images/space-logo-3.png"
import spaceLogo_4 from "../../assets/images/space-logo-4.png"
import spaceLogo_5 from "../../assets/images/space-logo-5.png"
import spaceLogo_6 from "../../assets/images/space-logo-6.png"
import spaceLogo_7 from "../../assets/images/space-logo-7.png"
import spaceLogo_8 from "../../assets/images/space-logo-8.png"
import "./SpaceForPleasure.scss"

export default function SpaceForPleasure() {
    const settings = {
        speed: 300,
    }

    

    return (
        <div className='space'>
            <p className="space__name-big">SPACE FOR PLEASURE</p>

            <div className="space__inner">
                <div className="space__top-list-box">
                    <ul className="space__top-list">
                        <li className="space__top-item spaceItemAct">
                            <Link to={'/'}>
                                <p className='space__top-title'>F&B</p>
                            </Link>
                        </li>
                        <li className="space__top-item">
                            <Link to={'/'}>
                                <p className='space__top-title'>Retail</p>
                            </Link>
                        </li>
                        <li className="space__top-item">
                            <Link to={'/'}>
                                <p className='space__top-title'>Book Cafe</p>
                            </Link>
                        </li>
                        <li className="space__top-item">
                            <Link to={'/'}>
                                <p className='space__top-title'>Goods Store</p>
                            </Link>
                        </li>
                        <li className="space__top-item">
                            <Link to={'/'}>
                                <p className='space__top-title'>Restaurant</p>
                            </Link>
                        </li>
                        <li className="space__top-item">
                            <Link to={'/'}>
                                <p className='space__top-title'>Attraction</p>
                            </Link>
                        </li>
                        <li className="space__top-item">
                            <Link to={'/'}>
                                <p className='space__top-title'>Sound Garden</p>
                            </Link>
                        </li>
                    </ul>
                </div>

                <div className="space__desc-img-box">
                    <div className="space__desc">
                        <h3 className="space__desc-title">프리미엄 외식공간</h3>
                        <p className='space__desc-link'>Premium Dining Out Place</p>

                        <p className="space__desc-text">
                            국내 1호 매장인 텍사스데브라질, 데블스도어와 모던눌랑, YG리퍼블릭 등 다양한
                            글로벌 외식 브랜드들을 넓은 공간에서 여유있게 만끽하시기 바랍니다.
                        </p>

                        <div className="space__desc-logo-box">
                            <ul className="space__desc-logo-list">
                                <li className="space__desc-logo-item">
                                    <img src={spaceLogo_1} alt="" />
                                </li>
                                <li className="space__desc-logo-item">
                                    <img src={spaceLogo_2} alt="" />
                                </li>
                                <li className="space__desc-logo-item">
                                    <img src={spaceLogo_8} alt="" />
                                </li>
                                <li className="space__desc-logo-item">
                                    <img src={spaceLogo_4} alt="" />
                                </li>
                                <li className="space__desc-logo-item">
                                    <img src={spaceLogo_5} alt="" />
                                </li>
                                <li className="space__desc-logo-item">
                                    <img src={spaceLogo_3} alt="" />
                                </li>
                                <li className="space__desc-logo-item">
                                    <img src={spaceLogo_6} alt="" />
                                </li>
                                <li className="space__desc-logo-item">
                                    <img src={spaceLogo_7} alt="" />
                                </li>
                            </ul>

                            <Slider {...settings}>

                            </Slider>
                        </div>
                    </div>

                    <div className="space__img">
                        <img src={spaceImg} alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}
