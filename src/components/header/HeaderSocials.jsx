import React from 'react'
/* El nombre el icono se copia de la web de React Icons */
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'
import {FaTwitter} from 'react-icons/fa'
import {FaInstagram} from 'react-icons/fa'

const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href="https://www.linkedin.com/in/andres-perez-develop/" target='_blank' rel="noreferrer"><BsLinkedin/></a>
        <a href="https://github.com/ruedalibre/" target='_blank' rel="noreferrer"><FaGithub/></a>
        <a href="https://twitter.com/AndresPD76/" target='_blank' rel="noreferrer"><FaTwitter/></a>
        <a href="https://www.instagram.com/andres_ruedalibre/" target='_blank' rel="noreferrer"><FaInstagram/></a>
    </div>
  )
}

export default HeaderSocials