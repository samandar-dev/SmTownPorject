import React, { useEffect, useRef } from 'react'
import Slider from "react-slick";
import { Link } from 'react-router-dom'
import smMuseumImg_1 from "../../../assets/images/smMuseum-img-1.png"
import smMuseumImg_2 from "../../../assets/images/smMuseum-img-2.png"
import smMuseumImg_3 from "../../../assets/images/smMuseum-img-3.png"
import smMuseumImg_4 from "../../../assets/images/smMuseum-img-4.png"
import "./HomeMuseum.scss"
import parse from 'html-react-parser';
import { useTranslation } from 'react-i18next';

export default function HomeMuseum() {
  const smMuseumItems = [
    { id: 1, img: smMuseumImg_1, title: "Concert hall" },
    { id: 2, img: smMuseumImg_4, title: "Dance, Sound Lab" },
    { id: 3, img: smMuseumImg_3, title: "Digital Archive" },
    { id: 4, img: smMuseumImg_2, title: "Concert hall" },
  ]
  const { t } = useTranslation()

  const settings = {
    // dots: true,
    infinite: false,
    speed: 300,
    initialSlide: 0,
  };

  return (
    <div className='smMuseum'>
      <div className="container">
        <div className="smMuseum__desc">
          <h3 className='smMuseum__title-one'>{parse(t("museum-title"))}</h3>

          <h3 className='smMuseum__title-two'>
            찬란한 무대의 시작 전, <br /> SM 아티스트들의 무대 뒤 활동을 직접 체험해보세요!
          </h3>

          <p className='smMuseum__tit'>BEYOND THE STAGE</p>

          <div className="smMuseum__name-box">
            <p className="smMuseum__name-small">SMTOWN</p>
            <p className='smMuseum__name-big'>MUSEUM</p>
          </div>
        </div>
      </div>

      <div className="smMuseum__slider-box">
        {/* <ul className="smMuseum__slider-list"> */}
        <Slider className="smMuseum__slider" {...settings}>
          {smMuseumItems.map(item => (
            <li className="smMuseum__slider-item" key={item.id}>
              <Link to={"/"}>
                <div className="smMuseum__slider-img-box">
                  <img src={item.img} alt="" />
                </div>

                <p className='smMuseum__slider-item-title'>{item.title}</p>
              </Link>
            </li>
          ))}
        </Slider>
        {/* </ul> */}
      </div>
    </div>
  )
}
