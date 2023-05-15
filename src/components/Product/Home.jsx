import React from 'react'
import newMexico from "D:/makers courses/REACT/gotravelsite/src/assets/video/NewMexico_3.mp4"
import "../styles/Home.css"
const Home = () => {
  return (
    <>
    <div>
    <div className="main-container">
      <div className="video-cont">
      <video style={{width:"100%"}}  controls 
        autoPlay 
        loop  muted playsInline
        poster='https://lonelyplanetstatic.imgix.net/marketing/2023/BIT/images/hero-poster/NewMexico_3.jpg'
      >
        <source src={newMexico} type="video/mp4" />
      </video>
      </div>
      <div className='item'>
        <div className="item-title">
        <h1>OPEN YOUR EYES</h1>
        <h4>"Kyrgyzstan is a Paradise For the Eyes"</h4>
        <p>Discover something new...</p>
        <div className="icon"><img style={{width: "100px", height:"100px", margin:" 0 auto"}} src="https://cdn-icons-png.flaticon.com/512/3284/3284377.png" alt="icon" /></div>


        </div>
      </div>
      
      </div>
{/* 2page */}

      <div className='otzyv-video-case'>
        <div>
        <img className='otzyv-img' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6NJFXl3bZBoF6od4X1VdsYtsz7MpzU-GRDQ&usqp=CAU'/>
        </div>
        <h1>Go Travel!</h1>
      <p>Станьте активной частью этого сообщества! Мы приветствуем любую деятельность, связанную с передачей вашего туристического опыта. Пишите рассказы о ваших путешествиях, делитесь мнениями о городах, странах и достопримечательностях. Создавайте фотоальбомы и их увидят тысячи заинтересованных пользователей. Получайте ответы на любые вопросы, связанные с путешествиями, и отвечайте на них сами.

Помните, что вы находитесь среди единомышленников, выбравших для себя увлекательнейший путь самостоятельного туризма. Наши пользователи всегда помогают друг другу, общаются не только в виртуальной среде, но и устраивают совместные встречи за ее пределами.</p>
    </div>

 


      {/* 3page */}
      <div style={{display: "flex"}} className="total__image">
    <div   className="image-case">
<img style={{width: "100%", height:"100%"}} src="https://celes.club/uploads/posts/2022-05/1651710328_42-celes-club-p-priroda-kirgizii-krasivo-foto-45.jpg" alt="poster" />
<div className="text-case">
<p>Лучшие локации</p><h1 style={{fontSize: "64px"}}>2023</h1>
</div>

</div>
<div className="image-case">
<img style={{width: "100%", height:"100%"}} src="https://www.advantour.com/img/kazakhstan/culture/kazakhstan-culture-yurt.jpg" alt="poster" />
<div className="text-case">
<p>Окунись в традиции <br/> вместе  с нами</p>
<h3>
  История и традиции Кыргызстана всегда с нами ....
</h3>
</div>
</div>
<div   className="image-case">
<img style={{width: "100%", height:"100%"}} src="https://img.geliophoto.com/bishkek/00_bishkek.jpg" alt="poster" />
<div className="text-case">
<p>Откройте другую <br/> сторону КР</p>
<h3>Оказавшись в ночном Бишкеке вы попадаете в совсем другое пространство...
</h3>
</div>

</div>
    </div>
    </div>
    </>
  )
}

export default Home;