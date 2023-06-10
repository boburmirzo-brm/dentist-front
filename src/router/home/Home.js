import React from 'react'
import Banner from "../../components/banner/Banner"
import Sertificate from '../../components/sertificate/Sertificate'
import HappyClient from '../../components/happy-client/HappyClient'
import Feedback from '../../components/feedbeck/Feedback'

function Home() {
  return (
    <div>
      <Banner/>
      <Sertificate/>
      <HappyClient/>   
      <Feedback/>
    </div>
  )
}

export default Home