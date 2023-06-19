import React from 'react'
import "./AboutPage.css"
import AboutDoctor from "../../assets/about/aboutDoctor.jpg"
import DentalClinic from "../../assets/about/dentalClinic.jpg"
import HappyPatient from "../../assets/about/happyPatient.jpg"

function AboutPage() {
  return (
    <div className='about__route'>
        <div className="first__banner__about">
          <h1 className='about__banner__title'><span>About</span> Us</h1>
          <p className='about__banner__desc'>Lorem ipsum dolor sit amet consectetur adipisicing eliObcaecati porro eius animi vitae, quia fugit.</p>
        </div>

        <div className="about__page__wrapper">
            <div className="about__page__card">
              <img src={DentalClinic} alt="" />
            </div>
            <div className="about__page__card__desc">
              <h1 className='mini__title__about'><span>Best</span> Quality Gadgets and Clinic Centers in the City</h1>
              <p className="mini__desc__about">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quasi laudantium nesciunt, corrupti eius aut illo nostrum ad non omnis repudiandae sapiente perferendis in vero molestias inventore aperiam enim facere sequi voluptatem repellendus expedita, ut earum sit? Eveniet itaque placeat eum.
              </p>
            </div>
            <div className="about__page__card__desc">
              <h1 className="mini__title__about"><span>High</span> Qualificated Doctors</h1>
              <p className='mini__desc__about'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Beatae, veritatis totam tempora autem accusantium, ratione at ullam nostrum cumque architecto repudiandae quidem molestiae voluptatibus quaerat illo aliquid nemo suscipit quis a non. Tenetur quasi ipsam ex necessitatibus assumenda corrupti adipisci?</p>
            </div>
            <div className="about__page__card">
              <img src={AboutDoctor} alt="" />
            </div>
            <div className="about__page__card">
              <img src={HappyPatient} alt="" />
            </div>
            <div className="about__page__card__desc">
              <h1 className='mini__title__about'><span>Determined</span> to Give You the Best Service</h1>
              <p className="mini__desc__about">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iste veritatis exercitationem magnam, repudiandae nisi neque ipsam sit nostrum nobis eius voluptates ullam veniam sed facere labore minima, facilis ea sunt amet totam consectetur cupiditate magni voluptate! Laboriosam non ex excepturi.</p>
            </div>
        </div>
    </div>
  )
}

export default AboutPage