import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import "./AboutStore.scss"

export default function AboutStore(props) {
  const { t } = useTranslation()

  return (
    <>
      <div className='ab-infor-two'>
        <div className="ab-infor-two__inner">
          <h3 className='ab-infor-two__title'>{t('about-nav-thre')}</h3>
          <ul className="ab-infor-two__list">
            {props.abInforTwoItems.map(item => (
              <Link to={`/about3item/${item.id}`}>
                <li className="ab-infor-two__item">
                  <div className="ab-infor-two__img-box">
                    <img src="https://picsum.photos/250/210" alt="" />
                  </div>

                  <div className="ab-infor-two__desc">
                    <h4 className='ab-infor-two__desc-title'>{item.title}</h4>
                    <p className='ab-infor-two__desc-categor'>{item.categor}</p>
                    <p className='ab-infor-two__desc-number'>{item.number}</p>
                  </div>
                </li>
              </Link>
            ))}
          </ul>
        </div>
      </div>
    </>
  )
}
