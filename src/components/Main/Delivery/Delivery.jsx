import SectionTitle from '../../../minorComponents/SectionTitle/SectionTitle'
import sticker_glass from '../../../assets/sticker-glass.svg'
import delivery_burger from '../../../assets/delivery-burger.png'

export default function Delivery() {
  return (
    <section className="delivery section" id="delivery">
    <div className="delivery_container container grid">
       <div className="delivery_data">
          <SectionTitle title="Fast Delivery" />

          <p className="delivery_description">
             Place your order for your favorite burger
             and we will deliver it to your door in minutes,
             get in touch and don`t leave hungry.
          </p>

          <a href="#contact" className="button">Contact Now</a>

          <img src={sticker_glass} alt="image" className="delivery_sticker" />
       </div>

       <img src={delivery_burger} alt="image" className="delivery_img" />
    </div>
    </section>
  )
}