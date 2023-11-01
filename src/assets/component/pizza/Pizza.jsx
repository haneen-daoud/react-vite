
import React, { useState ,useEffect } from 'react'
export default function Pizza() {
    let [restaurant,setRestaurant]=useState([]);
    const getRestaurant=async()=>{
      let reponse=await fetch("https://forkify-api.herokuapp.com/api/search?q=pizza");
      let data=await reponse.json();
      console.log(data.recipes)
      setRestaurant(data.recipes);
    }
    
    useEffect(()=>{
      getRestaurant();
    },[])

    return (
      <div className='row'>
        <h2 className='text-center bg-danger'>Pizaa</h2>
        {restaurant.map((ele)=>{
          return <div className='col-md-3'>
            <h3>{ele.title}</h3>
            <div>
            <img src={ele.image_url}/></div>
            </div>
        })}
      </div>
    )
  }