import React, {useEffect} from 'react'
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
      <div  data-aos="fade-right"  data-aos-duration="1500" className="careText">
      <h1>Tishlarni qanday parvarish qilish kerak?</h1>
      <br />
      <b>Tishlar nafaqat inson organizmi, balki  tashqi ko‘rinishi uchun ham muhim ahamiyatga ega. Ular oppoq, tekis va albatta, sog‘lom bo‘lishi uchun bir necha qoidalarga amal qilish kifoya.Tishlarning parchalanishiga hissa qo'shadigan shakarli ovqatlar va ichimliklardan saqlaning. Buning o'rniga, ko'p miqdorda meva, sabzavotlar, to'liq donalar va yog'siz oqsillar bilan muvozanatli dietaga rioya qiling.</b>
      </div>
    </div>
    <br />
    <div className="careTeeth__note container">
<div data-aos="zoom-in-left" data-aos-duration="1500" className="note__box1"></div>
<div data-aos="zoom-in-right" data-aos-duration="1500" className="note__box">
  <b>
    <h3>Tishlaringizni kunda uch marta yuving</h3>
    <br />  
Tishning gigiyenik holatini yaxshi saqlash uchun, avvalo, tishni yotishdan oldin, ertalab va nonushtadan keyin yuvish shart.

Hozirgi kunda mutaxassislar agar kishi 3 mahal ovqat yesa, 3 marta tishni yuvish kerak degan fikrni oldinga suryapti. Aksariyat yevropaliklar buni odatga aylantirgan.

Men mijozlarimga hech bo‘lmaganda ikki mahal, ayniqsa, yotishdan oldin tishingizni yuving, deb tayinlayman. Sababi, masalan, odam yo‘q deganda 7 soat uxlaydi. Agar tish yuvilmasa, og‘iz bo‘shlig‘ida qolib ketgan ovqat qoldiqlari 7-8 soat ichida nimalar bo‘lmaydi deysiz?</b>
</div>
<div data-aos="zoom-in-left" data-aos-duration="1500" className="note__box">
  <b>
    <h3>Tishni davolatishdan oldin ichki faktorlarni yo‘q qiling</h3>
    <br />

Eng yomoni, bu tomoqqa ham ta’sir qiladi. Aksariyat odamlar ko‘p tomog‘i og‘riydigan, angina bo‘lib qoladi. Ularni kuzatsangiz, aksari yotishdan oldin tishini yuvmaydi.

Qo‘pol bo‘lsa ham aytaman, boylar oldinlari qul yoki ot, qo‘y olayotganda tishiga qarab olishgan. Chunki tishga qarab organizmning holatini bilishgan.

Bir kuni bir ayol qabulimga lingivid milklarini tozalatgani keldi. Ko‘p stomatologlarga borganini, ammo hech shifo topmayotgani haqida gapirdi. Tekshirtirdingizmi, desam, nimani tekshirtiraman, deb hayron bo‘ldi</b>
</div>
<div data-aos="zoom-in-right" data-aos-duration="1500" className="note__box2"></div>
<div data-aos="zoom-in-left" data-aos-duration="1500" className="note__box3"></div>
<div data-aos="zoom-in-right" data-aos-duration="1500" className="note__box">
  <b>
    <h3>Tish uchun bular foydali usul</h3>
    <br />
    Ftoridli tish pastasi yordamida kuniga ikki marta tishlaringizni yuving. Tishlaringiz va tilingizning barcha yuzalarini cho'tkalaganingizga ishonch hosil qilib, har safar kamida ikki daqiqa cho'tkalang.
    Tekshiruv va tozalash uchun tish shifokoringizga muntazam tashrif buyuring. Tish shifokoringiz og'iz bo'shlig'i bilan bog'liq har qanday muammolarni erta aniqlashi va kerak bo'lganda davolanishi mumkin.
    Bakteriyalarni o'ldirish va nafasingizni yangilash uchun og'iz yuvish vositasidan foydalaning. </b>
</div>
<div data-aos="zoom-in-left" data-aos-duration="1500" className="note__box">
  <b>
    <h3>Har 6 oyda shifokorga ko‘rining</h3>
<br />
Qabulimga 18-20 yoshlilar keladi. Aksariyatining tishi qolmagan. Aslida, 18 yoshda 28 ta tish bo‘lishi kerak. Borlarining ham kamida 20 ta tishida muammo bor. Bu degani yaxshi yuvmas ekan yaxshi parvarish qilmas ekan, degani emas.

To‘g‘ri, gigiyenani yaxshi ushlamagan, lekin asosiy sabab oshqozondan. Tishni davolatish bilan kasallikka sabab bo‘lgan ichki faktorlarni bartaraf qilgan ma’qul.

Odamlar tishida muammo bo‘lsa-bo‘lmasa, har olti oyda stomatologga kelib tekshirtirib turishlarini maslahat bergan bo‘lardim</b>
</div>
<div data-aos="zoom-in-right" data-aos-duration="1500" className="note__box4"></div>


    </div>




  </div>
  )
}

export default CareTeeth