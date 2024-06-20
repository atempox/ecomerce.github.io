import React from "react";
import { createContext, useState, useEffect } from "react";

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

    //Product checkout side menu . open close
    const [isCheckoutSideMenuOpen, setIsCheckoutSideMenuOpen] = useState(false);
    const openCheckoutSideMenu = () => setIsCheckoutSideMenuOpen(true);
    const closeCheckoutSideMenu = () => setIsCheckoutSideMenuOpen(false);

    //Shoping Card . orders
    
    const [order, setOrder] = useState([])
    
    //get products
    const [items, setItems] = useState(null);
    const [filteredItems, setFilteredItems] = useState(null);
    
    //get products by title
    const [searchByTitle, setSearchByTitle] = useState(null);
    
    
    useEffect(() =>{
        fetch('https://api.escuelajs.co/api/v1/products')
        .then(response => response.json())
        .then(data => setItems(data))
        
    },[])
    
    //funcion para filtrar items (toLowerCase es la propiedad para ignorar mayusculas y minusculas)

    const filteredItemsByTitle = (items, searchByTitle) => {
        return items?.filter( item => item.title.toLowerCase().includes(searchByTitle.toLowerCase))
    }
    
   
    useEffect(() =>{
        if (setFilteredItems) setFilteredItems(filteredItemsByTitle(items,setFilteredItems))     
            
        },[items, setFilteredItems])




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
            setCartProducts,
            isCheckoutSideMenuOpen,
            setIsCheckoutSideMenuOpen,
            openCheckoutSideMenu,
            closeCheckoutSideMenu,
            order,
            setOrder,
            items,
            setItems,
            searchByTitle,
            setSearchByTitle,
            
        }}>
        {children}
        </ShoppingCardContext.Provider>
    )
};
