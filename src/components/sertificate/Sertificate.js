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
  }, {
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
      <h1 className='main_text_certificate_page'>Certificate & Awards</h1>
      <div className="container">
        <div className="certificate_main_page">
          <div className="left_text_part">
            <ul className='award_text_for_dentist'>
              <li>Recipient of the "Clinic medical Assistant" award in year for exceptional patient care and dedication to the field</li>
              <li>Awarded "Academy of Laser Dentist" by publication/organization for outstanding results in smile makeovers and cosmetic dental treatments</li>
              <li>Received recognition as a "American Academy of Cosmetic dentist" for consistently delivering excellent results with clear aligner therapy</li>
              <li>Honored with the "Aesthetic Dentistry" for volunteering time and resources to improve oral health in underserved populations</li>
              <li>Recognized by association/organization for ongoing commitment to continuing education and staying up-to-date with the latest advancements in dentistry</li>
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