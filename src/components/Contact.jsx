import { useState } from "react";

function Contact() {

  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [mensagem, setMensagem] = useState("");

  function enviar(e) {
    e.preventDefault();

    alert("Mensagem enviada!");

    setNome("");
    setEmail("");
    setMensagem("");
  }

  return (
    <section id="contato" className="contact">

      <span>Envie sua dúvida</span>

      <h2>Entre em contato</h2>

      <p>
        Tire dúvidas sobre nosso sistema de gestão para autopeças.
      </p>

      <form onSubmit={enviar}>

        <input
          type="text"
          placeholder="Seu nome"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
        />

        <input
          type="email"
          placeholder="Seu melhor email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <textarea
          placeholder="Digite sua mensagem"
          value={mensagem}
          onChange={(e) => setMensagem(e.target.value)}
        />

       <button type="submit">
        Solicitar Contato
     </button>

      </form>

    </section>
  );
}

export default Contact;