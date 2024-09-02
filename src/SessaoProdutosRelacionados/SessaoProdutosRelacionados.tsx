import "./SessaoProdutosRelacionados.scss";

function SessaoProdutosRelacionados() {
  return (
    <section className="sessao-produtos-relacionados">
      <div
        className="item-sessao"
        style={{
          backgroundImage: "url('./img/parceirosimg.png')",
        }}
      >
        <div className="texto-produtos-relacionados">
          <h2>Produtos</h2>
          <p>
            Lorem ipsum, dolor sit amet consectetur <br />
            adipisicing elit. Sed,
          </p>
          <button>Confira</button>
        </div>

        <img src="./img/parceirosimg.png" alt="Parceiros" />
      </div>
      <div
        className="item-sessao"
        style={{
          backgroundImage: "url('./img/parceirosimg.png')",
        }}
      >
        <div className="texto-produtos-relacionados">
          <h2>Produtos</h2>
          <p>
            Lorem ipsum, dolor sit amet consectetur <br />
            adipisicing elit. Sed,
          </p>
          <button>Confira</button>
        </div>

        <img src="./img/parceirosimg.png" alt="Parceiros" />
      </div>
    </section>
  );
}

export default SessaoProdutosRelacionados;
