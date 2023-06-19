import React, { useState } from 'react'
import './cardcomunity.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faThumbsUp } from '@fortawesome/free-solid-svg-icons'

const CardComunity = ({ question }) => {
  const [liked, setLiked] = useState(false)

  const handleLike = () => {
    setLiked(!liked)
  }

  return (
    <div className="card-comunity" id="comunity-post">
      <div className="row">
      <div className="col-1 profile-image" style={{ marginRight: '40px', marginLeft: '-40px' }}>
        <img src={require(`../../images/${question.profile}`)} alt="Profile" style={{ borderRadius: '50%' }} />
      </div>
        <div className="col-10" style={{ marginTop: '10px' }}>
          <h3>{question.nama}</h3>
          <p>{question.date}</p>
        </div>
      </div>
      <div className="garis-bawah"></div>
      <div className="container" id="post-text">
        <h5>
            {question.question}
        </h5>
      </div>
      <div className="garis-bawah"></div>
      <div className="container" id="post-like">
        <div className="button-container">
          <button className="btn" onClick={handleLike}>
            <FontAwesomeIcon icon={faThumbsUp} color={liked ? 'blue' : 'black'} />
          </button>
          <button className="btn">
            <span>Komentar</span>
          </button>
          <button className="btn">
            <span>Bagikan</span>
          </button>
        </div>
      </div>
    </div>
  )
}

export default CardComunity
