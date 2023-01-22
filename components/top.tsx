import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import portret from "../images/portret-top.png";

export default function Top() {
  return (
    <section
      id="top"
      className="flex min-h-screen flex-col justify-between text-center "
    >
      <div className="p-5">
        <div className="box h-1 w-1"></div>
        <div className="h-10"></div>
        <div className="flex flex-col justify-between">
          <div className="flex flex-col items-center md:my-10 md:flex-row">
            <div className="topBox my-10 flex flex-col justify-center rounded-[2rem] bg-cover bg-fixed bg-no-repeat p-5 md:my-0 md:mr-32 md:w-1/3">
              <div>
                <h1 className="translate text-8xl">Hej!</h1>

                <h3 className="translate mt-5 mb-7 text-4xl">
                  Zapraszam Cię do zapoznania się z moim CV
                </h3>
              </div>
              <div className="flex flex-row justify-center">
                <div className="mx-1.5 flex w-36 flex-col items-center">
                  <Link
                    href="/#about"
                    className="relative bottom-0 text-3xl font-black duration-1000 hover:bottom-1"
                  >
                    <p className="translate">WIĘCEJ</p>
                  </Link>
                  <div className="beam mt-2 h-[2px] w-[90%] bg-cover  bg-fixed bg-no-repeat"></div>
                </div>
                <div className="mx-1.5 flex w-36 flex-col items-center">
                  <Link
                    href="/#footer"
                    className="relative bottom-0 text-3xl font-black duration-1000 hover:bottom-1"
                  >
                    <p className="translate">KONTAKT</p>
                  </Link>
                  <div className="beam mt-2 h-[2px] w-[90%] bg-cover  bg-fixed bg-no-repeat"></div>
                </div>
              </div>
            </div>
            <Image src={portret} alt="Portret" width={400}></Image>
          </div>
          <div className="my-10 flex justify-end text-lg md:my-0">
            <div className="topBox rounded-[2rem] bg-cover bg-fixed bg-no-repeat md:w-1/3">
              <h3 className="translate text-5xl md:p-5">
                "Tworzę, ewoluuję, ulepszam - nie tylko projekt, ale i siebie. "
              </h3>
            </div>
          </div>
        </div>
        <div className="flex flex-row justify-center md:relative md:bottom-10">
          <div className="h-8 w-8 rotate-45 border-b-2 border-r-2"></div>
        </div>
      </div>
    </section>
  );
}
