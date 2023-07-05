//components
import Accordion from "./components/Accordion/Accordion";

//data
import cardsInfo from "./data/cardsInfo.json";

//style
import "./App.css";

export default function App() {
  const showCards = cardsInfo.map((element) => {
    const header =
      element.header == "" ? (
        ""
      ) : (
        <h3 role="sectionHeader">{element.header}</h3>
      );
    return (
      <Accordion title="Hide info">
        {header}
        <div className="toGrow">
          <div className="fromGrow">box with flexible height</div>
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
