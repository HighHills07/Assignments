import React, {useContext} from 'react'
import {cartContext} from './Context2'

function Navbar() {
    const {totalCart, setTotalCart}=useContext(cartContext)

    return (
        <div style={{display:'flex', 
        width:'100%',
        height:'20%',
        boxShadow:'0px 0px 5px 1px gray',
        alignItems:'center',
        justifyContent:'flex-end',
        paddingRight:30

        }}>
            <p>Cart: {totalCart} </p>
        </div>
    )
}

export default Navbar
