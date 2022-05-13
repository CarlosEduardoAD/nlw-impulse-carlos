import React from 'react'
import ReactDOM from 'react-dom/client'
import { App } from './App'
import './global.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { MainContato } from './components/Contato/ContatoMain'
import { CSSTransition, TransitionGroup } from 'react-transition-group' 
import { MainHistoria } from './components/Historia/HistoriaMain'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<App/>} />
      <Route path="contato" element={<MainContato/>} />
      <Route path="historia" element={<MainHistoria/>} />
    </Routes>
  </BrowserRouter>
  </React.StrictMode>
)
