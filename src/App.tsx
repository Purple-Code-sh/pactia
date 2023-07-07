//components
import Accordion from "./components/Accordion/Accordion";
import Header from "./components/Header/Header";
//data
import cardsInfo from "./data/cardsInfo.json";
//style
import "./App.css";

export default function App() {
  const showCards = cardsInfo.map((element) => {
    const isHeader = element.header == "" ? false : true;
    const howGrow = element.header == "" ? "fromGrow2" : "fromGrow";
    const header =
      element.header == "" ? (
        ""
      ) : (
        <h3 role="sectionHeader">{element.header}</h3>
      );
    return (
      <Accordion title="Hide info" isHeader={isHeader}>
        {header}
        <div className="toGrow">
          <div className={howGrow}>box with flexible height</div>
        </div>
        <div role="articleDescription">
          <p>{element.description}</p>
        </div>
      </Accordion>
    );
  });
  return (
    <div className=" max-w-full  ">
      <div className=" w-full">
        <Header></Header>
      </div>
      <section className="welcomeSection p-6 pt-0 flex justify-between flex-wrap">
        {showCards}
      </section>
    </div>
  );

  // some app names in nahuatl: zozo, iztic, pixoa, granadia, pactia, paloa, neuh
}
