import React from 'react'
import './ProductRowThree.css'

function ProductRowThree({title, image, star, price}) {
          return (
                    <div className='productRowThree'>
                               <div className='productRowThree__info'>
                                        <p>{title}</p>
                                        <p className='productRowThree__price'>
                                                  <small>$</small>
                                                  <strong>{price}</strong>
                                        </p>
                                        <div className='productRowThree__rating'>
                                                  <p>{star}</p>
                                        </div>

                                        <img src={image}/>

                                        <button className='productRowThree__btn'>Add to cart</button>
                              </div>
                    
                    </div>
          )
}

export default ProductRowThree
