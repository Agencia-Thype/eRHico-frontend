import { useEffect, useState } from "react";
import "../../styles/_reset.sass"
import "./header.sass"
const Header = () => {
    const [isSticky, setIsSticky] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
        if (window.scrollY > 20) {
            setIsSticky(true);
        } else {
            setIsSticky(false);
        }
    };

    // Adiciona o listener de evento de scroll
    window.addEventListener("scroll", handleScroll);

    // Limpa o listener ao desmontar o componente
    return () => {
        window.removeEventListener("scroll", handleScroll);
    };
  }, []);
    return (
        <nav className={`header ${isSticky ? "sticky" : ""}`}>
            <figure>
                <img src="..\src\assets\img\eRHico-logo.png" alt="Logo" />
            </figure>
            <ul className="menu">
                <li>HOME</li>
                <li>SERVIÇOS</li>
                <li>CARREIRAS</li>
                <li>CONVENÇÃO</li>
                <li>BLOG</li>
                <li>PORTAL</li>
                <li>CONTATO</li>
            </ul>
            <button>SEJA UM FRANQUEADO</button>
        </nav>
  )
}

export default Header
