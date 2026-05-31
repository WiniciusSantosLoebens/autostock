import pistao from "../assets/pistao.png";
import amortecedor from "../assets/amortecedor.png";
import correia from "../assets/correia.png";
import bandeja from "../assets/bandeja.png";
import pivo from "../assets/pivo.png";
import mola from "../assets/mola.png";

function Products() {
  return (
    <section id="produtos" className="products">

      <h2>Peças Gerenciadas</h2>

      <div className="cards">

        <div className="card">
          <img src={pistao} alt="Pistão" />
          <h3>Pistão</h3>
          <p>Peça fundamental do motor.</p>
        </div>

        <div className="card">
          <img src={correia} alt="Correia" />
          <h3>Correia Dentada</h3>
          <p>Sincronização do motor.</p>
        </div>

        <div className="card">
          <img src={amortecedor} alt="Amortecedor" />
          <h3>Amortecedor</h3>
          <p>Estabilidade e conforto.</p>
        </div>

        <div className="card">
          <img src={bandeja} alt="Bandeja" />
          <h3>Bandeja</h3>
          <p>Componente da suspensão.</p>
        </div>

        <div className="card">
          <img src={pivo} alt="Pivô" />
          <h3>Pivô</h3>
          <p>Articulação da suspensão.</p>
        </div>

        <div className="card">
          <img src={mola} alt="Mola" />
          <h3>Mola</h3>
          <p>Absorção de impactos.</p>
        </div>

      </div>

    </section>
  );
}

export default Products;