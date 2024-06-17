import React, { useContext } from "react";
import Layout from "../../Components/Layout";
import {ShoppingCardContext} from '../../Context';
import { OrderCard } from "../../Components/OrderCard";


function MyOrder() {

  const context = useContext(ShoppingCardContext)
  
    return (
      <Layout >       
      My Order    
      <div className="flex flex-col w-80">
            {
                context.order?.slice(-1)[0].products.map(product => (
                    <OrderCard 
                    key={product.id}
                    id={product.id}
                    title={product.title} 
                    imageUrl={product.images}
                    price={product.price}
                    />
                ))
              }
        </div>   
       </Layout>
    )
  }
  
  export default MyOrder