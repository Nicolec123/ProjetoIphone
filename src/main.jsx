import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

const root = document.getElementById('root')

if (!root) {
  console.error('[site-iphone] Elemento #root não encontrado no index.html')
} else {
  console.info('[site-iphone] React iniciando', {
    modo: import.meta.env.MODE,
    url: window.location.href,
  })

  createRoot(root).render(
    <StrictMode>
      <App />
    </StrictMode>,
  )
}
