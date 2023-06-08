import React from "react";
import "./Banner.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation, Autoplay } from "swiper";
import b_img from "../../assets/banner/b1.jpg"
import b_img3 from "../../assets/banner/b3.jpg"
import b_img4 from "../../assets/banner/b4.jpg"
import b_img5 from "../../assets/banner/b5.jpg"
function Banner() {
  const Banner_Data = [
    {
      _id:"b1",
      img: b_img,
      title:"Contact Us Become The Next Our Happy Client"
    },
    {
      _id:"b2",
      img: b_img3,
      title:"The Best Dental Clinic That You Can Trust"
    },
    {
      _id:"b3",
      img: b_img4,
      title:"The Best Services Dedicated to Give You The Best Services"
    },
    {
      _id:"b4",
      img: b_img5,
      title:"Helping You to Bring Back Your Happy Smile"
    },
  ]
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
        {
          Banner_Data?.map((item, inx)=>
          <SwiperSlide>
            <img src={item?.img}alt="" />
            <h1>{item?.title}</h1>
          </SwiperSlide>
          )
        }
      </Swiper>
      </div>
    </div>
  );
}
                                  
export default Banner;  