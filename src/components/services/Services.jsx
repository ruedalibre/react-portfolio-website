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
              <p>Experience in the most effective languages and technologies for both the frontend and the backend - MERN STACK.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Excellent basic knowledge about Information Technology from a software perspective.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Assisting development management with all aspects of software design and coding.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Working on defined features previously delineated by senior software developers with a proactive approach.</p>
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
              <p>Experience in the most effective languages and technologies for data analysis and machine learning - PYTHON STACK.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Database knowledge to carry out data analysis with the data stored in relational databases - AWS and Oracle Cloud.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Data Wrangling: cleaning, manipulating, and organizing data for easy Data Analysis.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Data visualization to integrate datasets, analyze models, and visualize them using graphs and charts.</p>
            </li>
          </ul>
        </article>
        {/* END OF DATA SCIENCE*/}

        <article className="service">
          <div className="service__head">
            <h3>Business Anthropology</h3>
          </div>

          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Bringing a deeper understanding of the human culture in the context of online consumption using methodologies and tools from the social sciences.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Delving into the motivations and reasons of users to identify insights that can explain their choices and behaviors.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Improving UX by using this knowledge to create rewarding and satisfying solutions that fit the user's expectations and needs.</p>
            </li>
          </ul>
        </article>
        {/* END OF RESEARCH AND EDUCATION */}

      </div>
    </section>
  )
}

export default Services