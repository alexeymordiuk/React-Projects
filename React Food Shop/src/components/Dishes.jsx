import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";

import styles from "../scss/Dishes.module.scss";

const dishes = [
  {
    id: 2,
    img: "img/slider2/3.png",
  },
  {
    id: 3,
    img: "img/slider2/4.png",
  },
  {
    id: 4,
    img: "img/slider2/5.png",
  },
  {
    id: 5,
    img: "img/slider2/6.png",
  },
];

const Dishes = () => {
  return (
    <section className={styles.dishes}>
      <h2>Photo of dishes</h2>
      <>
        <Swiper
          slidesPerView={4}
          spaceBetween={0}
          slidesPerGroup={1}
          loop={true}
          pagination={{ clickable: true }}
          modules={[Pagination]}
          breakpoints={{
            400: {
              slidesPerView: 1,
            },
            800: {
              slidesPerView: 3,
            },
            1000: {
                slidesPerView: 3,
            },
            1200: {
                slidesPerView: 3,
            },
            1500: {
              slidesPerView: 4,
            },
            1800: {
              slidesPerView: 4,
            }
          }}
          className={styles.container}
        >
          {dishes.map(({ id, img }, i) => {
            return (
              <SwiperSlide key={id} className={styles.inner}>
                <div>
                  <img src={img} alt="slide" className={styles.slide} />
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </>
    </section>
  );
};

export default Dishes;
