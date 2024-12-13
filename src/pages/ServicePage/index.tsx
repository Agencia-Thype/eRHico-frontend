import React, { useState, useRef, useEffect } from "react";
import "./services.sass"
import Header from "../../components/Header";

const ServicePage = () => {
  const [rotate, setRotate] = useState(0);
  const [active, setActive] = useState(0);
  const imageRef = useRef<HTMLDivElement>(null);

  const items = [
    { name: "ANÁLISE E ELABORAÇÃO CURRICULAR", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.", img: "./src/assets/img/headhunting.png" },
    { name: "TRADUÇÃO DE CURRÍCULOS", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.", img: "./src/assets/img/translation.png" },
    { name: "Treinamento para Entrevistas", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.", img: "./src/assets/img/meeting-room.png" },
    { name: "Orientação Vocacional", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.", img: "./src/assets/img/advice.png" },
    { name: "ORIENTAÇÃO DE CARREIRA", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.", img: "./src/assets/img/direction.png" },
    { name: "COACHING", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.", img: "./src/assets/img/lecture.png" },
    // { name: "Mapeamento Comportamental DISC", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.", img: "./src/assets/img/behavioral.png" },
  ];

  const countItem = items.length;
  const rotateAdd = 360 / countItem;

  const nextSlider = () => {
    setActive((prev) => (prev + 1 > countItem - 1 ? 0 : prev + 1));
    setRotate((prev) => prev + rotateAdd);
  };

  const prevSlider = () => {
    setActive((prev) => (prev - 1 < 0 ? countItem - 1 : prev - 1));
    setRotate((prev) => prev - rotateAdd);
  };

  useEffect(() => {
    if (imageRef.current) {
      imageRef.current.style.setProperty("--rotate", `${rotate}deg`);
    }
  }, [rotate]);

  useEffect(() => {
    const autoSlide = setInterval(nextSlider, 6000);
    return () => clearInterval(autoSlide); // Limpar intervalo ao desmontar
  }, []);

  return (
    <main>
        <Header />
        <div className="slider">
            <div className="title">Serviços!</div>
            <div className="images" ref={imageRef}>
            {items.map((item, index) => (
                <div
                className="item"
                key={index}
                style={{ "--i": index + 1 } as React.CSSProperties}
                >
                <img src={item.img} alt={item.name} />
                </div>
            ))}
            </div>
            <div className="content">
            {items.map((item, index) => (
                <div
                className={`item ${index === active ? "active" : ""}`}
                key={index}
                >
                <h1>{item.name}</h1>
                <div className="des">{item.description}</div>
                <button>Saiba mais</button>
                </div>
            ))}
            </div>
            <button id="prev" onClick={prevSlider}>
            &lt;
            </button>
            <button id="next" onClick={nextSlider}>
            &gt;
            </button>
        </div>
    </main>
  );
};

export default ServicePage;
