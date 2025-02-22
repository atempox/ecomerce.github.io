import React, { useContext } from "react";
import { XCircleIcon } from '@heroicons/react/24/solid';

const OrderCard = props => {
    const{id, title, imageUrl, price, handleDelete } = props
    let renderXcircleIcon
    if (handleDelete) {
        renderXcircleIcon = <XCircleIcon onClick={() => handleDelete(id)} className='size-6 text-black/30'/>
    }

    return(
        <div className="flex justify-between items-center mb-3">
            <div className="flex items-center gap-2">
                <figure className="w-20 h-20">
                    <img className="w-full h-full rounded-lg object-cover" src={imageUrl} alt={title} />
                </figure>
                <p className="text-sm font-light">{title}</p>
            </div>
            <div className="flex items-center gap-2">
                <p className="text-lg font-medium">{price}</p>
                {renderXcircleIcon}
                
            </div>
        
        </div>
    )
}

export { OrderCard }