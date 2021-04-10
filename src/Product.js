import React from 'react'
import './Product.css'
import { useStateValue } from './StateProvider'

function Product({title, price, star, image}) {

                   //state      //adding items
               const [{basket}, dispatch] = useStateValue()

               console.log(basket)

               const addToBasket = ()=>{
                         //shoot the item to the data layer
                         dispatch({
                                   type:'ADD_TO_BASKET',
                                   item: {
                                        title:title,
                                        price:price,
                                        star:star,
                                        image:image 
                                   }
                         })
               }

          return (
                    <div className='product'>
                              <div className='product__info'>
                                        <p>{title}</p>
                                        <p className='product__price'>
                                                  <small>$</small>
                                                  <strong>{price}</strong>
                                        </p>
                                        <div className='product__rating'>
                                                  <p>{star}</p>
                                        </div>

                                        <img src={image}/>

                                        <button onClick={addToBasket} className='product__btn'>Add to cart</button>
                              </div>
                    </div>
          )
}

export default Product
