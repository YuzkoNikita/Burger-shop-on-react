import sticker_potatoes from '../../../assets/sticker-potatoes.svg'
import home_burger from '../../../assets/home-burger.png'
import home_dish from '../../../assets/home-dish.png'
import home_potato from '../../../assets/home-potato.png'
import home_tomato from '../../../assets/home-tomato.png'
import home_lettuce from '../../../assets/home-lettuce.png'

export default function Home() {
  return (
    <section className="home section" id="home">
    <div className="home_container container grid">
       <div className="home_data">
          <h1 className="home_title">Love Every <br /> Burger</h1>

          <p className="home_description">
             We serve the best burgers on the planet,
             paving the way for cooking and preparing
             hot, delicious burgers.
          </p>

          <a href="#popular" className="button">Bite now</a>

          <img src={sticker_potatoes} alt="image" className="home_sticker" />
       </div>

       <div className="home_images">
          <img className="home_burger" src={home_burger} alt="burger" />
          <img className="home_dish" src={home_dish} alt="dish" />

          <img src={home_potato} alt="potato" className="home_ingredient home_potato-1" />
          <img src={home_potato} alt="potato" className="home_ingredient home_potato-2" />
          <img src={home_tomato} alt="potato" className="home_ingredient home_tomato-1" />
          <img src={home_tomato} alt="potato" className="home_ingredient home_tomato-2" />
          <img src={home_lettuce} alt="potato" className="home_ingredient home_lettuce-1" />
          <img src={home_lettuce} alt="potato" className="home_ingredient home_lettuce-2" />
       </div>
    </div>
 </section>
  )
}
