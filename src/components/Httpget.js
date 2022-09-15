import React, {useState, useEffect} from 'react'
import axios from 'axios'; 

export default function Httpget() {
    const [posts, setPosts] = useState([]);


    useEffect(()=>{
        axios.get("https://jsonplaceholder.typicode.com/posts")
        .then(res=> {
            console.log(res)
            setPosts(res.data)
        })
        .catch(err=> {
            console.log(err)
        })
    },[])

  return (
    <>
    <h2>GET Method</h2>
    {posts.map(post=> <div key={post.id}>{post.title}</div>)}: null
    </>
  )
}
