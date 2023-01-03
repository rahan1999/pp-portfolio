import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import portret from "../images/PortretTop.png";

export default function Top() {
  return (
    <section
      id="top"
      className="bg-fixed bg-cover bg-no-repeat flex flex-col justify-between min-h-screen text-center "
    >
      <div className="p-5">
        <div className="box h-1 w-1"></div>
        <div className="h-10"></div>
        <div className="flex flex-col justify-between">
          <div className="flex flex-col items-center md:flex-row md:my-10">
            <div className="topBox bg-fixed bg-cover bg-no-repeat rounded-[2rem] flex flex-col justify-center my-10 md:my-0 md:w-1/3 p-5 md:mr-32">
              <div>
                <h1 className="text-8xl">Hej!</h1>
                <h3 className="text-4xl mt-5 mb-7">
                  Zapraszam Cię do zapoznania się z moim CV
                </h3>
              </div>
              <div className="flex flex-row justify-center">
                <div className="border-2 border-white rounded-md w-36 mx-1.5 hover:bg-white duration-1000">
                  <Link href="/#about" className="text-3xl">
                    WIĘCEJ
                  </Link>
                </div>
                <div className="border-2 border-white/70 rounded-md bg-white/70 hover:bg-white hover:border-white duration-1000 w-36 mx-1.5">
                  <Link href="/#footer" className="text-3xl">
                    KONTAKT
                  </Link>
                </div>
              </div>
            </div>
            <Image src={portret} width={400}></Image>
          </div>
          <div className="flex justify-end text-lg my-10 md:my-0">
            <div className="topBox bg-fixed bg-cover bg-no-repeat rounded-[2rem] md:w-1/3">
              <h3 className="text-5xl md:p-5">
                "Tworzę, ewoluuję, ulepszam - nie tylko design, ale i siebie. "
              </h3>
            </div>
          </div>
        </div>
        <div className="flex flex-row justify-center">
          <div className="border-b-2 border-r-2 w-8 h-8 rotate-45"></div>
        </div>
      </div>
      <div className="about bg-fixed bg-cover bg-no-repeat h-16 w-full rounded-t-[100%]"></div>
    </section>
  );
}
