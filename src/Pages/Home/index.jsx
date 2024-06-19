import { useContext } from "react";
import React from "react";
import Layout from "../../Components/Layout";
import Card from "../../Components/Cards";
import { ProductDetail } from "../../Components/ProductDetail";
import {ShoppingCardContext} from '../../Context';


function Home () {

  const context = useContext(ShoppingCardContext)

    return (
      <Layout >
       <div className="flex items-center justify-center relative w-80 mb-4">
          <h1 className="fond-medium text-xl">Exclusive Products</h1>
        </div>
        <input 
          type="text" 
          placeholder="Search a product" 
          className="raunded-lg border border-black w-80 p-4 mb-4"
          onChange={(event) => context.setSeachByTittle(event.target.value)} />
       <div className="grid gab-4 grid-cols-4 w-full max-w-screen-lg">
       {
        context.items ?.map(item => {
        return <Card
        key={item.id} 
        data={item}
        />
      })
      };
      </div>
        <ProductDetail />
      </Layout>
    )
  }
  
  export default Home