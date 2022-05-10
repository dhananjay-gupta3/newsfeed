import React, { useEffect, useState } from 'react'
import axios from 'axios'

const News = () => {
    const [posts,setPosts]= useState([])
    const url = "https://newsapi.org/v2/everything?q=tesla&from=2022-04-10&sortBy=publishedAt&apiKey=94945e0670144540a622fc2f16401d13"
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
           <a className='link' href={post.url}>read more</a>
           </button>
           
            
            
            </div>
        })
    }
    </div>
  )
}

export default News;