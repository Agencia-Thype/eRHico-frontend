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
                {/* Torna o li HOME um botão */}
                <li onClick={() => navigate("/")} style={{ cursor: "pointer" }}>
                    HOME
                </li>
                <li>SERVIÇOS</li>
                <li>CARREIRAS</li>
                <li>CONVENÇÃO</li>
                <li>BLOG</li>
                <li>PORTAL</li>
                <li>CONTATO</li>
            </ul>
            <button onClick={() => navigate("/franquia")}>SEJA UM FRANQUEADO</button>
        </nav>
    );
};

export default Header;
