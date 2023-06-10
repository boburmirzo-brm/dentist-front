import React from 'react'
import "./ServicePage.css"
import { SERVICE__DATA } from "../../static"




function Service() {
  return (
    <div className='service__wrapper container'>
      <div className="second__banner__service">
        <div className="second__btn__service">Bizning Xizmatlar</div>
        <div className="second__banner__title"><span>Yuqori Sifatli</span> Xizmat Ko'rsatish</div>
        <p className="second__banner__desc">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Totam amet eaque sunt eveniet. Dicta, hic.</p>

        <div className="second__banner__img__wrapper">
            {
              SERVICE__DATA?.map((el, inx)=> <div key={inx} className="second__banner__img__card">
              <div className="img__part__card">
                <img src={el?.mainImg} alt="" />
              </div>
              <div className="desc__part__card">
                <img src={el?.logoImg} alt="" />
                <p className="mini__title__card">{el?.miniTitleService}</p>
                <p className="mini__desc__card">{el?.miniDescService}</p>
              </div>
            </div>)
            }
        </div>

        <div className="first__banner__service">
        <div className="first__btn__service">Bizning Xizmatlar</div>
        <h1 className="first__banner__title">Bizning <span>Klinik Xizmatlarimiz</span></h1>
        <p className="first__banner__desc">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorum reiciendis quo laboriosam dolor et laudantium consequuntur est tenetur, cumque consequatur.</p>
      </div>
      </div>
    </div>
  )
}

export default Service