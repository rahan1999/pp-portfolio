import * as React from "react";
import Link from "next/link";
import Image from "next/image";

export default function Portfoliobox({ image, title, desc, href }) {
  const alt: string = `${image} logo`;

  return (
    <div className="card bg-no-repea mt-10 flex w-[90%] flex-col items-center rounded-[2rem] bg-cover bg-fixed py-8 px-3 text-center text-lg md:w-1/4 ">
      <Image
        src={image}
        height={64}
        width={64}
        alt={alt}
        className="relative top-5"
      ></Image>

      <p className="translate my-5">{desc}</p>
      <div className="mx-1.5 flex w-36 flex-col items-center">
        <Link
          href={href}
          className="relative bottom-0 text-3xl font-black duration-1000 hover:bottom-1"
          target={"_blank"}
        >
          {title}
        </Link>
        <div className="beam mt-2 h-[2px] w-[90%] bg-cover  bg-fixed bg-no-repeat"></div>
      </div>
    </div>
  );
}
