import { useState } from 'react'
import './App.css'
import fondo from './media/IMG-20250619-WA0143 (1).png'

function App() {
  return (
    <>
      <ul className='card'>
        <li className='card-header'>
          <div 
          className='title-header'
          style={{ backgroundImage: `url(${fondo})` }}
          >
            <h1>Programa de estudio</h1>
            <p>16:00</p>
          </div>
        </li>
        <ul>
          <li>
            <div className='date'>06/07</div>
            <div>
              <p className='title'>Dedíquense tiempo de calidad</p>
            </div>
            <div className='date'><a href="https://www.jw.org/es/ense%C3%B1anzas-b%C3%ADblicas/familia/dediquense-tiempo-calidad/" target="_blank" rel="noopener noreferrer">Ver articulo</a>
            </div>
          </li>
          <li>
            <div className='date'>13/07</div>
            <div><p className='title'>Secretos para un matrimonio feliz: El respeto (video) / Cómo mostrar respeto (articulo)</p></div>
            <div className='date'>
              <a href="https://www.jw.org/es/biblioteca/videos/#es/mediaitems/SeriesHappyMarriage/pub-jwb-110_4_VIDEO" target="_blank" rel="noopener noreferrer">Ver video</a> / <a href="https://www.jw.org/es/biblioteca/revistas/despertad-2016-numero6-diciembre/como-mostrar-respeto/" target="_blank" rel="noopener noreferrer">Ver articulo</a>
            </div>
          </li>
          <li>
            <div className='date'>20/07</div>
            <div><p className='title'><span>Metas</span>: “El precursorado fortalece nuestra amistad con Jehová”</p></div>
            <div className='date'><a href="https://www.jw.org/es/biblioteca/revistas/w20130915/fortalece-amistad-con-dios/" target="_blank" rel="noopener noreferrer">Ver articulo</a></div>
          </li>
          <li>
            <div className='date'>27/07</div>
            <div><p className='title'><span>Con invitados</span>: Como administrar bien el dinero</p></div>
            <div><a href="https://www.jw.org/es/biblioteca/revistas/wp20090801/administrar-dinero/" target="_blank" rel="noopener noreferrer">Ver articulo</a></div>
          </li>
        </ul>
      </ul>
    </>
  )
}

export default App