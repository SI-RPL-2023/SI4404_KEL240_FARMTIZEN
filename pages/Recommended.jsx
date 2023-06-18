import CardProduk from '../components/molekul/CardProduk'
import Navbar from '../components/organisms/Navbar'
import '../css/recommended.css'

const Recommended = () => (
    <><Navbar /><div id="recommended">
        <div className="container" id="recommended-section">
            <h1>Rekomendasi</h1>
            <h1>Produk</h1>
        </div>
        <div id='recommended-produk' className='container'>
            <div className='row '>
                <CardProduk/>
                <CardProduk/>
                <CardProduk/>
            </div>
        </div>
        <div className='d-flex justify-content-center mt-5'>
            <button className='btn' style={{
              borderRadius: '40px',
              border: 'white solid',
              color: 'white',
              width: '250px'
            }}>
                <a href="https://www.tokopedia.com/tanimukti-1">Buka Store</a>
            </button>
        </div>
    </div></>
)

export default Recommended
