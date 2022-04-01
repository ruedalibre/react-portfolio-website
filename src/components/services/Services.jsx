import React from 'react'
import './services.css'
import {BiCheck} from 'react-icons/bi'

const Services = () => {
  return (
    <section id='services'>
      <h5>What I Offer</h5>
      <h2>Services</h2>

      <div className="container services__container">
        <article className="service">
          <div className="service__head">
            <h3>Web Development</h3>
          </div>

          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Design, build, support, and evolve web-based software.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Development of both the front and back end of web applications using the most effective programming languages and technologies for each case.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>MERN Stack: MongoDB, Express, ReactJS, and Node.js. Django Stack: Django, Python, and MySQL as Database.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>AWS Cloud</p>
            </li>
          </ul>
        </article>
        {/* END OF WEB DEVELPMENT */}

        <article className="service">
          <div className="service__head">
            <h3>Data Science</h3>
          </div>

          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
            </li>
          </ul>
        </article>
        {/* END OF DATA SCIENCE*/}

        <article className="service">
          <div className="service__head">
            <h3>Research and Education</h3>
          </div>

          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
            </li>
          </ul>
        </article>
        {/* END OF RESEARCH AND EDUCATION */}

      </div>
    </section>
  )
}

export default Services