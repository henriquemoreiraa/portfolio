import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay } from "swiper";
import "../proj.css";
import "aos/dist/aos.css";

function SlideProj() {
  return (
    <>
      <p className="mt-32 fbn text-xl px-3">OTHER PROJECTS</p>
      <div className="tablet:block hidden">
        <Swiper
          data-aos="fade-up"
          slidesPerView={2}
          pagination={{
            clickable: true,
          }}
          autoplay={{ delay: 2500, disableOnInteraction: false }}
          loop={true}
          modules={[Autoplay, Pagination]}
          className="mySwiper bg-purple-400 h-60 w-full "
        >
          <SwiperSlide className="imgp proj4">
            <a
              href="https://github.com/henriquemoreiraa/twitch-api"
              target={"_blank"}
            >
              <div className="h-full w-full bg-bl2 hover:bg-transparent"></div>
            </a>
          </SwiperSlide>
          <SwiperSlide className="imgp proj5 ">
            <a href="https://weather-api-inky.vercel.app" target={"_blank"}>
              <div className="h-full w-full bg-bl2 hover:bg-transparent"></div>
            </a>
          </SwiperSlide>
          <SwiperSlide className="imgp proj7 ">
            <a
              href="https://github.com/henriquemoreiraa/random-quote-app"
              target={"_blank"}
            >
              <div className="h-full w-full bg-bl2 hover:bg-transparent"></div>
            </a>
          </SwiperSlide>
          <SwiperSlide className="imgp proj8">
            <a
              href="https://github.com/henriquemoreiraa/calculator-app"
              target={"_blank"}
            >
              <div className="h-full w-full bg-bl2 hover:bg-transparent"></div>
            </a>
          </SwiperSlide>
          <SwiperSlide className="imgp proj9 ">
            <a
              href="https://github.com/henriquemoreiraa/drum-machine-app"
              target={"_blank"}
            >
              <div className="h-full w-full bg-bl2 hover:bg-transparent"></div>
            </a>
          </SwiperSlide>
          <SwiperSlide className="imgp proj6">
            <a
              href="https://membersonlyriqi.herokuapp.com/login"
              target={"_blank"}
            >
              <div className="h-full w-full bg-bl2 hover:bg-transparent"></div>
            </a>
          </SwiperSlide>
          <SwiperSlide className="imgp proj10">
            <a
              href="https://github.com/henriquemoreiraa/markdown-previewer-app"
              target={"_blank"}
            >
              <div className="h-full w-full bg-bl2 hover:bg-transparent"></div>
            </a>
          </SwiperSlide>
          <SwiperSlide className="imgp proj11 ">
            <a
              href="https://github.com/henriquemoreiraa/wikipedia-api"
              target={"_blank"}
            >
              <div className="h-full w-full bg-bl2 hover:bg-transparent"></div>
            </a>
          </SwiperSlide>
        </Swiper>
        <p className="underline mt-10 fbn text-xl text-center ">
          <a
            href="https://github.com/henriquemoreiraa?tab=repositories"
            target={"_blank"}
            className="cursor-pointer"
          >
            SEE <span className="text-red1">MORE </span>
          </a>
        </p>
      </div>
      <div className="tablet:hidden block">
        <Swiper
          data-aos="fade-up"
          slidesPerView={1}
          pagination={{
            clickable: true,
          }}
          autoplay={{ delay: 2500, disableOnInteraction: false }}
          loop={true}
          modules={[Autoplay, Pagination]}
          className="mySwiper bg-purple-400 h-60 w-4/5 "
        >
          <SwiperSlide className="imgp proj4">
            <a
              href="https://github.com/henriquemoreiraa/twitch-api"
              target={"_blank"}
            >
              <div className="h-full w-full bg-bl2 hover:bg-transparent"></div>
            </a>
          </SwiperSlide>
          <SwiperSlide className="imgp proj5 ">
            <a href="https://weather-api-inky.vercel.app" target={"_blank"}>
              <div className="h-full w-full bg-bl2 hover:bg-transparent"></div>
            </a>
          </SwiperSlide>
          <SwiperSlide className="imgp proj7 ">
            <a
              href="https://github.com/henriquemoreiraa/random-quote-app"
              target={"_blank"}
            >
              <div className="h-full w-full bg-bl2 hover:bg-transparent"></div>
            </a>
          </SwiperSlide>
          <SwiperSlide className="imgp proj8">
            <a
              href="https://github.com/henriquemoreiraa/calculator-app"
              target={"_blank"}
            >
              <div className="h-full w-full bg-bl2 hover:bg-transparent"></div>
            </a>
          </SwiperSlide>
          <SwiperSlide className="imgp proj9 ">
            <a
              href="https://github.com/henriquemoreiraa/drum-machine-app"
              target={"_blank"}
            >
              <div className="h-full w-full bg-bl2 hover:bg-transparent"></div>
            </a>
          </SwiperSlide>
          <SwiperSlide className="imgp proj6">
            <a
              href="https://membersonlyriqi.herokuapp.com/login"
              target={"_blank"}
            >
              <div className="h-full w-full bg-bl2 hover:bg-transparent"></div>
            </a>
          </SwiperSlide>
          <SwiperSlide className="imgp proj10">
            <a
              href="https://github.com/henriquemoreiraa/markdown-previewer-app"
              target={"_blank"}
            >
              <div className="h-full w-full bg-bl2 hover:bg-transparent"></div>
            </a>
          </SwiperSlide>
          <SwiperSlide className="imgp proj11 ">
            <a
              href="https://github.com/henriquemoreiraa/wikipedia-api"
              target={"_blank"}
            >
              <div className="h-full w-full bg-bl2 hover:bg-transparent"></div>
            </a>
          </SwiperSlide>
        </Swiper>
        <p className="underline mt-10 fbn text-xl text-center ">
          <a
            href="https://github.com/henriquemoreiraa?tab=repositories"
            target={"_blank"}
            className="cursor-pointer"
          >
            SEE <span className="text-red1">MORE </span>
          </a>
        </p>
      </div>
    </>
  );
}

export default SlideProj;
