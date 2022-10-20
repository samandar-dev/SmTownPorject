import React from 'react';
import "./AboutInformationItem.scss";

export default function AboutInformationItem() {
    return (
        <>
            <div className='ab-infor-item'>
                <div className="ab-infor-item__inner">
                    <h3 className='ab-infor-item__title'>입점매장</h3>
                    <div className="ab-infor-item__content">
                        <div className="ab-infor-item__left-img-box">
                            {/* <img src="" alt="" /> */}
                        </div>

                        <div className="ab-infor-item__right-desc">
                            <h4 className="ab-infor-item__right-title">GONGCHA</h4>

                            <table className='ab-infor-item__right-table'>
                                <tr className='ab-infor-item__right-tr'>
                                    <div>
                                        <td className='ab-infor-item__right-item-name'>매장위치</td>
                                    </div>
                                    <div>
                                        <td className='ab-infor-item__right-item-text'>B1F</td>
                                    </div>
                                </tr>
                                <tr className='ab-infor-item__right-tr'>
                                    <div>
                                        <td className='ab-infor-item__right-item-name'>영업시간</td>
                                    </div>
                                    <div>
                                        <td className='ab-infor-item__right-item-text'>11:00-25:00</td>
                                    </div>
                                </tr>
                                <tr className='ab-infor-item__right-tr'>
                                    <div>
                                        <td className='ab-infor-item__right-item-name'>연락처</td>
                                    </div>
                                    <div>
                                        <td className='ab-infor-item__right-item-text'>051-520-3678</td>
                                    </div>
                                </tr>
                            </table>

                            <p className='ab-infor-item__right-text'>
                                샤브샤브&샐러드바 948키친이 새롭게 오픈하였습니다. <br /><br />
                                합리적인 가격으로 일본 샤브샤브, 태국 수끼를 한국의 입맛에 맞춰 개발하고 다양한 샐러드바를 함께 운영하는 어반스타일 웰빙 푸드 948키친에 많은 <br />관심과 이용 부탁드립니다.<br /><br />
                                특급호텔식 40여가지의 샐러드와 웰빙컨셉의 샤브샤브의 만남!<br /><br />
                                2013년 6월 국내 최초 웰빙푸드 중심의 고급 샤브샤브&샐러드바를 모토로 출범한 948Kitchen은 가족, 연인, 친구 누구와도 함께 즐길 수 있는 <br />메뉴로 만든 새로운 스타일의 고급 패밀리 레스토랑입니다.
                            </p>
                        </div>
                    </div>

                    <div className="ab-infor-item__btn-box">
                        <button className="ab-infor-item__btn">목록</button>
                    </div>
                </div>
            </div>
        </>
    )
}
