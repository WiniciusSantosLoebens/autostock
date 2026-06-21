import pistao from "../assets/pistao.png";
import amortecedor from "../assets/amortecedor.png";
import correia from "../assets/correia.png";
import bandeja from "../assets/bandeja.png";
import pivo from "../assets/pivo.png";
import mola from "../assets/mola.png";

function Products() {
    const mostrarDetalhes = (nome, estoque) => {
    alert(
      `Peça: ${nome}\n\nEstoque disponível: ${estoque} unidades\n\nConsulte nossa equipe para mais informações.`
    );
  };
  return (
    <section id="produtos" className="products">

      <h2>Peças Gerenciadas</h2>

      <div className="cards">

        <div className="card">
          <img src={pistao} alt="Pistão" />

          <h3>Pistão - Suloy</h3>

          <p>Peça fundamental do motor.</p>

          <p className="compatibilidade">
            Gol G5 • Fox • Voyage
          </p>

          <span className="preco">
            R$ 149,90
          </span>

          <button
            className="btn-detalhes"
            onClick={() => mostrarDetalhes("Pistão", 15)}
          >
            Ver Detalhes
          </button>
        </div>

        <div className="card">
          <img src={correia} alt="Correia" />

          <h3>Correia Dentada - Gates</h3>

          <p>Sincronização do motor.</p>

          <p className="compatibilidade">
            Gol • Saveiro • Parati
          </p>

          <span className="preco">
            R$ 89,90
          </span>

          <button
            className="btn-detalhes"
            onClick={() => mostrarDetalhes("Correia Dentada", 22)}
            >
            Ver Detalhes
          </button>
        </div>

        <div className="card">
          <img src={amortecedor} alt="Amortecedor" />

          <h3>Amortecedor - Cofap</h3>

          <p>Estabilidade e conforto.</p>

          <p className="compatibilidade">
            Onix • Prisma • Cobalt
          </p>

          <span className="preco">
            R$ 329,90
          </span>

          <button
            className="btn-detalhes"
            onClick={() => mostrarDetalhes("Amortecedor", 8)}
          >
            Ver Detalhes
          </button>
        </div>

        <div className="card">
          <img src={bandeja} alt="Bandeja" />

          <h3>Bandeja - Perfect</h3>

          <p>Componente da suspensão.</p>

          <p className="compatibilidade">
            Palio • Siena • Uno
          </p>

          <span className="preco">
            R$ 219,90
          </span>

          <button
            className="btn-detalhes"
            onClick={() => mostrarDetalhes("Bandeja", 12)}
          >
            Ver Detalhes
          </button>
        </div>

        <div className="card">
          <img src={pivo} alt="Pivô" />

          <h3>Pivô - Drive</h3>

          <p>Articulação da suspensão.</p>

          <p className="compatibilidade">
            Corolla • Etios • Yaris
          </p>

          <span className="preco">
            R$ 79,90
          </span>

          <button
            className="btn-detalhes"
            onClick={() => mostrarDetalhes("Pivô", 19)}
          >
            Ver Detalhes
          </button>
        </div>

        <div className="card">
          <img src={mola} alt="Mola" />

          <h3>Mola - Cindumel</h3>

          <p>Absorção de impactos.</p>

          <p className="compatibilidade">
            Civic • Fit • City
          </p>

          <span className="preco">
            R$ 199,90
          </span>

          <button
            className="btn-detalhes"
            onClick={() => mostrarDetalhes("Mola", 10)}
          >
            Ver Detalhes
          </button>
        </div>

      </div>

    </section>
  );
}

export default Products;