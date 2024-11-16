import React from 'react'
import "../stayle/header.css"
import header from "../img/header_logo.png"
function Header() {
  return (
    <header className='header'>
    <div className="container">
        <div className="header_wrapper">
            <div className="header_w1">
    <img src={header} alt="" />
            </div>
            <div className="header_w2">
                <ul>
                    <li>Why Alivio</li>
                    <li>Solutions</li>
                    <li>Community</li>
                    <li>Pricing</li>
                </ul>
            </div>
            <div className="header_w3">
                <span>Sign in</span>
                <button>Start Trial</button>
            </div>
        </div>
    </div>
        </header>
  )
}

export default Header
