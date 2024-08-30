import { itemss } from "../MockData/MockData";

export const getProduct = (categoria) => {
  let filtrado = [...itemss];

  if (categoria) {
    filtrado = itemss.filter((items) => items.categoria.includes(categoria));
  }

  return new Promise((resolve, reject) => {
    if (itemss.length > 0) {
      resolve(filtrado);
    } else {
      reject("no hay datos");
    }
  });
};

export const getProductById = (id) => {
  return new Promise((resolve, reject) => {
    const product = itemss.find((item) => item.id === parseInt(id));
    if (product) {
      resolve(product);
    } else {
      reject("esto salio mal");
    }
  });
};
