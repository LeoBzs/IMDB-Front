import React from 'react'
import { Link } from 'react-router-dom'
import '../assets/css/componentes/cabecalho.css'

const Cabecalho = () => { 
  return(
    <header className="cabecalho container">
      <div className="menu-hamburger">
        <span className="menu-hamburger__icone">
        </span>
      </div>
      <div className="cabecalho-container">
        <Link to="/" className="flex flex--centro">
          <h1 className="cabecalho__titulo">IMDB</h1>
        </Link>
      </div>

      <nav className="menu-cabecalho">
        <ul className="menu-itens">
          <li><Link to="/" className="menu-item menu-item--entrar">Home</Link></li>
          <li><Link to="/lista" className="menu-item">Filmes</Link></li>
          <li><Link to="/sobre" className="menu-item">Sobre</Link></li>
        </ul>

      </nav>
      <div className="menu-cabecalho-background"></div>
    </header>
  )
}


export default Cabecalho