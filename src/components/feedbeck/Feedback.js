import React from 'react'
import "./Feedback.css"
import { FaQuoteLeft } from "react-icons/fa"

function Feedback() {
  return (
    <div className='feedback'>
      <div className="container__feedback">
        <div className="container">
          <h1>SAVDO</h1>
          <img className='testimonials__icon' src="https://kodesolution.com/html/2017/dentalpro-html-b5/images/title-icon-white.png" alt="" />
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem autem <br />
            voluptatem obcaecati!
          </p>


          <div className="feedback__cards">

            <div className="feedback__card">
              <div className="card">
                <h3 className='card__icon'><FaQuoteLeft /></h3>
                <p>Lorem ipsum dolor sit amet consectetur <br /> adipisicing elit. Sapiente consequuntur id   <br />laborea, eligendi sunt.</p>
              </div>
              <div className="bottom">
                <h2>Meri Jeyms <br /> <span>Baxtli bemor</span></h2>
                <img className='user__img' src="https://kodesolution.com/html/2017/dentalpro-html-b5/images/testimonials/3.png" alt="" />
              </div>
            </div>

            <div className="feedback__card one">
              <div className="card">
                <h3 className='card__icon'><FaQuoteLeft /></h3>
                <p>Lorem ipsum dolor sit amet consectetur <br /> adipisicing elit. Sapiente consequuntur id   <br />laborea, eligendi sunt.</p>
              </div>
              <div className="bottom">
                <h2>Gavin Smit <br /> <span>Baxtli bemor</span></h2>
                <img className='user__img' src="https://kodesolution.com/html/2017/dentalpro-html-b5/images/testimonials/1.png" alt="" />
              </div>
            </div>

            <div className="feedback__card two">
              <div className="card">
                <h3 className='card__icon'><FaQuoteLeft /></h3>
                <p>Lorem ipsum dolor sit amet consectetur <br /> adipisicing elit. Sapiente consequuntur id   <br />laborea, eligendi sunt.</p>
              </div>
              <div className="bottom">
                <h2>Jonatan Smit <br /> <span>Baxtli bemor</span></h2>
                <img className='user__img' src="https://kodesolution.com/html/2017/dentalpro-html-b5/images/testimonials/2.png" alt="" />
              </div>
            </div>

          </div>


        </div>
      </div>
    </div>
  )
}

export default Feedback