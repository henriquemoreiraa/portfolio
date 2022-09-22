import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay } from "swiper";
import {
  FaAws,
  FaBriefcase,
  FaCode,
  FaComment,
  FaCss3,
  FaDesktop,
  FaDocker,
  FaFigma,
  FaFolder,
  FaFolderOpen,
  FaHtml5,
  FaNodeJs,
  FaPersonBooth,
  FaReact,
  FaServer,
} from "react-icons/fa";
import { MdOutlinePhonelink, MdOutlineDevicesOther } from "react-icons/md";
import { IoLogoJavascript, IoPerson } from "react-icons/io5";
import {
  SiAboutdotme,
  SiCss3,
  SiExpress,
  SiGraphql,
  SiMongodb,
  SiNextdotjs,
  SiPostgresql,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";

type Props = {
  s: Number;
};

function Swipers({ s }: Props) {
  return (
    <Swiper
      className=" bg-bl1 border border-neutral-800 max-w-379 h-40 "
      slidesPerView={1}
      pagination={{
        clickable: true,
      }}
      autoplay={{ delay: 2500, disableOnInteraction: false }}
      loop={true}
      modules={[Autoplay, Pagination]}
    >
      {s ? (
        <>
          <SwiperSlide className="p-3 font-light">
            <h1 className="flex items-center">
              <FaCode size={"2em"} color={"#f35151"} />
              <p className="ml-3 ">Clean Code</p>
            </h1>
            <p className="mt-3 pl-1 text-neutral-300">
              I develop clean code for better{" "}
              <span className="text-red1">
                understanding and maintainability
              </span>
            </p>
          </SwiperSlide>
          <SwiperSlide className="p-3 font-light">
            <h1 className="flex items-center">
              <MdOutlinePhonelink size={"2em"} color={"#f35151"} />
              <p className="ml-3 ">Responsive Design</p>
            </h1>
            <p className="mt-3 pl-1 text-neutral-300">
              I develop responsive web pages for{" "}
              <span className="text-red1">any screen sizes</span>
            </p>
          </SwiperSlide>
          <SwiperSlide className="p-3 font-light">
            <h1 className="flex items-center">
              <FaDesktop size={"2em"} color={"#f35151"} />
              <p className="ml-3 ">Front end</p>
            </h1>
            <p className="mt-4 mr-3 flex items-center justify-evenly text-neutral-300">
              <FaHtml5 size={"2.3em"} className={"hover:text-html"} />
              <SiCss3 size={"2em"} className={"hover:text-css"} />
              <IoLogoJavascript size={"2.3em"} className={"hover:text-js"} />
              <SiTypescript size={"2.0em"} className={"hover:text-ts"} />
              <FaReact size={"2.3em"} className={"hover:text-react"} />
              <SiNextdotjs size={"2.3em"} className={"hover:text-white"} />
              <SiTailwindcss size={"2.3em"} className={"hover:text-react"} />
            </p>
          </SwiperSlide>
          <SwiperSlide className="p-3 font-light">
            <h1 className="flex items-center">
              <FaServer size={"2em"} color={"#f35151"} />
              <p className="ml-3 ">Back end</p>
            </h1>
            <p className="mt-4 mr-3 flex items-center justify-evenly text-neutral-300">
              <FaNodeJs size={"2.3em"} className="hover:text-green-500" />
              <SiExpress size={"2.3em"} className="hover:text-white" />
              <SiPostgresql size={"2.3em"} className="hover:text-blue-400" />
              <SiMongodb size={"2.3em"} className="hover:text-green-500" />
              <SiGraphql size={"2.3em"} className="hover:text-pink-500" />
            </p>
          </SwiperSlide>
          <SwiperSlide className="p-3 font-light">
            <h1 className="flex items-center">
              <MdOutlineDevicesOther size={"2em"} color={"#f35151"} />
              <p className="ml-3 ">Others</p>
            </h1>
            <p className="mt-4 mr-3 flex items-center justify-evenly text-neutral-300">
              <FaDocker size={"2.3em"} className={"hover:text-blue-500"} />
              <FaAws size={"2.3em"} className={"hover:text-white"} />
              <FaFigma size={"2.0em"} className={"hover:text-red1"} />
            </p>
          </SwiperSlide>
        </>
      ) : (
        <>
          <SwiperSlide className="p-3 font-light">
            <h1 className="flex items-center">
              <FaBriefcase size={"1.8em"} color={"#f35151"} />
              <p className="ml-3 ">Experience</p>
            </h1>
            <p className="mt-3 text-neutral-300 flex items-center">
              <span className="text-red1 text-6xl font-semibold mr-2">+1</span>{" "}
              years of experience in software development
            </p>
          </SwiperSlide>
          <SwiperSlide className="p-3 font-light">
            <h1 className="flex items-center">
              <FaFolderOpen size={"1.8em"} color={"#f35151"} />
              <p className="ml-3 ">Projects</p>
            </h1>
            <p className="mt-3 text-neutral-300 flex items-center">
              <span className="text-red1 text-6xl font-semibold mr-2">+20</span>{" "}
              projects made it so far
            </p>
          </SwiperSlide>
          <SwiperSlide className="p-3 font-light">
            <h1 className="flex items-center">
              <FaComment size={"1.9em"} color={"#f35151"} />
              <p className="ml-3 ">Idioms</p>
            </h1>
            <p className="mt-3 pl-1 text-neutral-300">English - Fluent</p>
            <p className=" pl-1 text-neutral-300">French - Basic</p>
            <p className=" pl-1 text-neutral-300">Portuguese - Native</p>
          </SwiperSlide>
          <SwiperSlide className="p-3 font-light">
            <h1 className="flex items-center">
              <IoPerson size={"1.9em"} color={"#f35151"} />
              <p className="ml-3 ">Soft Skills</p>
            </h1>
            <p className="mt-3 pl-1 text-neutral-300">1. Positive attitude</p>
            <p className=" pl-1 text-neutral-300">2. Problem solving</p>
            <p className=" pl-1 text-neutral-300">3. Team work</p>
          </SwiperSlide>
          <SwiperSlide className="p-3 font-light">
            <h1 className="flex items-center">
              <SiAboutdotme size={"2em"} color={"#f35151"} />
              <p className="ml-3 ">My interests</p>
            </h1>
            <p className="mt-3 pl-1 text-neutral-300">
              I enjoy reading books, learn about new technologies, listen to
              folk and acoustic songs and finally some nerd stuff :)
            </p>
          </SwiperSlide>
        </>
      )}
    </Swiper>
  );
}

export default Swipers;
