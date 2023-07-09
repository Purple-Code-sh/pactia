//components
import Accordion from "./components/Accordion/Accordion";
import Header from "./components/Header/Header";
//data
import cardsInfo from "./data/cardsInfo.json";
//style
import "./App.css";

export default function App() {
  const showCards = cardsInfo.map((element) => {
    const header = element.header == "" ? "" : <h3>{element.header}</h3>;
    return <Accordion header={header} description={element.description} />;
  });
  return (
    <div className=" max-w-full  min-w-[936px] font-light ">
      <div className=" w-full">
        <Header></Header>
      </div>
      <div className="flex flex-wrap pl-6 py-6">{showCards}</div>
    </div>
  );

  // some app names in nahuatl: zozo, iztic, pixoa, granadia, pactia, paloa, neuh
}
