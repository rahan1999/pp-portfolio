import Image from "next/image";
import portret from "../images/portretAbout.png";

export default function About() {
  return (
    <section
      id="about"
      className="about bg-fixed bg-cover bg-no-repeat flex items-center justify-end min-h-screen p-1 md:p-9"
    >
      <div className="box h-1 w-1"></div>
      <div
        id="aboutBox"
        className="bg-cover bg-fixed bg-no-repeat relative  bottom-[15%] right-[60%] w-[26rem] h-[26rem] rounded-full flex col justify-center overflow-hidden"
      >
        <Image src={portret} height={400} className="relative top-5"></Image>
      </div>
      <div className="md:absolute md:w-1/2 text-center my-5">
        <h1 className="bg-fixed bg-cover bg-no-repeat bg-clip-text text-transparent text-7xl mb-7">
          Hej!
        </h1>
        <h4 className="text-3xl">
          mam na imię Paweł i jestem studentem pierwszego roku Informatyki.
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
