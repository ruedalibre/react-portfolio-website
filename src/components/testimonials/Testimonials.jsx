import React from 'react'
import './testimonials.css'
import AVTR1 from '../../assets/avatar1.jpg'
import AVTR2 from '../../assets/avatar2.jpg'
import AVTR3 from '../../assets/avatar3.jpg'

/* Usaré la librería Swiper para crear el slide show con los testimonios */
import { Pagination } from 'swiper';
import {Swiper, SwiperSlide} from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';

/* Estos son los objetos que van a llenar las cards de testimonios al iterar con base en el constructor */
const data = [
  {
    avatar: AVTR1,
    name: 'Diana Sofía Zuluaga',
    review: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Beatae architecto minima velit, nam, pariatur ut fuga, temporibus nemo sapiente suscipit id repellat eius rerum sit consequuntur expedita mollitia fugit voluptatum?'
  },
  {
    avatar: AVTR2,
    name: 'Mauricio López',
    review: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Beatae architecto minima velit, nam, pariatur ut fuga, temporibus nemo sapiente suscipit id repellat eius rerum sit consequuntur expedita mollitia fugit voluptatum?'
  },
  {
    avatar: AVTR3,
    name: 'Alejandra Montoya',
    review: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Beatae architecto minima velit, nam, pariatur ut fuga, temporibus nemo sapiente suscipit id repellat eius rerum sit consequuntur expedita mollitia fugit voluptatum?'
  }
]

const Testimonials = () => {
  return (
    <section id='testimonials'>
      <h5>Review from clients</h5>
      <h2>Testimonials</h2>

      {/* El Swiper fue personalizado para usar únicamente los parámetros necesarios */}
      <Swiper className="container testimonials__container"
      modules={[Pagination]} spaceBetween={40}
      slidesPerView={1}
      pagination={{ clickable: true}}>
        {
          data.map(({avatar, name, review}, index) => {
            return(
              <SwiperSlide key={index}className="testimonial">
              <div className="client__avatar">
                <img src={avatar} />
              </div>
              <h5 className='client__name'>{name}</h5>
              <small className='client__review'>{review}</small>
              </SwiperSlide>
            )
          })
        }
      </Swiper>
    </section>
  )
}

export default Testimonials;