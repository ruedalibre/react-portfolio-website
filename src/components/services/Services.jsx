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
              <p>Experience in the most effective languages and technologies for both the frontend and the backend - MERN STACK</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Assist development management with all aspects of software design and coding.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Increasing users engagement providing businesses with a competitive advantage.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Offering customized solutions to the user's needs with a seamless and robust web experience.</p>
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
              <p>Processing and interpreting data to enable companies to make data-driven decisions around growth, optimization and performance.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Leveraging the power of machine learning to enable companies to create a better customer experiences and produce goods and products that customers will adore.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Offering insights that can illuminate companies trajectories toward their ultimate business goals.</p>
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
              <p>Lead companies to a deeper understanding of human relations and culture in the context of consumption through methodologies and tools from the social sciences.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Delving into the motivations and reasons of users beyond demographics to identify insights that can explain their opinions and behaviors.</p>
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