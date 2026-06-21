import { useState } from "react";
import { toast, ToastContainer } from "react-toastify";

function Contact() {

  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [mensagem, setMensagem] = useState("");

  async function enviar(e) {
    e.preventDefault();

    try {

      const resposta = await fetch(
        "/.netlify/functions/sendEmail",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            nome,
            email,
            mensagem,
          }),
        }
      );

      if (resposta.ok) {

        toast.success("Mensagem enviada com sucesso!");

        setNome("");
        setEmail("");
        setMensagem("");

      } else {

        toast.error("Erro ao enviar mensagem.");

      }

    } catch (error) {

      console.error(error);
      toast.error("Erro de conexão.");

    }
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
          required
        />

        <input
          type="email"
          placeholder="Seu melhor email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <textarea
          placeholder="Digite sua mensagem"
          value={mensagem}
          onChange={(e) => setMensagem(e.target.value)}
          required
        />

        <button type="submit">
          Solicitar Contato
        </button>

      </form>

      <ToastContainer />

    </section>
  );
}

export default Contact;