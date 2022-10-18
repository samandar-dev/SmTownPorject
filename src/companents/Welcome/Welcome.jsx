import React from 'react'
import Typed from "typed.js";
import { useEffect, useRef } from "react";
import Logo from '../../assets/images/Logo.svg'
import "./Welcome.scss"

export default function Welcome({ title }) {
  const el = useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: [title],
      startDelay: 100,
      typeSpeed: 80,
      backSpeed: 100,
      backDelay: 100
    });

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <>
      <div className="welcome">
        <div className="welcome__logo-box">
          <img src={Logo} alt="site logo" />
        </div>

        <div className="welcome__title-box">
          <h1 className='welcome__title' ref={el}></h1>
        </div>
      </div>
    </>
  )
}
