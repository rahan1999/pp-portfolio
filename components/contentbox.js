export default function Contentbox({ title, description }) {
  let toggle = 0;
  let size_up = ["w-[30rem]", "h-96", "rotate-[225deg]"];
  let size_down = ["w-60", "h-32", "rotate-45"];

  const extend = () => {
    let element = document.getElementById(`${title}`);
    let elementarrow = document.getElementById(`${title + "_arrow"}`);
    let element_array = [element, element, elementarrow];

    if (toggle === 0) {
      for (let i = 0; i < 3; i++) {
        element_array[i].classList.replace(size_down[i], size_up[i]);
      }

      toggle = 1;
    } else {
      for (let i = 0; i < 3; i++) {
        element_array[i].classList.replace(size_up[i], size_down[i]);
      }

      toggle = 0;
    }
  };

  return (
    <div
      className="duration-1000 w-60 h-32 bg-white rounded-[2rem] flex flex-col items-center justify-between"
      id={title}
      onClick={extend}
    >
      <div className="w-60 h-24 bg-gray-300 rounded-[2rem] flex justify-center items-center text-4xl">
        <h2>
          {title}
          {description}
        </h2>
      </div>
      <div
        className="duration-1000 border-b-2 border-r-2 border-black w-6 h-6 m-2 rotate-45"
        id={title + "_arrow"}
      ></div>
    </div>
  );
}
