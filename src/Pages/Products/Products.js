import React,{useEffect} from 'react';
import { useDispatch,useSelector } from 'react-redux';
import { add } from '../../Redux/cartSlice';
import { fetchProducts } from '../../Redux/productSlice';

const Products = () => {
    const dispatch= useDispatch();
    const product= useSelector(state=>state.product.data)
    
    useEffect(()=>{
        dispatch(fetchProducts())
    },[])

   const handleAdd=(product)=>{
     dispatch(add(product))
   }

  return (
    <div className="productsWrapper">
    {product.map((product) =>(
        <div key={product.id} className="card" key={product.id}>
            <img src={product.image} alt="" />
            <p>{product.title}</p>
            <h5>$ {product.price}</h5>
            <button className='btn' onClick={()=>handleAdd(product)} >
                Add to cart
            </button>
        </div>
        ))}
    </div>
  )
}

export default Products;