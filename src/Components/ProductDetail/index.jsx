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
        <figure className="px-6 ">
            <img className = "w-48 h-48 rounded-lg" 
            src={context.productToShow.images} 
            alt={context.productToShow.tittle} />
        </figure>
        <p className="flex flex-col p-6">
            <span className="font-medium text-2xl mb-2">{context.productToShow.price}</span>
            <span className="font-medium text-md">{context.productToShow.tittle}</span>
            <span className="font-light text-sm">{context.productToShow.description}</span>

        </p>
    </aside>
)
};

export { ProductDetail };