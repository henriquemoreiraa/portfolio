import { useState } from "react";
import { FaNodeJs, FaReact } from "react-icons/fa";
import {
  SiExpress,
  SiGraphql,
  SiMongodb,
  SiNextdotjs,
  SiPostgresql,
  SiPrisma,
  SiStyledcomponents,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";

function Projects() {
  const [projInfo, setProjInfo] = useState(false);
  const [projInfo1, setProjInfo1] = useState(false);
  const [projInfo2, setProjInfo2] = useState(false);

  return (
    <>
      <div className="w-0">
        <div className="relative right-10 flex mb-10 items-center flex-col font-light">
          <div className="border-r border-neutral-700 mt-5 mb-5 h-40"></div>
          1/3
          <div className="border-r border-neutral-700 mt-5 mb-5 h-40"></div>
        </div>
        <div className="relative right-10 flex mb-16 items-center flex-col font-light">
          <div className="border-r border-neutral-700 mt-5 mb-5 h-40"></div>
          2/3
          <div className="border-r border-neutral-700 mt-5 h-40"></div>
        </div>
        <div className="relative right-10 flex  items-center flex-col font-light">
          <div className="border-r border-neutral-700 mt-5 mb-5 h-40"></div>
          3/3
          <div className="border-r border-neutral-700 mt-5 h-40"></div>
        </div>
      </div>

      <div className="border border-neutral-800 w-840 ">
        <h1 className="fbn px-2 pt-10 text-xl">Recent projects</h1>
        <div className="flex relative">
          <div className="absolute  left-1/2 w-fit  top-4">
            <h1 className="fbn h-36 text-115 ">
              ON G. <span className="text-red1">STORE</span>
            </h1>
            <p className="pl-44">
              Buy your favorite games from this online game store!
            </p>
          </div>
          <div
            onClick={() => setProjInfo(!projInfo)}
            className={`${
              projInfo ? "bg-bl1" : "proj1"
            } imgp border border-neutral-800 w-70 h-312`}
          >
            {projInfo && (
              <div className="p-3 flex flex-col h-full justify-between">
                <div>
                  <h1 className="mb-3">Online Game Store</h1>
                  <p>- An online game store</p>
                  <p>- Authentication with NextAuth</p>
                  <p className="mb-5">- Payment method via stripe</p>
                  <a className=" underline cursor-pointer" href="">
                    Github
                  </a>
                </div>
                <p className=" flex ">
                  <SiNextdotjs className="mr-3" size={"1.5em"} />
                  <SiTypescript className="mr-3" size={"1.5em"} />
                  <SiTailwindcss className="mr-3" size={"1.5em"} />
                  <SiGraphql className="mr-3" size={"1.5em"} />
                  <SiPrisma className="mr-3" size={"1.5em"} />
                  <SiPostgresql className="mr-3" size={"1.5em"} />
                </p>
              </div>
            )}
            {!projInfo && (
              <div className="h-full w-full bg-bl2 hover:bg-transparent"></div>
            )}
          </div>
          <div className="relative "></div>
        </div>
        <div className="flex relative flex-row-reverse mt-32">
          <div className="absolute  right-1/2 w-fit  top-4">
            <h1 className="fbn h-36 text-115 ">
              <span className="text-red1">isn’t</span>agram
            </h1>
            <p className="pr-32 pl-1">Share your posts with your followers!</p>
          </div>
          <div
            onClick={() => setProjInfo1(!projInfo1)}
            className={`${
              projInfo1 ? "bg-bl1" : "proj2"
            } imgp border border-neutral-800 w-70 h-312`}
          >
            {projInfo1 && (
              <div className="p-3 flex flex-col h-full justify-between">
                <div>
                  <h1 className="mb-3">isn’tagram</h1>
                  <p>
                    - A clone of instagram, both on the front end and the back
                    end.
                  </p>
                  <p>- Authentication with JWT</p>
                  <p>
                    - Functionalities of a social media, like follow users, like
                    posts, comment posts...
                  </p>
                  <p className="mb-5">
                    - Real time notification with socket.io
                  </p>
                  <a className=" underline cursor-pointer" href="">
                    Github
                  </a>
                </div>
                <p className=" flex ">
                  <FaReact className="mr-3" size={"1.5em"} />
                  <SiTypescript className="mr-3" size={"1.5em"} />
                  <SiExpress className="mr-3" size={"1.5em"} />
                  <FaNodeJs className="mr-3" size={"1.5em"} />
                  <SiMongodb className="mr-3" size={"1.5em"} />
                </p>
              </div>
            )}
            {!projInfo1 && (
              <div className="h-full w-full bg-bl2 hover:bg-transparent"></div>
            )}
          </div>
        </div>
        <div className="flex relative  mt-32">
          <div className="music absolute w-fit  top-4">
            <h1 className="fbn h-36 text-115 ">
              music <span className="text-red1">player</span>
            </h1>
            <p className="pl-56 ">Play your favorites songs in any order!</p>
          </div>
          <div
            onClick={() => setProjInfo2(!projInfo2)}
            className={`${
              projInfo2 ? "bg-bl1" : "proj3"
            } imgp border border-neutral-800 w-70 h-312`}
          >
            {projInfo2 && (
              <div className="p-3 flex flex-col h-full justify-between">
                <div>
                  <h1 className="mb-3">Music Player</h1>
                  <p className="mb-5">- An app to play musics, like Spotify</p>
                  <a className=" underline cursor-pointer" href="">
                    Github
                  </a>
                </div>
                <p className=" flex items-center">
                  <FaReact className="mr-3" size={"1.5em"} />
                  <SiTypescript className="mr-3" size={"1.5em"} />
                  <SiStyledcomponents className="mr-3" size={"2.5em"} />
                </p>
              </div>
            )}
            {!projInfo2 && (
              <div className="h-full w-full bg-bl2 hover:bg-transparent"></div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default Projects;
