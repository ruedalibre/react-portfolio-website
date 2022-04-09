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

          <p>I have background as a research scientist with experience in quantitative and qualitative methodologies and tools. Since 2018 I have incorporated programming and data science into my daily work to improve my skills by learning new technologies and languages to create web applications, and manipulate and analyze data. Today I have experience as a frontend developer and as a data scientist with an emphasis on mobile development and machine learning, respectively. I would like to join a company that gives me the opportunity to put all this experience into practice and continue developing my career.

          </p>

          <a href="#contact" className='btn btn-primary'>Let's Talk!</a>
        </div>
      </div>
    </section>
  )
}

export default About