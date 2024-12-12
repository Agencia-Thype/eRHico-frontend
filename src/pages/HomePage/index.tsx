import Header from "../../components/Header"
import "../../styles/_reset.sass"
import "./home.sass"

const HomePage = () => {
  return (
    <main>
        <Header/>
        <section className="banner">
          <div className="apply">
            <h1>TENHA ACESSO AS <span>MELHORES VAGAS</span></h1>
            <h2>E FAÇA SEU FUTURO DE SUCESSO</h2>
            <p>Apoie o crescimento da sua empresa com soluções de RH inovadoras</p>
            <button>CANDIDATE-SE</button>
          </div>
          <figure>
            <img src="../src/assets/img/imagem-topo.png" alt="" />
          </figure>
        </section>
        <section className="services">
            <div className="gallery">
                <div className="img-box"><h3>Assunto <span>SLIDE 01</span></h3><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. </p><button>VEJA MAIS</button></div>
                <div className="img-box"><h3>Assunto <span>SLIDE 02</span></h3><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore, eaque, corrupti natus autem doloremque porro atque, enim placeat iusto fugit totam perferendis eos dignissimos! Voluptatibus, debitis laudantium! At, tempora quasi?</p><button>VEJA MAIS</button></div>
                <div className="img-box"><h3>Assunto <span>SLIDE 03</span></h3><p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p><button>VEJA MAIS</button></div>
                <div className="img-box"><h3>Assunto <span>SLIDE 04</span></h3><p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p><button>VEJA MAIS</button></div>
            </div>
        </section>
    </main>
  )
}

export default HomePage
