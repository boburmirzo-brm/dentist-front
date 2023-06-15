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
        delay: 3000,
        disableOnInteraction: false
      }}
       loop={true} 
       navigation={true} 
       modules={[Navigation, Autoplay]} 
       className="mySwiper">
      
         <SwiperSlide >
            <img className="banner__img" src={b_img1}alt="" />
            <h1>Contact Us Become <span className="dodger__span">The Next Our Happy Client</span></h1>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatum dolor itaque vero temporibus sit blanditiis.</p>
            <button className="meet">Meet our doctors</button>
            <div className="back__bc"></div>
          </SwiperSlide>
         <SwiperSlide >
            <img className="banner__img" src={b_img2}alt="" />
            <h1>The Best Services <span className="dodger__span">Dedicated You The Best Services</span></h1>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatum dolor itaque vero temporibus sit blanditiis.</p>
            <button className="meet">Meet our doctors</button>
            <div className="back__bc"></div>
          </SwiperSlide>
         <SwiperSlide >
            <img className="banner__img" src={b_img3}alt="" />
            <h1>Helping You to <span className="dodger__span">Bring Back Your Happy Smile</span></h1>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatum dolor itaque vero temporibus sit blanditiis.</p>
            <button className="meet">Meet our doctors</button>
            <div className="back__bc"></div>
          </SwiperSlide>
      </Swiper>
      </div>
    </div>
  );
}
                                  
export default Banner;  