import React from 'react'
import "./About.css"

function About() {
  return (
      <div className="about__us">
        <div className="container about__us__about">
          <div className="about__img"></div>
      <div className="about__text">
        <h1>Welcome to Dental Clinic</h1>
        <p>Sed elementum tortor sit amet lacus feugiat aliquam eu euismod dui, sit amet finibus neque quam nisl, euismod vitae sem in, tempor auctor nulla facilisi nunc urna aliquam sapien aliquam auctor ornare molestie ligula.</p>
        <div className="about__big">
          <div className="about__littele__text">
            <h3>Who are we?</h3>
            <h4>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h4>
            <span>Read More</span>
          </div>
          <div className="about__littele__text">
            <h3>Who are we?</h3>
            <h4>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h4>
            <span>Read More</span>
          </div>
        </div>
        
      </div>
        </div>
      <div className="container about__us2">
        <div className="about__text2">
          <h3> - ADVANCED SERVICES - </h3>
          <h1>We Care About Your Health</h1>
          <h4>We have introduced the principle of family medicine, which means that the family practitioner will handle the majority of medical requests, with a specialists involved only if necessary.</h4>
        </div>
        <div className="about__big__img">
          <div className="about__img2">
            <div className="about__img22">
              <h3>Dr.Natgis.Haque</h3>
              <h4>Dentist</h4>
            </div>
          </div>
          <div className="about__img3">
          <div className="about__img22">
              <h3>Dr. Maelys Cordier</h3>
              <h4>Dentist</h4>
            </div>
          </div>
          <div className="about__img4">
          <div className="about__img22">
              <h3>Dr.Angela Wilson</h3>
              <h4>Dentist</h4>
            </div>
          </div>
        </div>
        
      </div>
    </div>
  )
}

export default About