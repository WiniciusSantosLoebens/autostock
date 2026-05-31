import {

  FaInstagram,
  FaFacebook,
  FaLinkedin,
  FaEnvelope,
  FaPhone

} from "react-icons/fa";

function Footer() {
  return (
    <footer className="footer">

      <div>
        <h2>AutoStock</h2>

        <p>
          Sistema inteligente para controle de estoque
          de autopeças.
        </p>
      </div>

      <div>
        <h3>Contato</h3>

        <p><FaEnvelope /> contato@autostock.com</p>
        <p><FaPhone /> (41) 99999-9999</p>
      </div>

      <div>
        <h3>Empresa</h3>

        <p>Sobre Nós</p>
        <p>Equipe</p>
        <p>Blog</p>
      </div>

      <div>
        <h3>Redes Sociais</h3>

        <p><FaInstagram /> Instagram</p>
        <p><FaFacebook /> Facebook</p>
        <p><FaLinkedin /> LinkedIn</p>
      </div>

    </footer>
  );
}

export default Footer;