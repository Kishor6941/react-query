import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import React from 'react'
import "./Product.css"
const Products = () => {
    
    let url = 'https://dummyjson.com/products';

    let getProducts  = async () => {
        let response = await axios.get(url);
        return response?.data?.products
    }

  let {isLoading, error, data} =  useQuery({
        queryKey : ['products'],
        queryFn : getProducts
    })

  if(isLoading) {
    console.log('====================================');
    console.log(isLoading);
    console.log('====================================');
    return <><h1>Loading.....</h1></>
  }
  if(error) {
    return <><h1>{error?.message}</h1></>
  }
  console.log('====================================');
  console.log(data);
  console.log('====================================');
  return (
    <div>
        <div className='card-container'>
            {/* {JSON.stringify(data)} */}
        </div>
    </div>
  )
}

export default Products