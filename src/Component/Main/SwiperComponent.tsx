import React, { useState, useEffect } from 'react';
import styled from "styled-components";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/autoplay";
import { colors } from "../common/colors";
import Underdog from "../../Img/Underdog.png";
import { Dog } from '../common/interface';


export default function SwiperComponent() {
  const [underdogs, setUnderdogs] = useState<Dog[]>([]);

  useEffect(() => {
    fetchImageUrls().then(data => setUnderdogs(data.data));
  }, []);

  const fetchImageUrls = async () => {
    const response = await fetch('http://localhost:3001/underdogs');
    const data = await response.json();
    return data;
  };

  return (
    <SwiperSlider>
      <UnderdogImageLink to="/list">
        <UnderdogImage src={Underdog} />
      </UnderdogImageLink>
      <CustomSwiper
        modules={[Navigation, Autoplay]}
        slidesPerView={3}
        spaceBetween={5}
        navigation
        autoplay={{
          delay: 2000,
          disableOnInteraction: false
        }}
        loop={true}
        onSwiper={(Swiper) => console.log(Swiper)}
        onSlideChange={() => console.log('slide change')}
      >
        {underdogs.map((dog, index) => (
          <CustomerSwiperSlide key={index}>
            <img src={dog.img_url} alt={`Slide ${index}`} />
          </CustomerSwiperSlide>
          ))}
      </CustomSwiper>
    </SwiperSlider>
  );
}

 const SwiperSlider = styled.div`
   display: flex;
   align-items: center;
   justify-content: center;
   border: 15px solid ${colors.main};
   position: relative;
   width: 90%;
   height: 400px;
   top: 720px;
   bottom: 800px;
   margin-bottom: 160px;
   background-color: ${colors.sub};
   `;


const CustomSwiper = styled(Swiper)`
  width: 75%;
  height: 300px;
  position: absolute;
  left: 300px;
  margin-left: 30px;
  padding: 0 20px 0 20px;
  background-color: ${colors.sub};
  text-align: center;
  // z-index: 10;


  .swiper-button-prev, .swiper-button-next {
    transform: translateY(-50%);
    width: 15px;
    height: 15px;
    background-color: ${colors.w};
    color: ${colors.main};
    padding: 20px 20px;
    border-radius: 50px;
    font-size: 80px;
    margin-top: 0;
    position: absolute;
    top: 50%;
  }

  .swiper-button-prev {
    left: 2px;
 }

  .swiper-button-next {
    right: 2px;
   }

   .swiper-button-prev::after, .swiper-button-next::after {
     font-size: 32px !important;
     font-weight: 600 !important;
   }
  }
`

const CustomerSwiperSlide = styled(SwiperSlide)`
  img{
    width: 280px;
    height: 280px;
    border: 10px solid ${colors.w};
  }
`


const UnderdogImageLink = styled(Link)`
  text-decoraton: none;
  color: inherit;
`

const UnderdogImage = styled.img`
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 48px;
  left: 0rem;
  width: 20%;
  height: auto;
  z-index: 10;
`;
