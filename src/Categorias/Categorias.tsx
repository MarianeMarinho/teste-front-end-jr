import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Categorias.scss";
import {
  faCocktail,
  faFutbol,
  faHeartbeat,
  faShoppingCart,
  faStar,
  faTools,
  faTshirt,
} from "@fortawesome/free-solid-svg-icons";

function Categorias() {
  return (
    <section className="categorias">
      <div className="item-categoria">
        <div className="card">
          <FontAwesomeIcon icon={faStar} className="icon" />
        </div>
        <div className="texto-categoria">
          <p>Tecnologia</p>
        </div>
      </div>

      <div className="item-categoria">
        <div className="card">
          <FontAwesomeIcon icon={faShoppingCart} className="icon" />
        </div>
        <div className="texto-categoria">
          <p>Supermercado</p>
        </div>
      </div>

      <div className="item-categoria">
        <div className="card">
          <FontAwesomeIcon icon={faCocktail} className="icon" />
        </div>
        <div className="texto-categoria">
          <p>Bebidas</p>
        </div>
      </div>

      <div className="item-categoria">
        <div className="card">
          <FontAwesomeIcon icon={faTools} className="icon" />
        </div>
        <div className="texto-categoria">
          <p>Ferramentas</p>
        </div>
      </div>

      <div className="item-categoria">
        <div className="card">
          <FontAwesomeIcon icon={faHeartbeat} className="icon" />
        </div>
        <div className="texto-categoria">
          <p>Saúde</p>
        </div>
      </div>

      <div className="item-categoria">
        <div className="card">
          <FontAwesomeIcon icon={faFutbol} className="icon" />
        </div>
        <div className="texto-categoria">
          <p>Esportes e Fitness</p>
        </div>
      </div>

      <div className="item-categoria">
        <div className="card">
          <FontAwesomeIcon icon={faTshirt} className="icon" />
        </div>
        <div className="texto-categoria">
          <p>Moda</p>
        </div>
      </div>
    </section>
  );
}

export default Categorias;
