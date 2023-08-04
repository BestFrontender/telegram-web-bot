import './Cart.css'
import Button from "../Button/index.js";
import {TotalPrice} from "../../units/total-price.js";

const Cart = ({cartItems, onCheckout}) => {
    return (
        <div className='cart-container'>
            <p>
                Umumiy narx: {TotalPrice(cartItems).toLocaleString('en-US', {
                style: 'currency',
                currency: 'USD'
            })}
            </p>
            <Button
                title={cartItems.length === 0 ? 'Buyurtma berish' : 'To\'lov'}
                variant='checkout'
                disable={cartItems.length === 0}
                onClick={onCheckout}
            />
        </div>
    );
};

export default Cart;