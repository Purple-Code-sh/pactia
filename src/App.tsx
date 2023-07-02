import Accordion from "./components/Accordion/Accordion";
import "./App.css";

export default function App() {
  return (
    <div>
      <section className="welcomeSection">
        <Accordion title="More Information">
          <h3 className="sectionHeader">Ofertas en tendencia</h3>
          <div className="toGrow">
            <div className="fromGrow">box with flexible height</div>
          </div>
          <div className="articleDescription">
            <p>Audífonos Gamer y Accesorios para Consolas</p>
          </div>
        </Accordion>

        <Accordion title="More Information">
          <h3>Ofertas en salud</h3>
          <div className="articleDescription">
            <p>Oferta en serums, cremas faciales y fibras capilares</p>
          </div>
        </Accordion>

        <Accordion title="More Information">
          <h3>Descuentos en tecnologia</h3>
          <div className="articleDescription">
            <p>Electrónica, Cámaras, Fotografía y más</p>
          </div>
        </Accordion>

        <Accordion title="Inicia sesión para vivir tu mejor experiencia">
          <div className="articleDescription">
            <p>Promoción pagada</p>
          </div>
        </Accordion>
      </section>
    </div>
  );
}
