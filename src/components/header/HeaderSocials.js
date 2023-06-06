import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'
import {BsFacebook} from 'react-icons/bs'

const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href="https://www.linkedin.com/in/md-miraj-hossain-26b2541a9/" target="_blank" rel="noreferrer"><BsLinkedin /></a>
        <a href="https://github.com/Ahmad-Miraz" target="_blank" rel="noreferrer"><BsGithub /></a>
        <a href="https://www.facebook.com/ahmad.miraz.121/" target="_blank" rel="noreferrer"><BsFacebook /></a>
    </div>
  )
}

export default HeaderSocials