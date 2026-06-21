function Pricing() {
  return (
    <section id="planos" className="pricing">

      <h2>Planos</h2>

      <div className="cards">

        <div className="card">
          <h3>Básico</h3>
          <h1>R$49,90</h1>

          <p>Até 500 peças</p>
          <p>Relatórios básicos</p>

          <a href="#contato" className="btn-assinar">
            Assinar
          </a>
        </div>

        <div className="card destaque">
          <h3>Profissional</h3>
          <h1>R$99,90</h1>

          <p>Até 2.000 peças</p>
          <p>Relatórios avançados</p>
          <p>Dashboard completo</p>

          <a href="#contato" className="btn-assinar">
            Assinar
          </a>
        </div>

        <div className="card">
          <h3>Empresarial</h3>
          <h1>R$199,90</h1>

          <p>Produtos ilimitados</p>
          <p>Suporte prioritário</p>

          <a href="#contato" className="btn-assinar">
            Assinar
          </a>
        </div>

      </div>

    </section>
  );
}

export default Pricing;