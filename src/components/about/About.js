import React from 'react'
import './About.css'
import ME from '../../images/miraj.jpg'
import {FaAward} from 'react-icons/fa'
import {FaGraduationCap} from 'react-icons/fa'
import {VscFolderLibrary} from 'react-icons/vsc'

const About = () => {
  return (
    <section id='about'>
      <h5>Get to Know</h5>
      <h2>About Me</h2>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt='miraj' />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <a href='#experience'><article className="about__card">
              <FaAward className='about__icon'/>
              <h5>Skills</h5>
              <small>Languages & Libraries</small>
            </article></a>

            <a href='#services'><article className="about__card">
              <FaGraduationCap className='about__icon'/>
              <h5>Education</h5>
              <small>B.sc in CSE Graduate</small>
            </article></a>

            <a href='#portfolio'><article className="about__card">
              <VscFolderLibrary className='about__icon'/>
              <h5>Projects</h5>
              <small>Real life Project Experience</small>
            </article></a>
          </div>
          <p>
          I build engaging, fast, and high-quality websites your users will love. I am specialized in JavaScript. I have a great passion for coding in general.
          </p>

          <a href="#contact" className="btn btn-primary">
            Let's Talk
          </a>
        </div>

      </div>

    </section>
  )
}

export default About