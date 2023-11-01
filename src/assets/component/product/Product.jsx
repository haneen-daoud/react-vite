import React, { useState ,useEffect } from 'react'


export default function product() {


    let [product,setProduct]=useState([]);
    const getProduct=async()=>{
      let reponse=await fetch("https://fakestoreapi.com/products");
      let data=await reponse.json();
      setProduct(data);
    }
    
    useEffect(()=>{
      getProduct();
    },[])

    return (
      <div className='row'>
        {product.map((ele)=>{
          return <div className='col-md-4'>
            <h2>{ele.title}</h2>
            <img src={ele.image}  className='w-100'/>
            </div>
        })}
      </div>
    )
  }