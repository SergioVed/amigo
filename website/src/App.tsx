import './App.css'
import { Advantages } from './components/advantages'
import { Ceo } from './components/ceo'
import { Feedbacks } from './components/feedbacks'
import { Header } from './components/header'
import { Hero } from './components/hero'
import { Prices } from './components/prices'
import { Questions } from './components/questions'
import { Teachers } from './components/teachers'
import { TrialLesson } from './components/trial-lesson'

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
        <Prices/>
        <Questions/>
        <TrialLesson/>
      </main>
    </>
  )
}

export default App
