import React from 'react'
import './Contact.css'
import {MdOutlineMail} from 'react-icons/md'
import {MdWhatsapp} from 'react-icons/md'
import {RiMessengerLine} from 'react-icons/ri'
import { useRef } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm("service_ttylmay","template_kgxvvy9",form.current,'MBLmaBS9NTXZKKytU')
    e.target.reset()
  };
  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>


      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineMail className='contact__option-icon'/>
            <h4>Email</h4>
            <h5>ahmad.miraz642@gmail.com</h5>
            <a href='mailto:ahmad.miraz642@gmail.com' target='_blank' rel="noreferrer">Send a Message</a>
          </article>
          <article className="contact__option">
            <MdWhatsapp className='contact__option-icon'/>
            <h4>WhatsApp</h4>
            <h5>+880 1521 503442</h5>
            <a href='https://api.whatsapp.com/send?phone+01521503442' target='_blank' rel="noreferrer">Send a Message</a>
          </article>
          <article className="contact__option">
            <RiMessengerLine className='contact__option-icon'/>
            <h4>Messenger</h4>
            <h5>Ahmad Miraz</h5>
            <a href='https://m.me/ahmad.miraz.121/' target='_blank' rel="noreferrer">Send a Message</a>
          </article>
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='Your Full Name' required/>
          <input type="email" name="email" placeholder='Your Email' required/>
          <textarea type="message" name='message' rows='7' placeholder='Your Message' required />
          <button type="submit" className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact