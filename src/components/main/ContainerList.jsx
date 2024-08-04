import { useState ,useEffect} from "react";
import { getProduct } from "../Datos/fechData";
//import { product } from "../MockData/MockData"
import ListItems from "./listitems/ListItems"
import "./ContainerList.css"
const ContainerList =()=> {
  const [product, setproduct] = useState([]);
  const [cat, setcat] = useState("budin")

useEffect(()=>{
  
getProduct(cat)
  .then((res)=>{
    setproduct(res)
    console.log("se monta el componente") 
   })
  .catch((err)=>{
    console.log(err);
  })
.finally(()=>{ console.log ("finalizo la promesa");
  })
  

},[cat])

  
  //<div className="row ">
    //    <div className="col-2 aside"></div>
      //  <button onClick={()=> setcat("budines")} >budines</button>
        //<button onClick={()=> setcat("pastafrolas")} >pastafrolas</button>
       // <div className="col-8 productos "><ListItems product = {product}/></div>
       // <div className="col-2 aside"></div>
      //</div>

    return(
        
      <> 
      <div className="row ">
          <div className="col-1 aside"></div>
          <div className="col-10">
            <h1 className="text-center">PRODUCTOS</h1>
            <button onClick={()=> setcat("budin")} className="btn btn-primary text-center" >budines</button>
            <button onClick={()=> setcat("pastafrolas")} className="btn btn-primary " >pastafrolas</button>
            <ListItems product = {product}/></div>
          <div className="col-1 aside"></div>
      </div>
     </>  
    )
}

export default ContainerList