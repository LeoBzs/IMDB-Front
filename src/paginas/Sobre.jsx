import React from 'react'


import '../assets/css/componentes/cartao.css'

const Sobre = () => {

  return (
    <main>
      <div className="container">
        <h2 className="titulo-pagina">Sobre o IMDB</h2>
      </div>
      <section className="container flex flex--centro">
        <article className="cartao">
        Em 1989, o britânico Col Needham e outras pessoas participavam no newsgroup rec.arts.movies da Usenet, discutindo filmes e trocando informação. Produzindo listas sobre atores, atrizes e diretores de filmes. Em 1990, já tinham reunido informações sobre mais de 10 000 filmes e séries de televisão. A 17 de Outubro de 1990, Needham publicou uma coleção de scripts de shell de UNIX que podiam ser usados para correr pesquisas nas quatro listas com informação, criando assim a IMDb. Naquele tempo porém, era conhecida como a rec.arts.movies movie database.
        <br></br>
        Por 1993, a base de dados tinha-se estendido para incluir factos sobre biografias e sumários sobre filmes e séries e um interface de e-mail, centralizado para fazer pesquisas na base de dados, tinha sido criado. Mais tarde nesse mesmo ano, moveu-se para a World Wide Web (ainda em crescimento). A base de dados era alojada nos servidores do departamento de informática da Universidade de Cardiff, em Cardiff, Gales, Reino Unido. Rob Hartill era o autor original do interface web. Em 1994, o interface de e-mail foi melhorado para aceitar pedidos de informação, significando que os utilizadores não tinham de enviar a sua informação especificamente para quem tratava de uma lista. Ao longo dos anos, a base de dados era corrida numa rede de mirrors à volta do mundo com largura de banda doada.
        <br></br>
        Em 1995, tinha ficado óbvio a Col Needham que a comunidade de voluntários do projecto se tinha tornado demasiado grande para continuar a manter a base de dados com doações e tempo disponível. A decisão tomada foi a de se tornar o empreendimento comercial e em 1996, a IMDb foi incorporada no Reino Unido, tornando-se a Internet Movie Database Ltd.. Os accionistas eram as pessoas que faziam a manutenção da base de dados e as receitas eram geradas através de publicidade e licenças.
        <br></br>
        Em 2021, o site implementou medidas de segurança nas avaliações da audiência em virtudes de ataques, em massa, de grupos (chamados de milícias digitais) organizados com a única intenção de gerar avaliações negativas em produções cinematográficas. Situações deste tipo ocorreram em filmes como Marighella (2021-Brasil), Captain Marvel (EUA-2019) ou Black Panther (EUA-2018).
        </article>
        
      </section>
    </main>
  )
}

export default Sobre
