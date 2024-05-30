import { XCircleIcon } from '@heroicons/react/24/solid'
import React from "react";
import './style.css';

const ProductDetail = () => {
return (
    <aside className="product-detail flex flex-col fixed right-0 border border-black rounded-lg bg-white">
        <div className="flex justify-between items-center p-6">
            <h2 className="fond-medium text-xl">Detail</h2>
            <div>
                <XCircleIcon className='size-6 text-black/30'/>
            </div>
        </div>
    </aside>
)
};

export { ProductDetail };