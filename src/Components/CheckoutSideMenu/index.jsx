import React, { useContext } from "react";
import {ShoppingCardContext} from '../../Context';
import { XCircleIcon } from '@heroicons/react/24/solid';
import './style.css';
import { OrderCard } from "../OrderCard";

const CheckoutSideMenu = () => {
    const context = useContext(ShoppingCardContext)

 
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
                    title={product.title} 
                    imageUrl={product.images}
                    price={product.price}
                    />
                ))//esto indica que por cada elemento que esté en el carrito por favor pintar una card con esa información
            }

        </div>
    </aside>
)
};

export { CheckoutSideMenu };