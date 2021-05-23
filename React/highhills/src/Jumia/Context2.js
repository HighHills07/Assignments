
import {createContext,useHistory, useState} from 'react'
const cartContext =createContext()

console.log(cartContext);


function CartProvider(props) {
    const [totalCart, setTotalCart]=useState(0)

    return (
        
        <cartContext.Provider value={{totalCart, setTotalCart}}  >
       
       {
           props.children
       }

        </cartContext.Provider>    
        
    )
}

export {cartContext, CartProvider}
