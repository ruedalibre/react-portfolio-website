import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/portfolio1.jpg'
import IMG2 from '../../assets/portfolio2.jpg'
import IMG3 from '../../assets/portfolio3.jpg'
import IMG4 from '../../assets/portfolio4.jpg'
import IMG5 from '../../assets/portfolio5.png'
import IMG6 from '../../assets/portfolio6.jpg'

/* Este es el array de objetos que se usarán para rellenar los cards del portafolio */
const data = [
  {
    id: 1,
    image: IMG1,
    title: 'Expense Tracker App',
    github: 'https://github.com/ruedalibre/react_projects',
    demo: 'https://github.com/ruedalibre/'
  },
  {
    id: 2,
    image: IMG2,
    title: 'Expense Tracker App',
    github: 'https://github.com/ruedalibre/react_projects',
    demo: 'https://github.com/ruedalibre/'
  },
  {
    id: 3,
    image: IMG3,
    title: 'Expense Tracker App',
    github: 'https://github.com/ruedalibre/react_projects',
    demo: 'https://github.com/ruedalibre/'
  },
  {
    id: 4,
    image: IMG4,
    title: 'Expense Tracker App',
    github: 'https://github.com/ruedalibre/react_projects',
    demo: 'https://github.com/ruedalibre/'
  },
  {
    id: 5,
    image: IMG5,
    title: 'Expense Tracker App',
    github: 'https://github.com/ruedalibre/react_projects',
    demo: 'https://github.com/ruedalibre/'
  },
  {
    id: 6,
    image: IMG6,
    title: 'Expense Tracker App',
    github: 'https://github.com/ruedalibre/react_projects',
    demo: 'https://github.com/ruedalibre/'
  },
  
]

/* Esta toma los objetos del array y crea las cards iterando y llenando los campos con base en el constructor */
const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {
          data.map(({id, image, title, github, demo}) => {
            return (
              <article key={id} className='portfolio__item'>
              <div className="portfolio__item-image">
                <img src={image} alt={title} />
              </div>
              <h3>{title}</h3>
              <div className="portfolio__item-cta">
                <a href={github} className='btn'>Github</a>
                {/* Al agregar el target blank abrirá la página del demo en una nueva pestaña */}
                <a href={demo} className='btn btn-primary' target='_blank'>Live Demo</a>
              </div>
              </article>
            )
          })
        }
      </div>
    </section>
  )
}

export default Portfolio