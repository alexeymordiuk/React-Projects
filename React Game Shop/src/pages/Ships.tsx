import Header from "../Components/Header";
import ShipsSlider from "../Components/ShipsSlider";
import { shipsClass } from "../dates/Starships/SliderShips";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import styles from "../scss/shipspage/ShipsAbout.module.scss";
import { Navigation } from "swiper";
import bg from "../img/starships/bg2.png";

const Ships: React.FC = () => {
  return (
    <>
      <Header />
      <div style={{ backgroundImage: `url(${bg})` }} className={styles.bg}>
        <Swiper
          navigation={true}
          modules={[Navigation]}
          spaceBetween={50}
          className={styles.container}
        >
          {shipsClass.map((obj: any) => (
            <SwiperSlide key={obj.id}>
              <ShipsSlider key={obj.id} {...obj} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
};

export default Ships;
