function Header() {
  return (
    <header className="header">

      <h2>AutoStock</h2>

      <nav>
        <a href="#inicio">Início</a>
        <a href="#produtos">Produtos</a>
        <a href="#planos">Planos</a>
        <a href="#contato">Contato</a>
      </nav>

      <button className="btn-header">
        Entrar
      </button>

    </header>
  );
}

export default Header;