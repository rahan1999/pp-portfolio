import { StaticImageData } from "next/image";
import * as React from "react";
import github from "../images/github.png";
import holdi from "../images/holdi.png";
import Portfoliobox from "./portfolioBox";

export default function Portfolio() {
  let boxes: any[] = [];

  const image: StaticImageData[] = [github, holdi];
  const title: string[] = ["GitHub", "Holdi"];
  const desc: string[] = [
    "Ta witryna została w całości zaprojektowana i stworzona przeze mnie z wykorzystaniem frameworka Next.js. Wśród moich repozytoriów można przejrzeć surowy kod mojej witryny jak i również kilka innych mniejszych programów które napisałem.",
    "Moim zadaniem było stworzenie nowoczesnej i eleganckiej strony internetowej dla małej firmy. Głównymi trudnościami była minimalna ilość treści do zamieszczenia oraz UI przypominający pokaz slajdów. Kod źrudłowy jest dostępny na moim GitHubie.",
  ];
  const href: string[] = [
    "https://github.com/rahan1999?tab=repositories",
    "https://holdi.vercel.app",
  ];

  for (let i: number = 0; i < image.length; i++) {
    boxes.push(
      <Portfoliobox
        image={image[i]}
        title={title[i]}
        desc={desc[i]}
        href={href[i]}
        key={i}
      ></Portfoliobox>,
    );
  }

  return (
    <section
      id="portfolio"
      className="flex min-h-screen flex-col items-center bg-cover bg-fixed bg-no-repeat"
    >
      <div className="box h-1 w-1"></div>
      <div className="sectionTitles mt-20 mb-5 rounded-[2rem] bg-cover bg-fixed bg-no-repeat px-10 py-5 text-7xl">
        <h1 className="text-center text-5xl md:text-7xl">PORTFOLIO</h1>
      </div>
      <div className="flex flex-row flex-wrap justify-around">{boxes}</div>
    </section>
  );
}
