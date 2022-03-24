import React from 'react'
import './footer.css'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'
import {FaTwitter} from 'react-icons/fa'
import {FaInstagram} from 'react-icons/fa'

const Footer = () => {
  return (
    <footer>
      <a href="#" className='footer__logo'>Andrés Ruedalibre</a>

      <ul className='permalinks'>
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#testimonials">Testimonials</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className="footer__socials">
        <a href="https://www.linkedin.com/in/andres-perez-develop/"><BsLinkedin/></a>
        <a href="https://github.com/ruedalibre"><FaGithub/></a>
        <a href="https://twitter.com/AndresPD76"><FaTwitter/></a>
        <a href="https://www.instagram.com/andres_ruedalibre/"><FaInstagram/></a>
      </div>
    </footer>
  )
}

export default Footer