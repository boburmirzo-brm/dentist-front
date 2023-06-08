import React from 'react'
import "./Service.css"
import servisRasm1 from "../../assets/service-images/toothCheckout.jpg"
import servisRasm2 from "../../assets/service-images/toothWhitening.jpg"
import servisRasm3 from "../../assets/service-images/toothBracet.jpg"
import servisRasm4 from "../../assets/service-images/toothImplant.jpg"
import servisRasm5 from "../../assets/service-images/toothFilling.jpg"
import servisRasm6 from "../../assets/service-images/toothCosmetic.jpg"
import checkupServis from "../../assets/service-images/checkups.png"
import whiteningServis from "../../assets/service-images/whitenings.png"
import braceServis from "../../assets/service-images/braces.png"
import implantServis from "../../assets/service-images/implants.png"
import fillingServis from "../../assets/service-images/fillings.png"
import cosmeticServis from "../../assets/service-images/cosmetics.png"




function Service() {
  return (
    <div className='service__wrapper container'>
      <div className="second__banner__service">
        <div className="second__btn__service">Bizning Xizmatlar</div>
        <div className="second__banner__title"><span>Yuqori Sifatli</span> Xizmat Ko'rsatish</div>
        <p className="second__banner__desc">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Totam amet eaque sunt eveniet. Dicta, hic.</p>

        <div className="second__banner__img__wrapper">
          <div className="second__banner__img__card">
            <div className="img__part__card">
              <img src={servisRasm1} alt="" />
            </div>
            <div className="desc__part__card">
              <img src={checkupServis} alt="" />
              <p className="mini__title__card">Tekshiruv</p>
              <p className="mini__desc__card">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Harum, tempore.</p>
            </div>
          </div>
          <div className="second__banner__img__card">
            <div className="img__part__card">
              <img src={servisRasm2} alt="" />
            </div>
            <div className="desc__part__card">
              <img src={whiteningServis} alt="" />
              <p className="mini__title__card">Tishlarni oqartirish</p>
              <p className="mini__desc__card">Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, doloribus.</p>
            </div>
          </div>
          <div className="second__banner__img__card">
            <div className="img__part__card">
              <img src={servisRasm3} alt="" />
            </div>
            <div className="desc__part__card">
              <img src={braceServis} alt="" />
              <p className="mini__title__card">Briketlar</p>
              <p className="mini__desc__card">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iure, laudantium.</p>
            </div>
          </div>
          <div className="second__banner__img__card">
            <div className="img__part__card">
              <img src={servisRasm4} alt="" />
            </div>
            <div className="desc__part__card">
              <img src={implantServis} alt="" />
              <p className="mini__title__card">Tish qo'yish</p>
              <p className="mini__desc__card">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minus, quos.</p>
            </div>
          </div>
          <div className="second__banner__img__card">
            <div className="img__part__card">
              <img src={servisRasm5} alt="" />
            </div>
            <div className="desc__part__card">
              <img src={fillingServis} alt="" />
              <p className="mini__title__card">Plomba qo'yish</p>
              <p className="mini__desc__card">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Mollitia, provident.</p>
            </div>
          </div>
          <div className="second__banner__img__card">
            <div className="img__part__card">
              <img src={servisRasm6} alt="" />
            </div>
            <div className="desc__part__card">
              <img src={cosmeticServis} alt="" />
              <p className="mini__title__card">Tish kosmatikasi</p>
              <p className="mini__desc__card">Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae, totam.</p>
            </div>
          </div>
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