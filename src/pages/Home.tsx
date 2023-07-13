//components
import Accordion from "../components/Accordion/Accordion";
import Header from "../components/Header/Header";
import Subheader from "../components/Subheader/Subheader";
//data
import cardsInfo from "../data/cardsInfo.json";
//style
import blurBG2 from "../assets/blurBG2.svg";

export default function Home() {
  const showCards = cardsInfo.map((element) => {
    const header = element.header == "" ? "" : <h3>{element.header}</h3>;
    return (
      <Accordion
        header={header}
        description={element.description}
        action={element.action}
      />
    );
  });
  return (
    <div className=" w-full">
      <div className=" w-full z-40">
        <Header></Header>
      </div>
      <div className=" w-full z-30">
        <Subheader></Subheader>
      </div>
      <section className="w-screen h-screen text-center overflow-hidden absolute top-0 bottom-0 -z-10">
        <div
          className="w-full h-full opacity-80 "
          style={{
            backgroundImage: "url(" + blurBG2 + ")",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPositionY: "bottom",
          }}
        ></div>
      </section>
      <div className="flex flex-wrap pl-6 pt-6">{showCards}</div>
      <div className="flex flex-wrap pl-6 pt-6">{showCards}</div>
    </div>
  );

  // some app names in nahuatl: zozo, iztic, pixoa, granadia, pactia, paloa, neuh
}
