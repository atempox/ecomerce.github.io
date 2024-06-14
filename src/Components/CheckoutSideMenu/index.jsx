import React, { useContext } from "react";
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
        <div className="px-6 overflow-y-scroll">
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
        <div className="pd-6">
            <p className="flex justify-between items-center">
                <span className="font-light">Total:</span>
                <span className="font-medium text-2xl">${totalPrice(context.cartProducts)}</span>
            </p>

        </div>
    </aside>
)
};

export { CheckoutSideMenu };