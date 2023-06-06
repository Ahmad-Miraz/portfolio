import React from 'react'
import './Portfolio.css'
import img1 from '../../images/portfolio.jpg'
import img2 from '../../images/lightCode.jpg'
import img3 from '../../images/newsMonkey.jpg'
import img4 from '../../images/digitic.jpg'
import img5 from '../../images/travel.jpg'
import img6 from '../../images/text.jpg'

const Portfolio = () => {
  const data=[
    {
      id:1,
      image:img1,
      title:'My Portfolio Website using React,CSS3',
      github:'https://github.com/Ahmad-Miraz/myPortfolio.git',
      demo:'https://mirajhossain.github.io'
    },
    {
      id:2,
      image:img2,
      title:'Light Code-A Banking App using Tailwind CSS',
      github:'https://github.com/Ahmad-Miraz/LightCode-using-TailwindCss.git',
      demo:'https://647e218aecb6e600ca64b228--elegant-lokum-31f4d6.netlify.app/'
    },
    {
      id:3,
      image:img6,
      title:'Text Analyzer-Easiest way to manipulate your text using Reactjs,Bootstrap5',
      github:'https://github.com/Ahmad-Miraz/TextAnalyzer.git',
      demo:'https://647e262f0b8d1a043afff59a--wondrous-kangaroo-faa4bb.netlify.app/'
    },
    {
      id:4,
      image:img4,
      title:'Digitic-Amazon Ecommerce App cloned using Reactjs,Redux,CSS3',
      github:'https://github.com/YeasinKabirJoy/quick-comm-complete.git',
      demo:'https://647e244c199135032708f191--eloquent-pie-a5245c.netlify.app/'
    },
    {
      id:5,
      image:img5,
      title:'Travel-A Beautifull Travel Website UI designed with HTML,CSS,Js',
      github:'https://github.com/Ahmad-Miraz/TravelApp-using-HTML-CSS-JS.git',
      demo:'https://647e22abecb6e600af64b650--adorable-croissant-1f5acd.netlify.app/'
    },
    {
      id:6,
      image:img3,
      title:'NewsMonkey-A Free Online NewsPaper using Fetch Api,Reactjs,Bootstrap5',
      github:'https://github.com/Ahmad-Miraz/newsMonkey-using-react.git',
      demo:'https://647e2561ecb6e603b864b255--dazzling-marzipan-b9ed75.netlify.app/'
    }
  ]
  return (
    <section id='portfolio'>
      <h5>My Recent Works</h5>
      <h2>Projects</h2>

      <div className="container portfolio__container">
           {
             data.map(({id,image,title,github,demo})=>{
              return(
                <article key={id} className="portfolio__item">
                  <div className="portfolio__item-image">
                    <img src={image} alt={title} />
                  </div>
                  <h3>{title}</h3>
                  <div className="portfolio__item-cta">
                    <a href={github} className="btn" target='_blank' rel="noreferrer">Github</a>
                    <a href={demo} className="btn btn-primary" target='_blank' rel="noreferrer">Live Demo</a>
                  </div>
                </article>
              )
             })
            }
      </div>
    </section>
  )
}

export default Portfolio