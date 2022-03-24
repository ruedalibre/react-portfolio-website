import React, { useRef } from 'react'
import './contact.css'
import {MdEmail} from 'react-icons/md'
import {BsLinkedin} from 'react-icons/bs'
import {IoLogoWhatsapp} from 'react-icons/io'
/* Imports para usar el servicio de Email de emailjs */
import { userRef} from 'react'
import emailjs from 'emailjs-com'


const Contact = () => {
  const form = useRef();
  /* El código de esta constante está en la página de emailjs */
  const sendEmail = (e) => {
    e.preventDefault();
    /* los datos entre paréntesis están en mi cuenta de emailjs */
    emailjs.sendForm('service_qtcpehj', 'template_19e97l4', form.current, 'HnGC5bpinEOkk4y-W')

    e.target.reset()
  };
  /* ============ Hasta aquí código de emailjs =============*/
  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdEmail className='contact__option-icon'/>
            <h4>Email</h4>
            <h5>andresruedalibre@gmail.com</h5>
            <a href="mailto:andresruedalibre@gmail.com" target='_blank'>Send Email</a>
          </article>
          <article className="contact__option">
            <BsLinkedin className='contact__option-icon'/>
            <h4>LinkedIn</h4>
            <h5>andres-perez-develop</h5>
            <a href="https://www.linkedin.com/in/andres-perez-develop/" target='_blank'>Add Me To Your Network</a>
          </article>
          <article className="contact__option">
            <IoLogoWhatsapp className='contact__option-icon'/>
            <h4>Whatsapp</h4>
            <h5>(+57) 324 3585922</h5>
            <a href="https://api.whatsapp.com/send?phone=+573243585922" target='_blank'>Send a message</a>
          </article>

        </div>
        {/* END OF CONTACT OPTIONS */}
        {/* Estas {form} y {sendEmail} los toma de la const creadas al inicio del componente */}
        <form ref={form} onSubmit={sendEmail}> 
          <input type="text" name='name' placeholder='Your Full Name' required/>
          <input type="email" name='email' placeholder='Your Email' required />
          <textarea name="message" rows="7" placeholder='Your Message' required></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact