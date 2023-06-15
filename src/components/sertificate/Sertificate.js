import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination } from "swiper";
import "./Sertificate.css"
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { Link } from 'react-router-dom'


const DATA_SWIPER = [
  {
    b1: "https://kodesolution.com/html/2017/dentalpro-html-b5/images/certificates/s2.jpg",
    b2: "https://kodesolution.com/html/2017/dentalpro-html-b5/images/certificates/b2.jpg"
  },
  {
    b1: "https://kodesolution.com/html/2017/dentalpro-html-b5/images/certificates/s1.jpg",
    b2: "https://kodesolution.com/html/2017/dentalpro-html-b5/images/certificates/b1.jpg"
  },
  {
    b1: "https://kodesolution.com/html/2017/dentalpro-html-b5/images/certificates/s3.jpg",
    b2: "https://kodesolution.com/html/2017/dentalpro-html-b5/images/certificates/b3.jpg"
  },
  {
    b1: "https://kodesolution.com/html/2017/dentalpro-html-b5/images/certificates/s4.jpg",
    b2: "https://kodesolution.com/html/2017/dentalpro-html-b5/images/certificates/b4.jpg"
  },
]

function Sertificate() {
  return (
    <section className='certificate_page'>
      <h1 className='main_text_certificate_page'>Biz Erishgan Yutuqlar</h1>
      <div className="container">
        <div className="certificate_main_page">
          <div className="left_text_part">
            <ul className='award_text_for_dentist'>
              <li>Bemorlarga g'amxo'rlik qilish va sohaga fidoyilik uchun yiliga <b style={{ color: '#1196CC' }}>"Klinik tibbiy yordamchisi"</b> mukofoti laureati</li>
              <li>Nashr/tashkilot tomonidan tabassumni o'zgartirish va tishlarni kosmetik muolajalardagi ajoyib natijalar uchun <b style={{ color: '#1196CC' }}>"Lazerli stomatologlar akademiyasi"</b> bilan taqdirlangan.</li>
              <li>Aniq aligner terapiyasi bilan doimiy ravishda ajoyib natijalarga erishganligi uchun <b style={{ color: '#1196CC' }}>"Amerika Kosmetik stomatologlar Akademiyasi"</b> sifatida tan olingan.</li>
              <li>Kam ta'minlangan aholida og'iz bo'shlig'i salomatligini yaxshilash uchun ko'ngilli vaqt va resurslar uchun <b style={{ color: '#1196CC' }}>"Estetik stomatologiya"</b> bilan taqdirlangan</li>
              {/* <li>Recognized by association/organization for ongoing commitment to <b style={{ color: '#1196CC' }}>"continuing education and staying up-to-date"</b> with the latest advancements in dentistry</li> */}
            </ul>
          </div>
          <div className="right_swiper_part">
            <Swiper
              effect={"coverflow"}
              grabCursor={true}
              centeredSlides={true}
              slidesPerView={"auto"}
              coverflowEffect={{
                rotate: 50,
                stretch: 0,
                depth: 100,
                modifier: 1,
                slideShadows: true,
              }}
              pagination={true}
              modules={[EffectCoverflow, Pagination]}
              className="mySwiper"
            >
              {
                DATA_SWIPER?.map((item, inx) =>
                  <SwiperSlide key={inx}>
                    <Link to="/" state={item} >
                      <img src={item.b2} alt='img' />
                    </Link>
                  </SwiperSlide>
                )
              }
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Sertificate