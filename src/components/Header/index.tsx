import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom"; 
import "../../styles/_reset.sass";
import "./header.sass";

const Header = () => {
    const [isSticky, setIsSticky] = useState(false);
    const navigate = useNavigate(); // Inicializa o hook useNavigate

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 20) {
                setIsSticky(true);
            } else {
                setIsSticky(false);
            }
        };

        window.addEventListener("scroll", handleScroll);

        // Limpa o listener ao desmontar o componente
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <nav className={`header ${isSticky ? "sticky" : ""}`}>
            {/* Torna o logo um botão */}
            <figure onClick={() => navigate("/")} style={{ cursor: "pointer" }}>
                <img src="..\src\assets\img\eRHico-logo.png" alt="Logo" />
            </figure>
            <ul className="menu">

                <li><a href="/">HOME</a></li>
                <li><a href="/servicos">SERVIÇOS</a></li>
                <li><a href="">CARREIRAS</a></li>
                <li><a href="">CONVENÇÃO</a></li>
                <li><a href="">BLOG</a></li>
                <li><a href="">PORTAL</a></li>
                <li><a href="">CONTATO</a></li>

            </ul>
            <button onClick={() => navigate("/franquia")}>SEJA UM FRANQUEADO</button>
        </nav>
    );
};

export default Header;
