import React from 'react';
import "./ThePlayground.scss";

export default function ThePlayground() {
    return (
        <>
            <div className="thePlay">
                <div className="thePlay__inner">
                    <h3 className="thePlay__title">THE PLAYGROUND K-POP</h3>

                    <div className="thePlay__hero">
                        <div className="thePlay__hero-info">
                            <div className="thePlay__hero-desc">
                                <p className='thePlay__hero-desc-tit'>thePlay</p>

                                <h4 className='thePlay__hero-desc-title'>
                                    음악에서 문화로, 전 세계로 뻗어 나가는 <br />
                                    K-POP 문화를 한눈에 만나볼 수 있는 체험형 전시공간
                                </h4>
                            </div>
                        </div>
                    </div>

                    <div className="thePlay__main">
                        <div className="thePlay__main-info">
                            <div className="thePlay__main-title-box">
                                <button className="thePlay__main-hands-on-type">hands-on type</button>
                                <h4 className="thePlay__main-item-title">
                                    SMTOWN 창원 뮤지엄은 <br />
                                    서울 코엑스 뮤지엄에서 아티스트 백스테이지 파트를 강화하여,<br />
                                    스테이지를 둘러싸고 아티스트들이 직접 체험했던 것들을 관객들도 경험하게 하는 체험형 전시입니다.<br />
                                    더불어 디지털 아카이브와 브랜드 히스토리를 통해서<br />
                                    그동안 SM의 방대한 이야기를 다양한 시청각을 통해 다채롭게 감상할 수 있습니다.
                                </h4>
                            </div>
                        </div>

                        <div className="thePlay__main-items-box">
                            <ul className="thePlay__main-list">
                                <li className="thePlay__main-item">
                                    <div className="thePlay__main-item-img-box">
                                        {/* <img src="" alt="" /> */}
                                    </div>

                                    <div className="thePlay__main-item-desc">
                                        <h4 className="thePlay__main-item-title">Beyond The Stage</h4>

                                        <p className="thePlay__main-item-text">
                                            찬란한 무대의 시작 전, <br />
                                            SM 아티스트들의 무대 뒤 활동을 직접 체험해보세요! <br />
                                            무대 의상을 입어보고, 같이 춤 춰보고, 음악 듣고, 사진 찍고! <br />
                                            SM 아티스트와 함께 백스테이지에서 온스테이지까지의 여정을 떠나봅니다
                                        </p>
                                    </div>
                                </li>

                                <li className="thePlay__main-item">
                                    <div className="thePlay__main-item-img-box">
                                        {/* <img src="" alt="" /> */}
                                    </div>

                                    <div className="thePlay__main-item-desc">
                                        <h4 className="thePlay__main-item-title">Hidden story </h4>

                                        <p className="thePlay__main-item-text">
                                            데뷔 순간부터 현재까지의 빛나는 모습들이 담긴 미공개 포토와 영상!<br />
                                            진짜배기 팬만이 알아챌 수 있는 히든 미션&스토리까지!<br />
                                            오직 SMTOWN 창원에서만 만날 수 있습니다.
                                        </p>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
