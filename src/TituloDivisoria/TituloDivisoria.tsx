import "./TituloDivisoria.scss";

type TituloDivisoriaProps = {
  title: string;
  hasSeeMore: boolean;
};

function TituloDivisoria(props: TituloDivisoriaProps) {
  return (
    <div className="section-title">
      <div className="title-container">
        <hr className="line" />
        <h2 className="title">{props.title}</h2>
        <hr className="line" />
      </div>
      {props.hasSeeMore && (
        <a href="#" className="see-more">
          Ver mais
        </a>
      )}
    </div>
  );
}

export default TituloDivisoria;
