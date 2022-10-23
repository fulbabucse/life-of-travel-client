import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "../style.css";

// import required modules
import { Pagination, Navigation } from "swiper";
import { useEffect } from "react";
import { Link } from "react-router-dom";

const InternationalCarousel = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const url = `http://localhost:5000/international`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setCategories(data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <>
      <Swiper
        slidesPerView={1}
        spaceBetween={10}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 4,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 5,
            spaceBetween: 50,
          },
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        {categories.map((category) => (
          <SwiperSlide key={category.id} className="package">
            <Link to={`/international/${category.id}`}>
              <img src={category.img} alt={category.category} />
            </Link>
            <Link className="text-white" to={`/category/${category.id}`}>
              {category.category}
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default InternationalCarousel;
