import React from 'react'
import './Checkout.css'
import Subtotal from './Subtotal.js'
import BasketLists from './BasketLists.js'


function Checkout() {
          return (
                    <div className='checkout'>
                              
                              <div className='checkout__left'>
                                     <img src='https://m.media-amazon.com/images/G/31/AMS/IN/970X250-_desktop_banner.jpg'/>

                                     <div>
                                               <h1 className='checkout__lists'>
                                                        Basket items lists
                                               </h1>

                                               <BasketLists/>
                                               <BasketLists/>
                                               <BasketLists/>
                                     </div>
                              </div>

                              <div className='checkout__right'>
                                     <Subtotal/>
                              </div>
                               
                    </div>
          )
}

export default Checkout
