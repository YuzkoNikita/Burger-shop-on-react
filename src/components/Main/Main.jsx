import Contact from './Contact/Contact'
import Delivery from './Delivery/Delivery'
import Home from './Home/Home'
import Popular from './Popular/Popular'
import Recipe from './Recipe/Recipe'

export default function Main() {
  return (
    <main className="main">
        <Home />
        <Recipe />
        <Popular />
        <Delivery />
        <Contact />
    </main>
  )
}
