import React, { useState, useEffect } from 'react'
import ListaCategorias from '../components/ListaCategorias'
import ListaPost from '../components/ListaPost'
import '../assets/css/blog.css'
import { Route, useParams, useRouteMatch, Link, Switch } from 'react-router-dom'
import { busca } from '../api/api'
import SubCategoria from './SubCategoria'
import axios from 'axios'

const Categoria = () => {
  const { id } = useParams()
  const { url, path } = useRouteMatch()
  const [subcategorias, setSubCategorias] = useState([])

  const [data, setData] = useState([]); 

  useEffect(() => {
    busca(`movie/category/${id}`, (categoria) => {
      setSubCategorias(categoria.subcategorias)
    })
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

  return (
    <>
      <div className="container">
        <h2 className="titulo-pagina">Procura por categoria</h2>
      </div>
      <ListaCategorias />
      <ul className="lista-categorias container flex">
        {
          subcategorias.map((subcategoria) => (
            <li
              className={`lista-categorias__categoria lista-categorias__categoria--${id}`}
              key={subcategoria}
            >
              <Link to={`${url}/${subcategoria}`}>
                {subcategoria}
              </Link>
            </li>
          ))
        }

        <span>
          
          <h2 className="titulo-pagina">filmes de {id}</h2>
          <section className="container flex flex--centro">
          { 
           data
           .filter((post) => (post.category === id))
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

      </ul>
      <Switch>
        <Route exact path={`${path}/`}>
          <ListaPost url={`/category/?category=${id}`} />
        </Route>
        <Route path={`${path}/category/:category`}>
          <SubCategoria />
        </Route>
      </Switch>
    </>
  )
}
export default Categoria
