import React from 'react'
import "./About.css"
import img12 from "../../assets/about/img12.png"
import img13 from  "../../assets/about/img13.png"
import img14 from  "../../assets/about/img14.png"


const DATA = [
  {
    img: img12,
    name: "Lara Crow"
  },
  {
    img: img13,
    name: "Dr. Marketa Brown"
  },
  {
    img: img14,
    name: "Dr. Sara Gray"
  },
]

const NAME = [
  {
  },
  {
  },
  {
  },
]


function About() {
  return (
    <div className="about__us">
        <div className="container about__container">
          <div className="about__wrapper">
         <div className="about__image__one"></div>  
            <div className="about__text__one">
              <h1>Welcome to our Dental Clinic</h1>
              <h4>Our goal is to provide you with personal and advanced dental services for you and your family. With distinguished and respectable dental professionals we will ensure that you smile will be healthy and happy.</h4>
            </div>
          </div>
          <div className="about__wrapper">
            <div className="about__text__two order-2">
              <h3>Team of Professionals</h3>
              <h1>Highly Qualified Dentists</h1>
              <h4>Sed elementum tortor sit amet lacus feugiat aliquam eu euismod dui, sit amet finibus neque quam nisl, euismod vitae sem in, tempor auctor nulla facilisi nunc urna aliquam sapien aliquam auctor ornare molestie ligula sit amet tempor porttitor blandit mattis ex nibh posuere velit posuere.</h4>
            </div>
            <div className="about__image__two order-1"></div>
          </div>
          <div className="about__doctors">
            {
              DATA?.map((item, inx)=>  <div key={inx} className="about__card">
                <div className="about__doctor__img">
                <img src={item?.img} alt="" />
                </div>
                <div className="about__doctor__desc">
                  <div className="about__doctor__name">
                    <h2>{item?.name}</h2> 
                  </div>
                  <div className="about__doctor__routine">
                    <h3> Monday-Friday 8:00 - 17:00 </h3>
                    <h3> Saturday 10:00 - 16:00 </h3>
                    <h3> Sunday 12:00 - 14:00 </h3>
                  </div>

                </div>
              </div>)
            }

          </div>
        </div>
    </div>
  )
}

export default About