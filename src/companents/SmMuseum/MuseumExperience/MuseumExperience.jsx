import React from 'react';
import parse from 'html-react-parser';
import "./MuseumExperience.scss";

export default function MuseumExperience() {
  const museumExperienceItem = [
    {
      id: 1,
      title: "Dance, Sound Lab",
      text: "아티스트의 춤과 노래를 함께 따라해보고,<br/> 콘텐츠 제작과정을 볼 수 있는 공간",
      img: "https://picsum.photos/630/190"
    },
    {
      id: 2,
      title: "Backstage corridor",
      text: "SM 아티스트의 소품, 의상을 직접 입어보고 <br/> 백스테이지를 경험해 볼 수 있는 공간",
      img: "https://picsum.photos/630/190"
    },
    {
      id: 3,
      title: "Concert hall",
      text: "SM의 화려한 무대를 <br/> 대형 스크린으로 관람할 수 있는 휴게 공간",
      img: "https://picsum.photos/630/190"
    },
    {
      id: 4,
      title: "Digital Archive",
      text: "모든 SM 아티스트의 앨범을 찾아보고,<br/> 들어볼 수 있는 디지털 아카이브 공간",
      img: "https://picsum.photos/630/190"
    },
    {
      id: 5,
      title: "Artist zone",
      text: "각 아티스트의 소품, 비하인드 스토리, 세계관 등을 <br/> 엿볼 수 있는 미니 전시",
      img: "https://picsum.photos/630/190"
    },
    {
      id: 6,
      title: "Special Exhibition",
      text: "어디에서도 볼 수 없었던 <br/> 아티스트들의 미공개 모습이 담긴 특별 전시",
      img: "https://picsum.photos/630/190"
    },
  ]

  return (
    <>
      <div className="mExperent">
        <h3 className="mExperent__title">체험프로그램</h3>

        <ul className="mExperent__list">
          {museumExperienceItem.map(item => (
            <li className="mExperent__item">
              <div className="mExperent__item-box">
                <div className="mExperent__item-img-box">
                  <img src={item.img} alt={item.title} />
                </div>

                <div className="mExperent__item-desc">
                  <div className="mExperent__item-title-text">
                    <h4 className="mExperent__item-title">{item.title}</h4>
                    <p className="mExperent__item-text">{parse(item.text)}</p>
                  </div>

                  <div className="mExperent__item-btn-box">
                    <button className="mExperent__item-btn">예약</button>
                  </div>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </>
  )
}
