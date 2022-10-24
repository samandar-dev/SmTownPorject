import React from 'react'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'
import Slider from 'react-slick'
import smTheatreImg_1 from "../../../assets/images/smTheatre-img-1.png"
import smTheatreImg_2 from "../../../assets/images/smTheatre-img-2.png"
import smTheatreImg_3 from "../../../assets/images/smTheatre-img-3.png"
import smTheatreImg_4 from "../../../assets/images/smTheatre-img-4.png"
import smTheatreSvImg from "../../../assets/images/smTheatre-sv-img.svg"
import "./HomeTheatre.scss"
import parse from 'html-react-parser';

export default function HomeTownTheatre() {
  const smTheatreItems = [
    { id: 1, img: smTheatreImg_2, title: "EXO PLANET #5 EXplOration -", date: '2019.11.23~', categor: 'SV' },
    { id: 2, img: smTheatreImg_1, title: "1st PRESENT", date: '2019.11.23~', categor: 'Film' },
    { id: 3, img: smTheatreImg_4, title: "TAEMIN 2nd CONCERT 'T1001101'", date: '2019.11.23~', categor: 'SV' },
    { id: 4, img: smTheatreImg_3, title: "Surround Viewing", date: '2019.11.23~', categor: 'SV' },
  ]

  const settings = {
    dots: true,
    infinite: false,
    speed: 300,
    initialSlide: 0,
  };

  const { t } = useTranslation()

  return (
    <div className='smTheatre'>
      <div className="smTheatre__inner">
        <p className='smTheatre__name-small'>SMTOWN</p>
        <p className='smTheatre__name-big'>THEATRE</p>

        <div className="container">
          <h3 className="smTheatre__title">{parse(t("theatre-title"))}</h3>

          <div className="smTheatre__slider-box">
            <ul className="smTheatre__slider-list">
              {smTheatreItems.map(item => (
                <li className="smTheatre__slider-item" key={item.id}>
                  <Link to={"/"}>
                    <div className="smTheatre__slider-item-img">
                      <img src={item.img} alt={item.name} />
                    </div>

                    <div className="smTheatre__slider-item-desc">
                      <h4>{item.title}</h4>

                      <div>
                        <button>{item.categor}</button>
                        <p>{item.date}</p>
                      </div>
                    </div>
                  </Link>
                </li>
              ))}
            </ul>

            <Slider className='smTheatre__slider' {...settings}>
              {smTheatreItems.map(item => (
                <li className="smTheatre__slider-item" key={item.id}>
                  <Link to={"/"}>
                    <div className="smTheatre__slider-item-img">
                      <img src={item.img} alt={item.name} />
                    </div>

                    <div className="smTheatre__slider-item-desc">
                      <h4>{item.title}</h4>

                      <div>
                        <button>{item.categor}</button>
                        <p>{item.date}</p>
                      </div>
                    </div>
                  </Link>
                </li>
              ))}
            </Slider>
          </div>
        </div>
      </div>
    </div>
  )
}
