// eslint-disable-next-line react/prop-types
export default function PopularCard({img, popularTitle, price}) {
  return (
    <article className="popular_card">
        <img src={img} alt="burger" className="popular_img" />

        <h2 className="populat_title">{popularTitle}</h2>
        <span className="popular_price">{price}</span>

        <button className="popular_button">
            <i className="ri-shopping-bag-3-fill"></i>
        </button>
    </article>
  )
}
