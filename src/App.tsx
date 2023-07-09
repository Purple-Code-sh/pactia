//components
import Accordion from "./components/Accordion/Accordion";
import Header from "./components/Header/Header";
//data
import cardsInfo from "./data/cardsInfo.json";
//style
import "./App.css";

export default function App() {
  const showCards = cardsInfo.map((element) => {
    const howGrow = element.header == "" ? "fromGrow2" : "fromGrow";
    const header =
      element.header == "" ? (
        ""
      ) : (
        <h3 role="sectionHeader">{element.header}</h3>
      );
    return (
      <Accordion
        header={header}
        howGrow={howGrow}
        description={element.description}
      />
    );
  });
  return (
    <div className=" max-w-full  ">
      <div className=" w-full">
        <Header></Header>
      </div>
      <div>{showCards}</div>
    </div>
  );

  // some app names in nahuatl: zozo, iztic, pixoa, granadia, pactia, paloa, neuh
}
