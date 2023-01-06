import Image from "next/image";
import portret from "../images/portretAbout.png";

export default function About() {
  return (
    <section
      id="about"
      className="about flex min-h-screen items-center justify-end bg-cover bg-fixed bg-no-repeat p-1 md:p-9"
    >
      <div className="box h-1 w-1"></div>
      <div
        id="aboutBox"
        className="col relative bottom-[15%] right-[60%]  flex h-[26rem] w-[26rem] justify-center overflow-hidden rounded-full bg-cover bg-fixed bg-no-repeat"
      >
        <Image src={portret} height={400} className="relative top-5"></Image>
      </div>
      <div className="my-5 text-center md:absolute md:w-1/2">
        <h1 className="mb-7 bg-cover bg-fixed bg-clip-text bg-no-repeat text-7xl text-transparent">
          Hej!
        </h1>
        <h4 className="text-3xl">
          Mam na imię Paweł i jestem studentem pierwszego roku Informatyki.
          Odkąd pamiętam technologia miała szczególne miejsce w moim szerokim
          kręgu zainteresowań. Uwielbiam obserwować ciągle rozwijający się
          potencjał otaczających nas urządzeń i to jak powoli, lecz
          systematyczne stają się nierozłącznym elementem naszej codzienności.
          Smartphony, SmartTV, Smart-Lodówki czy wszelkiego rodzaju SmartWerable
          to tylko kilka przykładów tego zjawiska a moja reakcja na to wszystko
          to było zdecydowane „Muszę brać w tym udział!”. Nie tylko jako bierny
          konsument, ale jako współtwórca świata w którym wszystko jest ze sobą
          powiązane.
        </h4>
      </div>
    </section>
  );
}
