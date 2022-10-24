import React from 'react';
import parse from 'html-react-parser';
import "./TheaCurrentRefund.scss";

export default function TheaCurrentRefund() {
    const refundItems = [
        { id: 1, text: '· 예매 마감 시간' },
        { id: 2, text: '- 공연 시간 20분 전(단, 예매 취소 마감 시간부터 공연 당일에는 취소 불가) <br/><br/>' },
        { id: 3, text: '· 예매 취소 마감 시간' },
        { id: 4, text: ' - 공연이 화 ~ 토요일인 경우 전날 오후 5시' },
        { id: 5, text: '- 공연이 일 ~ 월요일인 경우 토요일 오전 11시' },
        { id: 6, text: '- 관람일 전일이 공휴일인 경우 공휴일 전일이 평일이면 오후 5시/토요일, 일요일이면 토요일 오전 11시 - 공휴일에는 예매 취소 불가 <br/><br/>' },
        { id: 7, text: '· 취소 수수료 안내' },
        { id: 8, text: '1. 예매 후 7일 이내: 취소수수료 없음' },
        { id: 9, text: '2. 예매 후 8일 ~ 관람일 10일 전까지 : SMTOWN THEATRE 공연 장당 4,000원 <br/> (단, 티켓 금액의 10% 이내)' },
        { id: 10, text: '3. 관람일 9일 전 ~ 관람일 7일 전까지 : 티켓 금액의 10% 공제 후 환급' },
        { id: 11, text: '4. 관람일 6일 전 ~ 관람일 3일 전까지 : 티켓 금액의 20% 공제 후 환급' },
        { id: 12, text: '5. 관람일 2일 전 ~ 관람일 1일 전까지 : 티켓 금액의 30% 공제 후 환급' },
        { id: 13, text: '6. 예매 취소 마감 시간 ~ 관람 당일 : 취소 불가' },
        { id: 14, text: '7. 예매 당일 24시 이전 취소 시에는 취소수수료가 없으나, 취소 불가 시간에는 취소 불가' },
        { id: 15, text: '8. 예매 후 7일 이내라도 취소 시점이 관람일로부터 10일 이내라면 그에 해당하는 취소 수수료 부과' },
    ]

    return (
        <>
            <div className="thea-item__refund">
                <div className="thea-item__refund-desc">
                    <ul className="thea-item__refund-list">
                        {refundItems.map(item => (
                            <li className="thea-item__refund-item" key={item.id}>
                                <p className="thea-item__refund-text">{parse(item.text)}</p>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </>
    )
}
