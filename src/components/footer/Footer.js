import React, {useLocation} from 'react'
import "./Footer.css"
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
            <p className='footer__container__text__box__text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
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
            <p className='footer__container__text__box2__text'>Privacy Policy</p>
            <p className='footer__container__text__box2__text'>Support</p>
            <p className='footer__container__text__box2__text'>FAQ</p>
            <p className='footer__container__text__box2__text'>Terms & Conditions</p>
          </div>

          <div className="footer__container__text__box">
          <h2 className='footer__container__text__box2__text footer__part'>Qo'llab-quvvatlash</h2>
            <div className="footer__container__text__box2__button"></div>
            <p className='footer__container__text__box2__text'>Privacy Policy</p>
            <p className='footer__container__text__box2__text'>Support</p>
            <p className='footer__container__text__box2__text'>FAQ</p>
            <p className='footer__container__text__box2__text'>Terms & Conditions</p>
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
          <p className='footer__down__desc__text'>Dental Clinic Template Kit by Jegtheme</p>
          <p className='footer__down__desc__text2'>Copyright © 2023. All rights reserved</p>
        </div>
      </div>
    </div>
  )
}

export default Footer 