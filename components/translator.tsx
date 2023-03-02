import { useEffect } from "react";
import { useRef } from "react";

const translation: string[] = [
  "TOP",
  "ABOUT",
  "CV",
  "PORTFOLIO",
  "CONTACT",
  "Hi!",
  "I would like to invite you to familiarize yourself with my CV",
  "MORE",
  "CONTACT",
  `"I create, evolve, improve - not only my project, but also my self"`,
  "Hi!",
  `Hi, my name is Paweł. I'm a IT student. As long as I remember technology had a special place in my interests. I love to watch developing potential of devicest near us and how slowly, but systematically they become inseparable elements of our lives. Smartphones, SmartTVs, Smart-Refrigerators and all SmartWerable are just few examples of that phenomena and my reaction for all of that was "I need to be a part of that proces!". Not only as passive consumer, but as co-creator of modern word where evrything is connected.`,
  "Skills",
  "HTMJ, CSS and JS",
  "Three pillars of web applications. I took a time to achieve a deep understanding in each of them and be able to learn further technologies based on them.",
  "React.js, Next.js",
  "Frameworks which I'm currently focused on. I'm deeply fascinated with possibilities given to me by this tools.",
  "Tailwind, TypeScript",
  "Next to Next.js, these are some of the newest tools in my developing arsenal.",
  "Unix commands",
  "I know the basic usage of Terminal in Mac OS and linux.",
  "Affinity Designer",
  "It's my favorite app for creating computer graphics. That's where I'm making images and website UI projects.",
  "Git, GitHub",
  "I know how to properly use this most popular version control systems. On my GitHub repositories are more programs writen by myself.",
  "English",
  "I'm taking care of my ability in usage this most universal language in the world. At this moment I can easily communicate at B1 level.",
  "Interestests",
  "Sport",
  "Physical activity is a very important element of my every day. Daily 10 km on a bike along with training in the gym or swimming pool, this is what I call relax.",
  "Repair and maintenance",
  "There aren't muth things as satisfying as restoring an object to its original condition. It's also amazing how often you just need to clean something to make it work like it used to.",
  "Digital Graphics",
  "From small icons to 4K wallpapers. I love how my visions come true in digital version.",
  "Lego",
  "Playing with bricks turned out to be very stimulating in several levels. Result of combining focus, creativity and determination is little square art.",
  "Technology",
  `I love digging into technical specs and comparing different products. I am always bothered by not obvious questions: "Which target group can this product be addressed to?", "What makes it outstand from the competition in this price range?" and most importantly: "Does it have haptic motors?"`,
  "This website was entirely designed and created by me with the usage of Next.js framework. Among my repositories you can browse my website's raw code as well as some other smaller programs I've written.",
  "My task was to create a modern and elegant website for a small company. The main difficulties were the minimal amount of content to post and the slideshow-like UI. The source code is available on my GitHub.",
  "CONTACT",
  "I also invite you to:",
  "I consent to the processing of my personal data for the purpose of recruitment in accordance with art. 6 sec. 1 lit. and Regulation (EU) 2016/679 of the European Parliament and of the Council of 27 April 2016 on the protection of individuals with regard to the processing of personal data and on the free movement of such data, and repealing Directive 95/46/EC (General Data Protection Regulation )",
];
let translationOriginal: string[] = [];
let translate;
let translateSwitch: number = 0;

export default function Translator() {
  const bar = useRef(null);

  useEffect(() => {
    translate = document.querySelectorAll(".translate");

    for (let i = 0; i < translate.length; i++) {
      translationOriginal.push(translate[i].innerHTML);
    }
  }, []);

  const translateScript = (): void => {
    if (translateSwitch === 0) {
      translateSwitch = 1;

      for (let i = 0; i < translation.length; i++) {
        translate[i].innerHTML = translation[i];
      }

      bar.current.classList.remove("ml-[0%]");
      bar.current.classList.add("ml-[50%]");
    } else {
      translateSwitch = 0;

      for (let i = 0; i < translation.length; i++) {
        translate[i].innerHTML = translationOriginal[i];
      }

      bar.current.classList.remove("ml-[50%]");
      bar.current.classList.add("ml-[0%]");
    }
  };

  return (
    <div
      className="relative top-12 flex w-full flex-row justify-end"
      data-testid="translator-1"
    >
      <div
        className="topBox mr-5 w-1/5 cursor-pointer rounded-[2rem] bg-cover bg-fixed bg-no-repeat py-1 px-2 md:w-1/12"
        onClick={translateScript}
      >
        <div className="flex flex-row justify-between">
          <div className="w-1/2 text-center">
            <p>PL</p>
          </div>
          <div className="w-1/2 text-center">
            <p>ENG</p>
          </div>
        </div>
        <div
          className="beam ml-[0%] h-[2px] w-1/2 bg-cover bg-fixed bg-no-repeat duration-1000"
          ref={bar}
        ></div>
      </div>
    </div>
  );
}
