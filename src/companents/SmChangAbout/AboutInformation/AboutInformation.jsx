import React from 'react';
import { useTranslation } from 'react-i18next';
import "./AboutInformation.scss";

export default function AboutInformation() {
    const { t } = useTranslation()

    const aboutInforTable = [
        { id: 1, title: "공차", num: "02-1234-5678" },
        { id: 2, title: "공차", num: "02-1234-5678" },
        { id: 3, title: "공차", num: "02-1234-5678" },
        { id: 4, title: "공차", num: "02-1234-5678" },
    ]

    const aboutInforItems = [
        { id: 1, categor: 'R.T', text: "Sound Garden" },
        { id: 2, categor: '8F', text: "Sound Garden" },
        { id: 3, categor: '7F', text: "Hotel&Convention" },
        { id: 4, categor: '6F', text: "Audition Flatform" },
        { id: 5, categor: '5F', text: "Atraction Site" },
        { id: 6, categor: '4F', text: "Theatre" },
        { id: 7, categor: '3F', text: "Museum&Restaurant" },
        { id: 8, categor: '2F', text: "Goods Store" },
        { id: 9, categor: '1F', text: "Book Forest Cafe" },
        { id: 10, categor: 'B1F', text: "Retail/F&B" },
    ]

    return (
        <>
            <div className='about-infor'>
                <div className="about-infor__inner">
                    <h3 className="about-infor__title">{t("about-nav-two")}</h3>

                    <div className="about-infor__main">
                        <div className="about-infor__left">
                            <table className='about-infor__left-table'>
                                {aboutInforItems.map(item => (
                                    <tr className='about-infor__left-table-tr' key={item.id}>
                                        <td className='about-infor__left-table-td'>
                                            <div className='about-infor__left-table-categor'>
                                                <p>{item.categor}</p>
                                            </div>
                                        </td>
                                        <td className='about-infor__left-table-td'>
                                            <div className='about-infor__left-table-name'>
                                                <p>{item.text}</p>
                                            </div>
                                        </td>
                                    </tr>
                                ))}
                            </table>
                        </div>

                        <div className="about-infor__right">
                            <h4 className="about-infor__right-title">B1F Retail/F&B</h4>

                            <div className="about-infor__right-img-box">
                                <img src="" alt="" />
                            </div>

                            <div className="about-infor__right-desc">
                                <table className='about-infor__right-table'>
                                    {aboutInforTable.map(item => (
                                        <tr className='about-infor__right-table-tr' key={item.id}>
                                            <td className='about-infor__right-table-td'>{item.title}</td>
                                            <td className='about-infor__right-table-td'>{item.num}</td>
                                        </tr>
                                    ))}
                                </table>
                                <table className='about-infor__right-table'>
                                    {aboutInforTable.map(item => (
                                        <tr className='about-infor__right-table-tr' key={item.id}>
                                            <td className='about-infor__right-table-td'>{item.title}</td>
                                            <td className='about-infor__right-table-td'>{item.num}</td>
                                        </tr>
                                    ))}
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
