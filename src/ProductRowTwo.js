import React from 'react'
import './ProductRowTwo.css'

function ProductRowTwo({title, image, star, price}) {
          return (
                    <div className='productRowTwo'>
                             
                              <div className='productRowTwo__info'>
                                        <p>{title}</p>
                                        <p className='productRowTwo__price'>
                                                  <small>$</small>
                                                  <strong>{price}</strong>
                                        </p>
                                        <div className='productRowTwo__rating'>
                                                  <p>{star}</p>
                                        </div>

                                        <img src={image}/>

                                        <button className='pproductRowTwo__btn'>Add to cart</button>
                              </div>
                    
                    </div>
          )
}

export default ProductRowTwo
