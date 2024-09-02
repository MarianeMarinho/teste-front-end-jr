import { useState } from "react";
import "./NavBar.scss";

function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="nav-bar">
      <div className="flags">
        <div className="flag-item">
          <img src="./img/icones/ShieldCheck.png" alt="Shield Check" />
          Compra <div className="pink-color">100% segura</div>
        </div>
        <div className="flag-item">
          <img src="./img/icones/Truck.png" alt="Truck" />
          <div className="pink-color">Frete Gratis</div> acima de R$ 200,00
        </div>
        <div className="flag-item">
          <img src="./img/icones/CreditCard.png" alt="Credit Card" />
          <div className="pink-color">Parcele</div> suas compras
        </div>
      </div>
      <div className="menu-busca">
        <img src="./img/Vtex-Logo.png" alt="Vtex Logo" id="logo" />
        <div className="search-box">
          <input
            type="text"
            placeholder="O que você está buscando?"
            className="search-input"
          />
          <img
            src="./img/icones/Search.png"
            alt="Search"
            className="search-icon"
          />
        </div>

        <div className="icons">
          <img src="./img/icones/Box.png" alt="Box" />
          <img src="./img/icones/Heart.png" alt="Heart" />
          <img src="./img/icones/UserCircle.png" alt="User Circle" />
          <img src="./img/icones/ShoppingCart.png" alt="Shopping Cart" />
        </div>
      </div>
      <div className={`menu-links ${isMenuOpen ? "open" : ""}`}>
        <ul>
          <li>TODAS CATEGORIAS</li>
          <li>SUPERMERCADO</li>
          <li>LIVROS</li>
          <li>MODAS</li>
          <li>LANÇAMENTOS</li>
          <li>OFERTAS DO DIA</li>
          <li>ASSINATURA</li>
        </ul>
      </div>
      <div className="menu-toggle" onClick={toggleMenu}>
        <svg
          viewBox="-0.5 -0.5 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          id="Menu--Streamline-Iconoir"
          height="32"
          width="32"
        >
          <desc>Menu Streamline Icon: https://streamlinehq.com</desc>
          <path
            d="M0.7153750000000001 2.2230625h13.56925"
            stroke="currentColor"
            strokeLinejoin="round"
            strokeWidth="1"
          ></path>
          <path
            d="M0.7153750000000001 7.5h13.56925"
            stroke="currentColor"
            strokeLinejoin="round"
            strokeWidth="1"
          ></path>
          <path
            d="M0.7153750000000001 12.7769375h13.56925"
            stroke="currentColor"
            strokeLinejoin="round"
            strokeWidth="1"
          ></path>
        </svg>
      </div>
    </nav>
  );
}

export default NavBar;
