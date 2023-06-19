const CardBlogHome = ({ src, title, desc }) => {
  return (
        <div id="card-blog" style={{ width: '18rem' }}>
        <img className="card-img-top" src={src} alt="Card image cap"/>
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{desc}</p>
          <a href="#" className="btn btn-primary">Baca</a>
        </div>
      </div>
  )
}

export default CardBlogHome
