import React from 'react'
import './Subtotal.css'
import CurrencyFormat from 'react-currency-format';
import { useStateValue } from './StateProvider'
import { getBasketTotal } from './reducer.js'
import { useHistory } from 'react-router-dom';

function Subtotal() {
    const [{ basket }, dispatch] = useStateValue();
    const histry = useHistory();

    return (
        <div className = 'subtotal' >

            <CurrencyFormat
                renderText = {($value) => (
                   <>
                    <p>
                        {console.log( getBasketTotal(basket) )}
                        {console.log(basket.length)}
                        Subtotal ({basket.length} items): <strong>{$value}</strong>
                    </p>

                    <small className = "subtotal__gift">
                        <input type = "checkbox" /> This order contains gift
                    </small>
                    </>
                )}
                decimalScale = {2}
                value = {getBasketTotal(basket)}
                displayType = {"text"}
                thousandSeparator = {true}
                prefix = {'$'}
            />
            <button onClick = {e => histry.push("/payment")}>Proces to checkout</button>
        </div>
    )
}

export default Subtotal
