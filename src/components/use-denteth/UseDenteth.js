import React from 'react'
import use__img from "../../assets/use-denteth/use1.jpg"
import use__img2 from "../../assets/use-denteth/use2.jpg"
import use__img3 from "../../assets/use-denteth/use3.jpg"
import "./UseDenteth.css"
function UseDenteth() {
  return (
    <div className='container'>
      <div className="use__denteth">
      <div className="use__Den__img">
          <img src={use__img} width={100} alt="" />
          <p className='use__size'>4257</p>
          <h2>Projects Completed</h2>
          <p className='use__w'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat magnam quaerat nesciunt.</p>
        </div>  
      <div className="use__Den__img">
          <img src={use__img2} width={100} alt="" />
          <p className='use__size'>18</p>
          <h2>Export Dentists</h2>
          <p className='use__w'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat magnam quaerat nesciunt.</p>
        </div>  
      <div className="use__Den__img">
          <img src={use__img3} width={100} alt="" />
          <p className='use__size'>6</p>
          <h2>Breanches in City</h2>
          <p className='use__w'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat magnam quaerat nesciunt.</p>
        </div>  
      </div>
    </div>
  )
}

export default UseDenteth