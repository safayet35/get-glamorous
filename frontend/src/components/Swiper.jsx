import React, { useRef, useState, useEffect } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import productItems from "../api/productItems.json";
import Ratings from "./Ratings.jsx";
import ListItems from "./ListItems.jsx";
import Button from "./Button.jsx";
// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/autoplay";
import "swiper/css/thumbs";

import "../styles.css";

// import required modules
import { FreeMode, Navigation, Thumbs, Autoplay } from "swiper/modules";

export default function SwiperBox({
  packageNumber,
  title,
  ratings,
  data,
  images,
  list,
  originalPrice,
  discountPrice,
  discountParcent
}) {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  return (
    <>
      <Swiper
        style={{
          "--swiper-navigation-color": "#fff",
          "--swiper-pagination-color": "#fff"
        }}
        loop={true}
        spaceBetween={10}
        navigation={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: true
        }}
        thumbs={{ swiper: thumbsSwiper }}
        modules={[FreeMode, Navigation, Thumbs, Autoplay]}
        className="mySwiper2"
      >
        {images.map((items, index) => {
          return (
            <SwiperSlide key={index}>
              <img src={items} />
            </SwiperSlide>
          );
        })}
      </Swiper>
      <Swiper
        onSwiper={setThumbsSwiper}
        loop={true}
        spaceBetween={10}
        slidesPerView={4}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper"
      >
        {images.map((items, index) => {
          return <SwiperSlide key={index}>{<img src={items} />}</SwiperSlide>;
        })}
        <div className="px-2 py-3 flex gap-2  items-center justify-between">
          <div className="text-2xl">
            <p>
              {discountPrice}
              <del className="text-red-500">{originalPrice}</del>
            </p>
            <p className="text-sm text-secondary">
              {discountParcent} পর্যন্ত ছাড়
            </p>
          </div>
          <div className="text-[10px]">
            <Ratings />
            <p className="to-primary font-bangla">{ratings}</p>
          </div>
        </div>
        <h1 className="my-2 text-primary text-2xl font-bangla">
          <span className=" block underline my-1">{packageNumber}</span>
          {title}
        </h1>
        <ListItems list={list} />
      </Swiper>
    </>
  );
}
