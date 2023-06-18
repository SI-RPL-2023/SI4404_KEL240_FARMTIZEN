import CardTeam from '../components/molekul/CardTeam'
import Navbar from '../components/organisms/Navbar'
import '../css/konsultan.css'

const Konsultan = () => {
  return (
        <div>
            <Navbar/>
            <div id="konsultan-banner" className="d-flex align-items-center justify-content-center">
              <div className="container text-center">
                <h1 style={{ fontWeight: 'bold' }}>Konsultan Kami</h1>
                <p>Let’s Learn The World Most Usefull Tutorials & Grow Together....</p>
              </div>
            </div>
            <div id="konsultan-body">
              <div className="d-flex align-items-center justify-content-center konsultan">
                <div className='container text-center'>
                  <div className='text'>
                    <h1>
                      Konsultan Kami
                    </h1>
                    <p>Tim kami terdiri dari orang-orang profesional dibidang pertanian selama puluhan tahun</p>
                  </div>
                  <div className='row mt-2 p-4'>
                    <CardTeam
                      nama="Muhammad Rizki Pratama"
                      image={'Muhammad Rizki Pratama.jpg'}
                      gelar="S1 Pertanian IPB"
                      deskripsi={'Mas Rizki yang memiliki spesialisasi dibidang tanaman Sayuran'}/>
                    <CardTeam
                        nama="Suryanto Soeharto"
                        image={'Suryanto Soeharto.png'}
                        gelar="S1 Pertanian UGM"
                        deskripsi={'Mas Suryanto yang memiliki pengalaman dibidang tanaman pangan seperti padi dan jagung'}/>
                    <CardTeam
                      nama="Ahmad Syafiq Abdullah"
                      image={'Ahmad Syafiq Abdullah.jpg'}
                      gelar="S1 Pertanian Unand"
                      deskripsi={'Memiliki Spesialisasi dibidang Tanaman Cabai dan Bawang-Bawangan'}/>
                  </div>
                </div>
              </div>
            </div>
        </div>
  )
}

export default Konsultan
