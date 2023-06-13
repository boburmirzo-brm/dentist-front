import React, { useState } from 'react'
import use__img from "../../assets/use-denteth/tooth.png"
import use__img2 from "../../assets/use-denteth/use2.png"
import use__img3 from "../../assets/use-denteth/hospital.png"
import ScrollTrigger from 'react-scroll-trigger'
import CountUp from 'react-countup'
import { BsBuildingAdd } from 'react-icons/bs'
import "./UseDenteth.css"

function UseDenteth() {

  const [counterOn, setCounterOn] = useState(false)

  return (
    <ScrollTrigger onEnter={() => setCounterOn(true)} onExit={() => setCounterOn(false)}>
      <div className='container'>
        <div className="use__denteth">
          <div className="use__Den__img">
            <img src={use__img} alt="" />
            <p className='use__size'> {counterOn && <CountUp start={0} end={4540} duration={3} delay={0}/>}+ </p>
            <h2>Hursand MIjozlar</h2>
            <span className='use__w'>Biz Ko'plab Yillik Tajriba Davomida Minglab Mijozlarga Xizmat Ko'rsatganmiz!</span>
          </div>
          <div className="use__Den__img">
            <img src={use__img2} alt="" />
            <p className='use__size'> {counterOn && <CountUp start={0} end={24} duration={2} delay={0}/>}+ </p>
            <h2>Tajribali Shifokorlar</h2>
            <span className='use__w'>Bizda Chet El Universitetlarini Tamomlagan Tajribali Shifokorlar Xizmat Ko'rsatadi</span>
          </div>
          <div className="use__Den__img">
            <img src={use__img3} alt="" />
            <p className='use__size'> {counterOn && <CountUp start={0} end={7} duration={2} delay={0}/>}+ </p>
            <h2>Shahar Bo'ylab Filiallar</h2>
            <span className='use__w'>Bizning Klinikamizni Shahar Bo'ylab Bir Nechta Filiallari Mavjud</span>
          </div>
        </div>
      </div>
    </ScrollTrigger>
  )
}

export default UseDenteth