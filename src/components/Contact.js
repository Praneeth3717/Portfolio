import React from 'react';
import { useRef } from 'react';
import emailjs from '@emailjs/browser';
import './Contact.css'
import { FaRegEnvelope ,FaPhoneAlt} from "react-icons/fa";
import { IoLogoGithub } from "react-icons/io";
import {BsFacebook,BsInstagram,BsLinkedin} from "react-icons/bs";


export default function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_keqnpac', 'template_lqc248a', form.current, 'nevBwPa1Qh1HkOeQP')
      .then((result) => {
          console.log(result.text);
          console.log("message sent")
      }, (error) => {
          console.log(error.text);
      });
    };
  return (
    <div name='contact' className='contact'>
      <div className='right'>
        <h1>Contact Me</h1>
        <p><FaRegEnvelope className='icon'/>praneethchandupatla@gmail.com</p>
        <p><FaPhoneAlt className='icon'/>9963310841</p>
        <div className='logo'>
          <a href='https://www.facebook.com/praneeth.chanduptla/'><BsFacebook className='logo1'/></a>
          <a href='https://www.instagram.com/_praneeth_12/'><BsInstagram className='logo1'/></a>
          <a href='https://www.linkedin.com/in/praneeth-chandupatla-b08a93285/'><BsLinkedin className='logo1'/></a>
          <a href='https://github.com/Praneeth3717'> <IoLogoGithub className='logo1'/></a>
        </div>
        <a href="/Resume.pdf"  download><button className='btn'>Download CV</button></a>
      </div>
      <div className='left'>
        <form ref={form} onSubmit={sendEmail} className='contactform'>
            <input type='text' className='name' name="user_name" placeholder='Your Name'></input>
            <input type='text' className='email' name="user_email" placeholder='Your Email'></input>
            <textarea className='message' name='message' rows={6} placeholder='Your Message'></textarea>
            <input type="submit" value="Submit" className='btn' />
        </form>
      </div>
    </div>
  )
}
