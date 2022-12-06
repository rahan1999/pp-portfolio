export default function Top() {
  return (
    <section
      id="top"
      className="flex flex-col justify-between min-h-screen p-5 text-center"
    >
      <div className="box h-1 w-1"></div>
      <div className="h-10"></div>
      <div className="flex flex-col justify-between">
        <div className="flex flex-col items-center md:flex-row md:my-10">
          <div className="flex flex-col justify-center my-10 md:my-0 md:w-1/3">
            <div>
              <h1 className="text-8xl">Ipsum</h1>
              <h3 className="text-4xl mt-5 mb-7">
                Lorem ipsum, da isma a soja majet
              </h3>
            </div>
            <div className="flex flex-row justify-center">
              <div className="border-2 border-white rounded-md w-36 mx-1.5">
                <h4 className="text-3xl">WIĘCEJ</h4>
              </div>
              <div className="border-2 border-white rounded-md bg-white w-36 mx-1.5">
                <h4 className="text-3xl">KONTAKT</h4>
              </div>
            </div>
          </div>
          <img className="ml-40" src="img/portfolio" />
        </div>
        <div className="flex justify-end text-lg my-10 md:my-0">
          <div className="md:w-1/3">
            <h3 className="text-5xl">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Cupiditate nam
            </h3>
          </div>
        </div>
      </div>
      <div className="flex flex-row justify-center">
        <div className="border-b-2 border-r-2 w-8 h-8 rotate-45"></div>
      </div>
    </section>
  );
}
