import "./Rodape.scss";

function Rodape() {
  return (
    <footer>
      <div className="rodape">
        <div className="rodape-item">
          <h2>Sobre Nós</h2>
          <p>conheça</p>
          <p>como comprar</p>
          <p>inidicação e desconto</p>
          <div className="icones-rodape">
            <img src="./img/icones/023-facebook.png" alt="facebook" />
            <img src="./img/icones/044-instagram.png" alt="instagram" />
            <img src="./img/icones/116-youtube.png" alt="youtube" />
          </div>
        </div>
        <div className="rodape-item">
          <h2>Informações úteis</h2>
          <p>Fale Conosco</p>
          <p>Dúvidas</p>
          <p>Prazos de Entrega</p>
          <p>Formas de Pagamento</p>
          <p>Política de privacidade</p>
          <p>Trocas e Devoluções</p>
        </div>
        <div className="rodape-item">
          <h2 className="rodape-texto-forma-pagamento">Formas de Pagamento</h2>
          <div className="rodape-icones-forma-pagamento">
            <img src="./img/icones/visa.png" alt="visa" />
            <img src="./img/icones/elo.png" alt="elo" />
            <img src="./img/icones/alelo.png" alt="alelo" />
          </div>
          <div className="rodape-icones-forma-pagamento">
            <img src="./img/icones/dinners.png" alt="dinners" />
            <img src="./img/icones/ifood.png" alt="ifood" />
            <img src="./img/icones/mastercard.png" alt="mastercard" />
          </div>
          <div className="rodape-icones-forma-pagamento">
            <img src="./img/icones/pix.png" alt="pix" />
            <img src="./img/icones/amex.png" alt="amex" />
            <img className="ticket" src="./img/icones/ticket.png" alt="ticket" />
          </div>
          <div className="rodape-icones-forma-pagamento">
            <img src="./img/icones/sodexo.png" alt="sodexo" />
           
          </div>
        </div>
        <div className="rodape-item-card">
          <p className="item-card-titulo">Cadastre-se e receba nossas</p>
          <p className="item-card-subtitulo">novidades e promoções</p>
          <p className="item-card-descricao">
            Lorem, ipsum dolor sit amet consectetur adipisit amet consectetur
            adipi
          </p>
          <div className="item-card-submit">
          <input type="text" placeholder="Digite seu e-mail" />
          <button>OK</button>
          </div>
        </div>
      </div>
      <hr />
      <div className="footer-bottom">
        <p className="copyright-text">
          Copyright © 2019. Todos os direitos reservados. Todas as marcas e suas imagens são de propriedade de seus respectivos donos. <br />
          É vedada a reprodução, total ou parcial, de qualquer conteúdo sem expressa autorização.
        </p>
        <div className="copyright-icones">
          <img src="./img/icones/econverse.png" alt="econverse" />
          <img src="./img/icones/vetx.png" alt="vetx" />
        </div>
      </div>
    </footer>
  );
}

export default Rodape;
