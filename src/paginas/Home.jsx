import React from 'react'
import ListaCategorias from '../components/ListaCategorias'
import ListaPost from '../components/ListaPost'
const Home = () => {

  return (
    <main>
      <div className="container">
        <h2 className="titulo-pagina">Bem-vindo ao IMDB!</h2>
      </div>
      <ListaCategorias />
      <ListaPost url={'/movie/all'} />
    </main>
    
  )
}

export default Home
