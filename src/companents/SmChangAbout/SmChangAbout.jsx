import React from 'react';
import Navbar from '../Navbar/Navbar';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import "./SmChangAbout.scss"

export default function SmChangAbout() {
  const { t } = useTranslation()
  const aboutNav = [
    { id: 1, title: t("about-nav-one") },
    { id: 2, title: t("about-nav-two") },
    { id: 3, title: t("about-nav-thre") },
    { id: 4, title: t("about-nav-four") },
  ]

  return (
    <>
      <div className='smAbout'>
        <div className="container">
          <Navbar col="white" />

          <div className="smAbout__inner">
            <div className="smAbout__nav">
              <ul className="smAbout__nav-list">
                {aboutNav.map(item => (
                  <li className="smAbout__nav-item" key={item.id}>
                    <Link to={"/"}>{item.title}</Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
