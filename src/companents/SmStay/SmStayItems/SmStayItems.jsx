import React from 'react'
import Slider from 'react-slick'

export default function SmStayItems({ setViewModalAct, setViewItem, item }) {
  const settings = {
    speed: 600,
    infinite: true,
    initialSlide: 0,
  };

  return (
    <>
      <li className="smStay__item" key={item.id}>
        <Slider className='smStay__slider' {...settings}>
          {item.info.map(infoItem => (
            <li className="smStay__item-slider-item" key={infoItem.infoID}>
              <div className="smStay__item-img-box">
                <img src={infoItem.infoImg} alt={infoItem.infoTitle} />

                <div className="smStay__item-descriptions">
                  <div className="smStay__item-desc-bg-color"></div>

                  <div className="smStay__item-desc">
                    <ul className="smStay__item-desc-list">
                      {item.info.map(slidDesc => (
                        <li className="smStay__item-desc-item">
                          <h4 className={`smStay__item-desc-title ${slidDesc.infoID === infoItem.infoID ? "d-block" : ""}`}>{infoItem.infoTitle}</h4>

                          <div className={`smStay__item-desc-line ${slidDesc.infoID === infoItem.infoID ? "d-block" : ""}`}>
                            <span></span>
                          </div>

                          <button
                            className={`smStay__item-desc-btn ${slidDesc.infoID === infoItem.infoID ? "d-block" : ""}`}
                            onClick={() => (setViewItem({ parentID: item.id, chiledID: infoItem.infoID }, setViewModalAct(true)))}
                          >
                            view
                          </button>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </li>
          ))}
        </Slider>
      </li>
    </>
  )
}
