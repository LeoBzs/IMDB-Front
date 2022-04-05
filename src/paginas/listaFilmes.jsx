import React, { useState, useEffect } from 'react'
import axios from 'axios'

import '../assets/css/componentes/cartao.css'

const ListaFilmes = () => { 

  const [data, setData] = useState([]); 

  const fetchData = async () => {
    try {
      const res = await axios.get(
        "http://localhost:8081/movie/all"
      );
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
          <div className="container">
          <h2 className="titulo-pagina">Lista de filmes disponíveis</h2>
          </div>
        <section className="container flex flex--centro">
          { 
           data.map((post)=> (                 
               <article key={post.id} className="cartao">
                  <h1 className="cartao-post__titulo">
                    {post.title} <br></br> <br></br> <h2>Rating: {post.rating}</h2>
                  </h1>
                  <p className="cartao-post__meta">{post.description}</p>
               </article> 
           ))
          }
        </section></span>
      )
    }

export default ListaFilmes