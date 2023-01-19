import * as React from "react";
import { useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import logo from "../images/logo.png";

let menuClassList: string =
  "duration-1000 w-[20%] text-center top_menu text-xs md:text-base bottom-0 hover:bottom-1 duration-1000 relative";
let barPosition: string[] = [
  "ml-[0%]",
  "ml-[20%]",
  "ml-[40%]",
  "ml-[60%]",
  "ml-[80%]",
];
let barToggle: number = 0;

export default function Menu() {
  const bar = useRef(null);

  const onView = (): void => {
    const box = document.querySelectorAll(".box");

    for (let i = 0; i < box.length; i++) {
      let rect = box[i].getBoundingClientRect();

      const isInViewport =
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= window.innerHeight &&
        rect.right <= window.innerWidth;

      if (isInViewport === true) {
        toggle(i);
      }
    }
  };

  const toggle = (id: number): void => {
    let element = document.querySelectorAll(".top_menu");
    let remove = barPosition[barToggle];
    let bufor = barPosition[id];

    for (let i = 0; i < element.length; i++) {
      element[i].classList.remove("font-extrabold");
    }

    bar.current.classList.remove(remove);

    element[id].classList.add("font-extrabold");

    bar.current.classList.add(bufor);

    barToggle = id;
  };

  React.useEffect(() => {
    window.onscroll = function () {
      onView();
    };
  }, []);

  return (
    <nav
      id="menu"
      className="fixed z-10 flex h-10 w-screen flex-row justify-around rounded-[2rem] bg-cover bg-fixed bg-no-repeat px-3 md:ml-[5%] md:w-[90%]"
    >
      <Image
        src={logo}
        width={80}
        alt="Logo"
        className="m-1 hidden md:block"
      ></Image>
      <div className="flex w-full flex-col justify-evenly lg:w-3/4 ">
        <div className="flex flex-row justify-between align-middle">
          <div className={`font-extrabold ${menuClassList}`}>
            <Link href="/#">TOP</Link>
          </div>
          <div className={menuClassList}>
            <Link href="/#about">O MNIE</Link>
          </div>
          <div className={menuClassList}>
            <Link href="/#cv">CV</Link>
          </div>
          <div className={menuClassList}>
            <Link href="/#portfolio">PORTFOLIO</Link>
          </div>
          <div className={menuClassList}>
            <Link href="/#footer">KONTAKT</Link>
          </div>
        </div>
        <div className="flex">
          <div className="" id="bufor"></div>
          <div
            className="beam h-0.5 w-[20%] rounded bg-cover bg-fixed bg-no-repeat duration-1000"
            id="bar"
            ref={bar}
          ></div>
        </div>
      </div>
    </nav>
  );
}
