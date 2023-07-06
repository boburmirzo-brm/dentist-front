import React, { useEffect } from 'react'
import "./CareTeeth.css"
import AOS from 'aos';
import "aos/dist/aos.css"
function CareTeeth() {
  useEffect(() => {
    AOS.init();
  })

  return (
    <div className='care__Teeth container'>
      <div className='careTeeth container'>
        <div className="careTeeth__btn"><b>Tishlarga g'amxo'rlik</b></div>

        <div className="careTeeth__name">
          <h1>O'z Tishlaringizga <span>G'amxo'rlik Qiling</span></h1>
        </div>
        <div className="careTeeth__parag">
          <p>Tishlar nafaqat inson organizmi, balki  tashqi ko‘rinishi uchun ham muhim ahamiyatga ega.  Ular oppoq, sog‘lom bo‘lishi uchun qoidalarga amal qilish kerak.</p>
        </div>
      </div>
      <br />
      <div className="careTeeth__note container">
        <div className="careteeth__wrapper">
          <div data-aos="zoom-in-left" data-aos-duration="800" className="note__box1"></div>
          <div data-aos="zoom-in-right" data-aos-duration="800" className="note__box">
            <p>
              <h3>Tishlaringizni kunda <span>uch marta yuving</span></h3>
              <br />
              Tishning gigiyenik holatini yaxshi saqlash uchun, avvalo, tishni yotishdan oldin, ertalab va nonushtadan keyin yuvish shart.
              Hozirgi kunda mutaxassislar agar kishi 3 mahal ovqat yesa, 3 marta tishni yuvish kerak degan. Aksariyat yevropaliklar buni odatga aylantirgan.</p>
          </div>
        </div>
        <div className="careteeth__wrapper">
          <div data-aos="zoom-in-left" data-aos-duration="800" className="note__box order-2">
            <p>
              <h3>Tishni <span>davolatishda tavsiyalar</span></h3>
              <br />

              Eng yomoni, bu tomoqqa ham ta’sir qiladi. Aksariyat odamlar ko‘p tomog‘i og‘riydigan, angina bo‘lib qoladi. Ularni kuzatsangiz, aksari yotishdan oldin tishini yuvmaydi.

              Qo‘pol bo‘lsa ham aytaman, boylar oldinlari qul yoki ot, qo‘y olayotganda tishiga qarab olishgan.</p>
          </div>
          <div data-aos="zoom-in-right" data-aos-duration="800" className="note__box2 order-1"></div>
        </div>
        <div className="careteeth__wrapper">
          <div data-aos="zoom-in-left" data-aos-duration="800" className="note__box3"></div>
          <div data-aos="zoom-in-right" data-aos-duration="800" className="note__box">
            <p>
              <h3>Tish uchun <span>bular foydali usul</span></h3>
              <br />
              Ftoridli tish pastasi yordamida kuniga ikki marta tishlaringizni yuving. Tishlaringiz va tilingizning yuzalarini cho'tkalaganingizga ishonch hosil qilib cho'tkalang.
              Bakteriyalarni o'ldirish va nafasingizni yangilash uchun og'iz yuvish vositasidan foydalaning. </p>
          </div>
        </div>
        <div className="careteeth__wrapper">
          <div data-aos="zoom-in-left" data-aos-duration="800" className="note__box order-2">
            <p>
              <h3>Har 6 oyda <span>shifokorga ko‘rining</span></h3>
              <br />
              Qabulimga 18-20 yoshlilar keladi. Aslida, 18 yoshda 28 ta tish bo‘lishi kerak. Borlarining ham kamida 20 ta tishida muammo bor.
              Odamlar tishida muammo bo‘lsa-bo‘lmasa, har olti oyda stomatologga kelib tekshirtirib turishlarini maslahat bergan bo‘lardim.</p>
          </div>
          <div data-aos="zoom-in-right" data-aos-duration="800" className="note__box4 order-1"></div>
        </div>


      </div>




    </div>
  )
}

export default CareTeeth