
import React, { useState ,useEffect } from 'react'
export default function Corn() {
    let [corn,setCorn]=useState([]);
    const getCorn=async()=>{
      let reponse=await fetch("https://forkify-api.herokuapp.com/api/search?q=corn");
      let data=await reponse.json();
      console.log(data.recipes)
      setCorn(data.recipes);
    }
    
    useEffect(()=>{
      getCorn();
    },[])

    return (
      <div className='row'>
        <h2 className='text-center bg-danger'>Corn</h2>
        {corn.map((ele)=>{
          return <div className='col-md-3'>
            <h3>{ele.title}</h3>
            <div>
            <img src={ele.image_url}/></div>
            </div>
        })}
      </div>
    )
  }