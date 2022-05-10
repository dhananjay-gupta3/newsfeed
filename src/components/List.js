import React, { useEffect, useState } from 'react'
import axios from 'axios'
import './List.css'
const List = () => {
    const [posts,setPosts]= useState([])
    const url = "https://newsapi.org/v2/everything?q=apple&from=2022-05-09&to=2022-05-09&sortBy=popularity&apiKey=94945e0670144540a622fc2f16401d13"
     useEffect(()=>{
         axios.get(url).then((response)=>{
             console.log(response.data)
             setPosts(response.data.articles)
         });
     },[])

     useEffect(()=>{
         window.scrollTo({
             top:0,
             behavior:'smooth'
         })
     })
  return (
    <div className='main'>
    {
        posts.map((post,i)=>{
            return<div className='card' key={i} >
           <img className='img' src={post.urlToImage} alt=''/>
           
           <div className='p'>{post.title}</div>
           <p className='p'>{post.content}</p>
           
           <button className='btn'>
           <a className='link' href={post.url}>Read More</a>
           </button>
           
            
            
            </div>
        })
    }
    </div>
  )
}

export default List