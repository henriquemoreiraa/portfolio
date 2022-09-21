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
          <div className="flex items-center font-light text-base">
            <FaPhoneAlt />
            <p className="ml-2">+55 11 95356-5667</p>
          </div>
          <div className="flex items-center font-light text-base">
            <FaEnvelope />
            <p className="ml-2">riqimoreiraa@gmail.com</p>
          </div>
        </div>
        <div className="me h-full ">
          <header>
            <nav className="fbn text-xl flex justify-between mx-5 py-3">
              <a href="">work</a>
              <p>
                Henrique <span className="red">Moreira</span>
              </p>
              <a href="">about</a>
            </nav>
          </header>

          <div className="h-5/6 flex justify-center items-center my-2">
            <h1 className="text-6xl font-bold pt-20">
              I develop <span className="red">full stack web apps</span>
            </h1>
          </div>

          <h2 className="text-center text-xl font-normal ">
            I am a full stack developer who <span className="red">loves</span>{" "}
            to do what I do
          </h2>
        </div>
      </section>

      <section className="bcs h-screen flex justify-center">
        <div className=" border border-neutral-800 ">
          <div className="flex">
            <div className="">
              <img src="20220919_154027.jpg" alt="" />
            </div>
            <div>f</div>
          </div>
        </div>
      </section>
      <footer></footer>
    </div>
  );
}

export default App;
