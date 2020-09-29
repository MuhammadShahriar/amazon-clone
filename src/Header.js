import React from 'react'
import './Header.css'
import {Link} from 'react-router-dom'
import SearchIcon from '@material-ui/icons/Search'
import ShopingBasketIcon from '@material-ui/icons/ShoppingBasket'
import { useStateValue } from './StateProvider'
import {auth} from './firebase'



function Header() {
    const [{ basket, user }] = useStateValue();

    const logout = () => {
        if ( user ) {
            auth.signOut();
        }
    }


    return (
        <nav className = "header">
           
               <Link to = "./">
                    <img
                    className = "header__logo"
                    src = "http://pngimg.com/uploads/amazon/amazon_PNG11.png"
                    alt = ""
                    />
               </Link>

               <div className = "header__search" >
                   <input type = 'text' className = "header__searchInput" />
                   <SearchIcon className = "header__searchIcon" />
               </div>

               <div className = "header__nav">
                   <Link to = {!user && "./login"} className = "header__link">
                       <div onClick = {logout} className = "header__option">
                           <span className = "header__link__option1">Hello</span>
                           <span className = "header__link__option2">{user ? user?.email : 'Sign in'}</span>
                       </div>
                   
                   </Link>

                   <Link to = "./profile" className = "header__link">
                       <div className = "header__option">
                           <span className = "header__link__option1">Returns</span>
                           <span className = "header__link__option2">Order</span>
                       </div>
                   
                   </Link>

                   <Link to = "./return" className = "header__link">
                       <div className = "header__option">
                           <span className = "header__link__option1">Your</span>
                           <span className = "header__link__option2">Prime</span>
                       </div>
                   
                   </Link>
                   
                   <Link to = "./checkout" className = "header__link">
                       <div className = "header__shopingBasket">
                           <div className = 'header__sphopingBasketview'>
                                <ShopingBasketIcon />
                                <spam className = "header__shopingBasketCart">Cart</spam>
                           </div>
                           
                           <span className = "header__shopingBasketCount">{basket.length}</span>
                       </div>

                   </Link>
               </div>


            
        </nav>
    )
}

export default Header
