export default function About() {
  return (
    <section
      id="about"
      className="bg-fixed bg-cover bg-no-repeat flex items-center justify-end min-h-screen p-2 md:p-9"
    >
      <div className="box h-1 w-1"></div>
      <div
        id="aboutBox"
        className="bg-cover bg-fixed bg-no-repeat relative  bottom-[15%] right-[60%] w-[26rem] h-[26rem] rounded-full"
      >
        <img src="..." />
      </div>
      <div className="md:absolute md:w-1/2 text-center">
        <h1 className="bg-fixed bg-cover bg-no-repeat bg-clip-text text-transparent text-7xl mb-7">
          Lorem imsum
        </h1>
        <h4 className="text-3xl">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi
          soluta non voluptatum quidem. Distinctio, debitis! Inventore omnis
          illo totam. Obcaecati, totam qui doloribus amet esse itaque. Qui
          quaerat dolorum consequatur! Minima sequi praesentium quidem quam
          laboriosam! Adipisci minima aliquam asperiores ab qui. Iste in commodi
          corrupti quibusdam, laboriosam similique fuga. Officia labore
          accusantium soluta nihil eius aliquam modi totam et.
        </h4>
      </div>
    </section>
  );
}
