import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import Swipers from "./components/Swipers";
import {
  FaInstagram,
  FaLinkedinIn,
  FaGithub,
  FaPhoneAlt,
  FaEnvelope,
} from "react-icons/fa";
import { IoDownloadOutline, IoDownloadSharp } from "react-icons/io5";
import "./proj.css";
import Projects from "./components/Projects";

function App() {
  useEffect(() => {
    AOS.init({
      duration: 2000,
    });
  }, []);

  return (
    <div className="text-white">
      <section className="bcf h-screen">
        <div
          data-aos="fade-zoom-in"
          data-aos-easing="ease-in-back"
          className=" fixed right-0 bottom-0 z-10"
        >
          <p className="rotate-90 font-light">Find me at</p>
          <div className="border-t border-white rotate-90 mb-16 mt-24"></div>
          <a href="https://www.instagram.com/rickmoreiraa_/" target="_blanc">
            <FaInstagram className=" w-full text-center" />
          </a>
          <a
            href="https://www.linkedin.com/in/henriquemoreirain/"
            target="_blanc"
          >
            <FaLinkedinIn className=" w-full text-center my-5" />
          </a>
          <a href="https://github.com/henriquemoreiraa" target="_blanc">
            <FaGithub className=" w-full text-center my-5" />
          </a>
        </div>
        <div className=" fixed left-3 bottom-5  z-10 ">
          <div
            data-aos="fade-zoom-in"
            data-aos-easing="ease-in-back"
            className="flex items-center font-light text-sm"
          >
            <FaPhoneAlt />
            <p className="ml-2">+55 11 95356-5667</p>
          </div>
          <div
            data-aos="fade-zoom-in"
            data-aos-easing="ease-in-back"
            className="flex items-center font-light text-sm mt-1"
          >
            <FaEnvelope />
            <p className="ml-2">riqimoreiraa@gmail.com</p>
          </div>
        </div>
        <div
          data-aos="fade-zoom-in"
          data-aos-easing="ease-in-back"
          className="me h-full "
        >
          <header>
            <nav className="fbn text-xl flex justify-between mx-5 py-3">
              <a href="#work">work</a>
              <p>
                Henrique <span className="text-red1">Moreira</span>
              </p>
              <a href="#about">about</a>
            </nav>
          </header>

          <div className="h-5/6 flex justify-center items-center ">
            <h1 className="text-4xl cel1:text-6xl font-bold pt-20 text-center">
              I develop <span className="text-red1">full stack web apps</span>
            </h1>
          </div>

          <h2 className="text-center text-lg cel1:text-xl font-normal ">
            I am a full stack developer who{" "}
            <span className="text-red1">loves</span> to do what I do
          </h2>
        </div>
      </section>

      <section id="about" className="bcs py-3 flex justify-center about">
        <div
          data-aos="fade-up"
          className=" border border-neutral-800 max-w-840 h-fit"
        >
          <div className="flex flex-col cel1:flex-row border-b border-neutral-800">
            <div className="border-r border-neutral-800">
              <div className="mx-3">
                <div className="flex justify-center cel1:block ">
                  <div className="me2 my-4 "></div>
                </div>
                <a href="/Henrique_Moreira_CV_0922.pdf" download>
                  <div className="button hover:bg-red1">
                    <div className="button-wrapper">
                      <div className="text flex items-center justify-center p-3 top-0">
                        Download cv
                      </div>
                      <span className="icon text-white top-full flex items-center justify-center">
                        <IoDownloadOutline size={"1em"} />
                      </span>
                    </div>
                  </div>
                </a>
              </div>
            </div>
            <div className="my-4 font-light text-base text-neutral-300 mx-3">
              <p className="mb-5">
                Constant learner and passionate about programming. I've been in
                this field of ​​software development for over a year. Always
                trying to innovate and acquire new knowledge.
              </p>

              <p className="mb-5">
                Focus on clean code development for better understanding and
                maintainability.
              </p>

              <p className="mb-5">
                I studied and continue to study algorithms and data structures
                with python, because I believe in the importance of writing good
                quality algorithms.
              </p>

              <p className="mb-5">
                I also have knowledge in agile methodologies such as SCRUM.
              </p>

              <p className="mb-5">
                I currently work as a freelance Full Stack developer, but I'm
                looking for my first opportunity in a company.
              </p>
            </div>
          </div>
          <div className="flex tablet:flex-row flex-col justify-evenly my-2 h-full w-full">
            <Swipers s={0} />
            <Swipers s={1} />
          </div>
        </div>
      </section>
      <section id="work" className=" tcs py-3 flex justify-center">
        <Projects />
      </section>
      <footer className="flex justify-center items-center flex-col bg-balck">
        <div className="p-5">
          <h1 className="fbn text-4xl cel1:text-6xl">
            let's <span className="text-red1">work</span> together :)
          </h1>
          <p className="underline mt-3   text-center ">
            <a
              href="https://www.linkedin.com/in/henriquemoreirain/"
              target={"_blank"}
              className="cursor-pointer"
            >
              Linkedin
            </a>
          </p>
        </div>
        <p className="text-neutral-300 text-sm">
          Made it with ❤️ by Henrique Moreira
        </p>
      </footer>
    </div>
  );
}

export default App;
