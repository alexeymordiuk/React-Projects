import React from "react";
import { images } from "../dates/Gallery/gallery";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper";
import styles from "../scss/Gallery.module.scss";
import "swiper/css";
import "swiper/css/pagination";
import bg from '../img/gallery/slidebg.png'

const Gallery: React.FC = () => {
  return (
    <section className={styles.main}  style={{ backgroundImage: `url(${bg})` }}>
      <h2>Gallery</h2>
      <Swiper
        pagination={true}
        modules={[Pagination, Autoplay]}
        spaceBetween={50}
        autoplay={{ 
          delay: 2500,
        }}
        className={styles.container}
      >
        {images.map(({ id, img }) => (
          <SwiperSlide
            key={id}
            style={{ backgroundImage: `url(${img})` }}
            className={styles.bg}
          ></SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Gallery;
