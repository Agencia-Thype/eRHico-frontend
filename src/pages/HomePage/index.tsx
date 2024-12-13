import Header from "../../components/Header";
import "../../styles/_reset.sass";
import "./home.sass";

const HomePage = () => {
  return (
    <main>
      <Header />

      {/* Banner Section */}
      <section className="banner">
        <div className="apply">
          <h1>
            TENHA ACESSO AS <span>MELHORES VAGAS</span>
          </h1>
          <h2>E FAÇA SEU FUTURO DE SUCESSO</h2>
          <p>
            Apoie o crescimento da sua empresa com soluções de RH inovadoras
          </p>
          <button>CANDIDATE-SE</button>
        </div>
        <figure>
          <img src="../src/assets/img/imagem-topo.png" alt="Banner principal" />
        </figure>
      </section>

      {/* Recruitment Info Section */}
      <section className="recruitment-info">
        <div className="info-cards">
          <div className="card">
            <img src="../src/assets/icons/store-icon.png" alt="Unidades" />
            <h3>+200 unidades</h3>
            <p>OPERANDO</p>
          </div>
          <div className="card">
            <img
              src="../src/assets/icons/experience-icon.png"
              alt="Anos de mercado"
            />
            <h3>Quase 20 ANOS</h3>
            <p>de mercado</p>
          </div>
          <div className="card">
            <img
              src="../src/assets/icons/impact-icon.png"
              alt="Pessoas impactadas"
            />
            <h3>+15 MILHÕES</h3>
            <p>de pessoas impactadas</p>
          </div>
        </div>

        <div className="main-content">
          <div className="text-section">
            <h2>Nós da eRHico</h2>
            <h1>
              OFERECEMOS SERVIÇOS
              <br />
              DE <span>RECRUTAMENTO</span>
              <br />
              <span>INTELIGENTE</span>
            </h1>
          </div>
          <div className="image-section">
            <img
              src="../src/assets/img/imagem02.png"
              alt="Equipe trabalhando"
            />
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="services">
        <div className="gallery">
          <div className="img-box">
            <h3>
              Assunto <span>SLIDE 01</span>
            </h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            <button>VEJA MAIS</button>
          </div>
          <div className="img-box">
            <h3>
              Assunto <span>SLIDE 02</span>
            </h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore,
              eaque, corrupti natus autem doloremque porro atque, enim placeat
              iusto fugit totam perferendis eos dignissimos! Voluptatibus,
              debitis laudantium! At, tempora quasi?
            </p>
            <button>VEJA MAIS</button>
          </div>
          <div className="img-box">
            <h3>
              Assunto <span>SLIDE 03</span>
            </h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            <button>VEJA MAIS</button>
          </div>
          <div className="img-box">
            <h3>
              Assunto <span>SLIDE 04</span>
            </h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            <button>VEJA MAIS</button>
          </div>
        </div>
      </section>

      {/* Scrolling Section */}
      <section className="scrolling-section-vertical">
        <div className="scrolling-item mission">
          <div className="text-with-bar">
            <div className="white-bar"></div>
            <h2>MISSÃO</h2>
          </div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis
            ipsum suspendisse.
          </p>
        </div>
        <div className="scrolling-item vision">
          <div className="text-with-bar">
            <div className="white-bar"></div>
            <h2>VISÃO</h2>
          </div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis
            ipsum suspendisse.
          </p>
        </div>
        <div className="scrolling-item values">
          <div className="text-with-bar">
            <div className="white-bar"></div>
            <h2>VALORES</h2>
          </div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis
            ipsum suspendisse.
          </p>
        </div>
      </section>

      <section className="business-section">
        <div className="business-content">
          <div className="image-container">
            <img
              src="../src/assets/img/imagem03.png"
              alt="Imagem representativa"
            />
          </div>
          <div className="text-container">
            <h1>
              IMPULSIONAMOS <br />
              <span>NEGÓCIOS</span>
            </h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis
              ipsum suspendisse sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <button>ENTRE EM CONTATO</button>
          </div>
        </div>
      </section>

      <section className="franchise-section">
        <div className="franchise-banner">
          <div className="banner-text">
            <h1>SEJA UM FRANQUEADO</h1>
            <p>faça parte dessa história.</p>
            <button>ENTRE EM CONTATO</button>
          </div>
        </div>

        <div className="success-stories">
          <h2>CASES DE SUCESSO</h2>
          <div className="carousel">
            <button className="arrow left">‹</button>
            <div className="testimonials">
              <div className="testimonial">
                <div className="image-container">
                  <img src="../src/assets/img/imagem02.png" alt="Laura Smith" />
                </div>
                <div className="text-content">
                  <span className="quote">“</span>
                  <p className="description">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Quis ipsum suspendisse.
                  </p>
                  <span className="quote-close">”</span>
                  <h3>LAURA SMITH</h3>
                  <p className="role">DIRETORA EXECUTIVA</p>
                </div>
              </div>
              <div className="testimonial">
                <div className="image-container">
                  <img src="../src/assets/img/imagem03.png" alt="Smith Laura" />
                </div>
                <div className="text-content">
                  <span className="quote">“</span>
                  <p className="description">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Quis ipsum suspendisse.
                  </p>
                  <span className="quote-close">”</span>
                  <h3>SMITH LAURA</h3>
                  <p className="role">DIRETORA EXECUTIVA</p>
                </div>
              </div>
            </div>
            <button className="arrow right">›</button>
          </div>
        </div>
      </section>
    </main>
  );
};

export default HomePage;
