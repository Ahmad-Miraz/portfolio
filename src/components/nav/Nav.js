import React from 'react'
import './Nav.css'
import {AiOutlineHome} from 'react-icons/ai'
import {AiOutlineUser} from 'react-icons/ai'
import {BiBookReader} from 'react-icons/bi'
import {RiServiceLine} from 'react-icons/ri'
import {BiMessageSquareDetail} from 'react-icons/bi'
import { useState } from 'react'

const Nav = () => {
  const [activeClass, setActiveClass] = useState('#')
  return (
    <nav>
      <a href='#home'onClick={()=>{setActiveClass('#home')}}  className={activeClass==='#'?'active':''}><AiOutlineHome/></a>
      <a href='#about'onClick={()=>{setActiveClass('#about')}}  className={activeClass==='#about'?'active':''}><AiOutlineUser/></a>
      <a href='#experience' onClick={()=>{setActiveClass('#experience')}}  className={activeClass==='#experience'?'active':''}><BiBookReader/></a>
      <a href='#portfolio' onClick={()=>{setActiveClass('#portfolio')}}  className={activeClass==='#portfolio'?'active':''}><RiServiceLine/></a>
      <a href='#contact' onClick={()=>{setActiveClass('#contact')}}  className={activeClass==='#contact'?'active':''}><BiMessageSquareDetail/></a>

    </nav>
  )
}

export default Nav