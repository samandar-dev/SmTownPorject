import React, { useState } from 'react';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import "./PlayOnlineResModal.scss";

export default function PlayOnlineResModal(props) {
    const [age, setAge] = useState('(AM) 10:00 ~ 11:00');

    const handleChange = (event) => {
        setAge(event.target.value);
    };

    return (
        <>
            {
                <div className="pOnlineModal">
                    <div className="pOnlineModal__backdrop" onClick={() => props.setTodayDayClick(0)}></div>

                    <div className="pOnlineModal__inner">
                        <h3 className="pOnlineModal__title">
                            댄스 스튜디오 <br />{props.item.day} {props.item.dayName} / 6F
                        </h3>

                        <div className="pOnlineModal__media">
                            <img src="https://picsum.photos/708/406" alt="" />
                        </div>

                        <div className="pOnlineModal__select-btn-box">
                            <FormControl fullWidth className='pOnlineModal__select'>
                                <Select
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    onChange={handleChange}
                                    value={age}
                                >
                                    <MenuItem>(AM) 10:00 ~ 11:00</MenuItem>
                                    <MenuItem>(AM) 10:30 ~ 11:30</MenuItem>
                                    <MenuItem>(AM) 11:00 ~ 12:30</MenuItem>
                                </Select>
                            </FormControl>

                            <button className='pOnlineModal__select-btn'>예약</button>
                        </div>
                    </div>
                </div>
            }
        </>
    )
}
