import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./style.css";

// import required modules
import { Pagination, Navigation } from "swiper";
import { useEffect } from "react";
import { Link } from "react-router-dom";

const SliderSwiper = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const url = `http://localhost:5000/categories`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setCategories(data))
      .catch((err) => console.error(err));
  }, []);

  console.log(categories);

  return (
    <>
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        slidesPerGroup={3}
        loop={true}
        loopFillGroupWithBlank={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        {categories.map((category) => (
          <SwiperSlide key={category.id} className="package">
            <Link to={`/category/${category.id}`}>
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

export default SliderSwiper;
