import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { busca } from '../api/api'
import '../assets/css/blog.css'

const ListaCategorias = () => { 

  const[categorias, setCategorias] = useState([])

  useEffect(() => {
   busca(`/movie/all`, setCategorias)
  }, [])

  return(
    <ul className="lista-categorias container flex">
      {
        categorias.map((categoria) => (
          <Link to={`/movie/category/${categoria.category}`}>
            <li className={`lista-categorias__categoria lista-categorias__categoria--${categoria.title}`}>
              {categoria.category}
            </li>
          </Link>
        ))
      }
    </ul>
  )
}

export default ListaCategorias