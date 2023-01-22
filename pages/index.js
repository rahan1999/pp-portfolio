import About from "../components/about";
import Cv from "../components/cv";
import Footer from "../components/footer";
import Portfolio from "../components/portfolio";
import Top from "../components/top";
import Menu from "../components/menu";
import Translator from "../components/translator";

export default function Home() {
  return (
    <main>
      <Menu></Menu>
      <Translator></Translator>
      <Top></Top>
      <About></About>
      <Cv></Cv>
      <Portfolio></Portfolio>
      <Footer></Footer>
    </main>
  );
}
