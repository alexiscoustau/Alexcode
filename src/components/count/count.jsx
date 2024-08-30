import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Count = ({ Comprar }) => {
  const navigate = useNavigate();
  const [qty, SetQty] = useState(0);
  const [itemAdded, setItemAdded] = useState(false);

  const ClickMas = () => {
    SetQty(qty + 1);
  };

  const ClickMenos = () => {
    SetQty(qty - 1);
  };

  const agregar = () => {
    Comprar(qty);
    setItemAdded(true);
  };

  const salidaCarrito = () => {
    setItemAdded(false);
    navigate("/cart");
  };
  return (
    <>
      {itemAdded ? (
        <button className="btn" onClick={salidaCarrito}>
          ir al carrito
        </button>
      ) : (
        <>
          <div>
            <button onClick={() => ClickMenos("-")}>-</button>
            <span>{qty}</span>
            <button onClick={() => ClickMas("+")}>+</button>
          </div>

          <div className="text-body-secondary">
            <button className="btn" onClick={agregar}>
              comprar
            </button>
          </div>
        </>
      )}
    </>
  );
};

export default Count;
