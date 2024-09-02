import "./Banner.scss";
function Banner() {
  return (
    <section className="banner" style={{
        backgroundImage: `url('/img/banner.png')` 
    }}>
      <div className="texto-banner">
        <h2>Venha conhecer nossas <br></br>
        promoções</h2>
        <p>50% Off nos produtos </p>
        <button>Ver produto</button>
      </div>

    </section>
  );
}

export default Banner;
