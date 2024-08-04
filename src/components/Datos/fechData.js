import { itemss } from "../MockData/MockData"

export const getProduct =(categoria)=>{

const filtrado =itemss.filter((items)=>items.categoria.includes(categoria))

return new Promise((resolve, reject) => {
    if (itemss.length > 0) {
       
          resolve(filtrado)   
      
       
        
    } else {
        reject("no hay datos")
    }
})
}