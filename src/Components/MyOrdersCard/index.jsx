import React from 'react';
import { XCircleIcon } from '@heroicons/react/24/solid';


const OrdersCard = props => {
    const{ totalPrice, totalProducts } = props
   

    return(
        <div className="flex justify-between items-center w-80 p-4 border border-black rounded-lg mb-4">
            <p className='flex justify-between'>
             <div className='flex flex-col'>
                <span className='font-light'>01.02.2024</span>
                <span >{totalProducts} articles</span>
             </div>
            </p>
            <span className='font-medium text-2xl'>${totalPrice}</span>

        </div>
    )
}
export { OrdersCard };