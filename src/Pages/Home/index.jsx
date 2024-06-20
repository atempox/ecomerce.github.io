import { useContext } from "react";
import React from "react";
import Layout from "../../Components/Layout";
import Card from "../../Components/Cards";
import { ProductDetail } from "../../Components/ProductDetail";
import {ShoppingCardContext} from '../../Context';


function Home () {

  const context = useContext(ShoppingCardContext)

  const renderView = () =>{
    if(context.searchByTitle?.length > 0){
      if(context.filteredItems?.length > 0) {
        return (
          context.filteredItems ?.map(item => (
            <Card key={item.id} data={item} />
            ))
          )
      }else {
        return (
          <div>We have anything </div>
        )

      }
    } else {
      return (
          context.items ?.map(item => (
          <Card key={item.id} data={item} />
          ))
      )
    }
  }
    

    return (
      <Layout >
       <div className="flex items-center justify-center relative w-80 mb-4">
          <h1 className="fond-medium text-xl">Exclusive Products</h1>
        </div>
        <input 
          type="text" 
          placeholder="Search a product" 
          className="raunded-lg border border-black w-80 p-4 mb-4"
          onChange={(event) => context.setSearchByTitle(event.target.value)} />
       <div className="grid gab-4 grid-cols-4 w-full max-w-screen-lg">
       {renderView()};
      </div>
        <ProductDetail />
      </Layout>
    )
  }
  
  export default Home