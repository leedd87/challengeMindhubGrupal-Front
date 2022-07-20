import React from 'react';

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "../styles/styleHome.css";
// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";
//grid
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

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
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper"
        >
          <SwiperSlide><img src="https://static.nike.com/a/images/f_auto/dpr_1.0,cs_srgb/w_1824,c_limit/17f592ba-2059-427e-9130-39b08ab8bdb8/nike-sportswear.jpg" alt="f1" /></SwiperSlide>
          <SwiperSlide><img src="https://brand.assets.adidas.com/image/upload/f_auto,q_auto,fl_lossy/if_w_gt_1920,w_1920/esAR/Images/originals-ss22-parley-launch-hp-mh-large-GV7616-d_tcm216-854476.jpg" alt="img2" /></SwiperSlide>
          <SwiperSlide><img src="https://static-breeze.nike.co.kr/kr/ko_kr//cmsstatic/structured-content/65250/220624_jd_p1_bg.gif" alt="img3" /></SwiperSlide>

        </Swiper>
      </div>
      <div className='containerPopulares'>
        <h1 className='titlePopular'>POPULAR RIGHT NOW</h1>
        <div className='containerBoxPupular'>
          <div class="container">
            <div class="imgbox">
              <img src="https://i.ibb.co/t8w4YyL/nike.png" alt="Nike Air Max 270" title="Nike Air Max 270" />
            </div>
            <div class="content">
              <h2>Nike Air Max 270<span>Running Collection</span></h2>
            </div>
          </div>
          <div class="container">
            <div class="imgbox imgbox2">
              <img src="https://media.discordapp.net/attachments/998602282113445979/999392011771715644/adidas-removebg-preview.png" alt="Nike Air Max 270" title="Nike Air Max 270" />
            </div>
            <div class="content">
              <h2>Nike Air Max 270<span>Running Collection</span></h2>
            </div>
          </div>

          <div class="container">
            <div class="imgbox imgbox3">
              <img src="https://reactsport.herokuapp.com/img/productImages/shoe_newbalance_01.png" title="Nike Air Max 270" alt='img3' />
            </div>
            <div class="content">
              <h2>Nike Air Max 270<span>Running Collection</span></h2>
            </div>
          </div>
          {/* https://codepen.io/happydias/pen/LYpoxgR*/}
          {/* <div className='box'> 
          </div> 
          <div className='box'></div>
          <div className='box'></div>
          <div className='box'></div> */}

        </div>
      </div>
      <div className='containerGaleria'>
        <h1>Galeria</h1>
        {/* <div className='containerBoxGaleria'>
          <div className='box b1'></div>
          <div className='box b2'></div>
          <div className='box b3'></div>
          <div className='box b4'></div>

        </div> */}
        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={2}>
            <Grid item xs={6} md={6}>
              <Item className='gridImg1' >

              </Item>
            </Grid>
            <Grid item xs={6} md={6}>
              <Item className='gridImg2'>

              </Item>
            </Grid>
            <Grid item xs={6} md={4}>
              <Item className='gridImg3'>

              </Item>
            </Grid>
            <Grid item xs={6} md={8}>
              <Item className='gridImg4'>

              </Item>
            </Grid>
          </Grid>
        </Box>

      </div>
      <div>

      </div>
      {/* <div className='cardShop'>
      <div id="container">
        <article id="card">
          <header>
            <img
              id="nikeLogo" src="https://wallpapercave.com/wp/CgjGnw0.jpg" alt="" />
            <span id="nike" class="subhead">Nike</span>
          </header>
          <img id="shoe" src="https://image-cdn.hypb.st/https%3A%2F%2Fhypebeast.com%2Fimage%2F2020%2F02%2Fnike-top-10-best-selling-sneakers-list-2019-0-tw.jpg?w=960&cbr=1&q=90&fit=max" alt="" />
          <section>
            <div id="description">
              <span id="retail" class="subhead">Retail</span><span id="time" class="faded">2d ago</span>
            </div>
            <div id="location">
              <img src="https://image.flaticon.com/icons/svg/64/64113.svg" alt="" />
              <span class="faded">North America</span>
            </div>
            <div id="tags">
              <ul>
                <li>Advertising</li>
                <li>Widget</li>
              </ul>
            </div>
          </section>
          <footer>
            <p>Description</p>
            <p class="faded">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur omnis excepturi perferendis quasi labore architecto...</p>
          </footer>
        </article>
      </div>

      <div id="container">
        <article id="card">
          <header>
            <img
              id="nikeLogo" src="https://wallpapercave.com/wp/CgjGnw0.jpg" alt="" />
            <span id="nike" class="subhead">Nike</span>
          </header>
          <img id="shoe" src="https://image-cdn.hypb.st/https%3A%2F%2Fhypebeast.com%2Fimage%2F2020%2F02%2Fnike-top-10-best-selling-sneakers-list-2019-0-tw.jpg?w=960&cbr=1&q=90&fit=max" alt="" />
          <section>
            <div id="description">
              <span id="retail" class="subhead">Retail</span><span id="time" class="faded">2d ago</span>
            </div>
            <div id="location">
              <img src="https://image.flaticon.com/icons/svg/64/64113.svg" alt="" />
              <span class="faded">North America</span>
            </div>
            <div id="tags">
              <ul>
                <li>Advertising</li>
                <li>Widget</li>
              </ul>
            </div>
          </section>
          <footer>
            <p>Description</p>
            <p class="faded">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur omnis excepturi perferendis quasi labore architecto...</p>
          </footer>
        </article>
      </div>
      <div id="container">
        <article id="card">
          <header>
            <img
              id="nikeLogo" src="https://wallpapercave.com/wp/CgjGnw0.jpg" alt="" />
            <span id="nike" class="subhead">Nike</span>
          </header>
          <img id="shoe" src="https://image-cdn.hypb.st/https%3A%2F%2Fhypebeast.com%2Fimage%2F2020%2F02%2Fnike-top-10-best-selling-sneakers-list-2019-0-tw.jpg?w=960&cbr=1&q=90&fit=max" alt="" />
          <section>
            <div id="description">
              <span id="retail" class="subhead">Retail</span><span id="time" class="faded">2d ago</span>
            </div>
            <div id="location">
              <img src="https://image.flaticon.com/icons/svg/64/64113.svg" alt="" />
              <span class="faded">North America</span>
            </div>
            <div id="tags">
              <ul>
                <li>Advertising</li>
                <li>Widget</li>
              </ul>
            </div>
          </section>
          <footer>
            <p>Description</p>
            <p class="faded">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur omnis excepturi perferendis quasi labore architecto...</p>
          </footer>
        </article>
      </div>
      </div> */}
      <div class="footerLogo">
        <div class="containerLogos">
          <Swiper
            slidesPerView={1}
            spaceBetween={10}
            pagination={{
              clickable: true,
            }}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            breakpoints={{
              "@0.00": {
                slidesPerView: 1,
                spaceBetween: 10,
              },
              "@0.75": {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              "@1.00": {
                slidesPerView: 3,
                spaceBetween: 40,
              },
              "@1.50": {
                slidesPerView: 4,
                spaceBetween: 50,
              },
            }}
            modules={[Autoplay]}
            className="mySwiper"
          >
            <SwiperSlide><img className='logosImg' src="https://thesneakershopgp.com/media/catalog/category/ADIDAS_136x136.jpg" alt="" /></SwiperSlide>
            <SwiperSlide><img className='logosImg' src="https://thesneakershopgp.com/media/catalog/category/ASICS_136x136_2_1_.jpg" alt="" /></SwiperSlide>
            <SwiperSlide><img className='logosImg' src="https://thesneakershopgp.com/media/catalog/category/converse_136x136_1_.jpg" alt="" /></SwiperSlide>
            <SwiperSlide><img className='logosImg' src="https://thesneakershopgp.com/media/catalog/category/CROCS_logo_136x136.jpg" alt="" /></SwiperSlide>
            <SwiperSlide><img className='logosImg' src="https://thesneakershopgp.com/media/catalog/category/FILA_136x136_2.jpg" alt="" /></SwiperSlide>
            <SwiperSlide><img className='logosImg' src="https://thesneakershopgp.com/media/catalog/category/new_balance_136X136.jpg" alt="" /></SwiperSlide>
            <SwiperSlide><img className='logosImg' src="https://thesneakershopgp.com/media/catalog/category/NIKE_136x136_2_1_1_.jpg" alt="" /></SwiperSlide>
            <SwiperSlide><img className='logosImg' src="https://thesneakershopgp.com/media/catalog/category/PUMA_136X136.jpg" alt="" /></SwiperSlide>
            <SwiperSlide><img className='logosImg' src="https://thesneakershopgp.com/media/catalog/category/reebok_logo_136x136_1_.jpg" alt="" /></SwiperSlide>
            <SwiperSlide><img className='logosImg' src="https://thesneakershopgp.com/media/catalog/category/Timberland_136x136_1_.jpg" alt="" /></SwiperSlide>
            <SwiperSlide><img className='logosImg' src="https://thesneakershopgp.com/media/catalog/category/Vans_136X136_1_.jpg" alt="" /></SwiperSlide>
          </Swiper>
          {/* <ul>
            <li>
            
              <a href="https://sneakerlinks.com/brand/adidas/">
                <img src="https://sneakerlinks.com/wp-content/uploads/2019/08/addidas.png" alt="" />
              </a>
            </li>
            <li>
              <a href="https://sneakerlinks.com/brand/asics/">
                <img src="https://sneakerlinks.com/wp-content/uploads/2019/08/asics.png" alt="" />
              </a>
            </li>
            <li>
              <a href="https://sneakerlinks.com/brand/jordan/">
                <img src="https://sneakerlinks.com/wp-content/uploads/2019/08/jordan.png" alt="" />
              </a>
            </li>
            <li>
              <a href="https://sneakerlinks.com/brand/nike/">
                <img src="https://sneakerlinks.com/wp-content/uploads/2019/08/nike.png" alt="" />
              </a></li>
            <li>
              <a href="https://sneakerlinks.com/brand/reebok/">
                <img src="https://sneakerlinks.com/wp-content/uploads/2019/08/reebok.png" alt="" />
              </a></li>
            <li>
              <a href="https://sneakerlinks.com/brand/under-armour/">
                <img src="https://sneakerlinks.com/wp-content/uploads/2019/08/under_armour.png" alt="" />
              </a></li>
            <li><a href="https://sneakerlinks.com/brand/vans/">
              <img src="https://sneakerlinks.com/wp-content/uploads/2019/08/vans.png" alt="" />
            </a></li>
          </ul> */}
        </div>
      </div>
    </>
  )
}
export default Home