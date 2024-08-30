import { useCartContext } from "../../context/CarContext";
import { Link } from "react-router-dom";
import { useState } from "react";
import { addDoc, collection } from "firebase/firestore";
import { db } from "../../firebase/DbConnect";

const Cart = () => {
  const { cart, total, removeItem, clearCart } = useCartContext();

  const borrarItem = (id, precio, qty) => removeItem(id, precio, qty);
  const [formData, setFormData] = useState({ name: "", tel: "", email: "" });
  const OrdenDeCompra = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const borrarTodo = () => {
    clearCart();
  };

  const guardarOrder = () => {
    console.log(formData);
    console.log(cart);

    const OrdenesGuardadas = collection(db, "ordenes");
    const newOrder = {
      comprador: formData,
      items: cart,
      total: total,
      date: new Date(),
    };

    addDoc(OrdenesGuardadas, newOrder).then((doc) => {
      console.log(doc.id);
      clearCart();
      setFormData({ name: "", tel: "", email: "" });
    });
  };

  return (
    <>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">nombre</th>
            <th scope="col">precio</th>
            <th scope="col">cantidad</th>
            <th scope="col">accion</th>
          </tr>
        </thead>
        <tbody>
          {cart?.map(({ id, producto, categoria, precio, qty }, index) => {
            return (
              <tr key={index}>
                <th>{id}</th>
                <td>
                  {categoria} de {producto}
                </td>
                <td>{precio}</td>
                <td>{qty}</td>
                <td>
                  <button
                    className="btn"
                    onClick={() => borrarItem(id, precio, qty)}
                  >
                    borrar producto
                  </button>
                </td>
              </tr>
            );
          })}

          <tr>
            <td>total</td>
            <td>${total}</td>
          </tr>
        </tbody>
      </table>
      <Link to={"/"}>
        <button className="btn" onClick={borrarTodo}>
          borrar todo
        </button>
      </Link>

      <input
        type="text"
        name="nombre"
        placeholder="ingresa ti nombre"
        onChange={(e) => {
          OrdenDeCompra(e);
        }}
      />
      <input
        type="text"
        name="tel"
        placeholder="ingresa ti numero"
        onChange={(e) => {
          OrdenDeCompra(e);
        }}
      />
      <input
        type="text"
        name="email"
        placeholder="ingresa ti email"
        onChange={(e) => {
          OrdenDeCompra(e);
        }}
      />

      <button className="bnt" onClick={guardarOrder}>
        finalizar compra
      </button>
    </>
  );
};

export default Cart;
