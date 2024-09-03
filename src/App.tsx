import "./App.scss";
import Banner from "./Banner/Banner";
import CardsProdutos from "./CardsProdutos/CardsProdutos";
import "./CardsProdutos/CardsProdutos.scss";
import SessaoMarcas from "./SessaoMarcas/SessaoMarcas";
import "./SessaoMarcas/SessaoMarcas.scss";
import Categorias from "./Categorias/Categorias";
import NavBar from "./NavBar/NavBar";
import Rodape from "./Rodape/Rodape";
import SessaoParceiros from "./SessaoParceiros/SessaoParceiros";
import SessaoProdutosRelacionados from "./SessaoProdutosRelacionados/SessaoProdutosRelacionados";
import SessaoTipoProduto from "./SessaoTipoProduto/SessaoTipoProduto";
import TituloDivisoria from "./TituloDivisoria/TituloDivisoria";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <NavBar />
      </header>
      <Banner />
      <Categorias />
      <TituloDivisoria title="Produtos Relacionados" hasSeeMore={false} />
      <SessaoTipoProduto />
      <CardsProdutos />
      <SessaoParceiros />
      <TituloDivisoria title="Produtos Relacionados" hasSeeMore={true} />
      <SessaoProdutosRelacionados />
      <TituloDivisoria title="Navegue por marcas" hasSeeMore={false} />
      <SessaoMarcas />
      <Rodape />
    </div>
  );
}

export default App;
