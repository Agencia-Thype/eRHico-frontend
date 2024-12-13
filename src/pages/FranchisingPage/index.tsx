import Header from "../../components/Header";
import "./FranchisingPage.sass";

const FranchisingPage = () => {
  return (
    <main>
      <Header />
      <section className="franchising-page">
        <div className="image-section">
          <img
            src="../src/assets/img/imagem05.png"
            alt="Cadastro de Franqueados"
          />
        </div>
        <div className="form-section">
          <h1>CONFIRME SEU CADASTRO</h1>
          <p>
            Preencha todos os campos abaixo e obtenha mais informações sobre
            essa incrível franquia.
          </p>
          <form>
            <div className="input-group">
              <input type="text" placeholder="Digitando nome..." />
              <input type="email" placeholder="E-MAIL" />
            </div>
            <div className="input-group">
              <input type="text" placeholder="TELEFONE" />
              <input type="text" placeholder="CIDADE DESEJA ABRIR A FRANQUIA" />
            </div>
            <div className="input-group">
              <input type="text" placeholder="ESTADO" />
              <input
                type="text"
                placeholder="CAPITAL PARA INVESTIR NA FRANQUIA"
              />
            </div>
            <div className="input-group">
              <input
                type="text"
                placeholder="MOTIVADOR DE TER UM NEGÓCIO PRÓPRIO"
              />
              <input
                type="text"
                placeholder="PREVISÃO PARA OPERAR A FRANQUIA"
              />
            </div>
            <div className="checkbox-group">
              <div className="checkbox-item">
                <label>CAPITAL ESTÁ DISPONÍVEL?</label>
                <div>
                  <input
                    type="radio"
                    id="capital-sim"
                    name="capital"
                    value="sim"
                  />
                  <label htmlFor="capital-sim">SIM</label>
                  <input
                    type="radio"
                    id="capital-nao"
                    name="capital"
                    value="nao"
                  />
                  <label htmlFor="capital-nao">NÃO</label>
                </div>
              </div>
              <div className="checkbox-item">
                <label>TEM EXPERIÊNCIA EM RH?</label>
                <div>
                  <input type="radio" id="rh-sim" name="rh" value="sim" />
                  <label htmlFor="rh-sim">SIM</label>
                  <input type="radio" id="rh-nao" name="rh" value="nao" />
                  <label htmlFor="rh-nao">NÃO</label>
                </div>
              </div>
            </div>
            <div className="checkbox-group">
              <label>O QUE ESTÁ PROCURANDO?</label>
              <div>
                <input type="checkbox" id="comprar-franquia" />
                <label htmlFor="comprar-franquia">
                  QUERO COMPRAR UMA FRANQUIA DA RHF
                </label>
              </div>
              <div>
                <input type="checkbox" id="nao-interesse" />
                <label htmlFor="nao-interesse">
                  NÃO TENHO INTERESSE NA FRANQUIA DA RHF
                </label>
              </div>
            </div>
            <button type="submit">ENVIAR CADASTRO</button>
          </form>
        </div>
      </section>
    </main>
  );
};

export default FranchisingPage;
