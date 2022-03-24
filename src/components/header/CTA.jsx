import React from 'react'
import CV from '../../assets/andres_perez_developer_eng.pdf'

const CTA = () => {
  return (
    <div className='cta'>
        {/* Descarga la CV */}
        <a href={CV} download className='btn'>Download CV</a>
        {/* LLeva a la sección de contacto */}
        <a href="#contact" className='btn btn-primary'>Let's Talk!</a>
    </div>
  )
}

export default CTA