import SectionTitle from '../../../minorComponents/SectionTitle/SectionTitle'
import PopularCard from './PopularCard/PopularCard'
import popular_burger_chicken from '../../../assets/popular-burger-chicken.png'
import popular_burger_meat from '../../../assets/popular-burger-meat.png'
import popular_burger_grill from '../../../assets/popular-burger-grill.png'
import popular_burger_classic from '../../../assets/popular-burger-classic.png'
import popular_burger_big from '../../../assets/popular-burger-big.png'

export default function Popular() {
  return (
    <section className="popular section" id="popular">
      <SectionTitle title={<><span>Most Devoured</span><br/><span>Burgers</span></>}/>

      <div className="popular_container container grid">
        {/* <!-- Chicken burger start --> */}
        <PopularCard 
          img={popular_burger_chicken} 
          popularTitle={<><span>Meat</span><br/><span>Burger</span></>}
          price='$10'
        />
        {/* <!-- Chicken burger end --> */}

        {/* <!-- Mear burger start --> */}
        <PopularCard 
          img={popular_burger_meat} 
          popularTitle={<><span>Chicken</span><br/><span>Burger</span></>}
          price='$6'
        />
        {/* <!-- Meat burger end --> */}

        {/* <!-- Grill burger start --> */}
        <PopularCard 
          img={popular_burger_grill} 
          popularTitle={<><span>Grill</span><br/><span>Burger</span></>}
          price='$12'
        />
        {/* <!-- Grill burger end --> */}

        {/* <!-- Classic burger start --> */}
        <PopularCard 
          img={popular_burger_classic} 
          popularTitle={<><span>Classic</span><br/><span>Burger</span></>}
          price='$8'
        />
        {/* <!-- Classic burger end --> */}

        {/* <!-- Big burger start --> */}
        <PopularCard 
          img={popular_burger_big} 
          popularTitle={<><span>Big</span><br/><span>Burger</span></>}
          price='$15'
        />
        {/* <!-- Big burger end --> */}
      </div>
    </section>
  )
}
