import { useEffect, useState } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "./SessaoMarcas.scss";

type Marca = {
  nome: string;
  logoUrl: string;
};

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 4,
    slidesToSlide: 1,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 3,
    slidesToSlide: 1,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 2,
    slidesToSlide: 1,
  },
};

function SessaoMarcas() {
  const [marcas, setMarcas] = useState<Marca[]>([]);

  useEffect(() => {
    const marcas = [
      { nome: "Shopify", logoUrl: "/img/Shopify-Logo.png" },
      { nome: "Vtex", logoUrl: "/img/Vtex-Logo.png" },
      { nome: "Shopify", logoUrl: "/img/Shopify-Logo.png" },
      { nome: "Vtex", logoUrl: "/img/Vtex-Logo.png" },
      { nome: "Shopify", logoUrl: "/img/Shopify-Logo.png" },
      { nome: "Vtex", logoUrl: "/img/Vtex-Logo.png" },
      { nome: "Shopify", logoUrl: "/img/Shopify-Logo.png" },
      { nome: "Vtex", logoUrl: "/img/Vtex-Logo.png" },
      { nome: "Shopify", logoUrl: "/img/Shopify-Logo.png" },
      { nome: "Vtex", logoUrl: "/img/Vtex-Logo.png" },
    ];

    setMarcas(marcas);
  }, []);

  return (
    <section id="sessao-marcas">
      <Carousel responsive={responsive}>
        {marcas.map((marca, index) => (
          <div key={`${index}-${marca.nome}`} className="marca-item">
            <img
              src={marca.logoUrl}
              alt={marca.nome}
              height={200}
              width={200}
            />
          </div>
        ))}
      </Carousel>
    </section>
  );
}

export default SessaoMarcas;
