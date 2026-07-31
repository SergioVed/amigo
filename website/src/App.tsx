import './App.css'
import { Advantages } from './components/advantages'
import { Ceo } from './components/ceo'
import { Feedbacks } from './components/feedbacks'
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
        <Feedbacks/>
      </main>
    </>
  )
}

export default App
