import React from 'react'
import "./Login.scss"

export default function Login(props) {
    return (
        <div className='login'>
            <button className='login__btn' style={{ color: props.col === 'white' ? "#fff" : "#8A8A8A" }}>LOGIN</button>
        </div>
    )
}
