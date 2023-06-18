import Navbar from '../components/organisms/Navbar'
import '../css/blog.css'

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

const Blog = () => {
  return (
        <>
            <Navbar/>
            <div id="banner-blog">
                <div className="container text-center">
                    <h1>Artikel Mengenai Pertanian</h1>
                    <p>Temukan info update mengenai pertanian</p>
                </div>
            </div>
            <div id="blog">
                <div className="container" style={{ padding: '10px 200px' }}>
                    {
                        blogList.map((blog, index) => (
                            <div key={index} style={{ margin: '20px' }} className="card-article row">
                                <div className="col-md-4">
                                    <img src={blog.src} alt="Gambar Artikel 1" className="img-fluid"/>
                                </div>
                                <div className="col-md-8">
                                    <h3>{blog.title}</h3>
                                    <p>{blog.desc}</p>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </>
  )
}

export default Blog
