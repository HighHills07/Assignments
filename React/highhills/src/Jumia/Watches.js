import React, { useContext } from 'react'
import Navbar from './Navbar'
import Button2 from './Button2'
import {Switch, Route} from 'react-router-dom'
import {useHistory} from 'react-router-dom'
import {cartContext} from './Context2'

function Watches() {

    const {totalCart, setTotalCart}=useContext(cartContext)
    let history = useHistory();
   function phones() {
       history.push('/Phones')

       
   }

   function addCart() {
       let cartValue=totalCart
       cartValue= cartValue + 1
       setTotalCart(cartValue)
       
 
       
   }

   function removeCart() {
    let cartValue = totalCart
    cartValue= cartValue - 1
   

    if ((totalCart < '1')) {
    return}
    else {
        setTotalCart(cartValue)
    }
       
   }

    return (
        <div>
            <p>This is the watches' page.</p>
            <Navbar/>
            <Button2 backgroundColor="dodgerblue" btnText="Add watch to cart" btnClick={addCart} />
           <button onClick={phones} >To Phones </button>
           <button onClick={removeCart} >Remove Watch</button>
            
        </div>
        
    )
}

export default Watches
