import Cvsection from "./cvsection";

export default function Cv() {
  return (
    <section id="cv" className="flex flex-col items-center bg-sky-500 ">
      <div className="box h-1 w-1"></div>
      <h1 className="text-7xl my-20">CV</h1>
      <Cvsection
        main="Umiejętności"
        titles="oki-ok2-ok3-ok4"
        descriptions="des1-des2-des3-des4"
      ></Cvsection>
    </section>
  );
}
