/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import CardComunity from '../components/molekul/CardComunity'
import Navbar from '../components/organisms/Navbar'
import '../css/comunity.css'
import Modal from 'react-modal'

Modal.setAppElement('#root')

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
}

const Comunity = () => {
  React.useEffect(() => {
    Modal.setAppElement('#root')
  }, [])
  const [showModal, setShowModal] = useState(false)
  const [question, setQuestion] = useState('')
  const [communityList, setCommunityList] = useState([
    {
      nama: 'David',
      profile: 'david.png',
      question: 'Bagaimana cara meningkatkan produktivitas tanaman padi?',
      date: '19 Maret 2023'
    },
    {
      nama: 'Johny',
      profile: 'johny.png',
      question: 'Apa saja faktor-faktor yang mempengaruhi pertumbuhan tanaman sayuran?',
      date: '01 April 2023'
    },
    {
      nama: 'Solomon',
      profile: 'solomon.png',
      question: 'Bagaimana cara meningkatkan produktivitas tanaman padi?',
      date: '17 April 2023'
    },
    {
      nama: 'Daniel',
      profile: 'daniel.png',
      question: 'Bagaimana cara mengendalikan hama dan penyakit pada tanaman jagung secara alami?',
      date: '20 Mei 2023'
    }
  ])

  const [modalIsOpen, setIsOpen] = React.useState(false)
  let subtitle

  const handleAskQuestion = () => {
    setIsOpen(true)
  }

  const handleCloseModal = () => {
    setShowModal(false)
  }

  const handleQuestionChange = (e) => {
    setQuestion(e.target.value)
  }

  function openModal () {
    setIsOpen(true)
  }

  function afterOpenModal () {
    // references are now sync'd and can be accessed.
    subtitle.style.color = 'black'
  }

  function closeModal () {
    setIsOpen(false)
  }

  const handleQuestionSubmit = () => {
    // Lakukan apa yang perlu dilakukan saat mengirim pertanyaan, misalnya mengirim ke backend

    const getCurrentDate = () => {
      const now = new Date()
      const options = { day: '2-digit', month: 'long', year: 'numeric' }
      const formattedDate = now.toLocaleDateString('id-ID', options)

      return formattedDate
    }

    const newComunityData = {
      nama: localStorage.getItem('user'),
      profile: 'my profile.png',
      question,
      date: getCurrentDate()
    }

    setCommunityList([...communityList, newComunityData])

    // Reset pertanyaan dan tutup modal
    setQuestion('')
    setIsOpen(false)
  }

  return (
    <div id="comunity">
      <Navbar />
      <div className="container" style={{ padding: '50px' }} id="comunity-header">
        <div style={{ marginTop: '25px', display: 'flex', justifyContent: 'space-between' }}>
          <h1 style={{ fontWeight: 'bold' }}>All Discussion</h1>
          <button className="btn btn-primary" onClick={handleAskQuestion}>
            + Ask Questions
          </button>
        </div>
      </div>
        <div className="container" id="comunity-section">
        {communityList.reverse().map((question, index) => (
            <CardComunity key={index} question={question} />
        ))}
        </div>

      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <h2 ref={(_subtitle) => (subtitle = _subtitle)}>Tulis Pertanyaan Mu</h2>
        <input className='form-control' onChange={handleQuestionChange} />
        <button onClick={() => handleQuestionSubmit()} className='btn btn-login' style={{ marginTop: '10px', width: '100px', height: '50px', backgroundColor: '#427A5B', border: 'none', color: 'white' }}>Update</button>
      </Modal>
    </div>
  )
}

export default Comunity
