import React, { useState } from "react";
import "./ModalProduto.scss";

type ModalProdutoProps = {
  product: {
    productName: string;
    descriptionShort: string;
    photo: string;
    price: number;
  };
  onClose: () => void;
};

function ModalProduto({ product, onClose }: ModalProdutoProps) {
  const [quantity, setQuantity] = useState(1);

  const handleIncrement = () => {
    setQuantity(quantity + 1);
  };

  const handleDecrement = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const totalPrice = (product.price * quantity).toFixed(2);

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <img src={product.photo} alt={product.productName} className="modal-img" />
        <div className="modal-details">
          <h2>{product.productName}</h2>
          <p className="modal-price">R${totalPrice}</p>
          <p className="modal-description">
            {product.descriptionShort}
          </p>
          <a href="#" className="modal-details-link">Veja mais detalhes do produto <svg viewBox="-0.5 -0.5 10 10" fill="#000000" xmlns="http://www.w3.org/2000/svg" id="Arrow-Right-S-Line--Streamline-Remix" height="10" width="10"><desc>Arrow Right S Line Streamline Icon: https://streamlinehq.com</desc><path d="M5.235037500000001 4.5000374999999995L1.8049875 1.0699874999999999L2.7850125 0.09L7.195012499999999 4.5000374999999995L2.7850125 8.91L1.8049875 7.9300125L5.235037500000001 4.5000374999999995Z" stroke-width="1"></path></svg></a>
          <div className="modal-quantity">
            <button onClick={handleDecrement}>-</button>
            <input type="text" value={quantity} readOnly />
            <button onClick={handleIncrement}>+</button>
          </div>
          <button className="btn-buy">Comprar</button>
        </div>
        <img src="../img/icones/excluir.png" alt="Close" className="modal-close-icon" onClick={onClose} />
      </div>
    </div>
  );
}

export default ModalProduto;
