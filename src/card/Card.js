
function Card({ title, img, text, imgAlt }) {
  return (
    <div className='card'>
      <img src={img} alt={imgAlt} />
      <h1>{title}</h1>
      <p>{text}</p>
    </div>
  )

}

export default Card;