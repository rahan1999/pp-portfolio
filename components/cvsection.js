import Contentbox from "./contentbox";

export default function Cvsection({ main, titles, descriptions }) {
  const titlearray = titles.split("-");
  const descriptionarray = descriptions.split("-");

  let contenttitle = [];

  titlearray.forEach((item, index) => {
    contenttitle.push(
      <Contentbox
        key={item}
        title={item}
        description={descriptionarray[index]}
      ></Contentbox>
    );
  });

  return (
    <div className="flex flex-col items-center md:flex-row justify-between w-full">
      <div className="md:w-1/4 md:min-h-screen">
        <h1 className="bg-fixed bg-cover bg-no-repeat bg-clip-text text-transparent sticky top-6 md:top-60 text-5xl text-center">
          {main}
        </h1>
      </div>
      <div className="w-full md:w-9/12 flex flex-row flex-wrap justify-around mt-10 md:mt-0 min-h-screen gap-x-14">
        {contenttitle}
      </div>
    </div>
  );
}
