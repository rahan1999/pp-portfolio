export default function Contentbox({ title, description }) {
  return (
    <div
      className="my-5 flex h-fit w-80 flex-col items-center justify-between"
      id={title}
    >
      <div className="translate flex flex-col items-center justify-center text-center text-4xl">
        <h2>{title}</h2>
      </div>
      <div className="beam mt-2 h-[2px] w-[90%] bg-cover  bg-fixed bg-no-repeat"></div>
      <div id={title + "_desc"} className="translate p-6 text-center text-xl">
        {description}
      </div>
      <div></div>
    </div>
  );
}
