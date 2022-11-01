import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import styles from "../scss/Slider.module.scss";

import { Pagination } from "swiper";

const sliderDate = [
  {
    id: 0,
    title: "Detox program - delicious cleansing of the body",
    subtitle: "8 bottles of natural smoothies and fresh juices.",
    buttonText: "Order",
    trial: "Trial day total:",
    price: 427,
    img: "img/slider/slide1.png",
  },
  {
    id: 1,
    title: "Nutrition service. Get thin fast!",
    buttonText: "Order",
    trial: "Trial day total:",
    price: "-30%",
    img: "img/slider/slide3.png",
  },
  {
    id: 2,
    title: "Trust the professionals.I am Kobylinskiy Kirill - the founder.",
    subtitle:
      "Master of Sports of Ukraine in weightlifting. Higher education of the Institute of Physical Education (Nufvsu).",
    buttonText: "My instagram",
    trial: "Always open to clients",
    img: "img/slider/slide2.png",
  },
];

const Slider = () => {
  window.scrollTo(0,0);
  return (
    <section className={styles.next}>
      <Swiper
        spaceBetween={50}
        pagination={{ clickable: true }}
        modules={[Pagination]}
        className={styles.container}
      >
        {sliderDate.map(
          ({ id, title, subtitle, buttonText, trial, price, img }, i) => {
            return (
              <SwiperSlide  key={id}>
                <div className={styles.inner}>
                  <div className={styles.content}>
                    <h1>{title}</h1>
                    <p>
                      {subtitle}
                    </p>
                    <div className={styles.trial}>
                      <a href="/" className={styles.btn_primary}>
                        {buttonText}
                      </a>
                      <div>
                        <p>{trial}</p>
                        <small>{price}</small>
                      </div>
                    </div>
                  </div>
                  <div className={styles.left}>
                    <div className={styles.circle}>
                      <img
                        src={img}
                        alt="slide"
                        className={styles.image}
                      />
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            );
          }
        )}
      </Swiper>
    </section>
  );
};

export default Slider;
