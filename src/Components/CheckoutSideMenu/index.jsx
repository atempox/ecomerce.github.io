import React, { useContext } from "react";
import {ShoppingCardContext} from '../../Context';
import { XCircleIcon } from '@heroicons/react/24/solid';
import './style.css';

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
    </aside>
)
};

export { CheckoutSideMenu };