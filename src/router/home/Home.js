import React from 'react'
import Banner from "../../components/banner/Banner"
import Sertificate from '../../components/sertificate/Sertificate'
import HappyClient from '../../components/happy-client/HappyClient'
import Feedback from '../../components/feedbeck/Feedback'
import UseDenteth from '../../components/use-denteth/UseDenteth'
import Contact from '../../components/contact/Contact'

function Home() {
  return (
    <div>
      <Banner/>
      <Sertificate/>
      <UseDenteth/>
      <HappyClient/>   
      <Feedback/>
      <Contact/>
    </div>
  )
}

export default Home