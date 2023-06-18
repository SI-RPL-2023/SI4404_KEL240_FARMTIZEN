import CardCourse from '../components/molekul/CardCourse'
import Navbar from '../components/organisms/Navbar'
import '../css/course.css'

const course = [
  {
    title: 'Hasil Dari Inovasi Pertanian Pola Tanam Cabe | Cara Menanam Cabe',
    embed: 'https://www.youtube.com/embed/_gGUD3gSYfc',
    link: 'https://youtu.be/_gGUD3gSYfc'
  },
  {
    title: 'Keren Kelompok Tani Milenial Sukses Meraup Untung dari Sayur Organik',
    embed: 'https://www.youtube.com/embed/yJlFt0Fdkrs',
    link: 'https://youtu.be/yJlFt0Fdkrs'
  },
  {
    title: 'Sukses Bertani Terapkan Ilmu Dari Jepang',
    embed: 'https://www.youtube.com/embed/aCRiIwR57vU',
    link: 'https://youtu.be/aCRiIwR57vU'
  },
  {
    title: 'Turorial Membuat Instalasi Hidroponik 250 Lubang Tanam Lengkap Total Biaya dan Analisa Usaha',
    embed: 'https://www.youtube.com/embed/05aJQ6ZbzHM',
    link: 'https://youtu.be/05aJQ6ZbzHM'
  }, {
    title: 'Petani Masa Kini',
    embed: 'https://www.youtube.com/embed/IFbRnpNzB-s',
    link: 'https://youtu.be/IFbRnpNzB-s'
  },
  {
    title: 'Menanam Cabe',
    embed: 'https://www.youtube.com/embed/E6cWrYKmdfw',
    link: 'https://www.youtube.com/watch?v=E6cWrYKmdfw'
  }
]

const Courses = () => {
  return (
    <>
        <Navbar />
        <div id="banner-course">
            <div className='container'>
                <div id='banner-text'>
                    <h1>Semua Courses</h1>
                    <p>Let’s Learn The World Most Usefull Tutorials & Grow Together....</p>
                </div>
            </div>
        </div>
        <div className='container mb-5'>
            <div className='row'>
                {
                    course.map((item, index) => {
                      return (
                            <div key={index} className='col-4' style={{ marginBottom: '20px' }}>
                                <CardCourse title={item.title} embed={item.embed} link={item.link} />
                            </div>
                      )
                    })
                }
            </div>
        </div>

    </>
  )
}

export default Courses
