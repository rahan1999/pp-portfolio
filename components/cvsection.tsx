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
    <div className="m-8 flex h-auto w-full flex-col items-center justify-between md:m-0 md:flex-row">
      <div className="md:min-h-screen md:w-[30%]">
        <h1 className="sticky top-6 bg-cover bg-fixed bg-clip-text bg-no-repeat text-center text-5xl text-transparent md:top-60">
          {main}
        </h1>
      </div>
      <div className="mt-10 flex w-full flex-row flex-wrap justify-around gap-x-14 md:mt-0 md:min-h-screen md:w-[70%]">
        {contenttitle}
      </div>
    </div>
  );
}
