import React from 'react'
import './CheckoutProduct.css'
import { useStateValue } from './StateProvider'

function CheckoutProduct( {id, title, image, price, rating} ) {
    
    const [{ basket }, dispatch] = useStateValue();

    const removeFromBasket = () => {
        dispatch ( {
            type: 'REMOVE_FROM_BASKET',
            id: id
        })
    }

    return (
        <div className = "checkoutProduct">
            
                <img
                    className = "checkoutProduct__image"
                    src = {image}
                    alt = ""
                />


                <div className = "checkoutProduct__info">
                    <h2 className = "checkoutProduct__info__title" >{title}</h2>

                    <p className = "checkoutProduct__info__price">
                        <small>$</small>
                        <strong>{price}</strong>
                    </p>

                    <div className = "checkoutProduct__info__rating">
                        {Array(rating).fill().map((_) => (
                            <p>⭐</p>
                        ))}
                    </div>

                    <button onClick = {removeFromBasket} className = "checkoutProduct__info__removeButton">Remove from Cart</button>

                </div>
        </div>
    )
}

export default CheckoutProduct
