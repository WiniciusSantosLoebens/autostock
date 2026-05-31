import autoParts from "../assets/autoparts.png";

function Hero() {
  return (
    <section id="inicio" className="hero">

      <div className="hero-text">

        <h1>AutoStock</h1>

        <h2>
          Gerencie seu estoque de autopeças com eficiência
        </h2>

        <p>
          Controle peças de motor e suspensão em um sistema moderno,
          rápido e seguro.
        </p>

        <a href="#planos">
          <button>
            Conheça nossos planos
          </button>
</a>

      </div>

      <div className="hero-image">
        <img src={autoParts} alt="Auto Peças" />
      </div>

    </section>
  );
}

export default Hero;