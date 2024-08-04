import Item from "./item/item"



const ListItems =({product})=>{

    
   
    return(
        <div className="productos">
            
                {product.map((product)=>{
                  return <Item key={product.id} product={product}/>

             })}
         
             
        </div>    
    )
}

       

export default ListItems