import React from 'react'
import "./TheatreCurrentNotice.scss"

export default function TheatreCurrentNotice() {
    const noticeItem = [
        { id: 1, text: '· 2019년 7월 14일 상영 첫 날에 한하여, 서라운드뷰잉 전용(일회용) 야광봉을 무료로 증정해 드립니다.' },
        { id: 2, text: ' · 2019년 7월 14일 서라운드뷰잉 상영 시, 홍보영상 및 사진 촬영이 예정되어있습니다.' },
        { id: 3, text: '· 해당 공연은 신규 공연으로 할인이벤트에 포함되지 않습니다.' },
        { id: 4, text: '· 1인 4매까지만 예매가 가능하며, 예매 티켓은 당일 현장에서 수령합니다.' },
        { id: 5, text: '· SMTOWN THEATRE 5층 GIFT SHOP에서 공연 오피셜 굿즈를 판매합니다.' },
        { id: 6, text: '· 8세 미만의 미취학 아동은 입장이 불가하오니 양해 부탁드립니다.' },
        { id: 7, text: ' · 이와 관련하여 당일 현장 취소, 변경 및 환불은 불가하오니, 예매 시 유의해 주십시오.' },
        { id: 8, text: ' · 예매 티켓 수령 및 현장 구매는 공연 시작 1시간 전부터 가능하며, 예매 티켓 수령 시 예매내역 및 신분증을 제시해주셔야 합니다.' },
        { id: 9, text: ' · 본인의 이름으로 예매하셔야 하며, 본인이 아닐 경우 티켓 수령 및 입장이 불가능합니다.' },
        { id: 10, text: '· 무료초대권으로 공연 예매 시, 티켓박스에 초대권을 제출하셔야 티켓을 수령하실 수 있습니다.' },
        { id: 11, text: '· 공연 당일에는 티켓의 취소, 환불, 변경이 불가합니다.' },
        { id: 12, text: '· 쾌적한 관람을 위해 행사 진행 중 휴대전화 사용은 삼가주시기 바랍니다.' },
        { id: 13, text: '· 공연장 안에 반입 가능한 음식물은 뚜껑이 있는 생수만 가능합니다.' },
        { id: 14, text: ' · 휠체어를 이용하시는 관객께서는 고객센터(1670-6330)를 통해 예매해 주시기 바랍니다.' },
        { id: 15, text: '· 꽃, 화환, 쌀 화환 등은 받지 않습니다. 마음만 소중히, 감사하게 받겠습니다.' },
        { id: 16, text: ' · 공연장에 화환이 도착 할 경우 반송할 예정이오니, 양해 부탁 드립니다.' },
        { id: 17, text: '· 사전 협의되지 않은 사진촬영, 영상녹화 및 녹음은 절대 불가합니다.' },
        { id: 18, text: '· 발각 시 압수 퇴장 조치 당할 수 있습니다.' },
        { id: 19, text: '· 개인 거래 등을 통한 티켓 구입으로 인한 피해 발생 시 그 피해는 전적으로 거래 당사자에게 있으며, SMTOWN THEATRE에는 책임이 없습니다.' },
        { id: 20, text: '· 티켓 분실 시 재발행 되지 않으며, 그 어떠한 사유로도 티켓이 없을 시에는 입장이 불가합니다.' },
        { id: 21, text: '· 티켓 분실 시 절대 입장 불가하오니 티켓 관리에 주의해 주시기 바랍니다.' },
        { id: 22, text: '· 개인용 야광봉은 공연장 내 빛반사로 인해 타 고객에게 불편을 끼칠 수 있으므로 사용을 제한합니다.' },
    ]

    return (
        <>
            <div className="thea-item__notice">
                <div className="thea-item__notice-desc">
                    <ul className="thea-item__notice-list">
                        {noticeItem.map(item => (
                            <li className="thea-item__notice-item" key={item.id}>
                                <p className="thea-item__notice-text">{item.text}</p>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </>
    )
}
