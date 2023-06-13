import React from "react";
import "./Banner.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation, Autoplay } from "swiper";
import b_img1 from "../../assets/banner/den.jpg"
import b_img2 from "../../assets/banner/brace.jpg"
import b_img3 from "../../assets/banner/child.jpg"

function Banner() {

  const Banner_Data = [
    {
      _id:"b1",
      img: b_img1,
      title:"Contact Us Become The Next Our Happy Client",
      desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla similique facere nisi, excepturi fugiat praesentium."
    },
    {
      _id:"b2",
      img: b_img2,
      title:"The Best Services Dedicated to Give You The Best Services",
      desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam, quibusdam veniam incidunt suscipit blanditiis magni reiciendis?"
    },
    {
      _id:"b3",
      img: b_img3,
      title:"Helping You to Bring Back Your Happy Smile",
      desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo quidem incidunt aspernatur quos."
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
          Banner_Data?.map((item)=>
          <SwiperSlide key={item?._id}>
            <img className="banner__img" src={item?.img}alt="" />
            <h1>{item?.title}</h1>
            <p>{item?.desc}</p>
            <div className="back__bc"></div>
          </SwiperSlide>
          )
        }
      </Swiper>
      </div>
    </div>
  );
}
                                  
export default Banner;  