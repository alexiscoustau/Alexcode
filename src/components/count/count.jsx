import { useState } from "react";

const Count = ()=> {

 

 const [qty , SetQty]= useState(0);


 const ClickMas =()=>{
    SetQty (qty+1)
 };

 const ClickMenos =()=>{
    SetQty (qty-1)
 };

 return(
    <>
      <button onClick={()=>ClickMenos("-")}>-</button>
      <span>{qty}</span>
      <button onClick={()=>ClickMas("+")}>+</button>
    
    </>
 )

}

export default Count
