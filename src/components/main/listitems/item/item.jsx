import "./item.css";
import { Link } from "react-router-dom";
import { categoria } from "../../../MockData/MockData";
const Item = (product) => {
  const producto = product.product;

  return (
    <>
      <div className="card text-center">
        <div className="card-img-top">
          <img src={producto.image} className="budin" />
        </div>
        <div className="card-body ">
          <h5 className="card-title">{producto.categoria}</h5>
          <p className="card-text">
            {producto.producto} {producto.tamaño}
          </p>
          <Link to={`/producto/detalles/${producto.id}`} className="btn">
            Detalles
          </Link>
        </div>
      </div>
    </>
  );
};

export default Item;
