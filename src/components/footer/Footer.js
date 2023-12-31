import React from 'react'
import "./Footer.css"
import {useLocation} from "react-router-dom"
import footer__photo from "../../assets/footer-img/footer__dents.png"
import {AiOutlineTwitter, AiOutlineInstagram, AiFillYoutube} from "react-icons/ai"
import {FaFacebookSquare} from "react-icons/fa"
import {BiMapAlt} from "react-icons/bi"
import {BsTelephoneOutbound} from "react-icons/bs"
function Footer() {
  const {pathname} = useLocation()
    if(pathname === '/login'){
        return <></>
    }
  return (
    <div className='footer'>
      <div className="container">
        <div className="footer__container__part__one">
          <div className="footer__container__text__box">
            <img className='footer__container__text__box__photo' src={footer__photo} alt="" />
            <p className='footer__container__text__box__text'>Tishlaringiz biz bilan sog'lom bo'ladi</p>
            <div className="footer__container__text__box__icons">
              <FaFacebookSquare/>
              <AiOutlineTwitter/>   
              <AiOutlineInstagram/>
              <AiFillYoutube/>
            </div>
          </div>
          <div className="footer__container__text__box footer_part__box2">
            <h2 className='footer__container__text__box2__text footer__part'>Foydali havola</h2>
            <div className="footer__container__text__box2__button"></div>
            <p className='footer__container__text__box2__text'>Maxfilik siyosati</p>
            <p className='footer__container__text__box2__text'>Qo'llab-quvvatlash</p>
            <p className='footer__container__text__box2__text'>FAQ</p>
            <p className='footer__container__text__box2__text'>
Foydalanish shartlari</p>
          </div>

          <div className="footer__container__text__box">
          <h2 className='footer__container__text__box2__text footer__part'>Qo'llab-quvvatlash</h2>
            <div className="footer__container__text__box2__button"></div>
            <p className='footer__container__text__box2__text'>Maxfilik siyosati</p>
            <p className='footer__container__text__box2__text'>Qo'llab-quvvatlash</p>
            <p className='footer__container__text__box2__text'>FAQ</p>
            <p className='footer__container__text__box2__text'>Foydalanish shartlari</p>
          </div>
          <div className="footer__container__text__box">
          <h2 className='footer__container__text__box2__text footer__part'>
Biz bilan bog'lanish</h2>
            <div className="footer__container__text__box2__button"></div>
            <p className='footer__container__text__box2__text footer__container__text__box2__text__icon'><span className='footer__container__text__box2__text__icon'><BiMapAlt/></span>Jl. Patimura II No. 18, Denpasar</p>
            <p className='footer__container__text__box2__text footer__container__text__box2__text__icon'><span  className='footer__container__text__box2__text__icon'><BsTelephoneOutbound/></span>+998 91 347 04 10</p>
          </div>
        </div>
        <hr className='footer__hr' />
        <div className="footer__down__desc">
          <p className='footer__down__desc__text'>
Stomatologiya klinikasi shablonlari to'plami</p>
          <p className='footer__down__desc__text2'>© 2023. <a href="https://namtech.uz" target='_blank'>NamTech</a> Solution</p>
        </div>
      </div>
    </div>
  )
}

export default Footer 