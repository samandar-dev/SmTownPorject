import React from 'react';
import "./TheatreCurrentItem.scss";

export default function TheatreCurrentItem() {
    return (
        <>
            <div className='thea-item'>
                <div className="thea-item__inner">
                    <div className="thea-item__inner">
                        <h3 className="thea-item__title">현재상영작</h3>

                        <div className="thea-item__hero">
                            <div className="thea-item__hero-img">
                                <img src="" alt="" />
                            </div>

                            <div className="thea-item__hero-desc">
                                <button className="thea-item__hero-desc-categor">SV (Surround Viewing)</button>

                                <h4 className="thea-item__hero-desc-title">[SV] EXO PLANET #5 - ExplOration - </h4>

                                <ul className="thea-item__hero-desc-list">
                                    <li className="thea-item__hero-desc-item">

                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
