import Swipers from "./components/Swipers";
import {
  FaInstagram,
  FaLinkedinIn,
  FaGithub,
  FaPhoneAlt,
  FaEnvelope,
} from "react-icons/fa";

function App() {
  return (
    <div className="text-white">
      <section className="bcf h-screen">
        <div className=" fixed right-0 bottom-0 ">
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
        <div className=" fixed left-3 bottom-2 ">
          <div className="flex items-center font-light text-sm">
            <FaPhoneAlt />
            <p className="ml-2">+55 11 95356-5667</p>
          </div>
          <div className="flex items-center font-light text-sm mt-1">
            <FaEnvelope />
            <p className="ml-2">riqimoreiraa@gmail.com</p>
          </div>
        </div>
        <div className="me h-full ">
          <header>
            <nav className="fbn text-xl flex justify-between mx-5 py-3">
              <a href="">work</a>
              <p>
                Henrique <span className="text-red1">Moreira</span>
              </p>
              <a href="#about">about</a>
            </nav>
          </header>

          <div className="h-5/6 flex justify-center items-center my-2">
            <h1 className="text-6xl font-bold pt-20">
              I develop <span className="text-red1">full stack web apps</span>
            </h1>
          </div>

          <h2 className="text-center text-xl font-normal ">
            I am a full stack developer who{" "}
            <span className="text-red1">loves</span> to do what I do
          </h2>
        </div>
      </section>

      <section className="bcs h-screen py-3 flex justify-center about">
        <div className=" border border-neutral-800 max-w-840">
          <div className="flex border-b border-neutral-800">
            <div className="border-r border-neutral-800">
              <div className="mx-3">
                <div className="me2 my-4"></div>
                <button className="fbn border-2 border-red1 p-3 w-full text-center text-2xl hover:bg-red1">
                  DOWNLOAD CV
                </button>
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
          <div className="flex justify-evenly my-5 h-40">
            <Swipers />
            <Swipers />
          </div>
        </div>
      </section>
      <footer></footer>
    </div>
  );
}

export default App;
