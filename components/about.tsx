import Image from "next/image";
import portret from "../images/portret-about.png";

export default function About() {
  return (
    <section
      id="about"
      className="about flex min-h-fit items-center justify-around rounded-[2rem] bg-cover bg-fixed bg-no-repeat p-1 md:ml-[2.5%] md:w-[95%]"
    >
      <div className="box h-1 w-1"></div>
      <div
        id="aboutBox"
        className="col top-[10%] hidden  h-[26rem] w-[26rem] justify-center overflow-hidden rounded-full bg-cover bg-fixed bg-no-repeat md:relative md:flex"
      >
        <Image
          src={portret}
          height={400}
          alt="Main portret"
          className="relative top-5"
        ></Image>
      </div>
      <div className="my-5 text-center md:w-3/5">
        <h1 className="translate mb-7 bg-auto bg-clip-text bg-center bg-no-repeat text-7xl text-transparent">
          Hej!
        </h1>
        <h4 className="translate text-3xl">
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
