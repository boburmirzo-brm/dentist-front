import React from 'react';
import CompareImage from 'react-compare-image';
import "./AfterBefore.css";
import photo1 from "../../assets/after-before/teeth1.jpg"
import photo2 from "../../assets/after-before/teeth2.jpg"
import photo3 from "../../assets/after-before/teeth3.jpg"
import photo4 from "../../assets/after-before/teeth4.jpg"

function AfterBefore() {
  return (
    <div className="container">
      <div className="after">
        <h3>Biz qilgan ishlar</h3>
    <div className='main'>
      <CompareImage
        className="right"
        leftImage={photo1}
        rightImage={photo2}
        handleSize={40}
        handleColor="#ffffff"
        sliderLineColor="#ffffff"
      />
      <div className="left">
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minus ipsum veniam magnam inventore. Neque ab itaque recusandae excepturi, ex quia perferendis quod nostrum sint sed at temporibus nulla ad saepe.</p>
      </div>
      
    </div>
    <div className='main'>
      <div className="right">
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minus ipsum veniam magnam inventore. Neque ab itaque recusandae excepturi, ex quia perferendis quod nostrum sint sed at temporibus nulla ad saepe.</p>
      </div>
      <CompareImage
        className="left"
        leftImage={photo3}
        rightImage={photo4}
        handleSize={40}
        handleColor="#ffffff"
        sliderLineColor="#ffffff"
      />
      
    </div>
    </div>
    </div>
  );
}

export default AfterBefore;
