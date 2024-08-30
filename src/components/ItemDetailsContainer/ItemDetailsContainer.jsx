import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProductById } from "../Datos/fechData";
import ItemDetail from "../ItemDetail/ItemDetail";

const ItemDetailsContainer = () => {
  const [product, setProduct] = useState({});
  const { id } = useParams();

  useEffect(() => {
    getProductById(id)
      .then((res) => {
        setProduct(res);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        console.log("finalizo la promesa");
      });
  }, [id]);

  return (
    <>
      <ItemDetail {...product} />
    </>
  );
};

export default ItemDetailsContainer;
