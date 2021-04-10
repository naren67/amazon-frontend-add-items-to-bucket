import React from 'react'
import './Header.css'
import SearchIcon from '@material-ui/icons/Search';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import { Link } from 'react-router-dom';
import { useStateValue } from './StateProvider';

function Header() {

     const [{basket}, dispatch] = useStateValue()

          return (
                    <div className='header'>

                            <Link to='/'>
                                <img src='http://pngimg.com/uploads/amazon/amazon_PNG11.png' className='header__logo'/>
                            </Link> 

                            <div className='header__input'>
                                      <input className='h__input'/>
                                      <SearchIcon className='header__search'/>
                            </div> 

                            <div className='header__options'>
                                      <div className='header__option'>
                                                <span className='smallFont'>
                                                     Hello     
                                                </span>

                                                <span className='boldFont'>
                                                          Sign in
                                                </span>
                                      </div>

                                      <div className='header__option'>
                                                <span className='smallFont'>
                                                     Returns     
                                                </span>

                                                <span className='boldFont'>
                                                          & Orders
                                                </span>
                                      </div>

                                      <div className='header__option'>
                                                <span className='smallFont'>
                                                     Your     
                                                </span>

                                                <span className='boldFont'>
                                                          Prime
                                                </span>
                                      </div>

                                      <div className='header__optionBasket'>
                                      
                                      <Link to='/checkout'>
                                       <ShoppingCartIcon className='header__cart'/>
                                      </Link>

                                      <span className='header__basketCount'>{basket?.length}</span>
                                      </div>
                                      
                            </div>
                    </div>
          )
}

export default Header
