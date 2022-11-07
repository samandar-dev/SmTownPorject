import React from 'react';
import { useTranslation } from 'react-i18next';
import "./AboutIntroduce.scss";

export default function AboutIntroduce() {
  const { t } = useTranslation()

  return (
    <>
      <div className='about-introduce'>
        <div className="about-introduce__inner">
          <div className="about-introduce__hero">
            <div className="about-introduce__hero-desc">
              <h3 className="about-introduce__title">ABOUT</h3>
              <p className='about-introduce__text'>SMTOWN CHANGWON</p>
            </div>
            <span></span>
            <span></span>
          </div>

          <div className="container">
            <div className="about-introduce__content">
              <div className="about-introduce__desc">
                <h4 className='about-introduce__desc-title'>꿈이 실현되는 곳 SMTOWN 창원으로 여러분을 초대합니다.</h4><br /><br />

                <p className='about-introduce__desc-text'>2020년 7월, 문화 관광 도시 창원에<br />
                  K-Pop, K-Contents, K-Culture 시설이 오픈합니다.<br /><br />

                  대한민국 대표 엔터테인먼트사의 문화 공간이 아닌,<br />
                  K-POP 전체를 아우르는 국내 최고의 문화 복합시설
                  SMTOWN 창원.<br /><br />

                  서울 SMTOWN COEX ARTIUM보다 2배 이상 큰 규모의<br />
                  지금까지 창원에 없었던 새롭고 트렌디한 문화 앵커 공간.<br />
                  국내 최대 엔터테인먼트사 SM에서 선보이는 체험형 한류 문화 공간.<br />
                  국내외 관광객이 자연스럽게 즐기고 소비하는 생활형 라이프 스타일 공간.<br /><br />

                  SMTOWN 창원이 여러분들의 꿈을 함께 응원하겠습니다.
                </p>
              </div>

              <div className="about-introduce__img">
                <img src="https://picsum.photos/600/400" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
