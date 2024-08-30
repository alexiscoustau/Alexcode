import { useState, useEffect } from "react";
import { getProduct } from "../Datos/fechData";
import ListItems from "./listitems/ListItems";
import "./ContainerList.css";
import { useParams } from "react-router-dom";
import { categoria } from "../MockData/MockData";

const ContainerList = () => {
  const [product, setproduct] = useState([]);
  const producto = useParams();
  useEffect(() => {
    getProduct(producto.producto)
      .then((res) => {
        setproduct(res);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {});
  }, [producto.producto]);

  return (
    <>
      <div className="row ">
        <div className="col-1 aside"></div>
        <div className="col-10">
          <ListItems product={product} />
        </div>
        <div className="col-1 aside"></div>
      </div>
    </>
  );
};

export default ContainerList;
