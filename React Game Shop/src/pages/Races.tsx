import React from "react";
import Header from "../Components/Header";
import RacesInfo from "../Components/RacesInfo";
import { races } from "../dates/Races/races";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import bg from "../img/races/3.png";
import styles from "../scss/racespage/Races.module.scss";

const Races: React.FC = () => {
  return (
    <>
      <Header />
      <section className={styles.wrapper} style={{ backgroundImage: `url(${bg})` }}>
        <Swiper
          navigation={true}
          modules={[Navigation, Pagination, Autoplay]}
          autoplay={{ 
            delay: 2500,
          }}
          spaceBetween={50}
          className={styles.container}
        >
          {races.map((obj: any) => (
            <SwiperSlide key={obj.id}>
              <RacesInfo key={obj.id} {...obj} />
            </SwiperSlide>
          ))}
        </Swiper>
      </section>
    </>
  );
};

export default Races;
