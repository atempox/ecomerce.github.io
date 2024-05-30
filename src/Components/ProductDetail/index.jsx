import React, { useContext } from "react";
import {ShoppingCardContext} from '../../Context';
import { XCircleIcon } from '@heroicons/react/24/solid';
import './style.css';

const ProductDetail = () => {
    const context = useContext(ShoppingCardContext)
 
return (
    <aside
     className={`${context.isProductDetailOpen ? 'flex' : 'hidden'} product-detail flex-col fixed right-0 border border-black rounded-lg bg-white`}>
        <div className="flex justify-between items-center p-6">
            <h2 className="fond-medium text-xl">Detail</h2>
            <div className="cursor-pointer"
            onClick={() => context.closeProductDetail() }>
                <XCircleIcon className='size-6 text-black/30'/>
            </div>
        </div>
    </aside>
)
};

export { ProductDetail };