import React, { useContext } from "react";
import { Link } from "react-router-dom"; 
import {ShoppingCardContext} from '../../Context';
import { XCircleIcon } from '@heroicons/react/24/solid';
import './style.css';
import { OrderCard } from "../OrderCard";
import { totalPrice } from '../../Utils'


const CheckoutSideMenu = () => {
    const context = useContext(ShoppingCardContext)

    //esta función actualiza el setCartProducts con una lista filtrada por id 
    const handleDelete = (id) =>{
        const filteredProducts = context.cartProducts.filter(product => product.id !== id)
        context.setCartProducts(filteredProducts)
    }
    
    const handlCheckout = () => {
        const orderToAdd = {
            date: '01.02.2024',
            products: context.cartProducts,
            totalProducts: context.cartProducts.length,
            totalPrice: totalPrice(context.cartProducts)
        }
        context.setOrder([...context.order, orderToAdd]) //esta es la forma para indicar que el actualizador de (order) será el order acutal más el orderToAdd
        
        context.setCartProducts([]) //actualiza cartProducts a un array vacio para una nueva compra.
    }
 
return (
    <aside
     className={`${context.isCheckoutSideMenuOpen ? 'flex' : 'hidden'} checkout-side-menu flex-col fixed right-0 border border-black rounded-lg bg-white`}>
        <div className="flex justify-between items-center p-6">
            <h2 className="fond-medium text-xl">My Order</h2>
            <div className="cursor-pointer"
            onClick={() => context.closeCheckoutSideMenu() }>
                <XCircleIcon className='size-6 text-black/30'/>
            </div>
        </div>
        <div className="px-6 overflow-y-scroll flex-1">
            {
                context.cartProducts.map(product => (
                    <OrderCard 
                    key={product.id}
                    id={product.id}
                    title={product.title} 
                    imageUrl={product.images}
                    price={product.price}
                    handleDelete={handleDelete}
                    />
                ))//esto indica que por cada elemento que esté en el carrito por favor pintar una card con esa información
            }
        </div>
        
        <div className="mx-6 mb-6">
            <p className="flex justify-between items-center mb-2">
                <span className="font-light">Total:</span>
                <span className="font-medium text-2xl">${totalPrice(context.cartProducts)}</span>
            </p>
            <Link to='./my-orders/last'>
                <button className="w-full bg-black py-3 rounded-lg text-white" onClick={() => handlCheckout()}>Checkout</button>
            </Link>

        </div>
    </aside>
)
};

export { CheckoutSideMenu };