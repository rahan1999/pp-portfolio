export default function Contentbox({ title, description }) {
  let toggle = 0;
  let size_up = ["w-[30rem]", "h-96", "rotate-[225deg]"];
  let size_down = ["w-60", "h-32", "rotate-45"];

  const extend = () => {
    let element = document.getElementById(`${title}`);
    let elementarrow = document.getElementById(`${title + "_arrow"}`);
    let element_array = [element, element, elementarrow];
    let element_desc = document.getElementById(`${title + "_desc"}`);

    if (toggle === 0) {
      for (let i = 0; i < 3; i++) {
        element_array[i].classList.replace(size_down[i], size_up[i]);
      }

      element_desc.classList.replace("hidden", "block");

      toggle = 1;
    } else {
      for (let i = 0; i < 3; i++) {
        element_array[i].classList.replace(size_up[i], size_down[i]);
      }

      element_desc.classList.replace("block", "hidden");

      toggle = 0;
    }
  };

  return (
    <div
      className="bg-fixed bg-cover bg-no-repeat cvContentDesc duration-1000 w-60 h-32 my-5 rounded-[2rem] flex flex-col items-center justify-between cursor-pointer shadow-md hover:shadow-sm"
      id={title}
      onClick={extend}
    >
      <div className="text-center bg-fixed bg-cover bg-no-repeat w-60 h-24 cvContentName rounded-[2rem] flex justify-center items-center text-4xl">
        <h2>{title}</h2>
      </div>
      <div id={title + "_desc"} className="hidden text-center text-xl p-6">
        {description}
      </div>
      <div
        className="duration-1000 border-b-2 border-r-2 border-black w-6 h-6 m-2 rotate-45"
        id={title + "_arrow"}
      ></div>
    </div>
  );
}
