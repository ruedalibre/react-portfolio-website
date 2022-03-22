import React from 'react'
import './about.css'
import ME from '../../assets/me-about.jpg'
import {BsFillFileEarmarkCheckFill} from 'react-icons/bs'
import {FaHandshake} from 'react-icons/fa'
import {GoProject} from 'react-icons/go'

const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className='container about__container'>
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About Image" />
          </div>
        </div>
      
        <div className="about__content">
          <div className="about__cards">
            <article className='about__card'>
              <BsFillFileEarmarkCheckFill className='about__icon'/>
              <h5>Experience</h5>
              <small>2+ Years Working </small>
            </article>
            
            <article className='about__card'>
              <FaHandshake className='about__icon'/>
              <h5>Clients</h5>
              <small>10+ in Colombia</small>
            </article>
            
            <article className='about__card'>
              <GoProject className='about__icon'/>
              <h5>Projects</h5>
              <small>2+ Years Working </small>
            </article>
          </div>

          <p>I am a research scientist with experience in qualitative and quantitative methodologies and tools. In the last years of my career I started to implement programming and data science in my daily activities to expand my skills and knowledge. I have training as a fullstack developer and as a data scientist with an emphasis on mobile development and machine learning. I would like to participate in a company that gives me the opportunity to implement all these new features and continue to develop my career.
          </p>

          <a href="#contact" className='btn btn-primary'>Let's Talk!</a>
        </div>
      </div>
    </section>
  )
}

export default About