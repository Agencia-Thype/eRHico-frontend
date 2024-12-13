import RoutesComponents from "./routes"
import "./styles/App.sass";

const App = () => {
  return (
    <>
      <RoutesComponents/>
      <a
        href="https://wa.me/+5547988658011" // Substitua pelo número do WhatsApp
        className="whatsapp-float"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          src="../src/assets/img/whatsapp.png" // Adicione o ícone do WhatsApp na pasta de ícones
          alt="WhatsApp"
        />
      </a>
    </>
  )
}

export default App
