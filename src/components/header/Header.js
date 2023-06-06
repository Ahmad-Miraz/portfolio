import React from 'react'
import CTA from './CTA'
import './Header.css'
import ME from '../../images/fullPic.png'
import HeaderSocials from './HeaderSocials'

const Header = () => {
  return (
    <header id='home'>
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1>Md Miraj Hossain</h1>
        <h5 style={{color:"var(--color-primary)"}}>React.js Developer</h5>
        <CTA />
        <HeaderSocials />

        <div className="me">
          <img src={ME} alt="me" />
        </div>

        <a href='#contact' className='scroll__down'>ahmad.miraz642@gmail.com</a>
      </div>
    </header>
  )
}

export default Header