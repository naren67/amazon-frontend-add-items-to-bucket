import React from 'react'
import './Home.css'
import Product from './Product.js'
import ProductRowTwo from './ProductRowTwo.js'
import ProductRowThree from './ProductRowThree.js'

function Home() {
          return (
                    <div className='home'>
                              <img className='home__fadeImage' src='https://images-eu.ssl-images-amazon.com/images/G/31/img19/AmazonPay/Rajeshwari/March-21/Network_Hero_banners/HeroPC_1500x600_5._CB657961025_.jpg'/>

                              <div className='home__rowOne'>
                                  <Product
                                  image='https://images-na.ssl-images-amazon.com/images/I/51I-QgidWHL._SX322_BO1,204,203,200_.jpg'
                                  price={30.80}
                                  title= 'A book from Elon Musk. How to earn money'
                                  star= '⭐⭐⭐⭐'
                                  />
                                  <Product
                                  image='https://images-na.ssl-images-amazon.com/images/I/41gVhoPaE5L._SX323_BO1,204,203,200_.jpg'
                                  price={20.80}
                                  title= 'Think Like a Monk: The secret of positivity'
                                  star= '⭐⭐⭐⭐⭐'
                                  />
                                  <Product
                                  image='https://images-na.ssl-images-amazon.com/images/I/41cWqh0OeQL._SX321_BO1,204,203,200_.jpg'
                                  price={15.80}
                                  title= 'The Psychology of Money Paperback – 1'
                                  star= '⭐⭐⭐'
                                  />
                                  <Product
                                  image='https://images-na.ssl-images-amazon.com/images/I/51T8OXMiB5L._SX356_BO1,204,203,200_.jpg'
                                  price={40.80}
                                  title= 'Ikigai: The Japanese secret to a long and happy life'
                                  star= '⭐⭐⭐⭐'
                                  />
                              </div>

                              
                              <div className='home__rowTwo'>
                                  <ProductRowTwo
                                    image = 'https://images-na.ssl-images-amazon.com/images/I/91i6SX47ClL._SX355_.jpg'
                                    price={2000.80}
                                    title= 'Samsung 163 cm (65 inches) Q Series QA65Q8CNAK 4K LED Smart TV (Black)'
                                    star= '⭐⭐⭐⭐'
                                  />
                              </div>

                              
                              <div className='home__rowThree'>
                              <ProductRowThree
                                  image = 'https://images-na.ssl-images-amazon.com/images/I/81XT7EZvdBL._SX679_.jpg'
                                  price={100.80}
                                  title= 'Usha Janome Dream Stitch Automatic Zig-Zag Electric Sewing Machine (White And Blue)'
                                  star= '⭐⭐⭐⭐'
                              />
                              <ProductRowThree
                               image = 'https://images-na.ssl-images-amazon.com/images/I/61vge9BXsvL._SX679_.jpg'
                               price={70.20}
                               title= 'EasySkinz Wireless Controller for PS4 / pro / slim Playstation 4 Dual Shock-4 Green Camouflage'
                               star= '⭐⭐⭐'
                              />
                              </div>
                    </div>
                    
          )
}

export default Home
