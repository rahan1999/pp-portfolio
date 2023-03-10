import Certificatebox from "./certificatesBox";

import webdeveloper from "../images/make-a-website.png";
import becomeahacker from "../images/become-a-hacker.png";
import blspart5 from "../images/bls-part-5.png";
import learntocode from "../images/learn-to-code.png";
import makeawebsite from "../images/make-a-website.png";
import ccacss from "../images/cca-certificate-css-level-1.png";
import ccahtml from "../images/cca-certificate-html-level-1.png";
import ccajs from "../images/cca-certificate-javascript-level-1.png";
import ccamysql from "../images/cca-certificate-mysql-level-1.png";
import ccaphp from "../images/cca-certificate-php-level-1.png";
import quadranet from "../images/certificate-quadranet.png";
import { StaticImageData } from "next/image";

const images: StaticImageData[] = [
  webdeveloper,
  blspart5,
  becomeahacker,
  learntocode,
  makeawebsite,
  ccahtml,
  ccacss,
  ccajs,
  ccamysql,
  ccaphp,
  quadranet,
];

let certificateBoxes: any[] = [];

const titles: string[] = [
  "The Complete Web Developer Course 2.0",
  "BLS Part 5",
  "Become a hacker",
  "Learn to code",
  "Make a website",
  "CCA Certificate HTML Level 1",
  "CCA Certificate CSS Level 1",
  "CCA Certificate Javascript Level 1",
  "CCA Certificate MySQL Level 1",
  "CCA Certificate PHP Level 1",
  "Smartphone repair Certificate",
];

for (let i: number = 0; i < titles.length; i++) {
  certificateBoxes.push(
    <Certificatebox title={titles[i]} link={images[i]}></Certificatebox>,
  );
}

export default function Certificate() {
  return (
    <div className="w-full pt-8">
      <div className="cvTitles sticky top-10 my-5 mx-auto w-fit rounded-[2rem] bg-cover bg-fixed bg-no-repeat py-1 px-4">
        <h1 className="translate bg-auto bg-clip-text bg-center  bg-no-repeat text-center text-3xl text-transparent md:text-5xl">
          Certyfikaty
        </h1>
      </div>
      <div className="cvSections my-8 ml-[2.5%] flex min-h-fit w-[95%] flex-col items-center justify-between rounded-[2rem] bg-cover bg-fixed bg-no-repeat">
        <div className="mt-10 flex min-h-fit w-full flex-row flex-wrap justify-around gap-x-14 md:mt-0">
          {certificateBoxes}
        </div>
      </div>
    </div>
  );
}
