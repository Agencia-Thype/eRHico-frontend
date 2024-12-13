import React, { useState, useRef, useEffect } from "react";
import "./services.sass"
import Header from "../../components/Header";

const ServicePage = () => {
  const [rotate, setRotate] = useState(0);
  const [active, setActive] = useState(0);
  const imageRef = useRef<HTMLDivElement>(null);

  const items = [
    { name: "SERVICE NAME 1", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.", img: "./src/assets/img/1.PNG" },
    { name: "SERVICE NAME 2", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.", img: "./src/assets/img/2.PNG" },
    { name: "SERVICE NAME 3", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.", img: "./src/assets/img/3.PNG" },
    { name: "SERVICE NAME 4", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.", img: "./src/assets/img/4.PNG" },
    { name: "SERVICE NAME 5", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.", img: "./src/assets/img/5.PNG" },
    { name: "SERVICE NAME 6", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.", img: "./src/assets/img/6.PNG" },
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
            <div className="title">Services!</div>
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
