import './App.css'
import { Advantages } from './components/advantages'
import { Ceo } from './components/ceo'
import { Header } from './components/header'
import { Hero } from './components/hero'

function App() {

  return (
    <>
      <Header/>

      <main>
        <Hero/>
        <Ceo/>
        <Advantages/>
      </main>
    </>
  )
}

export default App
