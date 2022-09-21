import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay } from "swiper";

function Swipers() {
  return (
    <Swiper
      className=" bg-bl1 border border-neutral-800 max-w-379 "
      slidesPerView={1}
      pagination={{
        clickable: true,
      }}
      autoplay={{ delay: 2500, disableOnInteraction: false }}
      loop={true}
      modules={[Autoplay, Pagination]}
    >
      <SwiperSlide>Slide 1</SwiperSlide>
      <SwiperSlide>Slide 2</SwiperSlide>
      <SwiperSlide>Slide 3</SwiperSlide>
      <SwiperSlide>Slide 4</SwiperSlide>
      <SwiperSlide>Slide 5</SwiperSlide>
      <SwiperSlide>Slide 6</SwiperSlide>
      <SwiperSlide>Slide 7</SwiperSlide>
      <SwiperSlide>Slide 8</SwiperSlide>
      <SwiperSlide>Slide 9</SwiperSlide>
    </Swiper>
  );
}

export default Swipers;
