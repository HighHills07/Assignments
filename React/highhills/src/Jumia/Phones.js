import React from 'react'
import Navbar from './Navbar'
import Button2 from './Button2'
import {useHistory} from 'react-router-dom'
import {cartContext} from './Context2'
import { useContext } from 'react'

function Phones() {
    const {totalCart, setTotalCart}=useContext(cartContext)

   let history= useHistory();
   function watches() {
    history.push('/')
   }

   function addCart() {
       let cartValue = totalCart
       cartValue= cartValue + 1
       setTotalCart(cartValue)

       

   } 
   
   function removeCart() {
    let cartValue = totalCart
    cartValue= cartValue - 1
   

    if ((totalCart < '1')) {
   return
    }
    else {
        setTotalCart(cartValue)
        
    }

} 


  

    return (
        <div>
             <p>This is the phones' page.</p>
            <Navbar/>

            <Button2 backgroundColor="blue" btnText="Add phone to cart" btnClick={addCart} />

           <button onClick={watches}>To Watches</button>

           <button onClick={removeCart} >Remove Phone</button>
            
        </div>
    )
}

export default Phones
