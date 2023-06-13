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
        leftImage="https://sa1s3optim.patientpop.com/fit-in/1000x656/assets/images/provider/photos/2331366.jpg"
        rightImage="https://anpsthemes.com/ident/demo-4/wp-content/uploads/2019/12/after11.jpg"
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
        leftImage="https://floridassmiles.com/wp-content/uploads/sites/379/2019/08/straight-teeth.jpg.webp"
        rightImage="https://images.squarespace-cdn.com/content/v1/5358aa29e4b0b772765ff2e8/1526055338311-EDNFXFXCPTVNITD8WDNY/AlexNguyenDDS.ImpactedCanine.jpg?format=750w"
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
