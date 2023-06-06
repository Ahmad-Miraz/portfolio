import React from 'react'
import {FaFacebookF} from 'react-icons/fa'
import {FaTwitter} from 'react-icons/fa'
import {FaLinkedinIn} from 'react-icons/fa'
import './Footer.css'

const Footer = () => {
  return (
    <footer>
      <a href='#home' className='footer__logo'>Md Miraj Hossain</a>
      <div className="footer__socials">
        <a href='https://www.facebook.com/ahmad.miraz.121/' target='_blank' rel="noreferrer"><FaFacebookF/></a>
        <a href='https://www.linkedin.com/in/md-miraj-hossain-26b2541a9/' target='_blank' rel="noreferrer"><FaLinkedinIn /></a>
        <a href='https://twitter.com/AhmadMiraz1' target='_blank' rel="noreferrer"><FaTwitter /></a>
      </div>
      <div className="footer__copyright">
        <small>&copy; Md Miraj Hossain Portfolio.All rights reserved.{new Date().getFullYear()}</small>
      </div>
    </footer>
  )
}

export default Footer