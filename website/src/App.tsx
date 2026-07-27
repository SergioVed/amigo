import './App.css'
import { Advantages } from './components/advantages'
import { Ceo } from './components/ceo'
import { Header } from './components/header'
import { Hero } from './components/hero'
import { Teachers } from './components/teachers'

function App() {

  return (
    <>
      <Header/>

      <main>
        <Hero/>
        <Ceo/>
        <Advantages/>
        <Teachers/>
      </main>
    </>
  )
}

export default App
