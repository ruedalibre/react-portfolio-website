import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/portfolio1.png'
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
    github: 'https://github.com/ruedalibre/react_projects/tree/master/projects/expense-tracker-app',
    demo: 'https://expend-tracker-app.web.app/'
  },
  {
    id: 2,
    image: IMG2,
    title: 'Check List App',
    github: 'https://github.com/ruedalibre/react_projects/tree/master/projects/check_list_app',
    demo: 'https://check-list-app-45cf6.web.app'
  },
  {
    id: 3,
    image: IMG3,
    title: 'Online Store Redux App',
    github: 'https://github.com/ruedalibre/react_projects/tree/master/projects/online_store_redux-app',
    demo: 'https://online-store-redux-app.web.app/'
  },
  {
    id: 4,
    image: IMG5,
    title: 'Blog App',
    github: 'https://github.com/ruedalibre/react_projects/tree/master/projects/blog_app',
    demo: 'https://blog-app-303e0.web.app/'
  },
  {
    id: 5,
    image: IMG6,
    title: 'Context Api App',
    github: 'https://github.com/ruedalibre/react_projects/tree/master/projects/context_api_project',
    demo: 'https://context-api-app.web.app/'
  },
  {
    id: 6,
    image: IMG4,
    title: 'Eleven Question Quiz App',
    github: 'https://github.com/ruedalibre/eleven-question-quiz-app',
    demo: 'https://github.com/ruedalibre/eleven-question-quiz-app'
  }
  
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
                <a href={demo} className='btn btn-primary' target='_blank' rel="noreferrer">Live Demo</a>
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