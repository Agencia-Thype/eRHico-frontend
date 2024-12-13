import Header from "../../components/Header";
import "./ContactPage.sass";

const ContactPage = () => {
  return (
    <main>
      <Header />
      <section className="contact-page">
        <div className="contact-container">
          <h1>ENTRE EM CONTATO</h1>
          <p>Preencha o formulário slackabaixo ou entre em contato diretamente pelo WhatsApp.</p>
          <form>
            <div className="input-group">
              <input type="text" placeholder="Seu nome" />
              <input type="email" placeholder="Seu e-mail" />
            </div>
            <div className="input-group">
              <input type="text" placeholder="Assunto" />
              <textarea placeholder="Sua mensagem" rows={5}></textarea>

            </div>
            <button type="submit">ENVIAR MENSAGEM</button>
          </form>
        </div>
      </section>
     
    </main>
  );
};

export default ContactPage;
