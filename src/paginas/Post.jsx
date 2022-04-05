import React, {useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { busca } from '../api/api'
import '../assets/css/post.css'
import axios from 'axios'

const Post = () => { 
  const { id } = useParams()
  const[setPost] = useState({})
  const [data, setData] = useState([]); 

  useEffect(() => {
    busca(`/movie/${id}`, setPost)
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id])

  const fetchData = async () => {
    try {
      const res = await axios.get(
        "https://imdb-bonaparte.herokuapp.com/movie/all"
      )
      setData(res?.data);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    fetchData();
  }, [])

  return(
    <span>
          
          <h2 className="titulo-pagina">Rating - {id}</h2>
          <section className="container flex flex--centro">
          { 
           data
           .filter((post) => (post.title === id))
           .map((post) => (                 
               <article key={post.id} className="cartao">
                  <h1 className="cartao-post__titulo">
                    {post.title} <br></br> <br></br> <h2>Rating: {post.rating}</h2>
                  </h1>
                  <p className="cartao-post__meta">{post.description}</p>
               </article> 
           ))
          }
        </section>
        </span>
  )
}

export default Post