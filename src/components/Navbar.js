/* eslint-disable jsx-a11y/alt-text */
import Logo from "../imgs/Grape.svg";
import { HashLink as Link } from "react-router-hash-link";
import { useHeadsObserver } from "../hooks/hooks";
import { useEffect, useState } from "react";

export function Navbar() {
  const { activeId } = useHeadsObserver();
  const [currentSection, setCurrentSection] = useState("home");

  useEffect(() => {
    setCurrentSection(activeId);
  }, [activeId]);

  const scrollWithOffset = (el) => {
    const yCoordinate = el.getBoundingClientRect().top + window.pageYOffset;
    const yOffset = -80;
    window.scrollTo({ top: yCoordinate + yOffset, behavior: "auto" });
  };

  return (
    <div className="bg-white shadow-lg text-black flex-1 flex flex-col sticky top-0 gap-2 items-center bg-teal px-[110px] py-[24px] md:flex-row text-2xl md:justify-between">
      <div className="logo flex flex-row justify-center items-center">
        <a href="/" className="flex flex-row logo items-center space-x-[4px]">
          <img src={Logo} className="h-[30px]" />
          <h1 className="font-lobster">Grapevine</h1>
        </a>
      </div>
      <div className=" navlinks">
        <div className="flex flex-row font-chivo space-x-[16px] md:space-x-[32px] text-lg md:text-2xl">
          <div>
            <Link
              to="#home"
              scroll={(el) => scrollWithOffset(el)}
              onClick={() => setCurrentSection("home")}
            >
              ABOUT
            </Link>
          </div>
          <div>
            <Link
              to="#process"
              scroll={(el) => scrollWithOffset(el)}
              onClick={() => setCurrentSection("process")}
            >
              PROCESS
            </Link>
          </div>
          <div>
            <Link
              to="#demo"
              scroll={(el) => scrollWithOffset(el)}
              onClick={() => setCurrentSection("demo")}
            >
              DEMO
            </Link>
          </div>
          <div>
            <Link
              to="#team"
              scroll={(el) => scrollWithOffset(el)}
              onClick={() => setCurrentSection("team")}
            >
              TEAM
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
