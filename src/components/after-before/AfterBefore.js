import React from 'react';
import CompareImage from 'react-compare-image';
import "./AfterBefore.css";

function AfterBefore() {
  return (
    <div className="container">
      <div className="after">
        <h3>Biz qilgan ishlar</h3>
    <div className='main'>
      <CompareImage
        className="right"
        leftImage="https://anpsthemes.com/ident/demo-4/wp-content/uploads/2019/12/before22.jpg"
        rightImage="https://anpsthemes.com/ident/demo-4/wp-content/uploads/2019/12/after11.jpg"
        handleSize={40}
        handleColor="#ffffff"
        sliderLineColor="#ffffff"
      />
      <div className="left">
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minus ipsum veniam magnam inventore. Neque ab itaque recusandae excepturi, ex quia perferendis quod nostrum sint sed at temporibus nulla ad saepe.</p>
      </div>
    </div>
    </div>
    </div>
  );
}

export default AfterBefore;
