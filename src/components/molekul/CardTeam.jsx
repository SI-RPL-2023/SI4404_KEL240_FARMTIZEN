const CardTeam = ({ nama, gelar, deskripsi, image }) => {
  return (
    <div className='col-4 d-flex justify-content-center p-4'>
        <div className="card">
            <img className="card-img-top" style={{ width: 'auto', height: '250px' }} src={require(`../../images/${image}`)} alt="Card image cap"/>
            <div className="card-body">
                <h5 className="card-title">{nama}</h5>
                <h6 className="card-subtitle mb-2 text-muted">{gelar}</h6>
                <p className="card-text">{deskripsi}</p>
            </div>
        </div>
    </div>
  )
}

export default CardTeam
