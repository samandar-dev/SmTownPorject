import React from 'react'
import "./ViewModal.scss"
import { IoIosRemoveCircleOutline } from 'react-icons/io';

export default function ViewModal({
  stayItems,
  viewItem,
  viewModalAct,
  setViewModalAct,
}) {
  return (
    <>
      <div className={`view-modal ${viewModalAct ? "viewMOdalAct" : ""}`}>
        <div className="view-modal__remov-box" onClick={() => setViewModalAct(false)}></div>

        <button className="view-modal__remov-btn"
          onClick={() => setViewModalAct(false)}
        >
          <IoIosRemoveCircleOutline />
        </button>

        <div className="view-modal__content">
          {stayItems.map(item => (
            item.id === viewItem.parentID ?
              item.info.map(infoItem => (
                infoItem.infoID === viewItem.chiledID ?
                  <img src={infoItem.infoImg} alt="" />
                  : ""
              ))
              : ""
          ))}
        </div>
      </div>
    </>
  )
}
