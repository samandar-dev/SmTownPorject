import React from 'react';
import Slider from 'react-slick';
import { Link } from 'react-router-dom';
import { ImPhone } from 'react-icons/im';
import StaySearch from '../StaySearch/StaySearch';
import "./StayConvention.scss";

export default function StayConvention(props) {
    const settings = {
        speed: 300,
        infinite: true,
        initialSlide: 1,
    };

    return (
        <>
            <div className="sConvention">
                <div className="sConvention__inner">
                    <StaySearch />

                    <div className="sConvention__main">
                        <div className="stayRoom__main-phone-box">
                            <div className="stayRoom__phone">
                                <a href="tel:055-288-1058">
                                    <span><ImPhone /></span>055-288-1058
                                </a>
                            </div>
                        </div>
                        
                        <ul className="stayRoom__main-list">
                            {props.roomObj.map(item => (
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
                                        <h4 className="stayRoom__main-item-desc-title">{item.title}</h4>
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
                                            <Link to={`/smstay1/${item.id}`}>
                                                <button>Detail</button>
                                            </Link>
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
