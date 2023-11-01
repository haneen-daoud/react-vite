
import React, { useState ,useEffect } from 'react'
export default function Orange() {
    let [orange,setOrange]=useState([]);
    const getOrange=async()=>{
      let reponse=await fetch("https://forkify-api.herokuapp.com/api/search?q=corn");
      let data=await reponse.json();
      console.log(data.recipes)
      setOrange(data.recipes);
    }
    
    useEffect(()=>{
      getOrange();
    },[])

    return (
      <div className='row'>
        <h2 className='text-center bg-danger'>Orange</h2>
        {orange.map((ele)=>{
          return <div className='col-md-3'>
            <h3>{ele.title}</h3>
            <div>
            <img src={ele.image_url}/></div>
            </div>
        })}
      </div>
    )
  }