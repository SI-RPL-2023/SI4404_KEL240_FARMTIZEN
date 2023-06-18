import CardBlogHome from '../components/molekul/CardBlogHome'
import Navbar from '../components/organisms/Navbar'
import '../css/home.css'

const blogList = [
  {
    src: require('../images/Pichome1.png'),
    title: 'Cara Merawat Tanaman Sayuran di Musim Hujan Agar Tetap Subur',
    desc: 'Lihat cara merawat tanaman sayuran di musim hujan agar tetap subur dan tumbuh dengan baik. Tanaman sayuran yang ditanam di musim hujan membutuhkan perawatan yang berbeda dengan musim kemarau. Hal ini dikarenakan tanaman sayuran yang ditanam di musim hujan akan lebih rentan terserang penyakit dan hama.'
  },
  {
    src: require('../images/Pichome2.png'),
    title: 'Cara Agar Jagung Berhasil Panen Banyak',
    desc: 'Lihat cara agar jagung berhasil panen banyak. Jagung merupakan salah satu komoditas pangan yang banyak dibudidayakan di Indonesia. Selain sebagai bahan pangan, jagung juga dapat diolah menjadi berbagai produk olahan yang memiliki nilai jual tinggi. Hal ini membuat jagung menjadi salah satu komoditas yang banyak dibudidayakan oleh petani di Indonesia.'
  },
  {
    src: require('../images/Pichome3.png'),
    title: 'Sayur Sawi Ditanam di Dataran Rendah dan Tinggi, Ini Perbedaannya',
    desc: 'Lihat perbedaan sayur sawi ditanam di dataran rendah dan tinggi. Sawi merupakan salah satu jenis sayuran yang banyak dibudidayakan di Indonesia. Hal ini dikarenakan sawi memiliki nilai jual yang tinggi dan memiliki permintaan yang cukup tinggi di pasaran. Selain itu, sawi juga memiliki banyak manfaat bagi kesehatan tubuh manusia.'
  },
  {
    src: require('../images/Pichome1.png'),
    title: 'Cara Merawat Cabai Agar Cepat Berbuah Banyak',
    desc: 'Lihat cara merawat cabai agar cepat berbuah banyak. Cabai merupakan salah satu komoditas hortikultura yang memiliki nilai jual tinggi. Hal ini dikarenakan cabai merupakan salah satu bahan masakan yang banyak digunakan oleh masyarakat Indonesia. Selain itu, cabai juga memiliki banyak manfaat bagi kesehatan tubuh manusia.'
  },
]

const Home = () => {
  return (
        <div>
          <div id="banner-home" >
            <Navbar home="true"/>
            <div style={{ paddingTop: '150px', paddingBottom: '300px' }}>
              <div className="align-items-center" >
                <div id="text-banner" className="container text-center" style={{ color: 'white' }}>
                  <h1>Modernize Your Farm With Us!</h1>
                  <p >Selamat datang di platform inovatif kami, di mana kami berkomitmen untuk memberdayakan para petani seperti Anda untuk merevolusi praktik pertanian Anda dan merangkul masa depan pertanian. Dengan kemajuan teknologi yang pesat, saatnya memodernisasi pertanian anda dan membuka kemungkinan yang luas.</p>
                <div className='justify-content-center'>
                  <button className='btn btn-light' style={{ marginRight: '20px' }}><h5>Consult Now</h5></button>
                  <button className='btn btn-outline-light'><h5>Get your course</h5></button>
                </div>
              </div>
            </div>
            </div>
          </div>
          <div className='container' id='value'>
              <h5>Value yang kami berikan</h5>
              <h1>Emphasize what&apos;s important to your company</h1>
              <p style={{ width: '50%' }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare.</p>
              <button className='btn btn-outline-dark'><h6>Get your course</h6></button>
          </div>
          <div id="blog-home" >
            <div className='container'>
              <div style={{ marginBottom: '20px' }} className="d-flex justify-content-between">
                <di>
                  <h1 style={{ color: 'white' }}>Related Blog</h1>
                </di>
                <div>
                  <button className="btn btn-outline-light">View All</button>
                </div>
              </div>
              <div className='row'>
                {
                  blogList.map((item, index) => {
                    return (
                      <div key={index} className='col-3'>
                        <CardBlogHome src={item.src} title={item.title} desc={item.desc} />
                      </div>
                    )
                  })
                }
              </div>
            </div>
          </div>
          {/* <div id="footer-home">
            <div id="home-footer" className='d-flex justify-content-between'>
              <div className='col-6'>
                <h1></h1>
                <p></p>
              </div>
              <div>
               <button className='btn btn-outline-dark'><h3>Register</h3></button>
              </div>
            </div>
          </div> */}
        </div>
  )
}

export default Home
