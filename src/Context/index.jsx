import React from "react";
import { createContext, useState } from "react";

export const ShoppingCardContext = createContext();

export const ShoppingCardProvider = ({children}) => {
    //shopping card . increment cuantity
    const [count, setCount] = useState(0);

    //Product detail . open close
    const [isProductDetailOpen, setIsProductDetailOpen] = useState(false);
    const openProductDetail = () => setIsProductDetailOpen(true);
    const closeProductDetail = () => setIsProductDetailOpen(false);

    //Product detail . show product
    const [productToShow, setProductToShow] = useState({});

    //Shopping Cart . Add products to cart
    const [cartProducts, setCartProducts] = useState([]);



    return (
        <ShoppingCardContext.Provider value= {{
            count,
            setCount,
            openProductDetail,
            closeProductDetail,
            isProductDetailOpen,
            productToShow,
            setProductToShow,
            cartProducts,
            setCartProducts
        }}>
        {children}
        </ShoppingCardContext.Provider>
    )
};
