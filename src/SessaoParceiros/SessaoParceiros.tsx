import React, { useEffect, useState } from "react";
import "./SessaoParceiros.scss";

function SessaoParceiros() {
  return (
    <section className="sessao-parceiros">
      <div className="item-sessao">
        <div className="texto-parceiros">
          <h2>Parceiros</h2>
          <p>Lorem ipsum, dolor sit amet consectetur <br /> adipisicing elit. Sed,</p>
          <button>Confira</button>
        </div>

        <img src="./img/parceirosimg.png" alt="Parceiros" />
      </div>
      <div className="item-sessao">
        <div className="texto-parceiros">
          <h2>Parceiros</h2>
          <p>Lorem ipsum, dolor sit amet consectetur <br /> adipisicing elit. Sed,</p>

          <button>Confira</button>
        </div>
        
        <img src="./img/parceirosimg.png" alt="Parceiros" />
      </div>
    </section>
  );
}

export default SessaoParceiros;
