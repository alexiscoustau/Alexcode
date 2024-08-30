import { itemss } from "../MockData/MockData";
import { db } from "../../firebase/DbConnect";
import { collection, addDoc } from "firebase/firestore";
import Item from "../main/listitems/item/item";

const addProduct = () => {
  const productscColletion = collection(db, "productos");

  itemss.forEach((iten) => {
    addDoc(productscColletion, iten).then((doc) => {
      console.log("producto agregado con id", doc.id);
    });
  });
};

const Footer = () => {
  return (
    <>
      <button className="btn" onClick={addProduct}>
        agregar productos
      </button>
    </>
  );
};

export default Footer;
