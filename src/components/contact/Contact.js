import React, { useState } from 'react'
import './Contact.css'
// import { config } from 'dotenv';
// config();

function Contact() {
  const [name, setName] = useState("")
  const [tel, setTel] = useState("")
  const [type, setType] = useState("")
  const [desc, setDesc] = useState("")


  function handleSubmit(e) {
    e.preventDefault()
    let text = ""
    text += "Mijoz Habar Yubordi:"
    text += `<b>Mijoz Ismi:</b> ${name} %0A`
    text += `<b>Mijoz Telefon Raqami:</b> ${tel} %0A`
    text += `<b>Xizmat Turi:</b> ${type} %0A`
    text += `<b>Mijoz Habari:</b> ${desc}`

    let url = `https://api.telegram.org/bot${process.env.REACT_APP_BOTTOKEN}/sendMessage?chat_id=${process.env.REACT_APP_CHATID}&text=${text}&parse_mode=html`

    let api = new XMLHttpRequest()
    api.open("GET", url, true)
    api.send()
    alert("Habaringiz Yuborildi Tez Orada Sizga Aloqaga Chiqamiz")
  }
  return (
    <div className='contact__wrapper container'>
      <form onSubmit={handleSubmit} className="contact__box">
        <h1>Biz Bilan Bog'laning</h1>
        <div className="name__input__div input__box">
          <input required type="text" value={name} onChange={(e) => setName(e.target.value)} />
          <span>Ismingiz</span>
        </div>
        <div className="tel__input__div input__box">
          <input required type="number" value={tel} onChange={(e) => setTel(e.target.value)} />
          <span>Telefon Raqam</span>
        </div>
        <div className="service__selection__div input__box">
          <select className='contact__selection' value={type} onChange={(e) => setType(e.target.value)}>
            <option disabled value="">Xizmat Turini Tanlang</option>
            <option value="briket">Bricket Qo'ydirish</option>
            <option value="briket">Tish Oldirish</option>
            <option value="briket">Tish Tamirlash</option>
            <option value="briket">Tish Qo'ydirish</option>
            <option value="briket">Tish Oqartirish</option>
            <option value="briket">Boshqa</option>
          </select>
        </div>
        <div className="desc__input__div input__box">
          <input required name="" type="text" value={desc} onChange={(e) => setDesc(e.target.value)} />
          <span>Izoh Qoldirish</span>
        </div>
        <button type='submit' className='contact__submit__btn'>Yuborish</button>
      </form>
      <div className="contact__location__box">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2994.445568331891!2d69.2817990770762!3d41.36440323401229!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8d49406ef075%3A0xd498c29e7cbf4e9!2sTISH%20KLINIKASI%20DENTA%20HOUSE!5e0!3m2!1suz!2s!4v1686245020640!5m2!1suz!2s"
          width="100%" height="95%"
          style={{ border: '0' }}
          loading="lazy"
        ></iframe>
      </div>
    </div>
  )
}

export default Contact