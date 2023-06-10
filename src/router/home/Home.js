import React from 'react'
import Banner from "../../components/banner/Banner"
import Sertificate from '../../components/sertificate/Sertificate'
import HappyClient from '../../components/happy-client/HappyClient'
import Feedback from '../../components/feedbeck/Feedback'
import UseDenteth from '../../components/use-denteth/UseDenteth'

function Home() {
  return (
    <div>
      <Banner/>
      <Sertificate/>
      <UseDenteth/>
      <HappyClient/>   
      <Feedback/>
    </div>
  )
}

export default Home