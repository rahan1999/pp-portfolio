import Image from "next/image";

export default function Certificatebox({ title, link }) {
  return (
    <div className="my-5 flex h-fit w-80 flex-col items-center justify-between">
      <div className="flex flex-col items-center justify-center text-center text-4xl">
        <h2>{title}</h2>
      </div>
      <div className="beam mt-2 h-[2px] w-[90%] bg-cover  bg-fixed bg-no-repeat"></div>
      <div id={title + "_image"} className="p-6 text-center text-xl">
        <Image src={link} height={230} width={230} alt={title}></Image>
      </div>
      <div></div>
    </div>
  );
}
