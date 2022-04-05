import React, {useState, useEffect } from 'react'
import { useParams, useHistory } from 'react-router-dom'
import { busca } from '../api/api'
import '../assets/css/post.css'

const Post = () => { 
  let history = useHistory()
  const { id } = useParams()
  const[post, setPost] = useState({})

  useEffect(() => {
    busca(`/movie/${id}`, setPost)
    .catch(()=>{
      history.push('/404')
    })
  }, [id])

  return(
    <main className="container flex flex--centro">
      <article className="cartao post">
        <h2 className="cartao__titulo">{post.title}</h2>
        <h2 className="carta__titulo">{post.category}</h2>
        <p className="carta__texto">{post.description}</p>
        <h2 className="cartao__titulo">{post.year}</h2>
        <h2 className="cartao__titulo">{post.rating}</h2>
      </article>
    </main>
  )
}

export default Post