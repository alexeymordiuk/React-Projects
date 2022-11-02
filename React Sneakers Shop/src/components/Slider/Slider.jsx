import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from 'swiper';
import './slider.scss'

const Slider = () => {
	return (
		<>
			<Swiper
				modules={[Navigation]}
				pagination={{ clickable: true }}
				scrollbar={{ draggable: true }}
				loop={true}
				navigation
				className="mySwiper cu-p">
				<SwiperSlide><img src="/img/slider/slider1.jpg" alt="slide1" /></SwiperSlide>
				<SwiperSlide><img src="/img/slider/slider2.jpg" alt="slide2" /></SwiperSlide>
				<SwiperSlide><img src="/img/slider/slider3.jpg" alt="slide2" /></SwiperSlide>
			</Swiper>
		</>
	)
}

export default Slider