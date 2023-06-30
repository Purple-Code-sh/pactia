import Accordion from "./components/Accordion/Accordion";
import "./App.css";

export default function App() {
  return (
    <div>
      <section className="welcomeSection">
        <Accordion title="More Information">
          <h3>Ofertas en tendencia</h3>
          <p>Audífonos Gamer y Accesorios para Consolas</p>
        </Accordion>
        <Accordion title="More Information">
          <h3>Ofertas en salud</h3>
          <p>Oferta en serums, cremas faciales y fibras capilares</p>
        </Accordion>
        <Accordion title="More Information">
          <h3>Descuentos en tecnologia</h3>
          <p>Electrónica, Cámaras, Fotografía y más</p>
        </Accordion>
        <Accordion title="Inicia sesión para vivir tu mejor experiencia">
          <p>Promoción pagada</p>
        </Accordion>
      </section>
    </div>
  );
}
