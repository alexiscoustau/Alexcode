import { useState, useEffect } from "react";
import firebase from "firebase/compat/app";
import ListItems from "./listitems/ListItems";
import "./ContainerList.css";
import { useParams } from "react-router-dom";
import { db } from "../../firebase/DbConnect";
import { collection, doc, getDocs, query, where } from "firebase/firestore";

const ContainerList = () => {
  const [product, setproduct] = useState([]);
  const { producto } = useParams();
  useEffect(() => {
    const productscColletion = collection(db, "productos");
    if (producto) {
      const consulta = query(
        productscColletion,
        where("categoria", "==", producto)
      );

      getDocs(consulta).then(({ docs }) => {
        const prodFromDocs = docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setproduct(prodFromDocs);
      });
    } else {
      getDocs(productscColletion).then(({ docs }) => {
        const prodFromDocs = docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setproduct(prodFromDocs);
      });
    }
  }, [producto]);

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
