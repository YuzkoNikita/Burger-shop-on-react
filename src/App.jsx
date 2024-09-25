import "./sass/index.scss"
import Footer from './components/Footer/Footer'
import { Header } from './components/Header/Header'
import Main from './components/Main/Main'
import ScrollUpButton from './minorComponents/ScrollUpButton/ScrollUpButton'

function App() {
  return (
    <>
      <Header />
      <Main />
      <Footer />
      <ScrollUpButton />
    </>
  )
}

export default App