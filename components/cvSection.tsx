import Contentbox from "./contentBox";

export default function Cvsection({ main, titles, descriptions }) {
  const titlearray: string[] = titles.split("-");
  const descriptionarray: string[] = descriptions.split("-");

  let contenttitle = [];

  titlearray.forEach((item: string, index: number) => {
    contenttitle.push(
      <Contentbox
        key={item}
        title={item}
        description={descriptionarray[index]}
      ></Contentbox>,
    );
  });

  return (
    <div className="w-full pt-8" data-testid="cvsection-1">
      <div className="cvTitles sticky top-10 my-5 mx-auto w-fit rounded-[2rem] bg-cover bg-fixed bg-no-repeat py-1 px-4">
        <h1 className="translate bg-auto bg-clip-text bg-center  bg-no-repeat text-center text-3xl text-transparent md:text-5xl">
          {main}
        </h1>
      </div>
      <div className="cvSections my-8 ml-[2.5%] flex min-h-fit w-[95%] flex-col items-center justify-between rounded-[2rem] bg-cover bg-fixed bg-no-repeat">
        <div className="mt-10 flex min-h-fit w-full flex-row flex-wrap justify-around gap-x-14 md:mt-0">
          {contenttitle}
        </div>
      </div>
    </div>
  );
}
