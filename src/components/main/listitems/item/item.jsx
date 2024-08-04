import "./item.css"

const Item =(product)=> {
  
  const producto = product.product;
 //<img src="" className="card-img-top" alt="..."><img/>
    return(

        <> 
        
                <div className="card text-center">
                  
                    <div className="card-img-top"><img src={producto.image} className="budin" /></div>
                    <div className="card-body ">
                    <h5 className="card-title">{producto.categoria}</h5>
                    <p className="card-text">{producto.producto} {producto.tamaño}</p>
                    <a href="#" className="btn " id={producto.id}>Detalles</a>
                    </div>
                </div>
              
          
            
        </>
    )
}

export default Item