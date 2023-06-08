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
    },
    {
      _id:"b2",
      img: b_img3,
    },
    {
      _id:"b3",
      img: b_img4,
    },
    {
      _id:"b4",
      img: b_img5,
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
          <SwiperSlide><img src={item?.img}alt="" /></SwiperSlide>
          )
        }
      </Swiper>
      </div>
    </div>
  );
}
                                  
export default Banner;  