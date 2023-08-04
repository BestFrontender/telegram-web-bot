import {getData} from './constants/db.js'

import './App.css'
import Card from "./components/Card/index.js";
import Cart from "./components/Cart/index.js";
import {useEffect, useState} from "react";

const courses = getData()

const telegram = window.Telegram.WebApp;
// telegramga ulanish

const App = () => {
    const [cartItems, setCartItems] = useState([])

    const onAddItem = (item) => {
        const existItem = cartItems.find(cart => cart.id = item.id)

        if (existItem) {
            const newData = cartItems.map(cart => cart.id === item.id ? {
                ...existItem,
                quantity: existItem.quantity + 1
            } : cart)
            setCartItems(newData)
        } else {
            const newData = [...cartItems, {...item, quantity: 1}]
            setCartItems(newData)
        }
    }

    const onRemoveItem = (item) => {
        const existItem = cartItems.find(cart => cart.id = item.id)

        if (existItem.quantity === 1) {
            const newData = cartItems.filter(cart => cart.id !== existItem.id)
            setCartItems(newData)
        } else {
            const newData = cartItems.map(cart => cart.id === existItem.id ? {
                ...existItem,
                quantity: existItem.quantity - 1
            } : cart)
            setCartItems(newData)
        }
    }

    const onCheckout = () => {
        telegram.MainButton.text = 'Sotib olish: '
        //telegram MainButtonga text berish
        telegram.MainButton.show()
        //telegram MainButton ni ko'rsat
    }

    useEffect(() => {
        telegram.ready()
        // telegram ishlashga tayyorligini tekshirish ready
    })

    return (
        <>
            <h1 className='heading'>Semmi kurlar</h1>
            <Cart cartItems={cartItems} onCheckout={onCheckout}/>
            <div className="cards_container">
                {courses.map(item => (
                    <Card key={item.id} course={item} onAddItem={onAddItem} onRemoveItem={onRemoveItem}/>
                ))}
            </div>
        </>
    );
};

export default App;
