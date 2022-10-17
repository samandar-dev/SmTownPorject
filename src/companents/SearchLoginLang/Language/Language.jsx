import React, { useEffect, useState } from 'react'
import i18n from '../../../lang/i18n'
import "./Language.scss"

export default function Language() {
    const [lang, setLang] = useState(localStorage.getItem('language') != undefined ? localStorage.getItem('language') : 'kor')

    const changedLanguage = (e) => {
        localStorage.setItem('language', e.target.value)
        i18n.changeLanguage(localStorage.getItem('language'))
    }

    return (
        <div className='lang'>
            <select className='lang__select' onChange={changedLanguage}>
                {lang === 'kor' ?
                    <>
                        <option value="kor">KOR</option>
                        <option value="eng">ENG</option>
                        <option value="rus">RUS</option>
                    </>
                    : lang === 'eng' ?
                        <>
                            <option value="eng">ENG</option>
                            <option value="kor">KOR</option>
                            <option value="rus">RUS</option>
                        </>
                        : lang === 'rus' ?
                            <>
                                <option value="rus">RUS</option>
                                <option value="kor">KOR</option>
                                <option value="eng">ENG</option>
                            </>
                            : ""}
            </select>
        </div>
    )
}
