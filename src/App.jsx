import { useEffect } from 'react';
import NavBar from './components/NavBar';
import Hero from './components/Hero';
import Intro from './components/Intro';
import Highilights from './components/Highilights';
import Colors from './components/Colors';
import Footer from './components/Footer';

const secoes = [
  { componente: 'NavBar', ancora: 'menu fixo' },
  { componente: 'Hero', ancora: 'topo da página' },
  { componente: 'Intro', ancora: 'especificações' },
  { componente: 'Highilights', ancora: '#design, #performance, #camera' },
  { componente: 'Colors', ancora: '#cores' },
  { componente: 'Footer', ancora: 'rodapé' },
]

function App() {
  useEffect(() => {
    console.groupCollapsed('[site-iphone] App montado')
    console.log('Modo:', import.meta.env.MODE)
    console.table(secoes)
    console.info('No DevTools, filtre o console por [site-iphone].')
    console.groupEnd()
  }, [])

  return (
    <>
    <NavBar />
    <Hero />
    <Intro />
    <Highilights />
    <Colors />
    <Footer />
    </>
  )
}

export default App
