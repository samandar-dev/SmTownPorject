import React from 'react'
import "./AboutWayToCom.scss"

export default function AboutWayToCom() {
    return (
        <>
            <div className='ab-waytocom'>
                <div className="ab-waytocom__inner">
                    <h3 className='ab-waytocom__title'>오시는길</h3>

                    <div className="ab-waytocom__content">
                        <div className="ab-waytocom__meta">
                            <iframe src="https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d369371.6849317668!2d-106.014528!3d43.67487!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sru!2sus!4v1666243624615!5m2!1sru!2sus" width="1272" height="528"></iframe>
                        </div>

                        {/* <div className="ab-waytocom__tables">
                            <table className='ab-waytocom__content-table-one'>
                                <tr className='ab-waytocom__content-tr'>
                                    <td className='ab-waytocom__content-td'>
                                        <p className='ab-waytocom__contetn-text'>주소</p>
                                    </td>
                                </tr>
                                <tr>
                                    <td className='ab-waytocom__content-td'>
                                        <p className='ab-waytocom__contetn-text'>전화번호</p>
                                    </td>
                                </tr>
                                <tr className='ab-waytocom__content-tr'>
                                    <td className='ab-waytocom__content-td'>
                                        <p className='ab-waytocom__contetn-text'>교통안내</p>
                                    </td>
                                </tr>
                            </table>
                            <table className='ab-waytocom__content-table-two'>
                                <tr className='ab-waytocom__content-tr'>
                                    <div className='ab-waytocom__content-text'>
                                        <td>055-288-1058</td>
                                    </div>
                                </tr>
                                <tr className='ab-waytocom__content-tr'>
                                    <div className='ab-waytocom__content-name-box'>
                                        <td>교통안내</td>
                                    </div>
                                    <div className='ab-waytocom__content-text'>
                                        <ul className='ab-waytocom__content-text-list'>
                                            <li className='ab-waytocom__content-text-item'>
                                                <p className='ab-waytocom__content-text-tit'>창원종합터미널 (118815)</p>
                                                <p className='ab-waytocom__content-text-number'>101 | 103 | 103 | 108 | 110 | 111 | 115 | 151</p>
                                            </li>
                                            <li className='ab-waytocom__content-text-item'>
                                                <p className='ab-waytocom__content-text-tit'>창원종합터미널 (118816)</p>
                                                <p className='ab-waytocom__content-text-number'>101 | 103 | 106 | 108 | 110 | 111 | 115</p>
                                            </li>
                                            <li className='ab-waytocom__content-text-item'>
                                                <p className='ab-waytocom__content-text-tit'>종합터미널 (2402)</p>
                                                <p className='ab-waytocom__content-text-number'>58 | 58A</p>
                                            </li>
                                            <li className='ab-waytocom__content-text-item'>
                                                <p className='ab-waytocom__content-text-tit'>종합터미널 (2403)</p>
                                                <p className='ab-waytocom__content-text-number'>151 | 59 | 59A</p>
                                            </li>
                                        </ul>
                                    </div>
                                </tr>
                            </table>
                        </div> */}

                        <div className="ab-waytocom__lists">
                            <ul className="ab-waytocom__list ab-waytocom__list-one">
                                <li className="ab-waytocom__item">
                                    <p className='ab-waytocom__item-name'>주소</p>
                                </li>
                                <li className="ab-waytocom__item">
                                    <p className='ab-waytocom__item-name'>전화번호</p>
                                </li>
                                <li className="ab-waytocom__item">
                                    <p className='ab-waytocom__item-name'>교통안내</p>
                                </li>
                            </ul>
                            <ul className="ab-waytocom__list ab-waytocom__list-two">
                                <li className="ab-waytocom__item">
                                    <p className='ab-waytocom__item-name'>경상남도 창원시 의창구 팔용동 35-7</p>
                                </li>
                                <li className="ab-waytocom__item">
                                    <p className='ab-waytocom__item-name'>055-288-1058</p>
                                </li>
                                <li className="ab-waytocom__item">
                                    <ul className="ab-waytocom__item-list">
                                        <li className="ab-waytocom__item-two">
                                            <p className="ab-waytocom__item-text">창원종합터미널 (118815)</p>
                                            <p className="ab-waytocom__item-number">101 | 103 | 103 | 108 | 110 | 111 | 115 | 151</p>
                                        </li>
                                        <li className="ab-waytocom__item-two">
                                            <p className="ab-waytocom__item-text">창원종합터미널 (118816)</p>
                                            <p className="abwaytocom__item-number">101 | 103 | 106 | 108 | 110 | 111 | 115</p>
                                        </li>
                                        <li className="ab-waytocom__item-two">
                                            <p className="ab-waytocom__item-text">종합터미널 (2402)</p>
                                            <p className="abwaytocom__item-number">58 | 58A</p>
                                        </li>
                                        <li className="ab-waytocom__item-two">
                                            <p className="ab-waytocom__item-text">종합터미널 (2403)</p>
                                            <p className="abwaytocom__item-number">151 | 59 | 59A</p>
                                        </li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
