import React from 'react'
import "./Feedback.css"
import { FaQuoteLeft } from "react-icons/fa"

function Feedback() {
  return (
    <div className='feedback'>
      <div className="container__feedback">
        <div className="container">
          <h1 className='feedback__title'>Mijozlar Sharhlari</h1>
          <img className='testimonials__icon' src="https://kodesolution.com/html/2017/dentalpro-html-b5/images/title-icon-white.png" alt="" />
          <div className="feedback__cards">

            <div className="feedback__card">
              <div className="card">
                {/* <h3 className='card__icon'><FaQuoteLeft /></h3> */}
                <p>Men ikkala farzandimni (6 va 4) olib keldim, xodimlar juda samimiy, sabrli va mehmondo'st! Ular men oldinga va orqaga suzib boradigan turli xonalarda edi.</p>
              </div>
              <div className="bottom">
                <img className='user__img' src="https://kodesolution.com/html/2017/dentalpro-html-b5/images/testimonials/3.png" alt="" />
                <h2>Meri Jeyms</h2>
              </div>
            </div>

            <div className="feedback__card one">
              <div className="card">
                {/* <h3 className='card__icon'><FaQuoteLeft /></h3> */}
                <p>Daniel Palmer, Ajoyib va ​​professional stomatologik parvarishingiz uchun sizga katta rahmat. Mening oxirgi stomatologim nafaqaga chiqdi va men sizni tanladim</p>
              </div>
              <div className="bottom">
                 <img className='user__img' src="https://kodesolution.com/html/2017/dentalpro-html-b5/images/testimonials/1.png" alt="" />
                <h2>Gavin Smit</h2>
              </div>
            </div>

            <div className="feedback__card two">
              <div className="card">
                {/* <h3 className='card__icon'><FaQuoteLeft /></h3> */}
                <p>Yillar davomida tish shifokoriga borishdan qo'rqishimni va og'riqdan qo'rqishimni yengishga yordam berdi. U juda sabrli, xotirjam, narsalarni tushuntirishga vaqt ajratadi.</p>
              </div>
              <div className="bottom">
                <img className='user__img' src="https://kodesolution.com/html/2017/dentalpro-html-b5/images/testimonials/2.png" alt="" />
                <h2>Jonatan Smit</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Feedback