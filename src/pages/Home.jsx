import React from 'react';
import { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "../styles/styleHome.css";

// import required modules
import { Pagination, Navigation } from "swiper";


const Home = () => {
  return (
    <>
      <div className='carouselHome'>

        <Swiper
          slidesPerView={1}
          spaceBetween={30}
          loop={true}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Pagination, Navigation]}
          className="mySwiper"
        >
          <SwiperSlide><img src="https://res.cloudinary.com/hdsdev/image/upload/c_fill,f_auto,g_center,h_1080,q_70,w_1920/v1/smooth-webspecial/assets/apparel/22SS_RT_Run-Puma_Velocity-Nitro-2-Fizzy-Light-Nitro-Blue_Q1_0821" alt="f1" /></SwiperSlide>
          <SwiperSlide><img src="https://brand.assets.adidas.com/image/upload/f_auto,q_auto,fl_lossy/if_w_gt_1920,w_1920/esAR/Images/originals-ss22-parley-launch-hp-mh-large-GV7616-d_tcm216-854476.jpg" alt="img2" /></SwiperSlide>
          <SwiperSlide><img src="https://cdn.shopify.com/s/files/1/0558/4169/products/WhiteCFG22TrainerConcrete_Low__05-06-20223_Web_1.jpg?v=1657044458" alt="img3" /></SwiperSlide>

        </Swiper>
      </div>
      <div className='containerPopulares'>
        <h1>POPULAR RIGHT NOW</h1>
        <div className='containerBoxPupular'>
          <div className='box'></div>
          <div className='box'></div>
          <div className='box'></div>
          <div className='box'></div>

        </div>
      </div>
      <div className='containerGaleria'>
        <h1>Galeria</h1>
        <div className='containerBoxGaleria'>
          <div className='box b1'></div>
          <div className='box b2'></div>
          <div className='box b3'></div>
          <div className='box b4'></div>

        </div>
      </div>

      <div class="footerLogo">
        <div class="containerLogos">
          <ul>
            <li>
              <a href="https://sneakerlinks.com/brand/adidas/">
                <img src="https://sneakerlinks.com/wp-content/uploads/2019/08/addidas.png" alt="" />
              </a>
            </li>
            <li>
              <a href="https://sneakerlinks.com/brand/asics/">
                <img src="https://sneakerlinks.com/wp-content/uploads/2019/08/asics.png" alt=""/>
              </a>
            </li>
            <li>
              <a href="https://sneakerlinks.com/brand/jordan/">
                <img src="https://sneakerlinks.com/wp-content/uploads/2019/08/jordan.png" alt=""/>
              </a>
            </li>
            <li>
              <a href="https://sneakerlinks.com/brand/nike/">
                <img src="https://sneakerlinks.com/wp-content/uploads/2019/08/nike.png" alt=""/>
              </a></li>
            <li>
              <a href="https://sneakerlinks.com/brand/reebok/">
                <img src="https://sneakerlinks.com/wp-content/uploads/2019/08/reebok.png" alt=""/>
              </a></li>
            <li>
              <a href="https://sneakerlinks.com/brand/under-armour/">
                <img src="https://sneakerlinks.com/wp-content/uploads/2019/08/under_armour.png" alt=""/>
              </a></li>
            <li><a href="https://sneakerlinks.com/brand/vans/">
              <img src="https://sneakerlinks.com/wp-content/uploads/2019/08/vans.png" alt=""/>
            </a></li>
          </ul>
        </div>
      </div>
    </>
  )
}
export default Home