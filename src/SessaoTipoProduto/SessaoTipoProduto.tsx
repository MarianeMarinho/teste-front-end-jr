import "./SessaoTipoProduto.scss";

function SessaoTipoProduto() {
  const tiposProdutos = [
    "CELULAR",
    "ACESSÓRIOS",
    "TABLETS",
    "NOTEBOOKS",
    "TVS",
    "VER TODOS",
  ];

  return (
    <section className="tipo-produto">
      <ul>
        {tiposProdutos.map((tipo) => (
          <li key={tipo}>{tipo}</li>
        ))}
      </ul>
    </section>
  );
}

export default SessaoTipoProduto;
