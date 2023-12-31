import React from 'react'
import "./HappyClient.css"

function HappyClient() {
  return (
    <div className="container">
      <div className='client'>
        <div className="main">
          <div className="rigth">
            <h1>Sizga doim <br />
              <font>tabassum</font> yarashadi</h1>
            <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. <br />
              Aenean commodo ligula eget dolor. Aenean massa.</p><br />
            <button className='right__second-btn'>Book an Appointment</button>
          </div>
          <div className="left">
            <div className="main__img">
              <img width={500} className='img1' src="https://templatekit.jegtheme.com/dentic/wp-content/uploads/sites/353/2023/03/dentist-hold-with-denture.png" alt="" />
              <img width={400} className='img2' src="https://templatekit.jegtheme.com/dentic/wp-content/uploads/sites/353/2023/03/circle-hero.png" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HappyClient