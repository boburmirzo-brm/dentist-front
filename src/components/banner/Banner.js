import React from "react";
import "./Banner.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation, Autoplay } from "swiper";
import b_img1 from "../../assets/banner/b4.jpg"
import b_img2 from "../../assets/banner/b2.jpg"
import b_img3 from "../../assets/banner/b5.jpg"

function Banner() {


  return (
    <div className="container">
      <div className="banner">
      <Swiper
      autoplay={{
        delay: 300000,
        disableOnInteraction: false
      }}
       loop={true} 
       navigation={true} 
       modules={[Navigation, Autoplay]} 
       className="mySwiper">
      
         <SwiperSlide >
            <img className="banner__img" src={b_img1}alt="" />
            <h1>Keyingi Baxtli Mijoz Bo'lish Uchun <br /><span className="dodger__span">Biz Bilan Bog'laning</span></h1>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatum dolor itaque vero temporibus sit blanditiis.</p>
            <button className="meet">Qabulga Yozilish</button>
            <div className="back__bc"></div>
          </SwiperSlide>
         <SwiperSlide >
            <img className="banner__img" src={b_img2}alt="" />
            <h1>Eng Yaxshi Sifatli Xizmatlarimiz <br /><span className="dodger__span">Siz uchun Atalgan</span></h1>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatum dolor itaque vero temporibus sit blanditiis.</p>
            <button className="meet">Qabulga Yozilish</button>
            <div className="back__bc"></div>
          </SwiperSlide>
         <SwiperSlide >
            <img className="banner__img" src={b_img3}alt="" />
            <h1>Sog'lom Tishlaringizni Qaytarishda <br /><span className="dodger__span">Sizga Yordam Beramiz</span></h1>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatum dolor itaque vero temporibus sit blanditiis.</p>
            <button className="meet">Qabulga Yozilish</button>
            <div className="back__bc"></div>
          </SwiperSlide>
      </Swiper>
      </div>
    </div>
  );
}
                                  
export default Banner;  