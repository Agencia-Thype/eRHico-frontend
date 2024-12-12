import Header from "../../components/Header"
import "../../styles/_reset.sass"
import "./home.sass"

const HomePage = () => {
  return (
    <main>
        <Header/>

        <section className="banner">
          <div>
            <h1>TENHA ACESSO AS <span>MELHORES VAGAS</span></h1>
            <h2>E FAÇA SEU FUTURO DE SUCESSO</h2>
            <p>Apoie o crescimento da sua empresa com soluções de RH inovadoras</p>
            <button>CANDIDATE-SE</button>
          </div>
          <figure>
            <img src="../src/assets/img/imagem-topo.png" alt="Banner principal" />
          </figure>
        </section>

        <section className="recruitment-info">
            <div className="info-cards">
                <div className="card">
                    <img src="../src/assets/icons/store-icon.png" alt="Unidades" />
                    <h3>+200 unidades</h3>
                    <p>OPERANDO</p>
                </div>
                <div className="card">
                    <img src="../src/assets/icons/experience-icon.png" alt="Anos de mercado" />
                    <h3>Quase 20 ANOS</h3>
                    <p>de mercado</p>
                </div>
                <div className="card">
                    <img src="../src/assets/icons/impact-icon.png" alt="Pessoas impactadas" />
                    <h3>+15 MILHÕES</h3>
                    <p>de pessoas impactadas</p>
                </div>
            </div>

            <div className="main-content">
                <div className="text-section">
                    <h2>Nós da eRHico</h2>
                    <h1>
                        OFERECEMOS SERVIÇOS<br />
                        DE <span>RECRUTAMENTO<br /> INTELIGENTE</span>
                    </h1>
                </div>
                <div className="image-section">
                    <img src="../src/assets/img/imagem02.png" alt="Equipe trabalhando" />
                </div>
            </div>
        </section>

        <section className="services">
            <div className="gallery">
                <div className="img-box">
                    <h3>Assunto <span>SLIDE 01</span></h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                    <button>VEJA MAIS</button>
                </div>
                <div className="img-box">
                    <h3>Assunto <span>SLIDE 02</span></h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore, eaque, corrupti natus autem doloremque porro atque, enim placeat iusto fugit totam perferendis eos dignissimos! Voluptatibus, debitis laudantium! At, tempora quasi?</p>
                    <button>VEJA MAIS</button>
                </div>
                <div className="img-box">
                    <h3>Assunto <span>SLIDE 03</span></h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                    <button>VEJA MAIS</button>
                </div>
                <div className="img-box">
                    <h3>Assunto <span>SLIDE 04</span></h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                    <button>VEJA MAIS</button>
                </div>
            </div>
        </section>

       
    </main>
  )
}

export default HomePage
