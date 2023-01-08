export default function Contentbox({ title, description }) {
  return (
    <div
      className="my-5 flex h-fit w-64 cursor-pointer flex-col items-center justify-between duration-1000"
      id={title}
    >
      <div className="flex flex-col items-center justify-center text-center text-4xl">
        <h2>{title}</h2>
        <div className="beam mt-2 h-[2px] w-[90%] bg-cover  bg-fixed bg-no-repeat"></div>
      </div>
      <div id={title + "_desc"} className="p-6 text-center text-xl">
        {description}
      </div>
      <div
        className="m-2 hidden h-6 w-6 rotate-45 border-b-2 border-r-2 border-black duration-1000"
        id={title + "_arrow"}
      ></div>
    </div>
  );
}
