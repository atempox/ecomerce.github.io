import React, { useContext } from "react";
import {ShoppingCardContext} from '../../Context';
import { OrdersCard } from "../../Components/MyOrdersCard";
import Layout from "../../Components/Layout";
import { Link } from "react-router-dom"; 



function MyOrders() {
  const context = useContext(ShoppingCardContext)

    return (
      <Layout >  
        <div className="flex items-center justify-center relative w-80 mb-4">
          <h1 class="fond-medium text-xl">My Orders</h1>
        </div>     
      {
        context.order.map((order, index) => (

          <Link key={index} to={`/my-orders/${index }`}>
            <OrdersCard

            totalPrice={order.totalPrice} 
            totalProducts={order.totalProducts} />        
           </Link>

        ))
      }
       </Layout>
    )
  }
  
  export default MyOrders