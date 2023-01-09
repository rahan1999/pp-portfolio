import Cvsection from "./cvSection";

export default function Cv() {
  return (
    <section id="cv" className="flex flex-col items-center">
      <h1 className="sectionTitles mt-20 mb-5 rounded-[2rem] bg-cover bg-fixed bg-no-repeat px-10 py-5 text-5xl md:text-7xl">
        CV
      </h1>
      <Cvsection
        main="Umiejętności"
        titles="HTML, CSS i JS-React.js, Next.js-Tailwind-Komendy Unix-Affinity Designer-Git, GitHub-Angielski"
        descriptions="Trzy filary aplikacji webowych. Poświęciłem każdemu z nich należyty czas aby osiągnąć ich głębokie zrozumienie i móc zabrać się da nauki opartych na nich bibliotek.-Framework'i na których aktualnie jestem skupiony. Głęboko zafascynowały mnie one możliwościami jakie dają do tworzenia aplikacji webowych.-Wraz z Next.js jest jednym z nowszych narzędzi w moim arsenale do tworzenie responsywnych witryn internetowych.-Znam podstawy posługiwanie się terminalem w systemach operacyjnych typu Linux czy MacOS.-Aktualnie mój ulubiony program do tworzenia grafiki komputerowej. To w nim tworze różne obrazki i projekty stron internetowych.-Umiem się posługiwać tymi popularnymi systemami do zarządzania wersją. Na Git HUB zamieszczam też co ciekawsze napisane prze zemnie programy.-Staram się dbać o moje umiejętności posługiwania się najbardziej uniwersalnym językiem świata. Aktualnie mogę pochwalić się komunikatywnością na poziomie B1."
      ></Cvsection>
      <div className="box h-1 w-1"></div>
      <Cvsection
        main="Zainteresowania"
        titles="Sport-Naprawa i konserwacja-Grafika komputerowa-Lego-Technologia"
        descriptions="Aktywność fizyczna jest bardzo ważnym elementem mojego życia. Codzienne 10 km na rowerze wraz z treningami na siłowni lub basenie, to jest to co mnie relaksuje.-Mało jest tak satysfakcjonujących rzeczy jak przywrócenie przedmiotowi oryginalnej sprawności. Niesamowite jest tez jak często wystarczy coś wyczyścić żeby znowu pracowało jak dawniej.-Od małych ikonek po tapety 4K. Uwielbiam proces stopniowego przelewania mojej wizji na ekran komputera.-Układanie klocków okazało się być zajęciem stymulującym na wielu płaszczyznach. Połączenie skupienia, kreatywności i determinacji daje efekt w postaci małej, kanciastej sztuki.-Uwielbiam zagłębiać się w specyfikacje techniczne i porównywać różne produkty. Zawsze nurtują mnie nie oczywiste pytania: „Dla jakiej grupy docelowej może być ten produkt kierowany?”, „Co go wyróżnia od konkurencji w tej kategorii cenowej?” i najważniejsze: „Czy ma silniczki haptyczne czy zwykłą wibracje?”"
      ></Cvsection>
    </section>
  );
}
