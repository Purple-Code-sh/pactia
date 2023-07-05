//components
import Accordion from "./components/Accordion/Accordion";

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
    <div>
      <section className="welcomeSection">{showCards}</section>
    </div>
  );
}
