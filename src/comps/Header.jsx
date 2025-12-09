import React from 'react'
import logo from '/images/logo.svg'
import { FaSun } from "react-icons/fa";
import { FaMoon } from "react-icons/fa";
import '../css/Header.css'

function Header({dark, setDark}) {





  return (
    <header>
        <div className="header-wrap">
            <div className="logo">
                <img src={logo}/>
            </div>
            <div className="icons">
              {
                dark ? <FaSun className='FaSun' onClick={()=> setDark(false)}/> : <FaMoon onClick={()=> setDark(true)} /> 
              }
            </div>
        </div>
    </header>
  )
}

export default Header
