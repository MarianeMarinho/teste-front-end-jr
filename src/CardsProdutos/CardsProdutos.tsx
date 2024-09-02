import { useEffect, useState } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import ModalProduto from "../ModalProduto/ModalProduto";
import "./CardsProdutos.scss";

type Product = {
  productName: string;
  descriptionShort: string;
  photo: string;
  price: number;
  oldPrice?: number;
  hasFreeShipping?: boolean;
};

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 5,
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
    slidesToSlide: 2,
  },
};

function CardsProdutos() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("/produtos.json");
        const data = await response.json();

        if (data.success) {
          const updatedProducts = data.products.map((product: Product) => {
            product.oldPrice = product.price + product.price * 0.15;
            product.hasFreeShipping = Math.random() < 0.5;
            return product;
          });

          setProducts(updatedProducts);
        }
      } catch (error) {
        console.error("Erro ao buscar os produtos:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  const getParcelamentoText = (price: number) => {
    const parcelas = 10;
    const valorParcelado = (price / parcelas).toFixed(2);
    return `ou ${parcelas}x de R$ ${valorParcelado} sem juros`;
  };

  if (loading) {
    return <p>Carregando produtos...</p>;
  }

  return (
    <section className="SessaoProd">
      {products.length > 0 ? (
        <Carousel responsive={responsive}>
          {products.map((product, index) => (
            <div key={index} className="product-item">
              <img src={product.photo} alt={product.productName} />
              <p className="product-description">{product.descriptionShort}</p>

              {product.oldPrice && (
                <p className="old-price">R${product.oldPrice.toFixed(2)}</p>
              )}
              <p className="new-price">R${product.price.toFixed(2)}</p>
              {product.hasFreeShipping && (
                <div className="shipping-info">
                  <p className="installments">
                    {getParcelamentoText(product.price)}
                  </p>
                  <p className="free-shipping">Frete Grátis</p>
                </div>
              )}
              <button
                className="btn-buy"
                onClick={() => setSelectedProduct(product)}
              >
                Comprar
              </button>
            </div>
          ))}
        </Carousel>
      ) : (
        <p>Nenhum produto encontrado.</p>
      )}

      {selectedProduct && (
        <ModalProduto
          product={selectedProduct}
          onClose={() => setSelectedProduct(null)}
        />
      )}
    </section>
  );
}

export default CardsProdutos;
