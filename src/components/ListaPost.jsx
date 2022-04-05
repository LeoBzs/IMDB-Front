import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { busca } from '../api/api'

const ListaPost = ( { url } ) => { 

const [posts, setPosts] = useState([])

useEffect(() => {
  busca(url, setPosts)
}, [url])

  return(
    <section className="posts container">
      { 
       posts.map((post)=> (
         <Link className={`cartao-post cartao-post--${post.category}`} to={`/movie/${post.title}`}>
           <article key={post.title}>
              <h3 className="cartao-post__titulo">
                {post.title}
              </h3>
              <p className="cartao-post__meta">{post.description}</p>
           </article> 
         </Link>
       ))
      }
    </section>
  )
}

export default ListaPost