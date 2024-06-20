import React, { useContext } from "react";
import { PlusIcon, CheckIcon } from '@heroicons/react/24/solid'
import {ShoppingCardContext} from '../../Context'


const Card = (data) =>{
    const context = useContext(ShoppingCardContext)

    const showProduct = (productDetail) => {
        context.openProductDetail()
        context.setProductToShow(productDetail)
        
    }

    const addProductsToCart = (event, productData) => {
        event.stopPropagation()
        context.setCount(context.count + 1)
        context.setCartProducts([...context.cartProducts, productData]) //copia lo que existe en el estado base y le indica que le agregue lo que hay en el parametro que se le pase
        context.openCheckoutSideMenu()
        context.closeProductDetail()

    }
    const renderIcon = (id) => {
        const isInCard = context.cartProducts.filter(product => product.id === id).length > 0

        if(isInCard){
            return(
            <div 
                className='absolute top-0 right-0 flex justify-center items-center bg-black w-6 h-6 rounded-full m-2 p-1'>
                    <CheckIcon className='size-6 text-white '/>
            </div>
            )}
        else {
            return(
            <div 
                className='absolute top-0 right-0 flex justify-center items-center bg-white w-6 h-6 rounded-full m-2 p-1'
                onClick={(event) => addProductsToCart(event, data.data) }>
                    <PlusIcon className='size-6 text-black/30'/>
            </div>
        )}}

    return(
        <div 
        onClick={() => showProduct(data.data)}
        className='bg-white cursor-pointer w-56 h-60 rounded-lg'>
            <figure className='relative mb-2 w-full h-4/5'>
                <span className='absolute bottom-0 left-0 bg-white/60 rounded-lg text-black text-xs m-2 px-3 py-0.5'>{data.data.category.name}</span>
                <img className='h-full w-full object-cover rounded-lg' src={data.data.images[0]} alt={data.data.title} />
                {renderIcon(data.data.id)}
            </figure>
            <p className='flex justify-between'>
                <span className='text-sm font-light'>{data.data.title}</span>
                <span className='text-lg font-medium'>${data.data.price}</span>
            </p>
        </div>
    )
};

export default Card ;