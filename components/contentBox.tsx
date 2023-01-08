export default function Contentbox({ title, description }) {
  let toggle: number = 0;
  let size_up: string[] = ["w-[30rem]", "h-96", "rotate-[225deg]"];
  let size_down: string[] = ["w-60", "h-32", "rotate-45"];

  const extend = (): void => {
    let element: HTMLElement = document.getElementById(`${title}`);
    let elementarrow: HTMLElement = document.getElementById(`${title + "_arrow"}`);
    let element_array: HTMLElement[] = [element, element, elementarrow];
    let element_desc: HTMLElement = document.getElementById(`${title + "_desc"}`);

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
      className="cvContentDesc my-5 flex h-32 w-60 cursor-pointer flex-col items-center justify-between rounded-[2rem] bg-cover bg-fixed bg-no-repeat shadow-md duration-1000 hover:shadow-sm"
      id={title}
      onClick={extend}
    >
      <div className="cvContentName flex h-24 w-60 items-center justify-center rounded-[2rem] bg-cover bg-fixed bg-no-repeat text-center text-4xl">
        <h2>{title}</h2>
      </div>
      <div id={title + "_desc"} className="hidden p-6 text-center text-xl">
        {description}
      </div>
      <div
        className="m-2 h-6 w-6 rotate-45 border-b-2 border-r-2 border-black duration-1000"
        id={title + "_arrow"}
      ></div>
    </div>
  );
}
