import Count from "../count/count";
import { useCartContext } from "../../context/CarContext";

const ItemDetail = ({ id, image, categoria, tamaño, precio, producto }) => {
  const { addToCard } = useCartContext();
  const Comprar = (qty) => {
    const item = { id, categoria, producto, tamaño, precio, image };
    addToCard(item, qty);
  };

  return (
    <>
      <div className="card mb-3">
        <img src={image} className="" />
        <div className="card-body">
          <h5 className="card-title">
            {categoria}
            <br />
            {producto}
          </h5>
          <p className="card-text">
            {tamaño}
            <br />${precio}
          </p>
          <div className="card-text">
            <Count Comprar={Comprar} />
          </div>
        </div>
      </div>
    </>
  );
};

export default ItemDetail;
