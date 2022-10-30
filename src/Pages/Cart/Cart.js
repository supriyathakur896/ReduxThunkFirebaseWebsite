import React from 'react';
import { useSelector,useDispatch } from 'react-redux';
import { remove } from '../../Redux/cartSlice';
import "./Cart.scss"

const Cart = () => {
  const dispatch= useDispatch()

  const cartElement= useSelector(state=>state.cart.cart)

  const handleRemove=(productId)=>{
     dispatch(remove(productId))
  }

  const cartproducts=cartElement.map((product)=>(
    <div key={product.id} className='cart-container'>
       <h3>{product.title}</h3> 
       <img src={product.image}></img>
       <h3 >${product.price}</h3>
       <button onClick={()=>handleRemove(product.id)}> Remove </button>
   </div>
))

// let bill= cartElement.map(eachBill=> eachBill.price).reduce((acc,curr)=>acc+=curr)


  return (
    <div>
        <div>
        {cartproducts}
        </div>
        <div className="cart-amount">
          <hr/>
            {/* <h2>Total Amount:  $ {bill}</h2> */}
        </div>
    </div>
  )
}

export default Cart;