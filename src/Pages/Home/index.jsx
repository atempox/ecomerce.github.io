import { useState, useEffect } from "react";
import React from "react";
import Layout from "../../Components/Layout";
import Card from "../../Components/Cards";
import { ProductDetail } from "../../Components/ProductDetail";

function Home () {

const [items, setItems] = useState(null);

useEffect(() =>{
fetch('https://api.escuelajs.co/api/v1/products')
.then(response => response.json())
.then(data => setItems(data))

},[])
    return (
      <Layout >
       Home 
       <div className="grid gab-4 grid-cols-4 w-full max-w-screen-lg">
       {
        items ?.map(item => {
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