import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { db } from "../../firebase/DbConnect";
import { collection, getDoc, doc } from "firebase/firestore";
import ItemDetail from "../ItemDetail/ItemDetail";

const ItemDetailsContainer = () => {
  const [product, setProduct] = useState({});
  const { id } = useParams();

  useEffect(() => {
    const productColletion = collection(db, "productos");
    const refDoc = doc(productColletion, id);

    getDoc(refDoc).then((doc) => {
      setProduct({ id: doc.id, ...doc.data() });
    });
  }, [id]);

  return (
    <>
      <ItemDetail {...product} />
    </>
  );
};

export default ItemDetailsContainer;
