import {useState,useEffect} from 'react'
import Axios from 'axios'

import './App.css'

function App() {

   const [posts,setPosts]=useState([])

   useEffect(()=>{   
      Axios.get("https://jsonplaceholder.typicode.com/posts")
      .then(response=>{
        console.log(response.data);
        setPosts(response.data)
        })
        .catch(error=>{
            console.log(error);
      });
   },[])

  return (
    <>
      <ul>
        {
          posts.map(post=>{
            return <li>{post.body}</li>
          })
        }
      </ul>
    </>
  );
}

export default App
