const CardProduk = () => {
  return (
    <div className='col-4 d-flex justify-content-center'>
        <div className='produk'>
            <div className='row'>
            <img src={require('../../images/produk/moom uung isi 60 kapsul.png')} />
            </div>
            <div className='row'>
            <h3>Moom Uung Isi 60 kapsul</h3>
            <div className='row'>
                <div className='col-6'>
                <h4 style={{ color: '#094370', fontWeight: 'bold' }}>Rp.100.000</h4>
                </div>
            </div>
            </div>
        </div>
    </div>
  )
}

export default CardProduk
