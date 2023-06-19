import { Link } from 'react-router-dom'

const CardCourse = ({ embed, title, link }) => {
  return (
    <>
      <div className="card" style={{ width: '18rem' }}>
        <iframe className="embed-responsive-item" src={embed}></iframe>
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <Link to={link} href="#" className="btn btn-success">Pelajari Lebih Lanjut</Link>
        </div>
      </div>
    </>
  )
}

export default CardCourse
